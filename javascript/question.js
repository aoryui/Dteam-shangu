// DOM要素を取得
const inputField = document.getElementById('inputField');
const displayButton = document.getElementById('displayButton');
const outputDiv = document.getElementById('output');
const button1 = document.getElementById('timeline');
const button2 = document.getElementById('question');
const Result = document.getElementById('result');
const Post_text = document.getElementById('post_text');
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

function post() {
    // 質問入力欄から質問を取得
    const questionInput = document.getElementById('questionInput');
    const question = questionInput.value;

    // ボタンを押した時間の取得
    var clickTime = new Date();

    var currentDate = new Date();

    // 時、分、秒を取得
    var hours = clickTime.getHours();
    var minutes = clickTime.getMinutes();
    
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var day = currentDate.getDate();
    
    // 回答表示用の要素を取得
    var answerDisplay = document.getElementById('answerDisplay');
    var time = document.getElementById('time');
    
    // 質問に対する回答を設定（ここでは単純に質問に対するメッセージを設定）
    var answer = "質問に対する回答: " + question;
    
    // 回答を表示
    answerDisplay.innerHTML = answer;
    time.textContent = year + '/' + month + '/' + day + '  ' +  hours + ':' + minutes;
}
