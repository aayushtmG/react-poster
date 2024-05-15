import PostsList from "./components/PostsList"
import "./App.css"
import Header from "./components/Header"
const list = [{ author: "Aayush", body: "Hello this is react" }]
function App() {
  return (
    <main>
      <PostsList list={list}></PostsList>
    </main>
  )
}

export default App
