type VideoEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
};

export default function VideoEmbed({ videoId, title, className = "" }: VideoEmbedProps) {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;

  return (
    <div className={`relative w-full overflow-hidden rounded-[1.5rem] border border-[#101827]/10 bg-[#101827] shadow-[0_24px_60px_rgba(16,24,39,0.12)] ${className}`}>
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={embedUrl}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
