import React from "react";
import SongList from "@/app/components/SongList";

const HomePage = () => {
  return (
    <div>
      <header
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/header-bg.jpg')" }}
      >
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-5xl font-bold">Welcome to ChordGo</h1>
          <p className="mt-2 text-lg">
            Find and share guitar chords for your favorite worship songs.
          </p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SongList />
      </main>
    </div>
  );
};

export default HomePage;
