import TopBar from "../components/TopBar"
import SideBar from "../components/SideBar"
import Feed from "../components/Feed"
import RightBar from "../components/RightBar"

export default function Profile() {
    return (
        <>
            <TopBar />
            <div className="profile flex justify-between w-[100%]">

                <SideBar />

                <div className="profileRight flex-[9] mt-5">

                    <div className="profileRightTop">
                        <div className="profileCover h-[320px] relative flex">
                            <img src="src\assets\post\3.jpeg" alt="" className="profileCoverImage h-[250px] w-[100%] object-cover" />
                            <img src="src\assets\person\7.jpeg" alt="" className="rounded-full w-[150px] h-[150px] object-cover absolute left-0 right-0 m-auto top-[160px] border-[3px]"/>
                        </div>
                        <div className="profileInfo flex flex-col items-center">
                            <h4 className="profileInfoName text-[24px] font-bold">Sovan Roy</h4>
                            <span className="profileInfoDesc font-[300]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, non.</span>
                        </div>
                    </div>

                    <div className="profileRightBottom flex">
                        <Feed />
                        <RightBar profile/>
                    </div>

                </div>
            </div>
        </>
    )
}
