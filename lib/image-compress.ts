// Redimensiona y recomprime imágenes en el navegador antes de subirlas.
// Las fotos de celular suelen pesar 2-5 MB a resolución de cámara — muy por
// encima de lo que se necesita para verlas en el informe o en el PDF impreso.
// Esto reduce tanto el costo de storage (Vercel Blob) como el peso del PDF
// generado (el navegador embebe la imagen tal como está en el <img src>).

interface CompressOptions {
  maxDimension?: number
  quality?: number
}

export async function compressImage(file: File, opts: CompressOptions = {}): Promise<File> {
  const { maxDimension = 1800, quality = 0.82 } = opts

  if (!file.type.startsWith('image/') || file.type === 'image/svg+xml') return file

  try {
    const bitmap = await createImageBitmap(file)
    const scale = Math.min(1, maxDimension / Math.max(bitmap.width, bitmap.height))
    const width = Math.round(bitmap.width * scale)
    const height = Math.round(bitmap.height * scale)

    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (!ctx) return file

    ctx.drawImage(bitmap, 0, 0, width, height)
    bitmap.close()

    const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, 'image/jpeg', quality))
    if (!blob || blob.size >= file.size) return file // no ganamos nada (ej: ya era chica) — mandamos la original

    const newName = file.name.replace(/\.[^./]+$/, '') + '.jpg'
    return new File([blob], newName, { type: 'image/jpeg' })
  } catch {
    // Formato no decodificable en el navegador (ej. HEIC en Chrome) — sube la original.
    return file
  }
}
