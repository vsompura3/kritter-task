import React from "react";

interface MediaMetadataProps {
  year?: number;
  rating?: string;
  duration?: string;
  language?: string;
  className?: string;
  separator?: string;
}

function MediaMetadata({
  year,
  rating,
  duration,
  language,
  className = "mb-6 flex items-center gap-4 text-lg text-gray-200",
  separator = "•",
}: MediaMetadataProps) {
  const metadataItems = [year, rating, duration, language].filter(Boolean);

  if (metadataItems.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      {metadataItems.map((item, index) => (
        <React.Fragment key={index}>
          <span>{item}</span>
          {index < metadataItems.length - 1 && <span>{separator}</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default MediaMetadata;
