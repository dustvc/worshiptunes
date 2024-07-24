import React from "react";
import SongCard from "@/app/components/SongCard";

const SongList = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Praise & Worship Song</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SongCard
          title="Kasih Karunia"
          artist="GMS Live"
          imageUrl="/images/song-thumbnail/gms-live/kasih-karunia.png"
          link="/songs/gms-live/kasih-karunia"
        />
      </div>
    </div>
  );
};

export default SongList;
