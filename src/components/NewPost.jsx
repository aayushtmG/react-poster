import React from "react"
import styles from "./NewPost.module.css"
export default function NewPost(props) {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.handleAuthor} />
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.handleBody} />
      </p>
    </form>
  )
}
