import React, { useState } from "react"
import styles from "./NewPost.module.css"

export default function NewPost({ onAddNewPost, onCloseModal }) {
  const [enteredBody, setEnteredBody] = useState("")
  const [enteredAuthor, setEnteredAuthor] = useState("")

  function handleBody(e) {
    setEnteredBody(e.target.value)
  }
  function handleAuthor(e) {
    setEnteredAuthor(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault()
    const postData = {
      author: enteredAuthor,
      body: enteredBody,
      id: Math.random().toString(),
    }
    onAddNewPost(postData)
    onCloseModal()
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={handleAuthor} />
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={handleBody} />
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={onCloseModal}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  )
}
