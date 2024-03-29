import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

import FriendRequest from './FriendRequest';
import { Users } from '../data';


export default function SideBar() {
    return (
        <div className="flex-[2.5] h-[calc(100vh-50px)] overflow-y-auto mt-5">
            <div className="p-[20px]">
                <ul className='flex flex-col gap-5 mb-[15px]'>
                    <li className='flex gap-4'>
                        <RssFeedIcon />
                        <span>Feed</span>
                    </li>
                    <li className='flex gap-4'>
                        <ChatIcon />
                        <span>Chats</span>
                    </li>
                    <li className='flex gap-4'>
                        <PlayCircleIcon />
                        <span>Videos</span>
                    </li>
                    <li className='flex gap-4'>
                        <GroupsIcon />
                        <span>Groups</span>
                    </li>
                    <li className='flex gap-4'>
                        <BookmarkAddedIcon />
                        <span>Bookmarks</span>
                    </li>
                    <li className='flex gap-4'>
                        <LiveHelpIcon />
                        <span>Questions</span>
                    </li>
                </ul>

                <button className='px-2 py-1 bg-yellow-500 text-white rounded-md'>
                    Show More
                </button>
                <hr className='my-[20px]' />

                <ul className='friendList flex flex-col gap-5'>
                    {Users.map((user)=>{
                        return <FriendRequest key={user.id} User={user}/>
                    })}
                </ul>
            </div>
        </div>
    )
}
