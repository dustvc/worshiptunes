// types.ts
export type Chord = {
  text: string;
  position: number;
};

export type LyricLine = {
  chord: Chord[];
  lyric: string;
};

export type LyricSectionType = {
  id: string;
  title: string;
  content: LyricLine[];
};
