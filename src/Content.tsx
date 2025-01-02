import Socials from "./components/Socials"

const trophiesDesc = 'Saykator standing on top of his seven Master Builder trophies'
const goosePunkDesc = 'The GoosePunk Logo'

export default function Content() {
  return (
    <div className="w-1/3 flex flex-col items-center gap-4 overflow-auto p-10 pt-24">
      <img src="/saykator.svg" alt="Saykator Logo" className="mr-2" />
      <h1 className="font-mali uppercase text-4xl">saykator</h1>
      <h2 className="text-xl">The Insanest BABFT Youtuber!</h2>
      <img src="/trophies.png" className="h-48" title={trophiesDesc} alt={trophiesDesc} />
      <img src="/goosepunk.png" className="h-24" title={goosePunkDesc} alt={goosePunkDesc} />
      <h2 className="text-xl">Find Me Here!</h2>
      <Socials />
    </div>
  )
}