import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function OnlineFriend({User}) {
    // console.log(User)

    return (
        <li className="friend flex items-center gap-3">
            <div className="rightBarProfileImageContainer flex  relative">
                <img src={User.profilePicture} alt="" className='w-[40px] h-[40px] object-cover rounded-full' />
                <span className="online absolute -top-2 left-6"><FiberManualRecordIcon className='border-white rounded-full !text-[15px] border-1 text-green-600 bg-white ' /></span>
            </div>
            <span className='rightBarUserName'>{User.username}</span>
        </li>
    )
}
