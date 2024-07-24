"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import jsPDF from "jspdf";
import {
  FaTrashAlt,
  FaArrowUp,
  FaArrowDown,
  FaPlay,
  FaPause,
} from "react-icons/fa"; // Import icons

type LyricLine = {
  chord: string;
  lyric: string;
};

type LyricSection = {
  id: string;
  title: string; // Add title property
  content: LyricLine[];
};

const initialLyrics: LyricSection[] = [
  {
    id: "1",
    title: "Intro",
    content: [
      { chord: "C*Fm/C*", lyric: "" },
      { chord: "C*Am*", lyric: "" },
      { chord: "F*Bb*Dm*G*", lyric: "" },
    ],
  },
  {
    id: "2",
    title: "Verse 1",
    content: [
      { chord: "C          F", lyric: "Kasih setia-Mu tak pernah pudar" },
      { chord: "C", lyric: "Sungguh Kau Tuhan" },
      { chord: "   F", lyric: "Yang panjang sabar" },
      { chord: "    Am   E/Ab", lyric: "Semua yang baik" },
      { chord: "   C     D/F#", lyric: "Di dalam hidupku" },
      { chord: "   Dm7      G", lyric: "Anugerah dari Salib-Mu." },
    ],
  },
  {
    id: "3",
    title: "Verse 2",
    content: [
      { chord: `C           F`, lyric: "Walaupun terkadang aku jatuh" },
      { chord: `C           F`, lyric: "Tak pernah berubah sayangMu" },
      { chord: `     Am    E/Ab`, lyric: "Sungguh tak kuduga" },
      { chord: `   C/D  D/F#`, lyric: "Kau tetap setia" },
      { chord: `   Dm7          G`, lyric: "Menantiku ‘tuk berlari padaMu." },
    ],
  },
  {
    id: "4",
    title: "Chorus",
    content: [
      { chord: ` C G       Am Em`, lyric: "Besar... Kasih Karunia" },
      { chord: `       F       C`, lyric: "Yang Engkau tunjukkan, Yesus" },
      { chord: `     Dm7     G`, lyric: "Sungguh ‘ku bersyukur" },
      { chord: `  C G   Am   Em`, lyric: "Tinggi... melebihi langit" },
      { chord: `       F  C`, lyric: "Kau angkat diriku dekat" },
      { chord: `    Dm  G    C`, lyric: "Ke tahta kasih karuniaMu." },
    ],
  },
  {
    id: "5",
    title: "Bridge",
    content: [
      { chord: `D  Em7 D/F#`, lyric: "Wo...o...o...o..." },
      {
        chord: `G     D/F#    Em7 A`,
        lyric: "Semua kar’na kasih karunia-Mu",
      },
      {
        chord: `D/F#   F#/Bb    Bm E/Ab`,
        lyric: "Semua kar’na kasih karunia-Mu.",
      },
    ],
  },
];

const sections = [
  {
    label: "Intro",
    content: [
      { chord: "C*Fm/C*", lyric: "" },
      { chord: `C*Am*`, lyric: "" },
      { chord: `F*Bb*Dm*G*`, lyric: "" },
    ],
  },
  {
    label: "Verse 1",
    content: [
      { chord: `C          F`, lyric: "Kasih setia-Mu tak pernah pudar" },
      { chord: `C`, lyric: "Sungguh Kau Tuhan" },
      { chord: `   F`, lyric: "Yang panjang sabar" },
      { chord: `    Am   E/Ab`, lyric: "Semua yang baik" },
      { chord: `   C     D/F#`, lyric: "Di dalam hidupku" },
      { chord: `   Dm7      G`, lyric: "Anugerah dari Salib-Mu." },
    ],
  },
  {
    label: "Verse 2",
    content: [
      { chord: `C           F`, lyric: "Walaupun terkadang aku jatuh" },
      { chord: `C           F`, lyric: "Tak pernah berubah sayangMu" },
      { chord: `     Am    E/Ab`, lyric: "Sungguh tak kuduga" },
      { chord: `   C/D  D/F#`, lyric: "Kau tetap setia" },
      { chord: `   Dm7          G`, lyric: "Menantiku ‘tuk berlari padaMu." },
    ],
  },
  {
    label: "Chorus",
    content: [
      { chord: ` C G       Am Em`, lyric: "Besar... Kasih Karunia" },
      { chord: `       F       C`, lyric: "Yang Engkau tunjukkan, Yesus" },
      { chord: `     Dm7     G`, lyric: "Sungguh ‘ku bersyukur" },
      { chord: `  C G   Am   Em`, lyric: "Tinggi... melebihi langit" },
      { chord: `       F  C`, lyric: "Kau angkat diriku dekat" },
      { chord: `    Dm  G    C`, lyric: "Ke tahta kasih karuniaMu." },
    ],
  },
  {
    label: "Bridge",
    content: [
      { chord: `D  Em7 D/F#`, lyric: "Wo...o...o...o..." },
      {
        chord: `G     D/F#    Em7 A`,
        lyric: "Semua kar’na kasih karunia-Mu",
      },
      {
        chord: `D/F#   F#/Bb    Bm E/Ab`,
        lyric: "Semua kar’na kasih karunia-Mu.",
      },
    ],
  },
];

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

