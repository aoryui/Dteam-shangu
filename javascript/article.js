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

// URLから検索されたタグ名を受け取る
const Tag = document.getElementById('Tag');
const urlParams = new URLSearchParams(window.location.search);
let data = urlParams.get('data');
let title = urlParams.get('title');
let tag = urlParams.get('tag');
let text = urlParams.get('text');
let year = urlParams.get('year');
let month = urlParams.get('month');
let day = urlParams.get('day');

if (year != null){ //article.htmlが直接開かれた場合、要素の置き換えをしない
  const contentsDiv = document.getElementById('contents');
  contentsDiv.querySelector('a').textContent = `${year}/${month}/${day}`;
  contentsDiv.querySelector('h1').textContent = title;
  const tags = tag.split(' ');

  // contentsDiv 内の既存の li 要素をすべて削除
  const existingLis = contentsDiv.querySelectorAll('li');
  existingLis.forEach(li => li.remove());

  // tag 配列の各要素に対して li 要素を作成して追加
  tags.forEach(tag => {
    const newLi = document.createElement('li');
    newLi.textContent = tag;
    contentsDiv.appendChild(newLi);
  });
  // text パラメータの値を改行ごとに配列に変換
  const textLines = text.split('<br>');

  // contentsDiv 内の既存の p 要素をすべて削除
  const existingPs = contentsDiv.querySelectorAll('p');
  existingPs.forEach(p => p.remove());

  // textLines 配列の各要素に対して p 要素を作成して追加
  textLines.forEach(textLine => {
    const newP = document.createElement('p');
    newP.textContent = textLine;
    contentsDiv.appendChild(newP);
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

// タグをクリックしたらtagsearch.htmlへ遷移
const liTags = document.querySelectorAll('li'); // liタグを取得
for (const liTag of liTags) {
  liTag.addEventListener('click', function() {
    const text = this.textContent;
    window.location.href = 'tagsearch.html?tag=' + text; // URLを組み立てる
  });
}

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
