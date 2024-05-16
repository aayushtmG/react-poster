import React from "react"
import styles from "./NewPost.module.css"
export default function NewPost({
  handleAuthor,
  handleBody,
  submitNewPost,
  closeModal,
}) {
  return (
    <form className={styles.form} onSubmit={submitNewPost}>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={handleAuthor} />
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={handleBody} />
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  )
}
