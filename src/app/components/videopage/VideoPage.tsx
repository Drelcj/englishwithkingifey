import React from 'react';
import VideoTextComponent from '../videotext/VideoTextComponent';

const VideoPage: React.FC<{ videoId: string; text: string }> = ({ videoId, text }) => {
  return (
    <div className="flex flex-col items-center justify-center"> {/*className="container mx-auto"*/}
      {/* Optional additional content for the video section */}
      <VideoTextComponent videoId={videoId} text={text} />
    </div>
  );
};

export default VideoPage;
