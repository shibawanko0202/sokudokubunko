"use strict"

//DOMの取得
const signBord = document.getElementById("signbord");
const coverAuthor = document.getElementById("cover_author");
const coverTitle = document.getElementById("cover_title");
const textBord = document.getElementById("textbord");
const after = document.getElementsByClassName("after");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const contents = document.getElementById("contents");
const content = document.getElementsByClassName("content");
const contentTitle = document.getElementsByClassName("content_title");
const contentChapter = document.getElementsByClassName("content_chapter");
const contentAuthor = document.getElementsByClassName("content_author");
const dots = document.getElementsByClassName("dots");
const seconds = document.getElementsByClassName("seconds");
const cover = document.getElementById("coverbottom");

//書籍
const books = [heart,walker,human,bereavement];

//選択タイトル
let currentTitle = heart;

let bookmark = 0;
let timer;
let isPlay = false;

//目次の表示
for(let i = 0;i < content.length;i++){
  contentTitle[i].textContent = books[i].title;
  contentChapter[i].textContent = books[i].chapter;
  contentAuthor[i].textContent = books[i].author;
  seconds[i].textContent = tokansuzi(Math.ceil(books[i].text.length / 5));
  // let dot = "･････";
  // dots[i].textContent = dot.repeat(14 - books[i].title.length);
};

//漢数字に変換
function tokansuzi(num){
  let txt = ["○","一","二","三","四","五","六","七","八","九"];
  let str = "";
  for(let i = 0;i < String(num).length; i++){
    str += `${txt[String(num).charAt(i)]}`;
  };
  return str;
};

//ロード終了時にアニメーション
setTimeout(() => {
  cover.classList.add("disabled");
}, 750);

//ページ送り機構
function flipPage(title){
  textBord.textContent = title.text[bookmark];
  for(let i = 0;i <= 7;i++){
    after[i].textContent = title.text[bookmark - (i + 1)];
  };
  if(bookmark == title.text.length -1){
    clearInterval(timer);
    stop.classList.add("disabled");
  };
  bookmark++;
};

//開始ボタン
start.addEventListener("click",()=>{
  start.classList.add("disabled");
  stop.classList.remove("disabled");
  timer = setInterval(() => {
    flipPage(currentTitle);
  }, 250);
  isPlay = true;
});

//停止ボタン
stop.addEventListener("click",stopped);

//停止
function stopped(){
  start.classList.remove("disabled");
  stop.classList.add("disabled");
  clearInterval(timer);
  isPlay = false;
};

//巻き戻し
for(let i = 0;i <= 7;i++){
  after[i].addEventListener("click",()=>{
    if(isPlay){
      return;
    };
    bookmark -= (i + 2);
    flipPage(currentTitle);
  });
};

//目次に移動
signBord.addEventListener("click",()=>{
  cover.classList.add("disabled");
  stopped();
});

//目次からタイトルを選択
for(let i = 0;i < content.length;i++){
  content[i].addEventListener("click",()=>{
    cover.classList.remove("disabled");
    if(currentTitle === books[i]){
      return;
    };
    currentTitle = books[i];
    bookmark = 0;
    coverAuthor.textContent = books[i].author;
    coverTitle.textContent = books[i].title;
    flipPage(books[i]);
    textBord.textContent = "ここに注目して下さい";
  });
};