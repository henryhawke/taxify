export class TaxFormGenerator {
  async generate8949(transactions: TaxableTransaction[]) {
    const form8949Data = this.formatFor8949(transactions)
    
    return {
      shortTerm: this.generatePDF(form8949Data.shortTerm),
      longTerm: this.generatePDF(form8949Data.longTerm)
    }
  }

  async generateScheduleD(form8949Data: Form8949Data) {
    // Generate Schedule D based on Form 8949 totals
  }
} 