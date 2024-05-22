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
const useranswer = document.getElementById("useranswer");

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
useranswer.addEventListener('click', () => {
  // ユーザーの投稿
  answer()
});

// キーの数を取得
const numberOfKeys = Object.keys(PostText).length;
// 中央コンテナの位置を取得
const contentsDiv = document.querySelector('.timeline');

//タイムライン表示
function timeline(){
  destroy()

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
  
  clickarticle()
  clicktag()
}

// 質問表示
function question(){
  destroy()

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
    h1Element.textContent = QuestionText[i];
    // h1要素をdiv要素の子要素として追加
    divElement.appendChild(h1Element);
  }
  clickquestion()
}

// 質問表示
function answer(){
  destroy()

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
    h1Element.textContent = AnswerText[i];
    // h1要素をdiv要素の子要素として追加
    divElement.appendChild(h1Element);
  }
  clickanswer()
}

function destroy(){ // 表示されているタイムラインを非表示にする
  const timelines = document.querySelectorAll('.timeline');
  for (const timeliness of timelines) {
    const contentsElements = timeliness.querySelectorAll('#contents');
    for (const contentsElement of contentsElements) {
      contentsElement.remove();
    }
  }
}

function clickquestion(){// 質問画面に遷移
  const h2Tags = document.querySelectorAll('h2');

  for (const h2Tag of h2Tags) {
    h2Tag.addEventListener('click', function(event) {
      // クリックされたh2要素
      const clickedH2 = event.currentTarget;

      // div要素内の情報取得
      const h2Text = clickedH2.textContent;
      
      window.location.href = 'question3.html?title=' + encodeURIComponent(h2Text) + '&user=' + user;
    });
  }
}
clickquestion()

function clickanswer(){// 記事画面に遷移
  // 記事画面に遷移
  const h2Tags = document.querySelectorAll('h2');

  for (const h2Tag of h2Tags) {
    h2Tag.addEventListener('click', function(event) {
      // クリックされたh2要素
      const clickedH2 = event.currentTarget;

      // div要素内の情報取得
      const h2Text = clickedH2.textContent;

      // 本文設定
      for (const key in AnswerText) {
        if (AnswerText[key] === h2Text) { // タイトルの配列キーを取得
          var articleText = AnswerTextQuestion[key] // articleTextに本文を代入
        }
      }

      window.location.href = 'question4.html?answer=' + encodeURIComponent(h2Text) + '&title=' + encodeURIComponent(articleText) + '&user=' + user;
    });
  }
}

function clickarticle(){// 記事画面に遷移
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

      window.location.href = 'article.html?title=' + encodeURIComponent(h2Text) + '&tag=' + encodeURIComponent(tagtext) + '&text=' + encodeURIComponent(articleText) + '&time=' + time + '&good=' + goodcount + '&user=' + user;
    });
  }
}
clickarticle()

function clicktag(){// タグをクリックしたらtagsearch.htmlへ遷移
  const liTags = document.querySelectorAll('li'); // liタグを取得
  for (const liTag of liTags) {
    liTag.addEventListener('click', function() {
      const text = this.textContent;
      window.location.href = 'tagsearch.html?tag=' +  encodeURIComponent(text) + '&user=' + user; // URLを組み立てる
    });
  }
}
clicktag() //タグ検索機能

//アイコンからプロフィールに画面遷移
document.getElementById('userIcon').addEventListener('click', function() {
  window.location.href = 'profile.html?user=' + user;
});
