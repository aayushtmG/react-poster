import Post from "./Post"
import styles from "./PostsList.module.css"
import NewPost from "./NewPost"
import { useState } from "react"
import Modal from "./Modal"
import Header from "./Header"

export default function PostsList({ list }) {
  const [enteredBody, setEnteredBody] = useState("")
  const [enteredAuthor, setEnteredAuthor] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  function handleBody(e) {
    setEnteredBody(e.target.value)
  }
  function handleAuthor(e) {
    setEnteredAuthor(e.target.value)
  }
  function closeModal() {
    setIsModalOpen(false)
  }
  function openModal() {
    setIsModalOpen(true)
  }
  function submitNewPost() {
    list.push({
      author: enteredAuthor,
      body: enteredBody,
    })
    closeModal()
  }

  return (
    <>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <NewPost
            handleAuthor={handleAuthor}
            handleBody={handleBody}
            submitNewPost={submitNewPost}
            closeModal={closeModal}
          />
        </Modal>
      )}
      <Header openModal={openModal}></Header>
      <ul className={styles.posts}>
        {list.map((item) => (
          <Post author={item.author} body={item.body}></Post>
        ))}
      </ul>
    </>
  )
}
