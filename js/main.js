"use strict"

//DOMの取得
const title = document.getElementById("title");
const bookName = document.getElementById("bookname");
const bookTitle = document.getElementById("booktitle");
const text = document.getElementById("text");
const after = document.getElementsByClassName("after");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const contents = document.getElementById("contents");
const souseki = document.getElementById("souseki");
const dazai = document.getElementById("dazai");
const kenji = document.getElementById("kenji");
const cover = document.getElementById("coverbottom");

// const books = [
//   {
//     title:
//   }
// ];

//選択書籍
let currentTitle = heart;

let bookmark = 0;
let timer;
let isPlay = false;

setTimeout(() => {
  cover.classList.add("disabled");
}, 700);

//ページ送り機構
function flipPage(title){
  text.textContent = title[bookmark];
  for(let i = 0;i <= 7;i++){
    after[i].textContent = title[bookmark - (i + 1)];
  };
  if(bookmark == title.length -1){
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
title.addEventListener("click",()=>{
  // contents.classList.remove("disabled");
  cover.classList.add("disabled");
  stopped();
});

//人間失格
dazai.addEventListener("click",()=>{
  // contents.classList.add("disabled");
  cover.classList.remove("disabled");
  if(currentTitle === human){
    return;
  };
  currentTitle = human;
  bookmark = 0;
  bookName.textContent = "太宰治";
  bookTitle.textContent = "人間失格";
  flipPage(human);
  text.textContent = "ここに注目して下さい";
});

//こころ
souseki.addEventListener("click",()=>{
  cover.classList.remove("disabled");
  if(currentTitle === heart){
    return;
  };
  currentTitle = heart;
  bookmark = 0;
  bookName.textContent = "夏目漱石";
  bookTitle.textContent = "こころ";
  flipPage(heart);
  text.textContent = "ここに注目して下さい";
});

//永訣の朝
kenji.addEventListener("click",()=>{
  cover.classList.remove("disabled");
  if(currentTitle === goodbye){
    return;
  };
  currentTitle = goodbye;
  bookmark = 0;
  bookName.textContent = "宮沢賢治";
  bookTitle.textContent = "永訣の朝";
  flipPage(goodbye);
  text.textContent = "ここに注目して下さい";
});