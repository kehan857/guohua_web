import React from 'react';
import { Play } from 'lucide-react';

interface VideoProps {
  src?: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
  aspectRatio?: string | 'auto' | '16:9' | '4:3';
}

const Video: React.FC<VideoProps> = ({
  className,
  src = '',
  poster = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  autoPlay = false,
  muted = false,
  controls = true,
  aspectRatio = '16:9'
}) => {
  if (!src) {
    return (
      <div className={`relative bg-gray-100 rounded-lg overflow-hidden ${className}`}>
        <div className="aspect-video flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-health-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-health-green-600" />
            </div>
            <p className="text-gray-600">急救演示视频</p>
            <p className="text-sm text-gray-500 mt-1">点击播放学习正确操作</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <video
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        controls={controls}
        className="w-full h-auto rounded-lg"
        style={{ aspectRatio: aspectRatio === 'auto' ? 'auto' : aspectRatio }}
      />
    </div>
  );
};

export default Video;