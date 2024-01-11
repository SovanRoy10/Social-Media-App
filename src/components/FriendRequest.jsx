

export default function FriendRequest({User}) {
    return (
        <li className="friend flex items-center gap-3">
            <div className="rightBarProfileImageContainer flex  relative">
                <img src={User.profilePicture} alt="" className='w-[40px] h-[40px] object-cover rounded-full' />
            </div>
            <span className='rightBarUserName'>{User.username}</span>
        </li>
    )
}
