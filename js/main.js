"use strict"

//ロード画面
const loading = document.getElementById('loading');
//表紙
const cover = document.getElementById("cover_bottom");
const cover_reverse = document.getElementById("cover_reverse");
const signbord = document.getElementById("signbord");
const cover_author = document.getElementById("cover_author");
const cover_title = document.getElementById("cover_title");
const textbord = document.getElementById("textbord");
const after = document.getElementsByClassName("after");
const start_btn = document.getElementById("start_btn");
const stop_btn = document.getElementById("stop_btn");
//目次
const contents = document.getElementById("contents");
const content = document.getElementsByClassName("content");
const content_title = document.getElementsByClassName("content_title");
const content_chapter = document.getElementsByClassName("content_chapter");
const content_author = document.getElementsByClassName("content_author");
const seconds = document.getElementsByClassName("seconds");
//両方
const turn = document.getElementById("turn");

//書籍
const books = [prologue,heart,walker,human,bereavement];

//選択タイトル
let current_title;

let bookmark = 0;
let timer;
let is_play = false;

//表紙の表示
function render_cover(num){
  current_title = books[num];
  bookmark = 0;
  cover_author.textContent = books[num].author;
  cover_title.textContent = books[num].title;
  flip_page(books[num]);
  textbord.textContent = "ここに注目して下さい";
};

//文字送り
function flip_page(title){
  textbord.textContent = title.text[bookmark];
  for(let i = 0;i < after.length;i++){
    after[i].textContent = title.text[bookmark - (i + 1)];
  };
  if(bookmark == title.text.length -1){
    stopped();
    start_btn.classList.add("disabled");

    //はしがきの場合は表紙をめくる
    if(current_title === prologue){
    // turn_cover();
    console.log("stop")
    }
  };
  commentary(title);
  bookmark++;
};

function start(){
  start_btn.classList.add("disabled");
  stop_btn.classList.remove("disabled");
  timer = setInterval(() => {
    flip_page(current_title);
  }, 250);
  is_play = true;
}

//停止
function stopped(){
  start_btn.classList.remove("disabled");
  stop_btn.classList.add("disabled");
  clearInterval(timer);
  is_play = false;
};

//表紙の開閉
function turn_cover(){
  cover.classList.toggle("open");
  cover_reverse.classList.toggle("open");
  stopped();
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
      textbord.textContent = `${comments[answer].reading} : ${comments[answer].mean}`;
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

//最初の訪問でははしがきを自動再生
function auto(){
  start();
  if((current_title === prologue) && (!is_play)){
    // turn_cover();
    console.log("stop")
  }
};

//ブラウザサイズを変更するたびにリサイズ
window.addEventListener('resize',resize);

//ロードが完了したらロード画面を終了し、アニメーション
window.onload = ()=>{
  loading.classList.add('loaded');
  auto()
  // setTimeout(turn_cover, 900);
};

//最初は「はしがき」を表示しておく
render_cover(0);

//開始ボタン
start_btn.addEventListener("click",start);

//停止ボタン
stop_btn.addEventListener("click",stopped);

//巻き戻し
for(let i = 0;i < after.length;i++){
  after[i].addEventListener("click",()=>{
    start_btn.classList.remove("disabled");
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

//目次の表示
for(let i = 0;i < content.length;i++){
  content_title[i].textContent = books[i].title;
  content_chapter[i].textContent = books[i].chapter;
  content_author[i].textContent = books[i].author;
  seconds[i].textContent = to_kansuzi(Math.ceil((books[i].text.length / 5) * 1.3));
};

//目次からタイトルを選択
for(let i = 0;i < content.length;i++){
  content[i].addEventListener("click",()=>{
    turn_cover();
    if(current_title === books[i]){
      return;
    };
    render_cover(i);
  });
};