const button1 = document.getElementById('timeline');
const button2 = document.getElementById('question');
const button3 = document.getElementById('postbtn');
const button4 = document.getElementById('myButton');
const modal = document.getElementById("myModal");
const btn = document.getElementById("myButton");
const span = document.getElementsByClassName("close")[0];

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

button4.addEventListener('click', () => {
  // ログアウトのメッセージボックス表示
  alert("ログアウトしました！");
  // ログインに遷移
  window.location.href = 'login.html';
});

// ユーザーナンバーをuserに代入
const urlParams = new URLSearchParams(window.location.search);
let user = urlParams.get('user');

// プロフィールの反映
const contentsDiv = document.getElementById('contents');
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

// タグをクリックしたらtagsearch.htmlへ遷移
const liTags = document.querySelectorAll('li'); // liタグを取得
for (const liTag of liTags) {
  liTag.addEventListener('click', function() {
    const text = this.textContent;
    window.location.href = 'tagsearch.html?tag=' +  encodeURIComponent(text); // URLを組み立てる
  });
}
