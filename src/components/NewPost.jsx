import React from "react"
import styles from "./NewPost.module.css"
export default function NewPost({
  handleAuthor,
  handleBody,
  submitNewPost,
  closeModal,
}) {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={handleAuthor} />
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={handleBody} />
      </p>
      <button type="button" onClick={closeModal}>
        Cancel
      </button>
      <button type="button" onClick={submitNewPost}>
        Submit
      </button>
    </form>
  )
}
