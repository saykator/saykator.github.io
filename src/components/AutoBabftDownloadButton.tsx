import { useState, useEffect } from "react"
import { ArrowDownToLine } from "lucide-react"
import Button from "./Button"

const GITHUB_REPO = "saykator/autobabft"
const FILE_NAME = "autobabft.exe"

export default function AutoBabftDownload() {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`)
        if (!response.ok) {
          throw new Error(`Failed to fetch the latest release: ${response.statusText}`)
        }

        const releaseData = await response.json()
        const asset = releaseData.assets.find((asset: { name: string }) => asset.name === FILE_NAME)

        if (asset) {
          setDownloadUrl(asset.browser_download_url)
        } else {
          console.error(`File ${FILE_NAME} not found in the latest release.`)
        }
      } catch (error) {
        console.error("Error fetching latest release:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchLatestRelease()
  }, [])



  return (
    <>
      {loading ?
        <Button disabled className="bg-zinc-800">
          Getting ready...
        </Button>
        :
        downloadUrl ?
          <Button
            onClick={() => { window.location.href = downloadUrl }}
            className="bg-zinc-800"
          >
            <ArrowDownToLine size={16} /> AutoBabft Autoclicker!
          </Button>
          :
          <Button>Something went wrong :/</Button>
      }
    </>
  )
}