const KasihKarunia = () => {
  const [lyrics, setLyrics] = useState<LyricSection[]>(initialLyrics);
  const [editMode, setEditMode] = useState(false);
  const [selectedSection, setSelectedSection] = useState(sections[0].content);
  const [transposeSteps, setTransposeSteps] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(false);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [scrollSpeed, setScrollSpeed] = useState(50); // Default speed is 50ms

  const toggleAutoScroll = () => {
    setIsAutoScroll(!isAutoScroll);
  };

  useEffect(() => {
    if (isAutoScroll) {
      const interval = setInterval(() => {
        window.scrollBy(0, 1); // Scroll down by 1 pixel
      }, 100 - scrollSpeed); // Use the inverted scrollSpeed
      scrollIntervalRef.current = interval;
    } else {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    }

    // Clean up the interval on component unmount or when isAutoScroll changes
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
    const newSection: LyricSection = {
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

  const chordMap: { [key: string]: number } = {
    C: 0,
    "C#": 1,
    Db: 1,
    D: 2,
    "D#": 3,
    Eb: 3,
    E: 4,
    F: 5,
    "F#": 6,
    Gb: 6,
    G: 7,
    "G#": 8,
    Ab: 8,
    A: 9,
    "A#": 10,
    Bb: 10,
    B: 11,
  };

  const semitoneMap: { [key: number]: string } = Object.keys(chordMap).reduce(
    (acc, key) => {
      acc[chordMap[key]] = key;
      return acc;
    },
    {} as { [key: number]: string }
  );

  const transposeChord = (chord: string, semitones: number): string => {
    return chord
      .split(/(\s+)/)
      .map((part) => {
        if (chordMap[part] !== undefined) {
          const newSemitone = (chordMap[part] + semitones + 12) % 12;
          return semitoneMap[newSemitone];
        }
        return part;
      })
      .join("");
  };

  const transposeLyrics = (
    lyrics: LyricSection[],
    semitones: number
  ): LyricSection[] => {
    return lyrics.map((section) => ({
      ...section,
      content: section.content.map((line) => ({
        ...line,
        chord: transposeChord(line.chord, semitones),
      })),
    }));
  };

  const handleTranspose = (steps: number) => {
    const transposedLyrics = transposeLyrics(initialLyrics, steps);
    setLyrics(transposedLyrics);
    setTransposeSteps(steps);
  };

  const transposedLyrics = transposeLyrics(initialLyrics, 2);

  const downloadPDF = () => {
    const doc = new jsPDF();
    let y = 10; // Starting Y position
    const pageHeight = doc.internal.pageSize.height;
    lyrics.forEach((lyric) => {
      doc.text(lyric.title, 10, y); // Add title to PDF
      y += 10;
      lyric.content.forEach((line) => {
        if (y + 10 > pageHeight) {
          doc.addPage();
          y = 10; // Reset y position for new page
        }
        doc.text(line.chord, 10, y);
        y += 5; // Move to next line
        doc.text(line.lyric, 10, y);
        y += 10; // Move to next line
      });
      y += 10; // Add extra space between sections
    });
    doc.save("lyrics.pdf");
  };

  const renderChord = (chord: string) => {
    const chordChars = chord.split("");
    return chordChars.map((char, index) => (
      <span key={index} className="text-gray-700">
        {char === "*" ? <span className="inline-block w-4"></span> : char}
      </span>
    ));
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
        {lyrics.map(({ id, title, content }, index) => (
          <div
            key={id}
            className="mb-4 p-4 bg-white rounded-xl shadow relative border"
          >
            <h3 className="font-bold text-md mb-2 bg-gray-700 px-4 py-1 rounded-full text-white inline-block shadow-md">
              {title}
            </h3>
            {content.map((line, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="flex flex-wrap">
                  {line.chord.split(" ").map((chord, i) => (
                    <React.Fragment key={i}>
                      {renderChord(chord)}
                      <span>&nbsp;&nbsp;&nbsp;</span> {/* Adjustable space */}
                    </React.Fragment>
                  ))}
                </span>
                <span>{line.lyric}</span>
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
                    disabled={index === lyrics.length - 1}
                  >
                    <FaArrowDown />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-full mb-4">
        <iframe
          src="https://open.spotify.com/embed/track/5NCIeMUY00mNr78I2nozyz"
          width="100%"
          height="80"
          allow="encrypted-media"
        ></iframe>
      </div>
      <div className="w-full mb-4 relative pb-9/16 h-0">
        <iframe
          src="https://www.youtube.com/embed/R50xhqiqdOQ"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="mt-2 text-center">© 2024 Media Rajawali Indonesia</p>

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
