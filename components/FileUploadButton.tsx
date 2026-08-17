'use client'

import { useRef } from 'react'
import { UploadIcon } from '@/components/DocIcons'

export default function FileUploadButton({
  label,
  busyLabel,
  busy = false,
  multiple = false,
  accept,
  disabled = false,
  onFiles,
}: {
  label: string
  busyLabel?: string
  busy?: boolean
  multiple?: boolean
  accept?: string
  disabled?: boolean
  onFiles: (files: FileList) => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const isDisabled = disabled || busy

  return (
    <span style={{ display: 'inline-flex' }}>
      <button
        type="button"
        className="btn-outline file-upload-btn"
        disabled={isDisabled}
        onClick={() => inputRef.current?.click()}
      >
        <UploadIcon />
        {busy ? (busyLabel ?? 'Subiendo…') : label}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={isDisabled}
        className="sr-only"
        onChange={e => {
          if (e.target.files && e.target.files.length) onFiles(e.target.files)
          e.target.value = ''
        }}
      />
    </span>
  )
}
