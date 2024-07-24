"use client";

import React, { useState } from "react";
import Image from "next/image";
import jsPDF from "jspdf";

const initialLyrics = [
  {
    id: "1",
    content: "Intro:\n| C • Fm/C • |\n| C • Am • |\n| F Bb Dm G |",
  },
  {
    id: "2",
    content:
      "Verse 1:\nC               F\nKasih setia-Mu tak pernah pudar\nC\nSungguh Kau Tuhan\nF\nYang panjang sabar\nAm              E/Ab\nSemua yang baik\nC            D/F#\nDi dalam hidupku\nDm7          G\nAnugerah dari Salib-Mu.",
  },
  {
    id: "3",
    content:
      "Verse 2:\nC               F\nWalaupun terkadang aku jatuh\nC               F\nTak pernah berubah sayangMu\nAm              E/Ab\nSungguh tak kuduga\nC/D           D/F#\nKau tetap setia\nDm7          G\nMenantiku ‘tuk berlari padaMu.",
  },
  {
    id: "4",
    content:
      "Chorus:\nC        G        Am      Em\nBesar... Kasih Karunia\nF           C\nYang Engkau tunjukkan, Yesus\nDm7        G\nSungguh ‘ku bersyukur\nC        G        Am      Em\nTinggi... melebihi langit\nF           C\nKau angkat diriku dekat\nDm         G         C\nKe tahta kasih karuniaMu.",
  },
  {
    id: "5",
    content:
      "Bridge:\nD            Em7    D/F#\nWo...o...o...o...\nG            D/F#    Em7     A\nSemua kar’na kasih karunia-Mu\nD/F#         F#/Bb   Bm   E/Ab\nSemua kar’na kasih karunia-Mu.",
  },
];

const sections = [
  {
    label: "Intro",
    content: "Intro:\n| C • Fm/C • |\n| C • Am • |\n| F Bb Dm G |",
  },
  {
    label: "Verse 1",
    content:
      "Verse 1:\nC                   F\nKasih setia-Mu tak pernah pudar\nC\nSungguh Kau Tuhan\nF\nYang panjang sabar\nAm              E/Ab\nSemua yang baik\nC            D/F#\nDi dalam hidupku\nDm7          G\nAnugerah dari Salib-Mu.",
  },
  {
    label: "Verse 2",
    content:
      "Verse 2:\nC               F\nWalaupun terkadang aku jatuh\nC               F\nTak pernah berubah sayangMu\nAm              E/Ab\nSungguh tak kuduga\nC/D           D/F#\nKau tetap setia\nDm7          G\nMenantiku ‘tuk berlari padaMu.",
  },
  {
    label: "Chorus",
    content:
      "Chorus:\nC        G        Am      Em\nBesar... Kasih Karunia\nF           C\nYang Engkau tunjukkan, Yesus\nDm7        G\nSungguh ‘ku bersyukur\nC        G        Am      Em\nTinggi... melebihi langit\nF           C\nKau angkat diriku dekat\nDm         G         C\nKe tahta kasih karuniaMu.",
  },
  {
    label: "Bridge",
    content:
      "Bridge:\nD            Em7    D/F#\nWo...o...o...o...\nG            D/F#    Em7     A\nSemua kar’na kasih karunia-Mu\nD/F#         F#/Bb   Bm   E/Ab\nSemua kar’na kasih karunia-Mu.",
  },
];

const transposeChord = (chord: string, steps: number): string => {
  const chords = [
    "A",
    "Bb",
    "B",
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
  ];
  const chordIndex = chords.indexOf(chord);
  if (chordIndex === -1) return chord;
  const newIndex = (chordIndex + steps + chords.length) % chords.length;
  return chords[newIndex];
};

