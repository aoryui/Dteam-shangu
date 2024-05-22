// ユーザーナンバーをuserに代入
const urlParams = new URLSearchParams(window.location.search);
let user = urlParams.get('user');
if (user == null){
  user = 0;
};

const button1 = document.getElementById('timeline');
const button2 = document.getElementById('question');
const button3 = document.getElementById('postbtn');
const logbtn = document.getElementById('logout');
const cpbtn = document.getElementById("changepass");
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

cpbtn.addEventListener('click', () => {
  // changepassに遷移
  window.location.href = 'changepass.html?user=' + user;
});

logbtn.addEventListener('click', () => {
  // ログアウトのメッセージボックス表示
  alert("ログアウトしました！");
  // ログインに遷移
  window.location.href = 'login.html';
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

if(user != null){
  // プロフィールの反映
  const contentsDiv = document.getElementById('contents');
  document.querySelector('.usercontents img').src = userimg[user];
  contentsDiv.querySelector('nickname').textContent = nickname[user];
  contentsDiv.querySelector('realname').textContent = realname[user];
  contentsDiv.querySelector('a').textContent = emaildic[user];
  const right = document.querySelector('.usercontents.user-right');
  let tagdic = eval("tag" + user)
  for (const key in tagdic) {
    const liElement = document.createElement('li'); // li要素を作成
    liElement.textContent = tagdic[key];
    right.appendChild(liElement);
  }
}


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
  }
  
  clickarticle()
  clicktag()
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
