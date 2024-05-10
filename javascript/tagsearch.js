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
var AWSGood = { // CSSの関係上4桁以上の数字は表示できないよ！
  1:132,
  2:32,
  3:423,
  4:2,
}
var AWSArticle = {
  1:"AWSのアカウントの作成を作成して、<br>ルートユーザーのアカウント設定して、<br>IAMユーザーの作成して、<br>なんやかんやで完了！",
  2:"AWSにPythonのプログラムをデプロイして<br>あんなことやらこんなことして<br>できました！",
  3:"皆さん、知っていますか？<br>実はAWSって美味しいんですよ！<br>今回はAWSの美味しい調理方法を伝授します！<br>【調理方法】<br>・黙って生で食えや",
  4:"AWSってすごいんですよ。<br>本当にすごい。<br>もうね、すごい。<br>「す」の「ごい」です。<br>ゴイゴイスーです。<br>ここで「スー」を差し上げます。"
};

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
var beginnerGood = { // CSSの関係上4桁以上の数字は表示できないよ！
  1:532,
  2:332,
  3:43,
  4:22,
}
var beginnerArticle = {
  1:"皆さん関数の名前で「namae」「nenrei」とか命名していませんか？<br>そういう人は今すぐやめましょう。<br>仕事減りますよ。",
  2:"プログラマー必見サイトを教えます。<br>1.Qiita<br>2.Zenn<br>3.X<br>4.Google<br>5.GitHub",
  3:"最近リモートワーク流行ってますよね。<br>働きやすくて出社なんてクソくらえって感じですよね。<br>気づけば仕事サボってますよね。<br>何してんだおめぇ。<br>バカやってねぇで働け。",
  4:"MarkDownをマスターすると、<br>READMEの時だけでなく、日々の仕事や生活の時にも役立ちます。<br>そこで、サッと使えるMarkDownのチートシートを作成しました！<br>作成するのやめました！"
};

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
var DockerGood = { // CSSの関係上4桁以上の数字は表示できないよ！
  1:5,
  2:32,
  3:3,
  4:42,
}
var DockerArticle = {
  1:"Dockerの公式ドキュメントって本当に分かりにくい。<br>ヴォイニッチ手稿の次くらいに読みづらい！<br>そこで今回は日本人向けにDockerの説明書を作成しました！<br><br>「Docker」の説明「どっか」行っちゃった笑",
  2:"開発していたら、環境構築が大変ですようね。<br>仮想環境を作るにしても動作が遅かったりしますよね。<br>その悩みDockerが解決します。",
  3:"Dockerのバージョン管理のやり方を伝授します。<br>コマンド実行したらできますよ",
  4:"Dockerすごい！<br>「す」の「ごい」！<br>ゴイゴイスー！<br>スーを差し上げます！"
};

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
var JavaScriptGood = { // CSSの関係上4桁以上の数字は表示できないよ！
  1:13,
  2:325,
  3:43,
  4:22,
}
var JavaScriptArticle = {
  1:"JavaScripとはJavaとは別物です。<br>JavaScriptをJavaと略さないようにしましょう。<br>JavaScriptをマスターすればwebサイト開発の幅が広がる！",
  2:"タイトルのとおりです。<br>「JavaScript」を「Java」と略すなというはなしです。<br>Javaと略す人は考えを改めましょう。",
  3:"JavaScript(Javaではない)を使っていると、変数宣言するときの名前に悩みますよね。<br>今回はJavaScript(Javaではない)での変数宣言について考えようと思います。",
  4:"最近TypeScriptが流行ってますよね。<br>今回はJavaScript(Javaではない)とTypeScriptを比較しようと思います。"
};

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
var JavaGood = { // CSSの関係上4桁以上の数字は表示できないよ！
  1:132,
  2:32,
  3:423,
  4:2,
}
var JavaArticle = {
  1:"Javaとはなんでしょう。<br>JavaとJavaScriptは別物です。<br>両社は全くの別物です。<br>「LiveScript」がJavaの知名度にあやかって、名前をパクったものがJavaScriptです。<br>つまり、JavaScriptをJavaと略す人は、JavaScript開発者の手のひらの上で踊らされているということですね。",
  2:"Javaにおいて「いいコード」とは何でしょうか<br>読みやすく、無駄がなく、保守しやすい。<br>そんなコードの書き方を今回は教えます。",
  3:"Javaは様々なシステムで採用されている言語です。<br>Javaをマスターすればシステムエンジニアへの道も見えてくるはずです。<br>今回はJavaの学習から仕事につなげるまでのロードマップを考えていこうと思います。",
  4:"タイトルのとおりです。<br>「JavaScript」を「Java」と略すなというはなしです。<br>Javaと略す人は「除籍」される可能性があります。"
};

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
var PHPGood = { // CSSの関係上4桁以上の数字は表示できないよ！
  1:333,
  2:324,
  3:123,
  4:23,
}
var PHPArticle = {
  1:"PHPの開発についての解説をシリーズ化していきます。<br>今回は応用編です。",
  2:"PHPの開発についての解説をシリーズ化していきます。<br>今回は基礎編2です。",
  3:"PHPの開発についての解説をシリーズ化していきます。<br>今回は基礎編1です。",
  4:"PHPの開発についての解説をシリーズ化していきます。<br>今回は環境構築編です。"
};

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
var poemGood = { // CSSの関係上4桁以上の数字は表示できないよ！
  1:112,
  2:323,
  3:323,
  4:123,
}
var poemArticle = {
  1:"今日はスクラムとウォータフォールの違いについて解説していくぜ<br>ゆっくりしていってね。",
  2:"「なんだこいつ おれのかおむだんてんのりするつもりかな？」<br>こんなこと言われない為にも、<br>著作権について学んでおく必要があると思います。",
  3:"VSCode美味い！<br>食ってみな飛ぶぞ",
  4:"チーム開発を快適にするためにはGitは必要不可欠です。<br>今回はGit管理の王道、GitHubの環境構築について説明していきます。"
};

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
var PythonGood = { // CSSの関係上4桁以上の数字は表示できないよ！
  1:134,
  2:12,
  3:23,
  4:21,
}
var PythonArticle = {
  1:"Pythonは楽しいです。<br>Pythonの楽しさを皆さんに共有したいと思います。",
  2:"Pythonは分かりやすく、学びやすい言語です。<br>今回は、プログラミング初心者にPythonを勧める記事です。",
  3:"Pythonおいしい。<br>うまいうまい。<br>おいしいなぁ",
  4:"ここがすごいPython！<br>型宣言しなくても変う数が使えるんだぞ！"
};

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
  // Good表示
  const GoodElement = document.createElement('p'); // <p id="good-number">を作成
  GoodElement.id = 'good-number';
  let PostGood = eval(data + "Good")
  GoodElement.textContent = PostGood[i];
  divElement.appendChild(GoodElement);
  const GoodIcon = '<svg id="good-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path></svg>';
  divElement.innerHTML += GoodIcon;
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

    // 本文設定
    tag0 = listText[0] // タグの1つ目から検索中のタグを調べる
    switch (tag0){ // タグ名が日本語の場合英名に置き換える
      case 'ポエム':
        tag0 = 'poem';
        break;
      case '初心者':
        tag0 = 'beginner';
        break;
      default:
        break;
    }
    titlelist = eval(tag0 + "Text"); // タグ名からタイトルの連想配列を作る
    text = eval(tag0 + "Article"); // タグ名から本文の配列を作る
    for (const key in titlelist) {
      if (titlelist[key] === h2Text) { // タイトルの配列キーを取得
        var articleText = text[key] // articleTextに本文を代入
      }
    }

    // いいね数設定
    goods = eval(tag0 + "Good");
    for (const key in titlelist) {
      if (titlelist[key] === h2Text) { // タイトルの配列キーを取得
        var goodcount = goods[key] // articleTextにgoodを代入
      }
    }

    window.location.href = 'article.html?title=' + h2Text + '&tag=' + tagtext + '&text=' + articleText + '&time=' + time + '&good=' + goodcount;
  });
}
