"use client";

import YouTube, { YouTubeProps } from "react-youtube";

export default function VideoPlayer({ onError, onReady }: YouTubeProps) {
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <YouTube
      videoId="KXJSjte_OAI"
      opts={opts}
      onReady={onReady}
      onError={onError}
    />
  );
}
