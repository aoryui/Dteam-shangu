// タグ検索画面のJS

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

// タグが日本語の場合英語に置き換える
switch (data){
  case 'ポエム':
    data = 'poem';
    break;
  default:
    break;
}

// 置き換えたdataをTag要素に反映
Tag.textContent = data;

// タグの表示テキスト
var tagname = {Python:"Python", Docker:"Docker", AWS:"AWS", poem:"ポエム"};

// URLパラメータから取得したデータからtagnameを表示
if (tagname[data]) {
  Tag.textContent = tagname[data];
} else {
  Tag.textContent = "お探しのタグは見つかりませんでした"; // tagnameに無い場合
}

// タグに応じて記事のテキストを変える
var PythonText = {
  1:"Pythonは楽しい",
  2:"Pythonはわかりやすい",
  3:"Pythonはおいしい",
  4:"Pythonのここがすごい",
};

var DockerText = {
  1:"Dockerのすゝめ",
  2:"Dockerが開発を変える！",
  3:"Dockerのバージョン管理",
  4:"Dockerすごいね"
};

var AWSText = {
  1:"AWSの始め方",
  2:"AWSでデータサイエンス",
  3:"AWSはおいしい",
  4:"AWSすごい"
};
  
var poemText = {
  1:"スクラムとウォータフォール",
  2:"著作権について学ぼう",
  3:"おいしいVSCodeのつくりかた",
  4:"GitHubで快適な開発環境を構築する"
};

// 選択したタグに応じてarrayを変える
let PostText;
if (tagname[data]) {
  PostText = eval(data + "Text");
} else {
  PostText = []; // タグが見つからない場合は空の配列を設定
}

// キーの数を取得
const numberOfKeys = Object.keys(poemText).length;

for (let i = 1; i <= numberOfKeys; i++) {
  console.log(i)
  const divElement = document.createElement('div'); // div要素を作成
  divElement.id = 'contents';
  // div要素をbody要素の子要素として追加
  document.body.appendChild(divElement);

  // 日付表示
  const aElement = document.createElement('a'); // a要素を作成
  aElement.textContent = "20XX/XX/XX 00:00:00";
  // a要素をdiv要素の子要素として追加
  divElement.appendChild(aElement);

  // タイトル表示
  const h1Element = document.createElement('h2'); // h2要素を作成
  h1Element.textContent = PostText[i];
  // h1要素をdiv要素の子要素として追加
  divElement.appendChild(h1Element);
  
  // タグ表示
  const liElement = document.createElement('li'); // li要素を作成
  liElement.textContent = tagname[data];
  // li要素をdiv要素の子要素として追加
  divElement.appendChild(liElement);
}

// タグをクリックしたらtagsearch.htmlへ遷移
const liTags = document.querySelectorAll('li'); // liタグを取得
for (const liTag of liTags) {
  liTag.addEventListener('click', function() {
    const text = this.textContent;
    window.location.href = 'tagsearch.html?data=' + text; // URLを組み立てる
  });
}
