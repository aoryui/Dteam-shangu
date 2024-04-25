// ヘッダー
const button1 = document.getElementById('timeline');
const button2 = document.getElementById('question');

button1.addEventListener('click', () => {
    // ページ1に遷移
    window.location.href = 'timeline.html';
});


button2.addEventListener('click', () => {
    // ページ3に遷移
    window.location.href = 'question.html';
});

//ヘッダーのタグ検索機能
const inputElement = document.getElementById('searchInput');
inputElement.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const inputValue = event.target.value.trim(); // 空白削除
    if (inputValue) { // 入力値が空でない場合のみ処理を実行
      console.log(inputValue);
      window.location.href = 'tagsearch.html?data=' + inputValue;
    } else {
      // 何も入力されていない場合の処理
      alert('タグ名を入力してください');
    }
  }
});

// タグをクリックしたらtagsearch.htmlへ遷移
const liTags = document.querySelectorAll('li'); // liタグを取得
for (const liTag of liTags) {
  liTag.addEventListener('click', function() {
    const text = this.textContent;
    window.location.href = 'tagsearch.html?data=' + text; // URLを組み立てる
  });
}

function flexTextarea(el) { //テキストエリアのフレックス
    const dummy = el.querySelector('.FlexTextarea__dummy')
    el.querySelector('.FlexTextarea__textarea').addEventListener('input', e => {
      dummy.textContent = e.target.value + '\u200b'
    })
}
  
document.querySelectorAll('.FlexTextarea').forEach(flexTextarea)
  
const Post_Text = document.getElementById('post_text');
// 1. 返信コンテナ要素を取得
const replyContainer = document.getElementById('reply');
const SubmitButton = document.querySelector('input[type="submit"]');

function reply(){ //コメント送信ボタン
  // 入力されたテキストを取得
  const text = Post_Text.value;

  // 改行を `<br>` タグに変換
  const convertedText = text.replace(/\r\n|\r|\n/g, '<br>');

  // 3. h1要素を作成
  const h1Element = document.createElement('h1');

  // 4. h1要素にテキストを設定
  h1Element.textContent = convertedText;

  // 5. h1要素を返信コンテナに追加
  replyContainer.appendChild(h1Element);

  // textareaのクリア
  Post_Text.value = '';
};
