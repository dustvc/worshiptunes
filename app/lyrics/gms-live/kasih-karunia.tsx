const initialLyrics = [
  {
    id: "1",
    title: "Intro",
    content: [
      { chord: "C Fm/C", lyric: "" },
      { chord: "C Am", lyric: "" },
      { chord: "F Bb Dm G", lyric: "" },
    ],
  },
  {
    id: "2",
    title: "Verse 1",
    content: [
      { chord: "C         F", lyric: "Kasih setia-Mu tak pernah pudar" },
      { chord: "C", lyric: "Sungguh Kau Tuhan" },
      { chord: "   F", lyric: "Yang panjang sabar" },
      { chord: "   Am   E/Ab", lyric: "Semua yang baik" },
      { chord: "    C      D/F#", lyric: "Di dalam hidupku" },
      { chord: "     Dm7       G", lyric: "Anugerah dari SalibMu." },
    ],
  },
  {
    id: "3",
    title: "Verse 2",
    content: [
      { chord: "C           F", lyric: "Walaupun terkadang aku jatuh" },
      { chord: "C           F", lyric: "Tak pernah berubah sayangMu" },
      { chord: "       Am    E/Ab", lyric: "Sungguh tak kuduga" },
      { chord: "     C/D  D/F#", lyric: "Kau tetap setia" },
      {
        chord: "    Dm7            G",
        lyric: "Menantiku ‘tuk berlari padaMu.",
      },
    ],
  },
  {
    id: "4",
    title: "Chorus",
    content: [
      { chord: "C G       Am Em", lyric: "Besar... Kasih Karunia" },
      { chord: "        F       C", lyric: "Yang Engkau tunjukkan, Yesus" },
      { chord: "      Dm7     G", lyric: "Sungguh ‘ku bersyukur" },
      { chord: "   C G   Am   Em", lyric: "Tinggi... melebihi langit" },
      { chord: "        F  C", lyric: "Kau angkat diriku dekat" },
      { chord: "     Dm  G    C", lyric: "Ke tahta kasih karuniaMu." },
    ],
  },
  {
    id: "5",
    title: "Bridge",
    content: [
      { chord: "D  Em7 D/F#", lyric: "Wo...o...o...o..." },
      {
        chord: "G     D/F#    Em7 A",
        lyric: "Semua kar’na kasih karunia-Mu",
      },
      {
        chord: "D/F#   F#/Bb    Bm E/Ab",
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
      { chord: "C*Am*", lyric: "" },
      { chord: "F*Bb*Dm*G*", lyric: "" },
    ],
  },
  {
    label: "Verse 1",
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
    label: "Verse 2",
    content: [
      { chord: "C           F", lyric: "Walaupun terkadang aku jatuh" },
      { chord: "C           F", lyric: "Tak pernah berubah sayangMu" },
      { chord: "      Am    E/Ab", lyric: "Sungguh tak kuduga" },
      { chord: "    C/D  D/F#", lyric: "Kau tetap setia" },
      { chord: "    Dm7          G", lyric: "Menantiku ‘tuk berlari padaMu." },
    ],
  },
  {
    label: "Chorus",
    content: [
      { chord: "C G       Am Em", lyric: "Besar... Kasih Karunia" },
      { chord: "        F       C", lyric: "Yang Engkau tunjukkan, Yesus" },
      { chord: "      Dm7     G", lyric: "Sungguh ‘ku bersyukur" },
      { chord: "   C G   Am   Em", lyric: "Tinggi... melebihi langit" },
      { chord: "        F  C", lyric: "Kau angkat diriku dekat" },
      { chord: "     Dm  G    C", lyric: "Ke tahta kasih karuniaMu." },
    ],
  },
  {
    label: "Bridge",
    content: [
      { chord: "D  Em7 D/F#", lyric: "Wo...o...o...o..." },
      {
        chord: "G     D/F#    Em7 A",
        lyric: "Semua kar’na kasih karunia-Mu",
      },
      {
        chord: "D/F#   F#/Bb    Bm E/Ab",
        lyric: "Semua kar’na kasih karunia-Mu.",
      },
    ],
  },
];

export { initialLyrics, sections };
