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
let time = urlParams.get('time');

if (time != null) { //article.htmlが直接開かれた場合、要素の置き換えをしない
  const contentsDiv = document.getElementById('contents');
  contentsDiv.querySelector('a').textContent = time;
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



// タグをクリックしたらtagsearch.htmlへ遷移
const liTags = document.querySelectorAll('li'); // liタグを取得
for (const liTag of liTags) {
  liTag.addEventListener('click', function () {
    const text = this.textContent;
    window.location.href = 'tagsearch.html?tag=' + text; // URLを組み立てる
  });
}

function reply() { //コメント送信ボタン
  // 入力されたテキストを取得
  const text = Post_Text.value;

  if (!text) { // 入力値が空でない場合のみ処理を実行
    // 何も入力されていない場合の処理
    alert('入力してください');
    return
  }

  // 改行を `<br>` タグに変換
  const convertedText = text.replace(/\r\n|\r|\n/g, '<br>');

  // 3. p要素を作成
  const pElement = document.createElement('p');

  // 4. h1要素にテキストを設定
  pElement.innerHTML = convertedText;

  // 中央コンテナの位置を取得
  const contentsDiv = document.querySelector('.contents.center-contents');
  const divElement = document.createElement('div'); // div要素を作成
  divElement.id = 'reply';
  // div要素を中央コンテナの子要素として追加
  contentsDiv.appendChild(divElement);
  divElement.appendChild(pElement);

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
const replyContainer = document.getElementById('reply-form');
const SubmitButton = document.querySelector('input[type="submit"]');

//グッドボタン機能
// クリック回数をカウントする変数
let clickCount = 0;

// ボタンをクリックしたときの処理
document.getElementById("goodbtn").addEventListener("click", function () {
  clickCount++; // クリック回数を増やす
  toggleIcon(); // アイコンを切り替える関数を呼び出す
});

// アイコンを切り替える関数
function toggleIcon() {
  // クリック回数が偶数の場合は上のアイコンを表示し、奇数の場合は下のアイコンを表示する
  if (clickCount % 2 === 0) {
    document.getElementById("iconPath").setAttribute("d", "M14.5998 8.00033H21C22.1046 8.00033 23 8.89576 23 10.0003V12.1047C23 12.3659 22.9488 12.6246 22.8494 12.8662L19.755 20.3811C19.6007 20.7558 19.2355 21.0003 18.8303 21.0003H2C1.44772 21.0003 1 20.5526 1 20.0003V10.0003C1 9.44804 1.44772 9.00033 2 9.00033H5.48184C5.80677 9.00033 6.11143 8.84246 6.29881 8.57701L11.7522 0.851355C11.8947 0.649486 12.1633 0.581978 12.3843 0.692483L14.1984 1.59951C15.25 2.12534 15.7931 3.31292 15.5031 4.45235L14.5998 8.00033ZM7 10.5878V19.0003H18.1606L21 12.1047V10.0003H14.5998C13.2951 10.0003 12.3398 8.77128 12.6616 7.50691L13.5649 3.95894C13.6229 3.73105 13.5143 3.49353 13.3039 3.38837L12.6428 3.0578L7.93275 9.73038C7.68285 10.0844 7.36341 10.3746 7 10.5878ZM5 11.0003H3V19.0003H5V11.0003Z");
  } else {
    document.getElementById("iconPath").setAttribute("d", "M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z");
  }
}
