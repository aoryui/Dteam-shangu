// タグ検索画面のJS

// ヘッダー
const button1 = document.getElementById('timeline');
const button2 = document.getElementById('question');
const button3 = document.getElementById('postbtn');

button1.addEventListener('click', () => {
    // ページ1に遷移
    window.location.href = 'timeline.html';
});

button2.addEventListener('click', () => {
    // ページ3に遷移
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

// URLから検索されたタグ名を受け取る
const Tag = document.getElementById('Tag');
const urlParams = new URLSearchParams(window.location.search);
let data = urlParams.get('tag');

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
var PythonTag1 = {1:"Python", 2:"AWS", 3:"機械学習", 4:"データサイエンス"}
var PythonTag2 = {1:"Python", 2:"RaspberryPi", 3:"電子工作"}
var PythonTag3 = {1:"Python", 2:"Ubuntu"}
var PythonTag4 = {1:"Python", 2:"Django", 3:"React", 4:"個人製作"}
var PythonTime1 = {1:"2024", 2:"04", 3:"30"}
var PythonTime2 = {1:"2024", 2:"04", 3:"26"}
var PythonTime3 = {1:"2024", 2:"04", 3:"07"}
var PythonTime4 = {1:"2024", 2:"03", 3:"28"}

var DockerText = {
  1:"Dockerのすゝめ",
  2:"Dockerが開発を変える！",
  3:"Dockerのバージョン管理",
  4:"Dockerすごいね"
};
var DockerTag1 = {1:"Docker", 2:"MySQL", 3:"Next.js"}
var DockerTag2 = {1:"Docker", 2:"AWS"}
var DockerTag3 = {1:"Docker", 2:"Python"}
var DockerTag4 = {1:"Docker", 2:"ポエム", 3:"初心者"}
var DockerTime1 = {1:"2024", 2:"04", 3:"30"}
var DockerTime2 = {1:"2024", 2:"04", 3:"26"}
var DockerTime3 = {1:"2024", 2:"04", 3:"07"}
var DockerTime4 = {1:"2024", 2:"03", 3:"28"}

var AWSText = {
  1:"AWSの始め方",
  2:"AWSでデータサイエンス",
  3:"AWSはおいしい",
  4:"AWSすごい"
};
var AWSTag1 = {1:"AWS", 2:"MySQL", 3:"Next.js"}
var AWSTag2 = {1:"AWS", 2:"Docker"}
var AWSTag3 = {1:"AWS", 2:"bedrock", 3:"claude"}
var AWSTag4 = {1:"AWS", 2:"CloudFront", 3:"S3"}
var AWSTime1 = {1:"2024", 2:"04", 3:"30"}
var AWSTime2 = {1:"2024", 2:"04", 3:"26"}
var AWSTime3 = {1:"2024", 2:"04", 3:"07"}
var AWSTime4 = {1:"2024", 2:"03", 3:"28"}
  
var poemText = {
  1:"スクラムとウォータフォール",
  2:"著作権について学ぼう",
  3:"おいしいVSCodeのつくりかた",
  4:"GitHubで快適な開発環境を構築する"
};
var poemTag1 = {1:"ポエム", 2:"初心者"}
var poemTag2 = {1:"ポエム", 2:"Python"}
var poemTag3 = {1:"ポエム", 2:"AWS"}
var poemTag4 = {1:"ポエム", 2:"DBMS", 3:"GCP"}
var poemTime1 = {1:"2024", 2:"04", 3:"30"}
var poemTime2 = {1:"2024", 2:"04", 3:"26"}
var poemTime3 = {1:"2024", 2:"04", 3:"07"}
var poemTime4 = {1:"2024", 2:"03", 3:"28"}

// 選択したタグに応じてarrayを変える
let PostText;
if (tagname[data]) {
  PostText = eval(data + "Text");
} else {
  PostText = []; // タグが見つからない場合は空の配列を設定
}

// キーの数を取得
const numberOfKeys = Object.keys(PostText).length;
// 中央コンテナの位置を取得
const contentsDiv = document.querySelector('.contents.center-contents');

for (let i = 1; i <= numberOfKeys; i++) {
  console.log(i)
  const divElement = document.createElement('div'); // div要素を作成
  divElement.id = 'contents';
  // div要素を中央コンテナの子要素として追加
  contentsDiv.appendChild(divElement);

  // 日付表示
  const aElement = document.createElement('a'); // a要素を作成
  timedata = eval(data + "Time" + i);
  const year = timedata[1];
  const month = timedata[2];
  const day = timedata[3];
  let timetext = year + "/" + month + "/" + day
  aElement.textContent = timetext;
  // a要素をdiv要素の子要素として追加
  divElement.appendChild(aElement);

  // タイトル表示
  const h1Element = document.createElement('h2'); // h2要素を作成
  h1Element.textContent = PostText[i];
  // h1要素をdiv要素の子要素として追加
  divElement.appendChild(h1Element);
  
  // タグ表示
  let dictionary = eval(data + "Tag" + i)
  for (const key in dictionary) {
    const liElement = document.createElement('li'); // li要素を作成
    liElement.textContent = dictionary[key];
    // li要素をdiv要素の子要素として追加
    divElement.appendChild(liElement);
  }
}

// タグをクリックしたらtagsearch.htmlへ遷移
const liTags = document.querySelectorAll('li'); // liタグを取得
for (const liTag of liTags) {
  liTag.addEventListener('click', function() {
    const text = this.textContent;
    window.location.href = 'tagsearch.html?tag=' + text; // URLを組み立てる
  });
}

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
