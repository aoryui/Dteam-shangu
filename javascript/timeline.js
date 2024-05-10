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



// script.jsファイルの内容

// タイムラインにイベントを追加する関数
function addEvent() {
    // イベントの時間と説明を入力から取得
    const eventTime = document.getElementById('eventTime').value;
    const eventDescription = document.getElementById('eventDescription').value;
    
    // タイムラインの要素を取得
    const timeline = document.getElementById('timeline');
    
    // タイムラインイベントの要素を作成
    const eventElement = document.createElement('div');
    eventElement.classList.add('timeline-event');
    
    // 時間と説明を表示するための要素を追加
    eventElement.innerHTML = `
        <div><strong>${eventTime}</strong></div>
        <div>${eventDescription}</div>
    `;
    
    // タイムラインにイベントを追加
    timeline.appendChild(eventElement);
    
    // 入力フォームをクリア
    document.getElementById('eventTime').value = '';
    document.getElementById('eventDescription').value = '';
}



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

    window.location.href = 'article.html?title=' + h2Text + '&tag=' + tagtext + '&text=' + "ここに文章を載せる" + '&time=' + time;
  });
}
//ヘッダーのタグ検索機能
const inputElement = document.getElementById('searchInput');
inputElement.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const inputValue = event.target.value.trim(); // 空白削除
    if (inputValue) { // 入力値が空でない場合のみ処理を実行
      console.log(inputValue);
      window.location.href = 'tagsearch.html?tag=' + inputValue;
    } else {
      // 何も入力されていない場合の処理
      alert('タグ名を入力してください');
    }
  }
});
