import Post from "./Post"
import styles from "./PostsList.module.css"
import NewPost from "./NewPost"
import { useEffect, useState } from "react"
import Modal from "./Modal"

export default function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  function onAddNewPost(postData) {
    fetch("http://127.0.0.1:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    })
    setPosts((posts) => [postData, ...posts])
    onStopPosting()
  }

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true)
      const response = await fetch("http://127.0.0.1:8080/posts")
      const resData = await response.json()
      setPosts(resData.posts)
      setIsFetching(false)
    }
    fetchPosts()
  }, [])

  return (
    <>
      {isPosting && (
        <Modal closeModal={onStopPosting}>
          <NewPost onAddNewPost={onAddNewPost} onCloseModal={onStopPosting} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((item) => (
            <Post key={item.id} author={item.author} body={item.body}></Post>
          ))}
        </ul>
      )}
      {!isFetching && posts.length == 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  )
}
