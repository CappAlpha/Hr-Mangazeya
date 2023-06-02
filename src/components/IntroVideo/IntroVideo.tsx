import styles from './IntroVideo.module.scss';

const IntroVideo: React.FC = () => {
  return (
    <section className={styles.video_section}>
      <div className={styles.video_container}>
        <iframe
          src="https://www.youtube.com/embed/ECLMsRYrw1Q"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default IntroVideo;
