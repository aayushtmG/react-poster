import PostsList from "./components/PostsList"
import "./App.css"
import MainHeader from "./components/MainHeader"
import { useState } from "react"

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  function closeModalHandler() {
    setIsModalVisible(false)
  }
  function openModalHandler() {
    setIsModalVisible(true)
  }
  return (
    <>
      <MainHeader onCreatePost={openModalHandler}></MainHeader>
      <main>
        <PostsList
          list={list}
          isPosting={isModalVisible}
          onStopPosting={closeModalHandler}
        ></PostsList>
      </main>
    </>
  )
}

export default App
