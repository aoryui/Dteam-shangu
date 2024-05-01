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
