import React from 'react';

interface VideoTextComponentProps {
  videoId: string;
  text: string;
}

const VideoTextComponent: React.FC<VideoTextComponentProps> = ({
  videoId,
  text,
}) => {
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center">
      <div className="w-full sm:w-3/5 lg:w-2/3 xl:w-1/2">
        <iframe
          src={youtubeUrl}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-auto aspect-video rounded-lg shadow-md"
        ></iframe>
      </div>
      <div className="w-full sm:w-2/5 lg:w-1/3 xl:w-1/2 prose sm:pl-8">{text}</div>
    </div>
  );
};



export default VideoTextComponent;
