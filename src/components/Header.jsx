import React from "react"

export default function Header({ openModal }) {
  return (
    <>
      <div>
        <h1>React Poster</h1>
        <button onClick={openModal}>New Post</button>
      </div>
    </>
  )
}
