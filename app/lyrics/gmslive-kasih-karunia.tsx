const initialLyrics = [
  {
    id: "1",
    title: "Intro",
    content: [
      {
        chord: [
          { text: "C", position: 0 },
          { text: "Fm/C", position: 3 },
        ],
        lyric: "",
      },
      {
        chord: [
          { text: "C", position: 0 },
          { text: "Am", position: 3 },
        ],
        lyric: "",
      },
      {
        chord: [
          { text: "F", position: 0 },
          { text: "Bb", position: 3 },
          { text: "Dm", position: 7 },
          { text: "G", position: 11 },
        ],
        lyric: "",
      },
    ],
  },
  {
    id: "2",
    title: "Verse 1",
    content: [
      {
        chord: [
          { text: "C", position: 0 },
          { text: "F", position: 12 },
        ],
        lyric: "Kasih setia-Mu tak pernah pudar",
      },
      {
        chord: [
          { text: "C", position: 0 },
          { text: "F", position: 6 },
        ],
        lyric: "Sungguh Kau Tuhan",
      },
      {
        chord: [
          { text: "Am", position: 3 },
          { text: "E/Ab", position: 9 },
        ],
        lyric: "Yang panjang sabar",
      },
      {
        chord: [
          { text: "C", position: 0 },
          { text: "D/F#", position: 5 },
        ],
        lyric: "Semua yang baik",
      },
      {
        chord: [
          { text: "Dm7", position: 0 },
          { text: "G", position: 10 },
        ],
        lyric: "Anugerah dari SalibMu.",
      },
    ],
  },
  {
    id: "3",
    title: "Verse 2",
    content: [
      {
        chord: [
          { text: "C", position: 0 },
          { text: "F", position: 12 },
        ],
        lyric: "Walaupun terkadang aku jatuh",
      },
      {
        chord: [
          { text: "C", position: 0 },
          { text: "F", position: 12 },
        ],
        lyric: "Tak pernah berubah sayangMu",
      },
      {
        chord: [
          { text: "Am", position: 3 },
          { text: "E/Ab", position: 9 },
        ],
        lyric: "Sungguh tak kuduga",
      },
      {
        chord: [
          { text: "C/D", position: 0 },
          { text: "D/F#", position: 8 },
        ],
        lyric: "Kau tetap setia",
      },
      {
        chord: [
          { text: "Dm7", position: 0 },
          { text: "G", position: 11 },
        ],
        lyric: "Menantiku ‘tuk berlari padaMu.",
      },
    ],
  },
  {
    id: "4",
    title: "Chorus",
    content: [
      {
        chord: [
          { text: "C", position: 0 },
          { text: "G", position: 7 },
          { text: "Am", position: 10 },
          { text: "Em", position: 14 },
        ],
        lyric: "Besar... Kasih Karunia",
      },
      {
        chord: [
          { text: "F", position: 7 },
          { text: "C", position: 20 },
        ],
        lyric: "Yang Engkau tunjukkan, Yesus",
      },
      {
        chord: [
          { text: "Dm7", position: 5 },
          { text: "G", position: 11 },
        ],
        lyric: "Sungguh ‘ku bersyukur",
      },
      {
        chord: [
          { text: "C", position: 0 },
          { text: "G", position: 7 },
          { text: "Am", position: 10 },
          { text: "Em", position: 14 },
        ],
        lyric: "Tinggi... melebihi langit",
      },
      {
        chord: [
          { text: "F", position: 7 },
          { text: "C", position: 19 },
        ],
        lyric: "Kau angkat diriku dekat",
      },
      {
        chord: [
          { text: "Dm", position: 5 },
          { text: "G", position: 12 },
          { text: "C", position: 15 },
        ],
        lyric: "Ke tahta kasih karuniaMu.",
      },
    ],
  },
  {
    id: "5",
    title: "Bridge",
    content: [
      {
        chord: [
          { text: "D", position: 0 },
          { text: "Em7", position: 3 },
          { text: "D/F#", position: 7 },
        ],
        lyric: "Wo...o...o...o...",
      },
      {
        chord: [
          { text: "G", position: 0 },
          { text: "D/F#", position: 6 },
          { text: "Em7", position: 10 },
          { text: "A", position: 15 },
        ],
        lyric: "Semua kar’na kasih karunia-Mu",
      },
      {
        chord: [
          { text: "D/F#", position: 0 },
          { text: "F#/Bb", position: 6 },
          { text: "Bm", position: 10 },
          { text: "E/Ab", position: 15 },
        ],
        lyric: "Semua kar’na kasih karunia-Mu.",
      },
    ],
  },
];

