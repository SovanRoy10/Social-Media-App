import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Users } from '../data';
import { useState } from 'react';

export default function Post({ post }) {
  // console.log(post)
  //  console.log( Users.filter(u => u.id === post.userId))
  const [like, setLike] = useState(post.like);
  const [liked, setLiked] = useState(false);

  const handleAddLike = () => {
    if (liked)
      setLike((prevLike) => prevLike - 1);
    else
      setLike((prevLike) => prevLike + 1);

    setLiked((prevState) => !prevState);
  }

  return (
    <div className="post box-shadow my-[30px] rounded-[10px]">

      <div className="postWrapper p-[10px]">

        <div className="postTop flex items-center justify-between">
          <div className="postTopLeft flex items-center gap-3">
            <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImage w-[35px] h-[35px] object-cover rounded-full" />
            <span className="postUserName text-[15px] font-semibold">{Users.filter(u => u.id === post.userId)[0].username}</span>
            <span className="postTime text-[12px] opacity-85">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon className='cursor-pointer' />
          </div>
        </div>

        <div className="postCenter my-[20px]">
          <span className='postText'> {post?.desc} </span>
          <img src={post.photo} alt="" className='mt-[20px] w-[100%] max-h-[500px] object-contain rounded-xl' />
        </div>

        <div className="postBottom flex items-center justify-between">
          <div className="postBottomLeft flex items-center gap-2">
          
            {!liked && <FavoriteBorderIcon className='text-red-600 cursor-pointer' onClick={handleAddLike} />}
            {liked && <FavoriteIcon className='text-red-600 cursor-pointer' onClick={handleAddLike} />}

            <span className='postLikeCounter text-[15px] cursor-pointer'> <span>{like}</span> people like it</span>
          </div>
          <div className="postBottomRight">
            <span className='cursor-pointer text-[15px] border-b-2 border-dashed border-gray-300'>{post.comment} comments</span>
          </div>
        </div>

      </div>

    </div>
  )
}
