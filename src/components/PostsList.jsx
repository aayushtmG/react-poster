import Post from "./Post"
import styles from "./PostsList.module.css"
import NewPost from "./NewPost"
import { useState } from "react"
import Modal from "./Modal"

export default function PostsList() {
  const [enteredBody, setEnteredBody] = useState("")
  const [enteredAuthor, setEnteredAuthor] = useState("")

  function handleBody(e) {
    setEnteredBody(e.target.value)
  }
  function handleAuthor(e) {
    setEnteredAuthor(e.target.value)
  }

  return (
    <>
      <Modal>
        <NewPost handleAuthor={handleAuthor} handleBody={handleBody} />
      </Modal>
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Aayush Tamang" body="Hallo, Wie geht's?" />
      </ul>
    </>
  )
}
