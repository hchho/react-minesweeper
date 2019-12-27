import ReactDOM, { useEffect } from 'react'

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ children }) => {
  const el = document.createElement('div')

  useEffect(() => {
    modalRoot.appendChild(el)
    return () => modalRoot.removeChild(el)
  }, [el])

  return () => ReactDOM.createPortal(
    children,
    el
  )
}