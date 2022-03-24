"use strict"

const turn = document.getElementById("turn");
//表紙
const signBord = document.getElementById("signbord");
const cover = document.getElementById("cover_bottom");
const cover_reverse = document.getElementById("cover_reverse");
const cover_author = document.getElementById("cover_author");
const cover_title = document.getElementById("cover_title");
const textBord = document.getElementById("textbord");
const after = document.getElementsByClassName("after");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
//目次
const contents = document.getElementById("contents");
const content = document.getElementsByClassName("content");
const content_title = document.getElementsByClassName("content_title");
const content_chapter = document.getElementsByClassName("content_chapter");
const content_author = document.getElementsByClassName("content_author");
const seconds = document.getElementsByClassName("seconds");

//書籍
const books = [heart,walker,human,bereavement];

//選択タイトル
let current_title = heart;

let bookmark = 0;
let timer;
let is_play = false;

//目次の表示
for(let i = 0;i < content.length;i++){
  content_title[i].textContent = books[i].title;
  content_chapter[i].textContent = books[i].chapter;
  content_author[i].textContent = books[i].author;
  seconds[i].textContent = to_kansuzi(Math.ceil((books[i].text.length / 5) * 1.3));
};

//漢数字に変換
function to_kansuzi(num){
  let txt = ["○","一","二","三","四","五","六","七","八","九"];
  let str = "";
  for(let i = 0;i < String(num).length; i++){
    str += `${txt[String(num).charAt(i)]}`;
  };
  return str;
};

//ロード終了時にアニメーション
window.onload = setTimeout(turn_cover, 750);

//ページ送り
function flip_page(title){
  textBord.textContent = title.text[bookmark];
  for(let i = 0;i < after.length;i++){
    after[i].textContent = title.text[bookmark - (i + 1)];
  };
  if(bookmark == title.text.length -1){
    clearInterval(timer);
    stop.classList.add("disabled");
  };
  bookmark++;
};

//表紙をめくる
function turn_cover(){
  if(cover.classList.contains("open")){
    cover.classList.remove("open");
    cover_reverse.classList.remove("open");
  } else {
    cover.classList.add("open");
    cover_reverse.classList.add("open");
    stopped();
  };
};

//開始ボタン
start.addEventListener("click",()=>{
  start.classList.add("disabled");
  stop.classList.remove("disabled");
  timer = setInterval(() => {
    flip_page(current_title);
  }, 250);
  is_play = true;
});

//停止ボタン
stop.addEventListener("click",stopped);

//停止
function stopped(){
  start.classList.remove("disabled");
  stop.classList.add("disabled");
  clearInterval(timer);
  is_play = false;
};

//巻き戻し
for(let i = 0;i <= 7;i++){
  after[i].addEventListener("click",()=>{
    if(is_play){
      return;
    };
    bookmark -= (i + 2);
    flip_page(current_title);
  });
};

//目次に移動
signBord.addEventListener("click",turn_cover);
turn.addEventListener("click",turn_cover);
cover_reverse.addEventListener("click",turn_cover);

//目次からタイトルを選択
for(let i = 0;i < content.length;i++){
  content[i].addEventListener("click",()=>{
    turn_cover();
    if(current_title === books[i]){
      return;
    };
    current_title = books[i];
    bookmark = 0;
    cover_author.textContent = books[i].author;
    cover_title.textContent = books[i].title;
    flip_page(books[i]);
    textBord.textContent = "ここに注目して下さい";
  });
};