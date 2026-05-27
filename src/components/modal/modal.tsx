import { createPortal } from 'react-dom';
import './modal.css';

function Modal({ children }: { children?: React.ReactNode }) {
  return createPortal(
    <div className="modal">
      { children }
    </div>,
    document.getElementById('modal')!
  );
}

export { Modal };
