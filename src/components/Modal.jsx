import styles from "./Modal.module.css"

export default function Modal({ children, closeModal }) {
  return (
    <>
      <div className={styles.backdrop} onClick={closeModal} />
      <dialog open={true} className={styles.modal}>
        {children}
      </dialog>
    </>
  )
}
