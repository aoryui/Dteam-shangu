// DOM要素を取得
const inputField = document.getElementById('inputField');
const displayButton = document.getElementById('displayButton');
const outputDiv = document.getElementById('output');
const button1 = document.getElementById('timeline');
const button2 = document.getElementById('question');
// const button3 = document.getElementById('button3');

// ボタンのクリックイベントリスナーを設定
// displayButton.addEventListener('click', () => {
//     // 入力フィールドから値を取得
//     const inputValue = inputField.value;
    
//     // 取得した値を表示エリアに表示
//     outputDiv.textContent = inputValue;
// });

button1.addEventListener('click', () => {
    // 投稿に遷移
    window.location.href = 'timeline.html';
});

button2.addEventListener('click', () => {
    // 質問に遷移
    window.location.href = 'question.html';
});


function getAnswer() {
    // 質問入力欄から質問を取得
    var questionInput = document.getElementById('questionInput');
    var question = questionInput.value;
    
    // 回答表示用の要素を取得
    var answerDisplay = document.getElementById('answerDisplay');
    
    // 質問に対する回答を設定（ここでは単純に質問に対するメッセージを設定）
    var answer = "質問に対する回答: " + question;
    
    // 回答を表示
    answerDisplay.innerHTML = answer;
}