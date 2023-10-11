import styles from "./page.module.css";
import YouTube, { YouTubeProps } from "react-youtube";

type VideoPlayerProps = YouTubeProps & { hidden: boolean };

export default function VideoPlayer({
  hidden,
  onError,
  onReady,
}: VideoPlayerProps) {
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className={hidden ? styles.hidden : ""}>
      <YouTube
        videoId="dQw4w9WgXcQ"
        opts={opts}
        onReady={onReady}
        onError={onError}
      />
    </div>
  );
}
