// components/LyricSection.tsx
"use client";

import React, { useEffect } from "react";
import { FaTrashAlt, FaArrowUp, FaArrowDown } from "react-icons/fa";

type LyricLine = {
  chord: string;
  lyric: string;
};

type LyricSectionProps = {
  id: string;
  title: string;
  content: LyricLine[];
  index: number;
  editMode: boolean;
  moveItemUp: (index: number) => void;
  moveItemDown: (index: number) => void;
  deleteSection: (index: number) => void;
};

const renderChord = (chord: string) => {
  useEffect(() => {
    console.log(`Rendering chord: ${chord}`);
  }, [chord]);

  const chordChars = chord.split("");
  return chordChars.map((char, index) => (
    <span key={index} className="text-red-700 font-bold">
      {char}
    </span>
  ));
};

const LyricSection: React.FC<LyricSectionProps> = ({
  id,
  title,
  content,
  index,
  editMode,
  moveItemUp,
  moveItemDown,
  deleteSection,
}) => {
  return (
    <div className="mb-4 p-4 bg-white rounded-xl shadow relative border">
      <h3 className="font-bold text-md mb-2 bg-gray-700 px-4 py-1 rounded-full text-white inline-block shadow-md">
        {title}
      </h3>
      {content.map((line, idx) => (
        <div key={idx} className="flex flex-col">
          <span className="flex flex-wrap" style={{ letterSpacing: "2px" }}>
            {line.chord.split(" ").map((chord, i) => (
              <React.Fragment key={i}>
                {renderChord(chord)}
                <span>&nbsp;&nbsp;&nbsp;</span> {/* Adjustable space */}
              </React.Fragment>
            ))}
          </span>
          <span style={{ wordSpacing: "2px", letterSpacing: "2px" }}>
            {line.lyric}
          </span>
        </div>
      ))}
      {editMode && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-gray-200 p-2 rounded-b-lg">
          <button
            className="text-gray-700 font-bold"
            onClick={() => deleteSection(index)}
          >
            <FaTrashAlt />
          </button>
          <div className="flex gap-2">
            <button
              className="text-gray-700 font-bold"
              onClick={() => moveItemUp(index)}
              disabled={index === 0}
            >
              <FaArrowUp />
            </button>
            <button
              className="text-gray-700 font-bold"
              onClick={() => moveItemDown(index)}
              disabled={index === content.length - 1}
            >
              <FaArrowDown />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LyricSection;
