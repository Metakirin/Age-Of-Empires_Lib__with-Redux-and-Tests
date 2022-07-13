import { useRef } from 'react'
import video from '../../videos/smoke-background-optimized.mp4'

export default function Video() {
  const videoRef = useRef()
  const setPlayBack = () => {
    videoRef.current.playbackRate = 2
  }

  return (
    <>
      <video
        ref={videoRef}
        onCanPlay={() => setPlayBack()}
        src={video}
        class="showcase__video"
        loop
        muted
        autoPlay
      ></video>
    </>
  )
}
