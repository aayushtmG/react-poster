import styles from "./Modal.module.css"

export default function Modal({ children }) {
  return (
    <>
      <dialog open>{children}</dialog>
    </>
  )
}
