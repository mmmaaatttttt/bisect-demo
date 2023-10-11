"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import VideoPlayer from "./video-player";
import { YouTubeEvent } from "react-youtube";

export default function Home() {
  const [player, setPlayer] = useState<YouTubeEvent["target"] | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (player && playing) {
      player.playVideo();
    }
  }, [player, playing]);

  return (
    <main className={styles.main}>
      {!playing && (
        <button onClick={() => setPlaying(true)} className={styles.button}>
          do not press me
        </button>
      )}
      <VideoPlayer
        hidden={!playing}
        onReady={(evt) => setPlayer((evt as YouTubeEvent).target)}
      />
    </main>
  );
}
