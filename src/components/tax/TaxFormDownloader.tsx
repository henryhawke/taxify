import { useState } from 'react'
import { TaxFormGenerator } from '@/services/tax/FormGenerator'
import TaxFormPreview from './TaxFormPreview'

interface Props {
  taxableEvents: TaxableEvent[]
}

export default function TaxFormDownloader({ taxableEvents }: Props) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [previews, setPreviews] = useState<{
    form8949Short?: string
    form8949Long?: string
    scheduleD?: string
  }>({})
  
  const generateForms = async () => {
    setIsGenerating(true)
    try {
      const formGenerator = new TaxFormGenerator()
      
      // Generate forms with previews
      const form8949 = await formGenerator.generate8949(taxableEvents)
      const scheduleD = await formGenerator.generateScheduleD({
        shortTerm: form8949.shortTerm,
        longTerm: form8949.longTerm
      })
      
      // Update previews
      setPreviews({
        form8949Short: form8949.preview.shortTerm,
        form8949Long: form8949.preview.longTerm,
        scheduleD: scheduleD.preview
      })
      
      // Create download links
      downloadPDF(form8949.shortTerm, 'form-8949-short-term.pdf')
      downloadPDF(form8949.longTerm, 'form-8949-long-term.pdf')
      downloadPDF(scheduleD.pdf, 'schedule-d.pdf')
    } catch (error) {
      console.error('Error generating tax forms:', error)
    } finally {
      setIsGenerating(false)
    }
  }
  
  const downloadPDF = (dataUrl: string, filename: string) => {
    const link = document.createElement('a')
    link.href = dataUrl
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Tax Forms</h2>
        
        <button
          onClick={generateForms}
          disabled={isGenerating || taxableEvents.length === 0}
          className={`
            px-4 py-2 rounded-md text-white
            ${isGenerating || taxableEvents.length === 0
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'}
          `}
        >
          {isGenerating ? 'Generating...' : 'Generate Tax Forms'}
        </button>
      </div>
      
      {/* Form Previews */}
      {previews.form8949Short && (
        <TaxFormPreview
          previewUrl={previews.form8949Short}
          formType="Form 8949 (Short-term)"
        />
      )}
      
      {previews.form8949Long && (
        <TaxFormPreview
          previewUrl={previews.form8949Long}
          formType="Form 8949 (Long-term)"
        />
      )}
      
      {previews.scheduleD && (
        <TaxFormPreview
          previewUrl={previews.scheduleD}
          formType="Schedule D"
        />
      )}
    </div>
  )
} 