import { useState } from 'react'

interface Props {
  previewUrl: string
  formType: string
}

export default function TaxFormPreview({ previewUrl, formType }: Props) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">{formType} Preview</h3>
      
      <div className="aspect-[8.5/11] bg-white">
        <iframe
          src={previewUrl}
          className="w-full h-full"
          title={`${formType} Preview`}
        />
      </div>
    </div>
  )
} 