import "./Music.css";
function Music() {
  return (
    <div className="MusicContainer ">
      <iframe
        src="https://open.spotify.com/embed/album/5TG8nNzWlr4lsL6XBURDs0?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Music;
