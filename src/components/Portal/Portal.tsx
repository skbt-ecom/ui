import { createPortal } from "react-dom";

import type { ReactNode } from "react";

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

const Portal = ({ children, element = document.body }: PortalProps) =>
  createPortal(children, element);

export default Portal;
