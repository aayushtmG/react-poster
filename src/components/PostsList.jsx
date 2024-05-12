import Post from "./Post"
import styles from "./PostsList.module.css"

export default function PostsList() {
  return (
    <ul className={styles.posts}>
      <Post author="Aayush Tamang" body="Hallo, I am learning react" />
      <Post author="Aayush Tamang" body="Hallo, Wie geht's?" />
    </ul>
  )
}
