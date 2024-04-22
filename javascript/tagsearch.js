// タグ検索画面のJS
const Tag = document.getElementById('Tag');
const urlParams = new URLSearchParams(window.location.search);
const data = urlParams.get('data');

// タグの表示テキスト
var tagname ={Python:"Python", Docker:"Docker", AWS:"AWS", poem:"ポエム"};

// URLパラメータから取得したデータからtagnameを表示
Tag.textContent = tagname[data];

// タグに応じて記事のテキストを変える
const PythonText = [
  "Pythonは楽しい",
  "Pythonはわかりやすい",
  "Pythonはおいしい",
  "Pythonのここがすごい",
];

const DockerText = [
  "Dockerのすゝめ",
  "Dockerが開発を変える！",
  "Dockerのバージョン管理",
  "Dockerすごいね",
];

const AWSText = [
  "AWSの始め方",
  "AWSでデータサイエンス",
  "AWSはおいしい",
  "AWSすごい",
];
  
const poemText = [
  "スクラムとウォータフォール",
  "著作権について学ぼう",
  "おいしいVSCodeのつくりかた",
  "GitHubで快適な開発環境を構築する",
];

// 選択したタグに応じてarrayを変える
let PostText;
PostText = eval(data + "Text");

PostText.forEach(content => {
  // div要素を作成
  const divElement = document.createElement('div');
  divElement.id = 'contents';
  // div要素をbody要素の子要素として追加
  document.body.appendChild(divElement);

  // a要素を作成
  const aElement = document.createElement('a');
  aElement.textContent = "20XX/XX/XX 00:00:00";
  // a要素をdiv要素の子要素として追加
  divElement.appendChild(aElement);

  // h1要素を作成
  const h1Element = document.createElement('h2');
  h1Element.textContent = content;
  // h1要素をdiv要素の子要素として追加
  divElement.appendChild(h1Element);
  
  // li要素を作成
  const liElement = document.createElement('li');
  liElement.textContent = data;
  // li要素をdiv要素の子要素として追加
  divElement.appendChild(liElement);
});
