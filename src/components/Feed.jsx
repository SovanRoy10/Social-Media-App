import Share from "./Share"
import Post from "./Post"

export default function Feed() {
  return (
    <div className="flex-[5.5] mt-5 mx-3 overflow-y-auto h-[calc(100vh-50px)] pl-3 pr-4">
      <div className="">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}
