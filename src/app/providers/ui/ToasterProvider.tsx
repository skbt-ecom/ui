import { useEffect } from 'react'
import toast, { Toaster, useToasterStore } from 'react-hot-toast'

export const ToasterProvider = () => {
  const { toasts } = useToasterStore()
  const TOAST_LIMIT = 5

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id))
  }, [toasts])

  return (
    <Toaster
      position='top-right'
      toastOptions={{
        duration: 5000
      }}
    />
  )
}