const transposeLyrics = (lyrics: string, steps: number): string => {
  const chordRegex = /\b[A-G](#|b)?(m7|m|7|sus|dim|aug|add9|9)?\b/g;
  return lyrics.replace(chordRegex, (match) => transposeChord(match, steps));
};

const KasihKarunia = () => {
  const [lyrics, setLyrics] = useState(initialLyrics);
  const [editMode, setEditMode] = useState(false);
  const [selectedSection, setSelectedSection] = useState(sections[0].content);
  const [transposeSteps, setTransposeSteps] = useState(0);

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
    const newSection = {
      id: `${lyrics.length + 1}`,
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

  const transposeKeys = [
    "A",
    "Bb",
    "B",
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
  ];

  const handleTranspose = (steps: number) => {
    const transposedLyrics = initialLyrics.map((lyric) => ({
      ...lyric,
      content: transposeLyrics(lyric.content, steps),
    }));
    setLyrics(transposedLyrics);
    setTransposeSteps(steps);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    let y = 10; // Starting Y position
    const pageHeight = doc.internal.pageSize.height;
    lyrics.forEach((lyric) => {
      const lines = lyric.content.split("\n");
      lines.forEach((line) => {
        if (y + 10 > pageHeight) {
          doc.addPage();
          y = 10; // Reset y position for new page
        }
        doc.text(line, 10, y);
        y += 10; // Move to next line
      });
      y += 10; // Add extra space between sections
    });
    doc.save("lyrics.pdf");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex bg-white rounded-2xl border overflow-hidden shadow-lg mb-4 w-full">
        <Image
          className="w-32 h-32 rounded-l-2xl"
          src="/images/song-thumbnail/gms-live/kasih-karunia.png"
          alt="Kasih Karunia Thumbnail"
          width={128}
          height={128}
        />
        <div className="px-6 py-4 flex flex-col justify-center w-full">
          <div className="font-bold text-xl mb-2">Kasih Karunia</div>
          <p className="text-gray-700 text-base">GMS Live</p>
        </div>
      </div>
      <div className="mb-4">
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-full border-2 border-gray-700 hover:animate-pulse mr-2"
          onClick={() => setEditMode(!editMode)}
        >
          {editMode ? "Done" : "Edit Songmap"}
        </button>
        {editMode && (
          <>
            <button
              className="bg-gray-700 text-white px-4 py-2 rounded-full border-2 border-gray-700 hover:animate-pulse mr-2"
              onClick={addNewSection}
            >
              Add New Section
            </button>
            <select
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full border-2 border-gray-700 mr-2"
              onChange={(e) => setSelectedSection(e.target.value)}
            >
              {sections.map((section) => (
                <option key={section.label} value={section.content}>
                  {section.label}
                </option>
              ))}
            </select>
            <button
              className="bg-gray-700 text-white px-4 py-2 rounded-full border-2 border-gray-700 hover:animate-pulse mr-2"
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
      <div className="mb-4">
        <label htmlFor="transpose" className="mr-2">
          Transpose:
        </label>
        <div className="flex">
          {transposeKeys.map((key, index) => (
            <button
              key={key}
              className={`px-4 py-2 border ${
                transposeSteps === index - 3
                  ? "bg-gray-700 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleTranspose(index - 3)}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
      <div>
        {lyrics.map(({ id, content }, index) => (
          <div key={id} className="mb-4 p-4 bg-white rounded shadow relative">
            <pre className="whitespace-pre-wrap">{content}</pre>
            {editMode && (
              <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-gray-200 p-2 rounded-b-lg">
                <button
                  className="text-gray-700 font-bold"
                  onClick={() => deleteSection(index)}
                >
                  🗑
                </button>
                <button
                  className="text-gray-700 font-bold"
                  onClick={() => moveItemDown(index)}
                  disabled={index === lyrics.length - 1}
                >
                  ↓
                </button>
                <button
                  className="text-gray-700 font-bold"
                  onClick={() => moveItemUp(index)}
                  disabled={index === 0}
                >
                  ↑
                </button>
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
      <div
        className="w-full mb-4"
        style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
      >
        <iframe
          src="https://www.youtube.com/embed/R50xhqiqdOQ"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="mt-2 text-center">© 2024 Media Rajawali Indonesia</p>
    </div>
  );
};

export default KasihKarunia;
