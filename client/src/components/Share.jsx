import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LabelIcon from '@mui/icons-material/Label';


export default function Share() {
    return (
        <div className="share w-[100%] h-[170px] rounded-xl box-shadow mt-1">
            <div className="shareWrapper p-[10px]">
                <div className="shareTop flex gap-5 items-center">
                    <img src="src\assets\person\1.jpeg" alt="" className='h-[50px] w-[50px] object-cover rounded-full' />
                    <input placeholder="What's in your mind Sovan?" type="text" className="shareInput border-none w-[80%] focus:outline-none" />
                </div>
                <hr className="m-[20px]" />
                <div className="shareBottom flex items-center justify-between ml-[20px]">
                    <div className="shareOptions flex gap-4 text-base">
                        <div className="shareOption flex items-center gap-2 cursor-pointer">
                            <PermMediaIcon className='shareIcon !text-[20px] text-red-600' />
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption flex items-center gap-2 cursor-pointer">
                            <LabelIcon className='shareIcon !text-[20px] text-blue-600' />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption flex items-center gap-2 cursor-pointer">
                            <LocationOnIcon className='shareIcon !text-[20px] text-green-600' />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption flex items-center gap-2 cursor-pointer">
                            <EmojiEmotionsIcon className='shareIcon !text-[20px] text-yellow-600' />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className='p-[7px] rounded-[5px] bg-green-600 font-semibold text-white mr-[20px]'>
                       Share</button>
                </div>
            </div>
        </div>
    )
}
