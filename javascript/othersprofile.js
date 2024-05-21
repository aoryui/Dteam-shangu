// ユーザーナンバーをuserに代入
const urlParams = new URLSearchParams(window.location.search);
let user = urlParams.get('user');
if (user == null){
  user = 0;
};

const button1 = document.getElementById('timeline');
const button2 = document.getElementById('question');
const button3 = document.getElementById('postbtn');
const modal = document.getElementById("myModal");
const usertimline = document.getElementById("usertimeline");
const userquestion = document.getElementById("userquestion");

const span = document.getElementsByClassName("close")[0];

button1.addEventListener('click', () => {
    // 投稿に遷移
    window.location.href = 'timeline.html?user=' + user;
});
button2.addEventListener('click', () => {
    // 質問に遷移
    window.location.href = 'question.html?user=' + user;
});
button3.addEventListener('click', () => {
  // 質問に遷移
  window.location.href = 'post.html?user=' + user;
});

window.onload = function() {
  // 画面表示時はタイムライン表示
  timeline()
};
usertimline.addEventListener('click', () => {
  // ユーザーの投稿
  timeline()
});
userquestion.addEventListener('click', () => {
  // ユーザーの投稿
  question()
});


var PostText = {
  1:"AWSの始め方",
  2:"Dockerが開発を変える！",
  3:"初めてプログラミング言語を学ぶ方に、初心者におすすめな言語を目的別に解説！",
  4:"ブランチ・マージの解説",
  5:"C#で作成をサポートするオススメのツールを教えます！",
  6:"C言語のススメ！",
  7:"Pythonの環境構築について"
};
var PostTag1 = {1:"AWS"}
var PostTag2 = {1:"Docker"}
var PostTag3 = {1:"初心者"}
var PostTag4 = {1:"GitHub"}
var PostTag5 = {1:"C#"}
var PostTag6 = {1:"C"}
var PostTag7 = {1:"Python"}
var PostTime1 = {1:"2024", 2:"04", 3:"22"}
var PostTime2 = {1:"2024", 2:"03", 3:"19"}
var PostTime3 = {1:"2024", 2:"03", 3:"03"}
var PostTime4 = {1:"2024", 2:"03", 3:"02"}
var PostTime5 = {1:"2024", 2:"02", 3:"29"}
var PostTime6 = {1:"2024", 2:"02", 3:"28"}
var PostTime7 = {1:"2024", 2:"02", 3:"20"}
var PostGood = { // CSSの関係上4桁以上の数字は表示できないよ！
  1:524,
  2:21,
  3:232,
  4:542,
  5:542,
  6:3,
  7:242,
}
var PostArticle = {
  1:"AWSのアカウントの作成を作成して、<br>ルートユーザーのアカウント設定して、<br>IAMユーザーの作成して、<br>なんやかんやで完了！",
  2:"開発していたら、環境構築が大変ですようね。<br>仮想環境を作るにしても動作が遅かったりしますよね。<br>その悩みDockerが解決します。",
  3:"初心者におすすめの言語を目的別に紹介します。<br>・初心者<br>Python<br>・Web開発<br>HTML,CSS,JavaScript",
  4:"ブランチ・マージの解説をします。<br>ブランチ発行してあーだこーだ",
  5:"C#の開発ツールがVisualStudioだけだと思っていませんか？<br>今回はC#で開発をサポートするツールを共有します。",
  6:"Cの学習はざせつするものです。<br>この記事はモチベーションを維持しながら学ぶ方法を共有します。",
  7:"Pythonの環境構築について解説します。<br>Pythonのサイトからダウンロードして、<br>環境変数設定して、<br>完成！",
};

// キーの数を取得
const numberOfKeys = Object.keys(PostText).length;
// 中央コンテナの位置を取得
const contentsDiv = document.querySelector('.timeline');

//タイムライン表示
function timeline(){
  const timelines = document.querySelectorAll('.timeline');

  for (const timeliness of timelines) {
    const contentsElements = timeliness.querySelectorAll('#contents');
    for (const contentsElement of contentsElements) {
      contentsElement.remove();
    }
  }
  for (let i = 1; i <= numberOfKeys; i++) {
    const divElement = document.createElement('div'); // div要素を作成
    divElement.id = 'contents';
    // div要素を中央コンテナの子要素として追加
    contentsDiv.appendChild(divElement);

    // 日付表示
    const aElement = document.createElement('a'); // a要素を作成
    timedata = eval("PostTime" + i);
    const year = timedata[1];
    const month = timedata[2];
    const day = timedata[3];
    let timetext = year + "/" + month + "/" + day
    aElement.textContent = timetext;
    // a要素をdiv要素の子要素として追加
    divElement.appendChild(aElement);

    // タイトル表示
    const h1Element = document.createElement('h2'); // h2要素を作成
    h1Element.textContent = PostText[i];
    // h1要素をdiv要素の子要素として追加
    divElement.appendChild(h1Element);
    
    // タグ表示
    let dictionary = eval("PostTag" + i);
    for (const key in dictionary) {
      const liElement = document.createElement('li'); // li要素を作成
      liElement.textContent = dictionary[key];
      // li要素をdiv要素の子要素として追加
      divElement.appendChild(liElement);
    }

    // Good表示
    const GoodElement = document.createElement('p'); // <p id="good-number">を作成
    GoodElement.id = 'good-number';
    GoodElement.textContent = PostGood[i];
    divElement.appendChild(GoodElement);
    const GoodIcon = '<svg id="good-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path></svg>';
    divElement.innerHTML += GoodIcon;
  }
}

// 質問表示
function question(){
  const timelines = document.querySelectorAll('.timeline');

  for (const timeliness of timelines) {
    const contentsElements = timeliness.querySelectorAll('#contents');
    for (const contentsElement of contentsElements) {
      contentsElement.remove();
    }
  }
  for (let i = 1; i <= numberOfKeys; i++) {
    const divElement = document.createElement('div'); // div要素を作成
    divElement.id = 'contents';
    // div要素を中央コンテナの子要素として追加
    contentsDiv.appendChild(divElement);

    // 日付表示
    const aElement = document.createElement('a'); // a要素を作成
    timedata = eval("PostTime" + i);
    const year = timedata[1];
    const month = timedata[2];
    const day = timedata[3];
    let timetext = year + "/" + month + "/" + day
    aElement.textContent = timetext;
    // a要素をdiv要素の子要素として追加
    divElement.appendChild(aElement);

    // タイトル表示
    const h1Element = document.createElement('h2'); // h2要素を作成
    h1Element.textContent = PostText[i];
    // h1要素をdiv要素の子要素として追加
    divElement.appendChild(h1Element);
    
    // タグ表示
    let dictionary = eval("PostTag" + i);
    for (const key in dictionary) {
      const liElement = document.createElement('li'); // li要素を作成
      liElement.textContent = dictionary[key];
      // li要素をdiv要素の子要素として追加
      divElement.appendChild(liElement);
    }

  }
}

// タグをクリックしたらtagsearch.htmlへ遷移
const liTags = document.querySelectorAll('li'); // liタグを取得
for (const liTag of liTags) {
  liTag.addEventListener('click', function() {
    const text = this.textContent;
    window.location.href = 'tagsearch.html?tag=' +  encodeURIComponent(text) + '&user=' + user; // URLを組み立てる
  });
}
//アイコンからプロフィールに画面遷移
document.getElementById('userIcon').addEventListener('click', function() {
  window.location.href = 'profile.html?user=' + user;
});
