import React from "react"
import styles from "./MainHeader.module.css"
import { MdPostAdd, MdMessage } from "react-icons/md"

export default function MainHeader({ onCreatePost }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdPostAdd />
        React Poster
      </h1>
      <p>
        <button className={styles.button} onClick={onCreatePost}>
          <MdMessage />
          New Post
        </button>
      </p>
    </header>
  )
}
