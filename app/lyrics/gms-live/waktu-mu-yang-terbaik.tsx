const initialLyrics = [
  {
    id: "1",
    title: "Verse 1",
    content: [
      { chord: "C                 Em", lyric: "Saatku tak mampu berharap" },
      {
        chord: "Dm                 G",
        lyric: "Kekhawatiran menghimpit jiwaku",
      },
      { chord: "F      G  Em      Am", lyric: "Kekuatanku datang dariMu" },
      {
        chord: "     Dm               G  Gm",
        lyric: "Memampukanku kembali berharap",
      },
    ],
  },
  {
    id: "2",
    title: "Verse 2",
    content: [
      { chord: "C               Em", lyric: "Ajarku mengenal hatiMu" },
      { chord: "    Dm", lyric: "Dan percaya" },
      { chord: "             G", lyric: "JalanMu lah yang terbaik" },
      {
        chord: "F      G          Em     Am",
        lyric: "Di kelemahan kuasaMu sempurna",
      },
      {
        chord: "Dm             F        G",
        lyric: "Kau Allah yang tak akan tinggalkan",
      },
    ],
  },
  {
    id: "3",
    title: "Chorus",
    content: [
      { chord: "      C", lyric: "Kupercaya" },
      {
        chord: "        Gm  C     F      G/B Dm",
        lyric: "Engkau bekerja buat kebaikanku",
      },
      { chord: "     G        Em Am Dm", lyric: "Walau belum kumeli - hat" },
      { chord: "               G", lyric: "Namun kuasaMu sempurna" },
      { chord: "      C", lyric: "Kupercaya" },
      {
        chord: "      Gm   C    F     G/B Dm",
        lyric: "Pasti Tuhan bukakan jalanku",
      },
      {
        chord: "     G         Em   Am Dm",
        lyric: "Di waktuMu yang terba - ik",
      },
      { chord: "     G      C", lyric: "S'turut kehendakMu." },
    ],
  },
];

const sections = [
  {
    label: "Verse 1",
    content: [
      { chord: "C", lyric: "Saatku tak mampu berharap" },
      { chord: "Em", lyric: "Kekhawatiran menghimpit jiwaku" },
      { chord: "Dm", lyric: "Kekuatanmu datang dariMu" },
      { chord: "G", lyric: "Menampungkanku kembali berharap" },
    ],
  },
  {
    label: "Verse 2",
    content: [
      { chord: "C", lyric: "Ajarku mengenal hatiMu" },
      { chord: "Dm", lyric: "Dan percaya" },
      { chord: "G", lyric: "JalanMu lah yang terbaik" },
      { chord: "Em", lyric: "Di kelemahan kuasaMu sempurna" },
      { chord: "Am", lyric: "" },
      { chord: "Dm", lyric: "Kau Allah yang tak akan tinggalkan" },
    ],
  },
  {
    label: "Chorus",
    content: [
      { chord: "Gm", lyric: "Engkau bekerja buat kebaikanku" },
      { chord: "C", lyric: "Walau belum kumengerti" },
      { chord: "F", lyric: "Namun kuasaMu sempurna" },
      { chord: "G/B", lyric: "Pasti Tuhan bukakan jalanku" },
      { chord: "Dm", lyric: "" },
      { chord: "G", lyric: "Di waktuMu yang terbaik" },
      { chord: "Em", lyric: "" },
      { chord: "Am", lyric: "" },
      { chord: "G", lyric: "S'turut kehendakMu." },
    ],
  },
];

export { initialLyrics, sections };
