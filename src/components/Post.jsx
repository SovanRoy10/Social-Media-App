import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
  return (
    <div className="post box-shadow my-[30px] rounded-[10px]">

      <div className="postWrapper p-[10px]">

        <div className="postTop flex items-center justify-between">
          <div className="postTopLeft flex items-center gap-3">
            <img src="src\assets\person\1.jpeg" alt="" className="postProfileImage w-[35px] h-[35px] object-cover rounded-full" />
            <span className="postUserName text-[15px] font-semibold">Sovan Roy</span>
            <span className="postTime text-[12px] opacity-85">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter my-[20px]">
          <span className='postText'> Hey! Its my first post:) </span>
          <img src="src\assets\post\1.jpeg" alt="" className='mt-[20px] w-[100%] max-h-[500px] object-contain rounded-xl'/>
        </div>
        <div className="postBottom flex items-center justify-between">
          <div className="postBottomLeft flex items-center gap-2">
            <img src="src\assets\like.png" alt="" className='w-[25px] cursor-pointer'/>
            <img src="src\assets\heart.png" alt="" className='w-[25px] cursor-pointer'/>
            <span className='postLikeCounter text-[15px] cursor-pointer'> <span>32</span> people like it</span>
          </div>
          <div className="postBottomRight">
            <span className='cursor-pointer text-[15px] border-b-2 border-dashed border-gray-300'>9 comments</span>
          </div>
        </div>

      </div>

    </div>
  )
}
