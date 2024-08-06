"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import jsPDF from "jspdf";
import { FaPlay, FaPause } from "react-icons/fa";
import LyricSection from "@/app/components/LyricSection";
import { initialLyrics, sections } from "@/app/lyrics/gmslive-kasih-karunia";
import { transposeLyrics } from "@/app/utils/transposeUtils";
import { LyricSectionType, LyricLine, Chord } from "@/app/utils/types";

const transposeKeys = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

const KasihKarunia: React.FC = () => {
  const [lyrics, setLyrics] = useState<LyricSectionType[]>(initialLyrics);
  const [editMode, setEditMode] = useState(false);
  const [selectedSection, setSelectedSection] = useState<LyricLine[]>(
    sections[0].content
  );
  const [transposeSteps, setTransposeSteps] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(false);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [scrollSpeed, setScrollSpeed] = useState(50);

  const toggleAutoScroll = () => {
    setIsAutoScroll(!isAutoScroll);
  };

  useEffect(() => {
    if (isAutoScroll) {
      const interval = setInterval(() => {
        window.scrollBy(0, 1);
      }, 100 - scrollSpeed);
      scrollIntervalRef.current = interval;
    } else {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    }

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    };
  }, [isAutoScroll, scrollSpeed]);

  const moveItemUp = (index: number) => {
    if (index === 0) return;
    const items = Array.from(lyrics);
    const [reorderedItem] = items.splice(index, 1);
    items.splice(index - 1, 0, reorderedItem);
    setLyrics(items);
  };

  const moveItemDown = (index: number) => {
    if (index === lyrics.length - 1) return;
    const items = Array.from(lyrics);
    const [reorderedItem] = items.splice(index, 1);
    items.splice(index + 1, 0, reorderedItem);
    setLyrics(items);
  };

  const addNewSection = () => {
    const newSection: LyricSectionType = {
      id: `${lyrics.length + 1}`,
      title: sections[sections.length - 1].label,
      content: selectedSection,
    };
    setLyrics([...lyrics, newSection]);
  };

  const resetLyrics = () => {
    setLyrics(initialLyrics);
    setTransposeSteps(0);
  };

  const deleteSection = (index: number) => {
    const items = Array.from(lyrics);
    items.splice(index, 1);
    setLyrics(items);
  };

  const handleTranspose = (steps: number) => {
    const transposedLyrics = transposeLyrics(initialLyrics, steps);
    setLyrics(transposedLyrics);
    setTransposeSteps(steps);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    let y = 10;
    const pageHeight = doc.internal.pageSize.height;
    lyrics.forEach((lyric: LyricSectionType) => {
      doc.text(lyric.title, 10, y);
      y += 10;
      lyric.content.forEach((line: LyricLine) => {
        if (y + 10 > pageHeight) {
          doc.addPage();
          y = 10;
        }
        const chordText = line.chord.map((c: Chord) => c.text).join(" ");
        doc.text(chordText, 10, y);
        y += 5;
        doc.text(line.lyric, 10, y);
        y += 10;
      });
      y += 10;
    });
    doc.save("lyrics.pdf");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row bg-white rounded-2xl border overflow-hidden shadow mb-4 w-full">
        <Image
          className="w-full sm:w-32 h-32 rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none object-cover"
          src="/images/song-thumbnail/gms-live/kasih-karunia.png"
          alt="Kasih Karunia Thumbnail"
          width={1000}
          height={1000}
        />
        <div className="px-6 py-4 flex flex-col justify-center w-full">
          <div className="font-bold text-xl mb-2">Kasih Karunia</div>
          <p className="text-gray-700 text-base">GMS Live</p>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-full border-2 border-gray-700 hover:animate-pulse"
          onClick={() => setEditMode(!editMode)}
        >
          {editMode ? "Done" : "Edit Songmap"}
        </button>
        {editMode && (
          <>
            <button
              className="bg-gray-700 text-white px-4 py-2 rounded-full border-2 border-gray-700 hover:animate-pulse"
              onClick={addNewSection}
            >
              Add New Section
            </button>
            <select
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full border-2 border-gray-700"
              onChange={(e) =>
                setSelectedSection(sections[parseInt(e.target.value)].content)
              }
            >
              {sections.map((section, index) => (
                <option key={section.label} value={index}>
                  {section.label}
                </option>
              ))}
            </select>
            <button
              className="bg-gray-700 text-white px-4 py-2 rounded-full border-2 border-gray-700 hover:animate-pulse"
              onClick={resetLyrics}
            >
              Reset to Original
            </button>
          </>
        )}
        <button
          className="bg-white text-gray-700 px-4 py-2 rounded-full border-2 border-gray-700 hover:animate-pulse"
          onClick={downloadPDF}
        >
          Download Songmap
        </button>
      </div>

      <div className="mb-4 flex flex-col">
        <label
          htmlFor="scrollSpeed"
          className="text-sm font-medium text-gray-700 mb-2"
        >
          Scroll Speed
        </label>
        <input
          type="range"
          id="scrollSpeed"
          min="1"
          max="100"
          value={scrollSpeed}
          onChange={(e) => setScrollSpeed(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
          style={{ accentColor: "#4B5563" }}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="transpose"
          className="text-sm font-medium text-gray-700 mb-2"
        >
          Transpose:
        </label>
        <div className="flex flex-wrap">
          {transposeKeys
            .sort((a, b) => a.localeCompare(b))
            .map((key, index) => (
              <button
                key={key}
                className={`px-4 py-2 border rounded-md m-1 transition-colors duration-200 ${
                  transposeSteps === index - 3
                    ? "bg-gray-700 text-white"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
                onClick={() => handleTranspose(index - 3)}
              >
                {key}
              </button>
            ))}
        </div>
      </div>

      <div>
        {lyrics.map((section: LyricSectionType, index: number) => (
          <LyricSection
            key={section.id}
            id={section.id}
            title={section.title}
            content={section.content}
            index={index}
            editMode={editMode}
            moveItemUp={moveItemUp}
            moveItemDown={moveItemDown}
            deleteSection={deleteSection}
          />
        ))}
      </div>

      <p className="my-14 text-center">© 2024 Media Rajawali Indonesia</p>

      <div className="w-full mb-4">
        <iframe
          src="https://open.spotify.com/embed/track/5NCIeMUY00mNr78I2nozyz"
          width="100%"
          height="80"
          allow="encrypted-media"
        ></iframe>
      </div>

      <iframe
        src="https://www.youtube.com/embed/R50xhqiqdOQ"
        className="w-full rounded-xl"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <button
        onClick={toggleAutoScroll}
        className="fixed bottom-5 right-5 w-12 h-12 rounded-full bg-gray-700 text-white border-none flex items-center justify-center shadow-lg cursor-pointer"
      >
        {isAutoScroll ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default KasihKarunia;
