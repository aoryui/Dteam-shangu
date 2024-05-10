const button1 = document.getElementById('timeline');
const button2 = document.getElementById('question');
const button3 = document.getElementById('postbtn');

button1.addEventListener('click', () => {
    // 投稿に遷移
    window.location.href = 'timeline.html';
});

button2.addEventListener('click', () => {
    // 質問に遷移
    window.location.href = 'question.html';
});

button3.addEventListener('click', () => {
  // 質問に遷移
  window.location.href = 'post.html';
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
  5:231,
  6:3,
  7:242,
}
var PostArticle = {
  1:"hoge",
  2:"huga",
  3:"piyo",
  4:"hogera",
  5:"hogehoge",
  6:"foo",
  7:"bar",
};

// キーの数を取得
const numberOfKeys = Object.keys(PostText).length;
// 中央コンテナの位置を取得
const contentsDiv = document.querySelector('.contents.center-contents');

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

// find関数を使った検索フォーム
const select = document.getElementById('lang');
  const submitButton = document.getElementById('sort');
  submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // デフォルトの送信動作をキャンセル
    const selectedOption = select.options[select.selectedIndex];
    const selectedValue = selectedOption.value;
    const url = 'tagsearch.html?tag=' + selectedValue;
    window.location.href = url;
});

// タグをクリックしたらtagsearch.htmlへ遷移
const liTags = document.querySelectorAll('li'); // liタグを取得
for (const liTag of liTags) {
  liTag.addEventListener('click', function() {
    const text = this.textContent;
    window.location.href = 'tagsearch.html?tag=' + text; // URLを組み立てる
  });
}

// 記事画面に遷移
const h2Tags = document.querySelectorAll('h2');

for (const h2Tag of h2Tags) {
  h2Tag.addEventListener('click', function(event) {
    // クリックされたh2要素
    const clickedH2 = event.currentTarget;

    // クリックされたh2要素を含むdiv要素
    const divContainer = clickedH2.closest('div#contents');

    // div要素内の情報取得
    const h2Text = clickedH2.textContent;
    const aTag = divContainer.querySelector('a');
    const time = aTag ? aTag.textContent : '';
    const listItems = divContainer.querySelectorAll('li');
    const listText = [];
    for (const item of listItems) {
      listText.push(item.textContent);
    }
    const arr =listText;
    const tagtext = arr.join(' ');

    // 本文設定
    titlelist = eval("PostText"); // タグ名からタイトルの連想配列を作る
    text = eval("PostArticle"); // タグ名から本文の配列を作る
    for (const key in titlelist) {
      if (titlelist[key] === h2Text) { // タイトルの配列キーを取得
        var articleText = text[key] // articleTextに本文を代入
      }
    }
    // いいね数設定
    goods = eval("PostGood");
    for (const key in titlelist) {
      if (titlelist[key] === h2Text) { // タイトルの配列キーを取得
        var goodcount = PostGood[key] // articleTextにgoodを代入
      }
    }

    window.location.href = 'article.html?title=' + h2Text + '&tag=' + tagtext + '&text=' + articleText + '&time=' + time + '&good=' + goodcount;
  });
}

