"use strict"

const turn = document.getElementById("turn");
//表紙
const signbord = document.getElementById("signbord");
const cover = document.getElementById("cover_bottom");
const cover_reverse = document.getElementById("cover_reverse");
const cover_author = document.getElementById("cover_author");
const cover_title = document.getElementById("cover_title");
const textbord = document.getElementById("textbord");
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

//文字送り
function flip_page(title){
  textbord.textContent = title.text[bookmark];
  for(let i = 0;i < after.length;i++){
    after[i].textContent = title.text[bookmark - (i + 1)];
  };
  if(bookmark == title.text.length -1){
    clearInterval(timer);
    stop.classList.add("disabled");
  };
  commentary(title);
  bookmark++;
};

//表紙の開閉
function turn_cover(){
  cover.classList.toggle("open");
  cover_reverse.classList.toggle("open");
  stopped();
};

//注釈を表示
function commentary(title){
  //注釈(comments)を検索
  let answer = comments.findIndex((comment)=>{
    return title.text[bookmark].indexOf(comment.word) > -1;
  });
  //注釈にあったらマウスホバーで表示
  if(answer > -1){
    textbord.style.pointerEvents = "all";
    textbord.addEventListener("mouseover",()=>{
      textbord.textContent = `${comments[answer].reading}:${comments[answer].mean}`;
      resize();
    });
    textbord.addEventListener("mouseleave",()=>{
      textbord.textContent = title.text[bookmark - 1];
      textbord.style.fontSize = "16px";
    });
  } else {
    textbord.style.pointerEvents = "none";
  };
};

//注釈がtextbordからはみ出ない様にサイズ変更
function resize() {
  for (let i = 16; 40 < textbord.scrollHeight && i > 10; i--){
    textbord.style.fontSize = `${i}px`;
  };
};

//ブラウザサイズを変更するたびにリサイズ
window.addEventListener('resize',resize);

//ロード終了時にアニメーション
window.onload = setTimeout(turn_cover, 750);

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
signbord.addEventListener("click",turn_cover);
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
    textbord.textContent = "ここに注目して下さい";
  });
};