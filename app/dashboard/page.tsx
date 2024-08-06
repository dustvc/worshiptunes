"use client";

import React, { useState } from "react";
import { db } from "@/app/utils/firebase";
import { collection, addDoc } from "firebase/firestore";

const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleAddSong = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await addDoc(collection(db, "songs"), {
        title,
        artist,
        imageUrl,
        link,
      });
      setLoading(false);
      setMessage("Song added successfully!");
      setTitle("");
      setArtist("");
      setImageUrl("");
      setLink("");
    } catch (error) {
      console.error("Error adding document: ", error);
      setLoading(false);
      setMessage("Error adding song.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <form onSubmit={handleAddSong} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Artist
          </label>
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Link
          </label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Song"}
          </button>
        </div>
        {message && <p className="text-green-500">{message}</p>}
      </form>
    </div>
  );
};

export default AdminDashboard;
