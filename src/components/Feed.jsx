import Share from "./Share"
import Post from "./Post"
import { Posts } from "../data"

export default function Feed() {
  return (
    <div className="flex-[5.5] mt-5 mx-3 overflow-y-auto h-[calc(100vh-50px)] pl-3 pr-4">
      <div className="">
        <Share />
        
        {
          Posts.map((p) => {
            return <Post key={p.id} post={p}/>
          })
        }


      </div>
    </div>
  )
}
