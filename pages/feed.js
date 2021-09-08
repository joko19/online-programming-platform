import Header from "../components/Header"
import ItemPost from "../components/Post/ItemPost"

function Feed() {
  return (
    <>
      <Header />
      <div className="flex-col">
        <div className="flex justify-center ">
          <ItemPost />
        </div>
        <div className="flex justify-center ">
          <ItemPost />
        </div>
        <div className="flex justify-center ">
          <ItemPost />
        </div>
        <div className="flex justify-center ">
          <ItemPost />
        </div>
      </div>
      <h1>Halaman Feed</h1>
    </>
  )
}
export default Feed