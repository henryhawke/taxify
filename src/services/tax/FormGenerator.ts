import { jsPDF } from 'jspdf'
import { IRSFormTemplate } from './templates/IRSFormTemplate'
import { Form8949Template } from './templates/Form8949Template'
import { ScheduleDTemplate } from './templates/ScheduleDTemplate'
import { FormValidator } from './validation/FormValidator'
import { TaxableEvent, Form8949Data } from './types'

export class TaxFormGenerator {
  private validator: FormValidator
  private templates: {
    form8949: Form8949Template
    scheduleD: ScheduleDTemplate
  }

  constructor() {
    this.validator = new FormValidator()
    this.templates = {
      form8949: new Form8949Template(),
      scheduleD: new ScheduleDTemplate()
    }
  }

  async generate8949(events: TaxableEvent[]): Promise<{ 
    shortTerm: string
    longTerm: string 
    preview: { shortTerm: string; longTerm: string }
  }> {
    // Validate data before generation
    const validationResult = this.validator.validateForm8949Data(events)
    if (!validationResult.isValid) {
      throw new Error(`Form 8949 validation failed: ${validationResult.errors.join(', ')}`)
    }

    const form8949Data = this.formatFor8949(events)
    
    return {
      shortTerm: await this.templates.form8949.generatePDF(form8949Data.shortTerm, true),
      longTerm: await this.templates.form8949.generatePDF(form8949Data.longTerm, false),
      preview: {
        shortTerm: await this.templates.form8949.generatePreview(form8949Data.shortTerm, true),
        longTerm: await this.templates.form8949.generatePreview(form8949Data.longTerm, false)
      }
    }
  }

  async generateScheduleD(form8949Data: Form8949Data): Promise<string> {
    const doc = new jsPDF()
    
    // Add header
    doc.setFontSize(16)
    doc.text('Schedule D - Capital Gains and Losses', 20, 20)
    
    // Part I: Short-term Capital Gains and Losses
    doc.setFontSize(12)
    doc.text('Part I - Short-term Capital Gains and Losses', 20, 40)
    doc.text(`Total Proceeds: $${form8949Data.shortTerm.totalProceeds.toFixed(2)}`, 30, 50)
    doc.text(`Total Cost Basis: $${form8949Data.shortTerm.totalCostBasis.toFixed(2)}`, 30, 60)
    doc.text(`Total Gain/Loss: $${form8949Data.shortTerm.totalGainLoss.toFixed(2)}`, 30, 70)
    
    // Part II: Long-term Capital Gains and Losses
    doc.text('Part II - Long-term Capital Gains and Losses', 20, 90)
    doc.text(`Total Proceeds: $${form8949Data.longTerm.totalProceeds.toFixed(2)}`, 30, 100)
    doc.text(`Total Cost Basis: $${form8949Data.longTerm.totalCostBasis.toFixed(2)}`, 30, 110)
    doc.text(`Total Gain/Loss: $${form8949Data.longTerm.totalGainLoss.toFixed(2)}`, 30, 120)
    
    // Summary
    doc.text('Summary', 20, 140)
    const totalGainLoss = form8949Data.shortTerm.totalGainLoss + form8949Data.longTerm.totalGainLoss
    doc.text(`Net Gain/Loss: $${totalGainLoss.toFixed(2)}`, 30, 150)
    
    return doc.output('dataurlstring')
  }

  private formatFor8949(events: TaxableEvent[]): Form8949Data {
    const result: Form8949Data = {
      shortTerm: {
        transactions: [],
        totalProceeds: 0,
        totalCostBasis: 0,
        totalGainLoss: 0
      },
      longTerm: {
        transactions: [],
        totalProceeds: 0,
        totalCostBasis: 0,
        totalGainLoss: 0
      }
    }

    for (const event of events) {
      if (event.gainLoss) {
        const target = event.gainLoss.shortTerm ? result.shortTerm : result.longTerm
        target.transactions.push(event)
        target.totalProceeds += event.gainLoss.proceeds
        target.totalCostBasis += event.gainLoss.costBasis
        target.totalGainLoss += event.gainLoss.gainLoss
      }
    }

    return result
  }

  private async generatePDF(data: Form8949Data['shortTerm'] | Form8949Data['longTerm'], isShortTerm: boolean): Promise<string> {
    const doc = new jsPDF()
    
    // Add form header
    doc.setFontSize(16)
    doc.text(`Form 8949 - ${isShortTerm ? 'Short-term' : 'Long-term'} Capital Gains and Losses`, 20, 20)
    
    // Add column headers
    doc.setFontSize(10)
    const headers = ['Description', 'Date Acquired', 'Date Sold', 'Proceeds', 'Cost Basis', 'Gain/Loss']
    let y = 40
    headers.forEach((header, i) => {
      doc.text(header, 20 + (i * 30), y)
    })
    
    // Add transactions
    y += 10
    data.transactions.forEach((event) => {
      if (event.gainLoss) {
        doc.text(event.transaction.tokenAddress || 'SOL', 20, y)
        doc.text(new Date(event.transaction.timestamp * 1000).toLocaleDateString(), 50, y)
        doc.text(`$${event.gainLoss.proceeds.toFixed(2)}`, 110, y)
        doc.text(`$${event.gainLoss.costBasis.toFixed(2)}`, 140, y)
        doc.text(`$${event.gainLoss.gainLoss.toFixed(2)}`, 170, y)
        y += 10
      }
    })
    
    // Add totals
    y += 10
    doc.text('Totals:', 20, y)
    doc.text(`$${data.totalProceeds.toFixed(2)}`, 110, y)
    doc.text(`$${data.totalCostBasis.toFixed(2)}`, 140, y)
    doc.text(`$${data.totalGainLoss.toFixed(2)}`, 170, y)
    
    return doc.output('dataurlstring')
  }
} 