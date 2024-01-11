import TopBar from "../components/TopBar"
import SideBar from "../components/SideBar"
import Feed from "../components/Feed"
import RightBar from "../components/RightBar"

export default function Home() {
    return (
        <>
            <TopBar />
            <div className="flex justify-between w-[100%]">
                <SideBar />
                <Feed />
                <RightBar />
            </div>

        </>
    )
}
