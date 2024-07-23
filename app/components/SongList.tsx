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
        <SongCard
          title="Freedom"
          artist="GMS Live"
          imageUrl="/images/song-thumbnail/gms-live/everybody-get-up.png"
          link="/songs/freedom"
        />
        <SongCard
          title="Everybody Get Up!"
          artist="GMS Live"
          imageUrl="/images/song-thumbnail/gms-live/everybody-get-up.png"
          link="/songs/freedom"
        />
        <SongCard
          title="Gerbang Kudusmu"
          artist="GMS Live"
          imageUrl="/images/song-thumbnail/gms-live/everybody-get-up.png"
          link="/songs/freedom"
        />
        <SongCard
          title="Send Revival"
          artist="GMS Live"
          imageUrl="/images/song-thumbnail/gms-live/everybody-get-up.png"
          link="/songs/freedom"
        />
        <SongCard
          title="Kumau B'ritakan"
          artist="GMS Live"
          imageUrl="/images/song-thumbnail/gms-live/everybody-get-up.png"
          link="/songs/freedom"
        />
      </div>
    </div>
  );
};

export default SongList;
