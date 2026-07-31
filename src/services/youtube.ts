const API_KEY = 'AIzaSyDYayChBYoO8aBPY7D3S1US_FMdencRcKY'
const CHANNEL_HANDLE = '@KmusRetro'
const BASE = 'https://www.googleapis.com/youtube/v3'
const SHORTS_MAX_SECONDS = 60

export interface Video {
  id: string
  title: string
  description: string
  publishedAt: string
  thumbnail: string
  url: string
}

interface ChannelResponse {
  items?: { contentDetails: { relatedPlaylists: { uploads: string } } }[]
}

interface PlaylistResponse {
  items?: { contentDetails: { videoId: string } }[]
}

interface VideoResponse {
  items?: {
    id: string
    snippet: {
      title: string
      description: string
      publishedAt: string
      liveBroadcastContent: string
      thumbnails: { high?: { url: string }; medium?: { url: string } }
    }
    contentDetails: { duration: string }
    liveStreamingDetails?: { actualStartTime?: string }
  }[]
}

function parseISODuration(duration: string): number {
  const match = duration.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/)
  if (!match) return 0
  const [, h, m, s] = match
  return (Number(h ?? 0) * 3600 + Number(m ?? 0) * 60 + Number(s ?? 0)) || 0
}

export async function getLatestVideos(maxResults = 12): Promise<Video[]> {
  const channelRes = await fetch(
    `${BASE}/channels?part=contentDetails&forHandle=${encodeURIComponent(
      CHANNEL_HANDLE,
    )}&key=${API_KEY}`,
  )
  if (!channelRes.ok) throw new Error('No se pudo obtener el canal')

  const channelData = (await channelRes.json()) as ChannelResponse
  const uploadsId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads
  if (!uploadsId) throw new Error('No se encontró la lista de subidas del canal')

  const playlistRes = await fetch(
    `${BASE}/playlistItems?part=contentDetails&playlistId=${uploadsId}&maxResults=50&key=${API_KEY}`,
  )
  if (!playlistRes.ok) throw new Error('No se pudieron cargar los vídeos')

  const playlistData = (await playlistRes.json()) as PlaylistResponse
  const videoIds = (playlistData.items ?? []).map((item) => item.contentDetails.videoId)

  if (videoIds.length === 0) return []

  const videosRes = await fetch(
    `${BASE}/videos?part=snippet,contentDetails,liveStreamingDetails&id=${videoIds.join(',')}&maxResults=50&key=${API_KEY}`,
  )
  if (!videosRes.ok) throw new Error('No se pudieron cargar los detalles de los vídeos')

  const videosData = (await videosRes.json()) as VideoResponse

  const filtered = (videosData.items ?? [])
    .filter((video) => {
      if (video.snippet.liveBroadcastContent !== 'none') return false
      if (video.liveStreamingDetails) return false
      const seconds = parseISODuration(video.contentDetails.duration)
      return seconds > SHORTS_MAX_SECONDS
    })
    .sort(
      (a, b) =>
        new Date(b.snippet.publishedAt).getTime() -
        new Date(a.snippet.publishedAt).getTime(),
    )
    .slice(0, maxResults)

  return filtered.map((video) => ({
    id: video.id,
    title: video.snippet.title,
    description: video.snippet.description,
    publishedAt: video.snippet.publishedAt,
    thumbnail:
      video.snippet.thumbnails.high?.url ??
      video.snippet.thumbnails.medium?.url ??
      '',
    url: `https://www.youtube.com/watch?v=${video.id}`,
  }))
}
