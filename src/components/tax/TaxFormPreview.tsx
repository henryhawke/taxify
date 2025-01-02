import { useState } from 'react'

interface Props {
  previewUrl: string
  formType: string
}

export default function TaxFormPreview({ previewUrl, formType }: Props) {
  return (
    <div className="rounded-lg border p-4">
      <h3 className="mb-2 text-lg font-semibold">{formType} Preview</h3>

      <div className="aspect-[8.5/11] bg-white">
        <iframe
          src={previewUrl}
          className="h-full w-full"
          title={`${formType} Preview`}
        />
      </div>
    </div>
  )
}
