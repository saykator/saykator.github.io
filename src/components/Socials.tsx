import Discord from "../assets/Discord"
import Roblox from "../assets/Roblox"
import Tiktok from "../assets/Tiktok"
import Youtube from "../assets/Youtube"

export default function Socials() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <button className="font-mali uppercase flex gap-2 items-center">
        <Youtube size={30} color="white" />
        youtube channel
      </button>
      <button className="font-mali uppercase flex gap-2 items-center">
        <Tiktok size={25} color="white" />
        tiktok channel
      </button>
      <button className="font-mali uppercase flex gap-2 items-center">
        <Discord size={30} color="white" />
        discord server
      </button>
      <button className="font-mali uppercase flex gap-2 items-center">
        <Roblox size={25} color="white" />
        roblox group
      </button>
    </div>
  )
}