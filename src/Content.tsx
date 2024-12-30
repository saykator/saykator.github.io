export default function Content() {
  return (
    <div className="flex flex-col items-center max-w-xl overflow-auto p-10">
      <div className="flex">
        <img src="/saykator.svg" alt="Saykator Logo" className="mr-2" />
        <h1 className="font-mali uppercase text-4xl">saykator</h1>
      </div>
      <h2 className="text-xl m-5">The Insanest BABFT Youtuber!</h2>
      <img src="/trophies.png" className="object-contain h-1/3" alt="Saykator standing on top of 7 Master Builder Trophies" />
      <p className="m-3">Kown For Owning The Master Builder Title 7 Times!</p>
      <img src="/goosepunk.png" className="object-contain h-1/4" alt="GoosePunk Team Logo" />
      <p className="m-3">Creator of the GoosePunk Team!</p>
      <h2 className="text-xl m-5">Find Me Here!</h2>
    </div>
  )
}