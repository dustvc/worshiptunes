"use client";

import React, { useEffect, useState } from "react";
import SongCard from "@/app/components/SongCard";
import { db } from "@/app/songs/utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchSongs = async () => {
      const q = query(collection(db, "songs"));
      const querySnapshot = await getDocs(q);
      const songData = querySnapshot.docs.map((doc) => doc.data());
      setSongs(songData);
    };

    fetchSongs();
  }, []);

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Praise & Worship Song</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 px-6 py-3 border rounded-full w-full"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSongs.map((song) => (
          <SongCard
            key={song.link}
            title={song.title}
            artist={song.artist}
            imageUrl={song.imageUrl}
            link={song.link}
          />
        ))}
      </div>
    </div>
  );
};

export default SongList;
