type LyricLine = {
  chord: string;
  lyric: string;
};

type LyricSectionType = {
  id: string;
  title: string;
  content: LyricLine[];
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

export const transposeChord = (chord: string, semitones: number): string => {
  return chord.replace(/[A-G][#b]?/g, (match) => {
    const newSemitone = (chordMap[match] + semitones + 12) % 12;
    return semitoneMap[newSemitone];
  });
};

export const transposeLyrics = (
  lyrics: LyricSectionType[],
  semitones: number
): LyricSectionType[] => {
  return lyrics.map((section) => ({
    ...section,
    content: section.content.map((line) => ({
      ...line,
      chord: transposeChord(line.chord, semitones),
    })),
  }));
};