const sections = [
  {
    label: "Intro",
    title: "Intro",
    content: [
      {
        chord: [
          { text: "C", position: 0 },
          { text: "Fm/C", position: 3 },
        ],
        lyric: "",
      },
      {
        chord: [
          { text: "C", position: 0 },
          { text: "Am", position: 3 },
        ],
        lyric: "",
      },
      {
        chord: [
          { text: "F", position: 0 },
          { text: "Bb", position: 2 },
          { text: "Dm", position: 4 },
          { text: "G", position: 6 },
        ],
        lyric: "",
      },
    ],
  },
  {
    label: "Verse 1",
    title: "Verse 1",
    content: [
      {
        chord: [
          { text: "C", position: 0 },
          { text: "F", position: 12 },
        ],
        lyric: "Kasih setia-Mu tak pernah pudar",
      },
      {
        chord: [
          { text: "C", position: 0 },
          { text: "F", position: 6 },
        ],
        lyric: "Sungguh Kau Tuhan",
      },
      {
        chord: [
          { text: "Am", position: 3 },
          { text: "E/Ab", position: 9 },
        ],
        lyric: "Yang panjang sabar",
      },
      {
        chord: [
          { text: "C", position: 0 },
          { text: "D/F#", position: 5 },
        ],
        lyric: "Semua yang baik",
      },
      {
        chord: [
          { text: "Dm7", position: 0 },
          { text: "G", position: 10 },
        ],
        lyric: "Anugerah dari SalibMu.",
      },
    ],
  },
  {
    label: "Verse 2",
    title: "Verse 2",
    content: [
      {
        chord: [
          { text: "C", position: 0 },
          { text: "F", position: 12 },
        ],
        lyric: "Walaupun terkadang aku jatuh",
      },
      {
        chord: [
          { text: "C", position: 0 },
          { text: "F", position: 12 },
        ],
        lyric: "Tak pernah berubah sayangMu",
      },
      {
        chord: [
          { text: "Am", position: 3 },
          { text: "E/Ab", position: 9 },
        ],
        lyric: "Sungguh tak kuduga",
      },
      {
        chord: [
          { text: "C/D", position: 0 },
          { text: "D/F#", position: 8 },
        ],
        lyric: "Kau tetap setia",
      },
      {
        chord: [
          { text: "Dm7", position: 0 },
          { text: "G", position: 11 },
        ],
        lyric: "Menantiku ‘tuk berlari padaMu.",
      },
    ],
  },
  {
    label: "Chorus",
    title: "Chorus",
    content: [
      {
        chord: [
          { text: "C", position: 0 },
          { text: "G", position: 7 },
          { text: "Am", position: 10 },
          { text: "Em", position: 14 },
        ],
        lyric: "Besar... Kasih Karunia",
      },
      {
        chord: [
          { text: "F", position: 7 },
          { text: "C", position: 20 },
        ],
        lyric: "Yang Engkau tunjukkan, Yesus",
      },
      {
        chord: [
          { text: "Dm7", position: 5 },
          { text: "G", position: 11 },
        ],
        lyric: "Sungguh ‘ku bersyukur",
      },
      {
        chord: [
          { text: "C", position: 0 },
          { text: "G", position: 7 },
          { text: "Am", position: 10 },
          { text: "Em", position: 14 },
        ],
        lyric: "Tinggi... melebihi langit",
      },
      {
        chord: [
          { text: "F", position: 7 },
          { text: "C", position: 19 },
        ],
        lyric: "Kau angkat diriku dekat",
      },
      {
        chord: [
          { text: "Dm", position: 5 },
          { text: "G", position: 12 },
          { text: "C", position: 15 },
        ],
        lyric: "Ke tahta kasih karuniaMu.",
      },
    ],
  },
  {
    label: "Bridge",
    title: "Bridge",
    content: [
      {
        chord: [
          { text: "D", position: 0 },
          { text: "Em7", position: 3 },
          { text: "D/F#", position: 7 },
        ],
        lyric: "Wo...o...o...o...",
      },
      {
        chord: [
          { text: "G", position: 0 },
          { text: "D/F#", position: 6 },
          { text: "Em7", position: 10 },
          { text: "A", position: 15 },
        ],
        lyric: "Semua kar’na kasih karunia-Mu",
      },
      {
        chord: [
          { text: "D/F#", position: 0 },
          { text: "F#/Bb", position: 6 },
          { text: "Bm", position: 10 },
          { text: "E/Ab", position: 15 },
        ],
        lyric: "Semua kar’na kasih karunia-Mu.",
      },
    ],
  },
];

export { initialLyrics, sections };
