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



// URLから検索されたタグ名を受け取る
const Tag = document.getElementById('Tag');
const urlParams = new URLSearchParams(window.location.search);
let data = urlParams.get('tag');

// タグが日本語の場合英語に置き換える
switch (data){
  case 'ポエム':
    data = 'poem';
    break;
  case '初心者':
    data = 'beginner';
    break;
  default:
    break;
}

// 置き換えたdataをTag要素に反映
Tag.textContent = data;

// タグの表示テキスト
var tagname = {AWS:"AWS", beginner:"初心者", Docker:"Docker", Java:"Java", JavaScript:"JavaScript", PHP:"PHP", poem:"ポエム", Python:"Python"};

// URLパラメータから取得したデータからtagnameを表示
if (tagname[data]) {
  Tag.textContent = tagname[data];
} else {
  Tag.textContent = "お探しのタグは見つかりませんでした"; // tagnameに無い場合
}

// タグに応じて記事のテキストを変える
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

var beginnerText = {
  1:"命名規則を決めちゃおう",
  2:"プログラマー必見の神サイト",
  3:"リモートワークの罠",
  4:"MarkDownチートシート"
};
var beginnerTag1 = {1:"初心者", 2:"プログラミング",}
var beginnerTag2 = {1:"初心者", 2:"独学", 3:"プログラミング"}
var beginnerTag3 = {1:"初心者", 2:"転職"}
var beginnerTag4 = {1:"初心者", 2:"MarkDown"}
var beginnerTime1 = {1:"2024", 2:"04", 3:"10"}
var beginnerTime2 = {1:"2024", 2:"03", 3:"29"}
var beginnerTime3 = {1:"2024", 2:"02", 3:"18"}
var beginnerTime4 = {1:"2024", 2:"01", 3:"28"}

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

var JavaScriptText = {
  1:"【JavaScript】JavaScriptとは",
  2:"「JavaScript」を「Java」と略すな",
  3:"JavaScript 変数宣言について",
  4:"JavaScript vs TypeScript"
};
var JavaScriptTag1 = {1:"JavaScript", 2:"Web開発", 3:"初心者"}
var JavaScriptTag2 = {1:"JavaScript", 2:"Java",3:"ポエム"}
var JavaScriptTag3 = {1:"JavaScript", 2:"変数宣言", 3:"初心者"}
var JavaScriptTag4 = {1:"JavaScript", 2:"TypeScript"}
var JavaScriptTime1 = {1:"2024", 2:"04", 3:"30"}
var JavaScriptTime2 = {1:"2024", 2:"04", 3:"26"}
var JavaScriptTime3 = {1:"2024", 2:"04", 3:"07"}
var JavaScriptTime4 = {1:"2024", 2:"03", 3:"28"}

var JavaText = {
  1:"【Java】Javaとは",
  2:"いいコードの書き方(Java編)",
  3:"Javaエンジニアへの道",
  4:"「JavaScript」を「Java」と略すな"
};
var JavaTag1 = {1:"Java", 2:"Web開発", 3:"初心者"}
var JavaTag2 = {1:"Java", 2:"初心者"}
var JavaTag3 = {1:"Java", 2:"転職", 3:"新卒"}
var JavaTag4 = {1:"JavaScript", 2:"Java",3:"ポエム"}
var JavaTime1 = {1:"2024", 2:"04", 3:"30"}
var JavaTime2 = {1:"2024", 2:"04", 3:"26"}
var JavaTime3 = {1:"2024", 2:"04", 3:"07"}
var JavaTime4 = {1:"2024", 2:"03", 3:"28"}

var PHPText = {
  1:"PHPのすすめ(応用編)",
  2:"PHPのすすめ(基本編2)",
  3:"PHPのすすめ(基本編1)",
  4:"PHPのすすめ(環境構築)"
};
var PHPTag1 = {1:"PHP", 2:"初心者", 3:"AWS", 4:"MySQL"}
var PHPTag2 = {1:"PHP", 2:"初心者", 3:"XAMPP", 4:"MySQL"}
var PHPTag3 = {1:"PHP", 2:"初心者", 3:"XAMPP"}
var PHPTag4 = {1:"PHP", 2:"初心者", 3:"XAMPP"}
var PHPTime1 = {1:"2024", 2:"04", 3:"10"}
var PHPTime2 = {1:"2024", 2:"03", 3:"29"}
var PHPTime3 = {1:"2024", 2:"02", 3:"18"}
var PHPTime4 = {1:"2024", 2:"01", 3:"28"}

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

// 検索フォーム
const select = document.getElementById('lang');
  const submitButton = document.getElementById('sort');
  submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // デフォルトの送信動作をキャンセル
    const selectedOption = select.options[select.selectedIndex];
    const selectedValue = selectedOption.value;
    const url = 'tagsearch.html?tag=' + selectedValue;
    window.location.href = url;
});

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
