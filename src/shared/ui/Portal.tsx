import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface IPortalProps {
  children: ReactNode
  container?: HTMLElement
}

export const Portal = ({ children, container = document.body }: IPortalProps) => createPortal(children, container)
