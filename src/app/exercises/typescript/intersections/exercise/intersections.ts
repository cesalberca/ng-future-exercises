// @ts-nocheck
interface ErrorHandling {
  success: boolean
  error?: { message: string }
}

interface ArtworksData {
  artworks: { title: string }[]
}

interface ArtistsData {
  artists: { name: string }[]
}

type ArtistsResponse = any

const handleArtistsResponse = (response: any) => {
  if (response.error) {
    console.error(response.error.message)
    return
  }

  console.log(response.artists)
}

export {}
