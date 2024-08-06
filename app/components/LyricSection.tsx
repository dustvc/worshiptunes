"use client";

import React from "react";
import { FaTrashAlt, FaArrowUp, FaArrowDown } from "react-icons/fa";

type LyricLine = {
  chord: { text: string; position: number }[];
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
        <div key={idx} className="flex flex-col relative">
          <div className="absolute top-0 left-0 w-full text-blue-600 font-bold">
            {Array.isArray(line.chord) &&
              line.chord.map((chord, i) => (
                <span
                  key={i}
                  style={{
                    position: "absolute",
                    left: `${chord.position}ch`,
                    fontFamily: "monospace", // Ensure font-family is monospace
                    fontSize: "1rem", // Ensure font size is the same
                  }}
                >
                  {chord.text}
                </span>
              ))}
          </div>
          <div className="pt-6 font-mono" style={{ fontSize: "1rem" }}>
            {line.lyric}
          </div>
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
