import { Users } from "../data";
import OnlineFriend from "./OnlineFriend";

export default function RightBar({ profile }) {
  const homeRightBar = (
    <div className="rightbar flex-[3.5] h-[calc(100vh-50px)] overflow-y-auto">
      <div className="rightWrapper p-[20px]">
        <div className="birthdayContainer  flex gap-3 items-center">
          <img src="src\assets\gift.png" alt="" className="w-[40px] h-[40px]" />
          <span className="birthdayText text-[15px]">
            <strong>Rupal Paul</strong> and <strong>3 other friends</strong>{" "}
            have birthday today
          </span>
        </div>
        <img
          src="src\assets\ad.png"
          alt=""
          className="w-[100%] rounded-[10px] my-[30px]"
        />
        <h4 className="text-lg font-semibold">Online Friends</h4>
        <ul className="friendList mt-5 ml-4 flex flex-col gap-5">
          {Users.map((user) => {
            return <OnlineFriend key={user.id} User={user} />;
          })}
        </ul>
      </div>
    </div>
  );

  const profileRightBar = (
    <div className="flex-[3.5] mr-2">
      <h4 className="rightBarTitle text-[18px] font-semibold mb-[10px]">
        User Information
      </h4>
      <div className="rightbarInfo flex flex-col gap-2">
        <div className="rightbarInfoItem flex gap-2">
          <span className="rightbarInfoKey font-bold opacity-80">City:</span>
          <span className="rightbarInfoKey">New York</span>
        </div>

        <div className="rightbarInfoItem flex gap-2">
          <span className="rightbarInfoKey opacity-80 font-bold">From:</span>
          <span className="rightbarInfoKey">Madrid</span>
        </div>

        <div className="rightbarInfoItem flex gap-2">
          <span className="rightbarInfoKey opacity-80 font-bold">
            Relationship:
          </span>
          <span className="rightbarInfoKey">Single</span>
        </div>
      </div>

      <h4 className=" text-[18px] font-semibold my-[10px]">User Friends</h4>
      <div className="flex flex-wrap justify-between">
        <div className="rightbarFollowings flex flex-col gap-2 mb-2">
          <img
            src="src\assets\person\1.jpeg"
            alt=""
            className="w-[100px] h-[100px] object-cover rounded-xl"
          />
          <span className="rightbarFollowingName">Sovan Roy</span>
        </div>
        <div className="rightbarFollowings flex gap-2 flex-col mb-2">
          <img
            src="src\assets\person\2.jpeg"
            alt=""
            className="w-[100px] h-[100px] object-cover rounded-xl"
          />
          <span className="rightbarFollowingName">Sovan Roy</span>
        </div>
        <div className="rightbarFollowings flex gap-2 flex-col mb-2">
          <img
            src="src\assets\person\3.jpeg"
            alt=""
            className="w-[100px] h-[100px] object-cover rounded-xl"
          />
          <span className="rightbarFollowingName">Sovan Roy</span>
        </div>
        <div className="rightbarFollowings flex gap-2 flex-col mb-2">
          <img
            src="src\assets\person\4.jpeg"
            alt=""
            className="w-[100px] h-[100px] object-cover rounded-xl"
          />
          <span className="rightbarFollowingName">Sovan Roy</span>
        </div>
        <div className="rightbarFollowings flex gap-2 flex-col mb-2">
          <img
            src="src\assets\person\5.jpeg"
            alt=""
            className="w-[100px] h-[100px] object-cover rounded-xl"
          />
          <span className="rightbarFollowingName">Sovan Roy</span>
        </div>
        <div className="rightbarFollowings flex gap-2 flex-col mb-2">
          <img
            src="src\assets\person\6.jpeg"
            alt=""
            className="w-[100px] h-[100px] object-cover rounded-xl"
          />
          <span className="rightbarFollowingName">Sovan Roy</span>
        </div>
      </div>
    </div>
  );
  return (
    <>
      {profile && profileRightBar}
      {!profile && homeRightBar}
    </>
  );
}
