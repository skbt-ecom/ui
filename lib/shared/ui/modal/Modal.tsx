'use client'

import * as React from 'react'
import { createPortal } from 'react-dom'
import { type IModalHeaderProps, ModalHeader, type TModalHeaderClasses } from './ui/ModalHeader'
import { cn } from '$/shared/utils'

type IModalClasses = TModalHeaderClasses & {
  overlay: string
  modal: string
  content: string
}

export interface IModalProps extends IModalHeaderProps {
  children: React.ReactElement
  modalIsOpen: boolean
  classes?: Partial<IModalClasses>
}

export const Modal = ({ title, children, modalIsOpen = false, closeModal, classes }: IModalProps) => {
  return (
    <>
      {createPortal(
        <div
          tabIndex={-1}
          onClick={closeModal}
          className={cn(
            'bg-color-overlay inset-0 fixed w-screen h-screen flex items-center justify-center z-[100] invisible opacity-0 transition-all',
            { 'opacity-1 visible': modalIsOpen },
            classes?.overlay
          )}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              closeModal()
            }
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className={cn(
              'w-full max-w-[600px] bg-color-white rounded-md px-4 py-6 desktop:px-6 desktop:py-8 shadow-sm opacity-0 scale-0 transition-all',
              { 'opacity-100 scale-100': modalIsOpen },
              classes?.modal
            )}
          >
            <ModalHeader title={title} closeModal={closeModal} classes={classes} />
            <div className={cn('mt-4', classes?.content)}>{children}</div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
