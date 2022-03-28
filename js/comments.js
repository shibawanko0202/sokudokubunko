
const comments = [
  {
    word: "憚る",
    reading: "はばかる",
    mean: "気兼ねする。遠慮する。",
  },
  {
    word: "書生",
    reading: "しょせい",
    mean: "学生。",
  },
  {
    word: "国元",
    reading: "くにもと",
    mean: "故郷。",
  },
  {
    word: "辺鄙",
    reading: "へんぴ",
    mean: "都会から離れた地域。",
  },
  {
    word: "玉突き",
    reading: "たまつき",
    mean: "ビリヤード。",
  },
  {
    word: "畷",
    reading: "なわて",
    mean: "田んぼ道。まっすぐな長い道。",
  },
  {
    word: "十銭",
    reading: "せん",
    mean: "1円=100銭",
  },
  {
    word: "燻ぶり",
    reading: "くすぶり・いぶり",
    mean: "よく燃えずに煙が出る様。",
  },
  {
    word: "藁葺",
    reading: "わらぶき",
    mean: "藁を葺いた屋根。",
  },
  {
    word: "拵えて",
    reading: "こしらえて",
    mean: "ものを作ること。",
  },
  {
    word: "頗る",
    reading: "すこぶる",
    mean: "とても。",
  },
  {
    word: "暗然",
    reading: "あんぜん",
    mean: "悲しくて心がふさぐさま。",
  },
  {
    word: "おべっか",
    reading: "おべっか",
    mean: "上の者のご機嫌をとること。",
  },
  {
    word: "末席",
    reading: "まっせき・ばっせき",
    mean: "下座。下位の地位。",
  },
  {
    word: "晦渋",
    reading: "かいじゅう",
    mean: "難しく意味が分かりにくいこと。",
  },
  {
    word: "転輾",
    reading: "てんてん",
    mean: "転がること。めぐること。",
  },
  {
    word: "呻吟",
    reading: "しんぎん",
    mean: "苦しみうめくこと。",
  },
  {
    word: "プラクテカル",
    reading: "practical",
    mean: "実用的。",
  },
  {
    word: "凄惨",
    reading: "せいさん",
    mean: "むごたらしい様子。",
  },
  {
    word: "阿鼻地獄",
    reading: "あびじごく",
    mean: "地獄の中で最も苦しみが激しい所。",
  },
  {
    word: "エゴイスト",
    reading: "egoist",
    mean: "利己主義者。",
  },
  {
    word: "霹靂",
    reading: "へきれき",
    mean: "急に雷が激しく鳴ること。",
  },
  {
    word: "謂わば",
    reading: "いわば",
    mean: "いうなれば。",
  },
  {
    word: "万世一系",
    reading: "ばんせいいっけい",
    mean: "永久に一つの系統が続くこと。",
  },
  {
    word: "獅子",
    reading: "しし",
    mean: "らいおん。",
  },
  {
    word: "鰐",
    reading: "わに",
    mean: "ワニ",
  },
  {
    word: "懊悩",
    reading: "おうのう",
    mean: "悩みもだえること。",
  },
  {
    word: "ナアヴァスネス",
    reading: "narvousness",
    mean: "神経質。",
  },
  {
    word: "所謂",
    reading: "いわゆる",
    mean: "世間でいう。",
  },
  {
    word: "脚絆",
    reading: "きゃはん",
    mean: "ここではレギンスのことを指す。",
  },
  {
    word: "先刻",
    reading: "せんこく",
    mean: "さきほど。",
  },
  {
    word: "出鱈目",
    reading: "でたらめ",
    mean: "いい加減なこと。",
  },
  {
    word: "インデヤン",
    reading: "indian",
    mean: "アメリカ先住民。",
  },
  {
    word: "更紗",
    reading: "さらさ",
    mean: "インド発祥の木綿布。",
  },
  {
    word: "小咄",
    reading: "こばなし",
    mean: "ちょっとした短い話。",
  },
  {
    word: "剽軽",
    reading: "ひょうきん",
    mean: "おどける様子。",
  },
  {
    word: "甚だ",
    reading: "はなはだ",
    mean: "程度が大きいこと。",
  },
  {
    word: "綴り方",
    reading: "つづりかた",
    mean: "今の作文にあたるもの。",
  },
  {
    word: "痰壺",
    reading: "たんつぼ",
    mean: "痰や唾を吐き入れる壺。",
  },
  {
    word: "筆致",
    reading: "ひっち",
    mean: "文章や絵の書きぶり。",
  },
  {
    word: "操行",
    reading: "そうこう",
    mean: "普段の行い。",
  },
  {
    word: "凡そ",
    reading: "およそ",
    mean: "全く。全然。",
  },
  {
    word: "対蹠的",
    reading: "たいせきてき",
    mean: "正反対である様。",
  },
  {
    word: "片手落ち",
    reading: "かたておち",
    mean: "配慮や注意にかけること。",
  },
  {
    word: "エホバ",
    reading: "エホバ",
    mean: "旧約聖書の神。ヤハウェ。",
  },
  {
    word: "三々五々",
    reading: "さんさんごご",
    mean: "ばらばらに。あちこちに。",
  },
  {
    word: "修身",
    reading: "しゅうしん",
    mean: "自分の行いを正すこと。",
  },
  {
    word: "妙諦",
    reading: "みょうてい",
    mean: "すぐれた真理。",
  },
  {
    word: "球突き",
    reading: "たまつき",
    mean: "ビリヤード。",
  },
  {
    word: "迚も",
    reading: "とても",
    mean: "どうせ。しょせん。",
  },
  {
    word: "仰有る",
    reading: "おっしゃる",
    mean: "「言う」の尊敬語。",
  },
  {
    word: "了った",
    reading: "しまった",
    mean: "完了する。やめる。",
  },
  {
    word: "了って",
    reading: "しまって",
    mean: "完了する。やめる。",
  },
  {
    word: "了う",
    reading: "しまう",
    mean: "完了する。やめる。",
  },
  {
    word: "了おう",
    reading: "しまおう",
    mean: "完了する。やめる。",
  },
  {
    word: "併し",
    reading: "しかし",
    mean: "だが。けれども。なのに。",
  },
  {
    word: "丈け",
    reading: "だけ",
    mean: "それだけ。",
  },
  {
    word: "具って",
    reading: "そなわって",
    mean: "有している。",
  },
  {
    word: "一寸",
    reading: "ちょっと",
    mean: "すこし。",
  },
  {
    word: "関聯",
    reading: "かんれん",
    mean: "かかわり。つながり。",
  },
  {
    word: "同伴",
    reading: "どうはん",
    mean: "連れ立って行くこと。",
  },
  {
    word: "聰明",
    reading: "そうめい",
    mean: "かしこいこと。",
  },
  {
    word: "屡々",
    reading: "しばしば",
    mean: "しょっちゅう。",
  },
  {
    word: "竃",
    reading: "かまど",
    mean: "煉瓦などで作った、煮炊きする為の設備。",
  },
  {
    word: "ウェブスター",
    reading: "パークマン=ウェブスター殺人事件",
    mean: "1849年に実際に起こった事件。",
  },
  {
    word: "ユージン",
    reading: "ユージン・アラム",
    mean: "1704-1759 イギリスの哲学者であり殺人犯。18321年に小説の題材にもなる。",
  },
  {
    word: "エアラム",
    reading: "ユージン・アラム",
    mean: "1704-1759 イギリスの哲学者であり殺人犯。18321年に小説の題材にもなる。",
  },
  {
    word: "ウエーンライト",
    reading: "トーマス・グリフィス・ウェインライト",
    mean: "1794-1847 イギリスの芸術家、小説家であり。連続殺人犯の疑いがあった。",
  },
  {
    word: "野口",
    reading: "野口男三郎事件",
    mean: "1902年に実際に起こった猟奇事件。",
  },
  {
    word: "男三郎",
    reading: "野口男三郎事件",
    mean: "1902年に実際に起こった猟奇事件。",
  },
  {
    word: "ブルーベヤド",
    reading: "青髭",
    mean: "ランドリューの別名。",
  },
  {
    word: "ランドルー",
    reading: "アンリ・デジレ・ランドリュー",
    mean: "1869-1922 フランスで最も有名な殺人鬼と言われる。",
  },
  {
    word: "アームストロング",
    reading: "マージョリー・ディール＝アームストロング",
    mean: "ピザ配達人爆死事件の主犯。",
  },
  {
    word: "耽る",
    reading: "ふける",
    mean: "熱中する。",
  },
  {
    word: "ポオ",
    reading: "エドガー・アラン・ポー",
    mean: "1809-1849 アメリカの小説家。江戸川乱歩の由来。",
  },
  {
    word: "ホフマン",
    reading: "E・T・A・ホフマン",
    mean: "1776-1822 ドイツの小説家、音楽家。",
  },
  {
    word: "ガボリオ",
    reading: "エティエンヌ・エミール・ガボリオ",
    mean: "1832-1873 フランスの大衆小説家。",
  },
  {
    word: "ボアゴベ",
    reading: "フォルチュネ・デュ・ボアゴベイ",
    mean: "1821-1891 フランスの大衆小説家。",
  },
  {
    word: "頁を",
    reading: "頁",
    mean: "ページ。",
  },
  {
    word: "凡て",
    reading: "すべて",
    mean: "ひっくるめて。全部。",
  },
  {
    word: "活動小屋",
    reading: "かつどうごや",
    mean: "映画館の旧称。",
  },
  {
    word: "漸く",
    reading: "ようやく",
    mean: "時間がかかった後に、待ち望んだことが実現するさま。",
  },
  {
    word: "掏摸",
    reading: "すり",
    mean: "他人の物を気付かれない様に盗む行為。",
  },
  {
    word: "認めて",
    reading: "したためて",
    mean: "書き記す。",
  },
  {
    word: "鬘",
    reading: "かつら",
    mean: "髪型を変えるために被るもの。",
  },
  {
    word: "外套",
    reading: "がいとう",
    mean: "オーバーコート",
  },
  {
    word: "はねる",
    reading: "はねる",
    mean: "その日の興業が終了すること。",
  },
  {
    word: "態と",
    reading: "わざと",
    mean: "故意に。",
  },
  {
    word: "妲妃",
    reading: "だっきのおひゃく",
    mean: "江戸時代にいたとされる日本最大の悪女。",
  },
  {
    word: "蟒蛇",
    reading: "うわばみおよし",
    mean: "歌舞伎の登場人物。夫を殺した仇を色仕掛けでだます。",
  },
  {
    word: "惹起し",
    reading: "ひきおこし",
    mean: "問題を発生させること。",
  },
  {
    word: "当座",
    reading: "とうざ",
    mean: "その時。",
  },
  {
    word: "あめゆじゆ",
    reading: "あめゆじゅ",
    mean: "雨雪(みぞれ)。",
  },
  {
    word: "とてちて",
    reading: "とてちて",
    mean: "取ってきて。",
  },
  {
    word: "けんじや",
    reading: "けんじゃ",
    mean: "下さい。",
  },
  {
    word: "蓴菜",
    reading: "じゅんさい",
    mean: "水面に葉を浮かべる水草の一種。",
  },
  {
    word: "陶椀",
    reading: "とうわん",
    mean: "陶製のおわん。",
  },
  {
    word: "蒼鉛",
    reading: "そうえんいろ",
    mean: "ビスマス(金属)の色。やや赤みがかった銀色。",
  },
  {
    word: "とし子",
    reading: "宮澤トシ",
    mean: "賢治のふたつ違いの妹。結核により24歳でこの世を去る。賢治の最大の理解者だった。",
  },
  {
    word: "いつしやう",
    reading: "いっしゃう",
    mean: "一生。",
  },
  {
    word: "みかげ",
    reading: "みかげせきざい",
    mean: "御影石。",
  },
  {
    word: "二相系",
    reading: "にそうけい",
    mean: "液体と固体のような二つの状態が共存している様子。ここではみぞれを指す。",
  },
  {
    word: "Ora",
    reading: "おら",
    mean: "私は。",
  },
  {
    word: "Orade",
    reading: "おらで",
    mean: "私で。",
  },
  {
    word: "Shitori",
    reading: "しとり",
    mean: "一人で。",
  },
  {
    word: "egumo",
    reading: "えぐも",
    mean: "逝くから。",
  },
  {
    word: "びやうぶ",
    reading: "びやうぶ",
    mean: "屏風。",
  },
  {
    word: "あをじろく",
    reading: "あおじろく",
    mean: "青白く。",
  },
  {
    word: "うまれで",
    reading: "うまれで",
    mean: "生まれて。",
  },
  {
    word: "くるたて",
    reading: "くるたて",
    mean: "来るとしても。",
  },
  {
    word: "こたに",
    reading: "こたに",
    mean: "こんなに",
  },
  {
    word: "わりや",
    reading: "わりゃ",
    mean: "自分の。",
  },
  {
    word: "資糧",
    reading: "しりょう",
    mean: "たべもの。仏教では悟りに至る為の功徳をさす。",
  },
  {
    word: "さいはひ",
    reading: "さいわい",
    mean: "幸せ。",
  },
  {
    word: "一九二二、一一、二七",
    reading: "1922 11 27",
    mean: "大正11年11月27日、花巻はみぞれだった。",
  },
  // {
  //   word: "",
  //   reading: "",
  //   mean: "",
  // },
  // {
  //   word: "",
  //   reading: "",
  //   mean: "",
  // },
  // {
  //   word: "",
  //   reading: "",
  //   mean: "",
  // },
  // {
  //   word: "",
  //   reading: "",
  //   mean: "",
  // },
  // {
  //   word: "",
  //   reading: "",
  //   mean: "",
  // },
  // {
  //   word: "",
  //   reading: "",
  //   mean: "",
  // },
  // {
  //   word: "",
  //   reading: "",
  //   mean: "",
  // },
  // {
  //   word: "",
  //   reading: "",
  //   mean: "",
  // },
  // {
  //   word: "",
  //   reading: "",
  //   mean: "",
  // },
  // {
  //   word: "",
  //   reading: "",
  //   mean: "",
  // },
];