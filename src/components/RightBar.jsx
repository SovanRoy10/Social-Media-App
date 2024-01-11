
import { Users } from '../data';
import OnlineFriend from './OnlineFriend';

export default function RightBar({ profile }) {
  const content = profile ? '' : <div className="rightbar flex-[3.5] h-[calc(100vh-50px)] overflow-y-auto">
    <div className="rightWrapper p-[20px]">
      <div className="birthdayContainer  flex gap-3 items-center">
        <img src="src\assets\gift.png" alt="" className="w-[40px] h-[40px]" />
        <span className="birthdayText text-[15px]"><strong>Rupal Paul</strong> and <strong>3 other friends</strong> have birthday today</span>
      </div>
      <img src="src\assets\ad.png" alt="" className="w-[100%] rounded-[10px] my-[30px]" />
      <h4 className='text-lg font-semibold'>Online Friends</h4>
      <ul className="friendList mt-5 ml-4 flex flex-col gap-5">

        {
          Users.map((user) => {
            return <OnlineFriend key={user.id} User={user} />
          })
        }

      </ul>
    </div>
  </div>

  return (
    <>
      {content}
    </>

  )
}
