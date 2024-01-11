import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function TopBar() {
    return (
        <div className="flex justify-between items-center p-4 h-[50px] w-[100%] bg-yellow-500 sticky top-0">

            <div id="TopBarLeft" className='flex-[3] '>
                <span className="text-2xl ml-[20px] font-bold text-white cursor-pointer">YoYoSocial</span>
            </div>

            <div id="TopBarCenter" className='flex-[4]'>
                <div id="searchbar" className='w-full h-[30px] bg-white rounded-[30px] flex items-center'>
                    <SearchIcon className='!text-2xl mx-[10px]' />
                    <input placeholder='Search for friend, post or video' type="text" className="border-none w-[70%] focus:outline-none" />
                </div>
            </div>

            <div id="TopBarRight" className='flex-[4] flex items-center justify-around'>
                <div id='TopBarLinks' className='mr-5 text-lg cursor-pointer flex gap-5'>
                    <span>Home Page</span>
                    <span>Time Line</span>
                </div>
                <div id="TopBarIcons" className='flex gap-4'>
                    <div className='TopBarIconItem relative cursor-pointer flex'>
                        <PersonIcon />
                        <span className='w-[15px] h-[15px] bg-yellow-100 rounded-full absolute  flex items-center justify-center left-4 text-[12px]'>1</span>
                    </div>
                    <div className='TopBarIconItem relative cursor-pointer flex'>
                        <ChatIcon />
                        <span className='w-[15px] h-[15px] bg-yellow-100 rounded-full absolute  flex items-center justify-center left-4 text-[12px]'>2</span>
                    </div>
                    <div className='TopBarIconItem relative cursor-pointer flex'>
                        <NotificationsIcon />
                        <span className='w-[15px] h-[15px] bg-yellow-100 rounded-full absolute  flex items-center justify-center left-4 text-[12px]'>1</span>
                    </div>
                </div>

                {/* profile picture */}
                <img src="src\assets\person\1.jpeg" alt="" className='h-[37px] w-[37px] rounded-full object-cover cursor-pointer' />
            </div>
        </div>
    )
}
