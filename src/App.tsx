import Youtube from "./assets/Youtube"
import Button from "./components/Button"
import GitHub from "./assets/Github"
import GlowBall from "./components/Glowball"
import AutoBabftDownloadButton from "./components/AutoBabftDownloadButton"

const subLink = 'https://www.youtube.com/@saykator?sub_confirmation=1'
const repoLink = 'https://github.com/saykator/saykator.github.io'

export default function App() {
  return (
    <div className="flex flex-col items-center p-20 gap-5 h-screen justify-center opacity-95">
      <div className="flex gap-2 items-center">
        <img src="/saykator.svg" alt="Saykator Logo" className="mr-2" />
        <h1 className="font-mali uppercase text-4xl">saykator</h1>
      </div>
      <h2 className="text-xl">Coolest Youtuber!</h2>
      <img src="/trophies.png" className="h-56 self-center" />
      <Button
        onClick={() => { window.open(subLink) }}
        className="uppercase font-mali bg-red-600"
      >
        <Youtube /> subscribe!
      </Button>
      <AutoBabftDownloadButton />
      <div className="text-sm flex gap-3">
        <p>🚧 This site is work in progress!</p>
        -
        <button
          className="flex items-center gap-1 active:translate-y-0.5"
          onClick={() => { window.open(repoLink) }}
        >
          <GitHub size={16} />View source
        </button>
        -
        <p>Made with ❤️</p>
      </div>
      <GlowBall />
    </div>
  )
}