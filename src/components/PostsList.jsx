import Post from "./Post"
import styles from "./PostsList.module.css"
import NewPost from "./NewPost"
import { useState } from "react"
import Modal from "./Modal"

export default function PostsList({ isPosting, onStopPosting }) {
  const [enteredBody, setEnteredBody] = useState("")
  const [enteredAuthor, setEnteredAuthor] = useState("")

  function handleBody(e) {
    setEnteredBody(e.target.value)
  }
  function handleAuthor(e) {
    setEnteredAuthor(e.target.value)
  }
  function submitNewPost() {
    list.push({
      author: enteredAuthor,
      body: enteredBody,
    })
    setEnteredBody("")
    setEnteredAuthor("")
    onStopPosting()
  }

  return (
    <>
      {isPosting && (
        <Modal closeModal={onStopPosting}>
          <NewPost
            handleAuthor={handleAuthor}
            handleBody={handleBody}
            submitNewPost={submitNewPost}
            closeModal={onStopPosting}
          />
        </Modal>
      )}
      {list.length > 0 ? (
        <ul className={styles.posts}>
          {list.map((item) => (
            <Post author={item.author} body={item.body}></Post>
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  )
}
