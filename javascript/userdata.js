// ユーザーデータを保存するJavaScript
var emaildic = { //メールアドレス
    0:"kd0@st.kobedenshi.ac.jp",
    1:"kd1@st.kobedenshi.ac.jp",
    2:"kd2@st.kobedenshi.ac.jp",
    3:"kd3@st.kobedenshi.ac.jp"
}

var passdic = { // パスワード
    0:"0000",
    1:"1111",
    2:"2222",
    3:"3333"
}

var userimg = { // 画像
    0:"image/しいたけ.jpg",
    1:"image/一郎.jpg",
    2:"image/二郎.jpg",
    3:"image/noimage.jpg"
}

var nickname = { // ニックネーム
    0:"に　たけしい",
    1:"いちろう",
    2:"ジロウ",
    3:"サブロー"
}

var realname = { // 本名
    0:"弐　　茸椎",
    1:"山口一郎",
    2:"拉麺二郎",
    3:"太平三郎"
}

var tag0 = { // タグ ユーザー1
    1:"Python",
    2:"AWS",
    3:"GCP",
    4:"Java",
    5:"React",
    6:"hono",
    7:"Dart",
    8:"Flutter",
    9:"Swift",
    10:"AR"
}


var tag1 = { // タグ ユーザー1
    1:"Python",
    2:"AWS",
    3:"GCP",
    4:"Java",
    5:"React",
    6:"hono",
    7:"Dart",
    8:"Flutter",
    9:"Swift",
    10:"AR"
}

var tag2 = { // タグ ユーザー2
    1:"Java",
    2:"JavaScript",
    3:"React",
    4:"C",
    5:"MySQL",
    6:"UnrealEngine",
    7:"Unity",
    8:"ポエム",
    9:"AWS",
    10:"WinSCP",
    11:"PowerShell"
}

var tag3 = { // タグ ユーザー3
    
}

var PostText = {
    1:"AWSの始め方",
    2:"Dockerが開発を変える！",
    3:"初めてプログラミング言語を学ぶ方に、初心者におすすめな言語を目的別に解説！",
    4:"ブランチ・マージの解説",
    5:"C#で作成をサポートするオススメのツールを教えます！",
    6:"C言語のススメ！",
    7:"Pythonの環境構築について"
};
var PostTag1 = {1:"AWS"}
var PostTag2 = {1:"Docker"}
var PostTag3 = {1:"初心者"}
var PostTag4 = {1:"GitHub"}
var PostTag5 = {1:"C#"}
var PostTag6 = {1:"C"}
var PostTag7 = {1:"Python"}
var PostTime1 = {1:"2024", 2:"04", 3:"22"}
var PostTime2 = {1:"2024", 2:"03", 3:"19"}
var PostTime3 = {1:"2024", 2:"03", 3:"03"}
var PostTime4 = {1:"2024", 2:"03", 3:"02"}
var PostTime5 = {1:"2024", 2:"02", 3:"29"}
var PostTime6 = {1:"2024", 2:"02", 3:"28"}
var PostTime7 = {1:"2024", 2:"02", 3:"20"}
var PostGood = { // CSSの関係上4桁以上の数字は表示できないよ！
1:524,
2:21,
3:232,
4:542,
5:542,
6:3,
7:242,
}
var PostArticle = {
1:"AWSのアカウントの作成を作成して、<br>ルートユーザーのアカウント設定して、<br>IAMユーザーの作成して、<br>なんやかんやで完了！",
2:"開発していたら、環境構築が大変ですようね。<br>仮想環境を作るにしても動作が遅かったりしますよね。<br>その悩みDockerが解決します。",
3:"初心者におすすめの言語を目的別に紹介します。<br>・初心者<br>Python<br>・Web開発<br>HTML,CSS,JavaScript",
4:"ブランチ・マージの解説をします。<br>ブランチ発行してあーだこーだ",
5:"C#の開発ツールがVisualStudioだけだと思っていませんか？<br>今回はC#で開発をサポートするツールを共有します。",
6:"Cの学習はざせつするものです。<br>この記事はモチベーションを維持しながら学ぶ方法を共有します。",
7:"Pythonの環境構築について解説します。<br>Pythonのサイトからダウンロードして、<br>環境変数設定して、<br>完成！",
};

var QuestionText = {
    1:"Pythonのimportとfromの違いがわかりません。",
    2:"JavaとJavaScriptってなにか関係あるんですか？",
    3:"Cの「#include <stdio.h>」ってなにしてるの？",
    4:"HTMLの<br>と<p>の使い分けがわかりません。",
    5:"Flutterの画面遷移の実装が出来ません。",
    6:"Rstudioのバージョンアップでpackageが使えなくなってしまいました。",
    7:"環境変数を設定したのにPythonが使えないです。"
};

var AnswerText = {
    1:"モジュールの全体を利用するのがimportで、 モジュールの一部(変数や関数だと思ってください。)を利用するのがfromです。",
    2:"JavaScriptがJavaの名前を真似しただけで、関係はないです。",
    3:"printfとかに使うヘッダーファイルを読み込むやつです。",
    4:"brは改行、pは段落です。",
    5:"Navigatorを使えばいいんじゃないかな。",
    6:"パッケージ名に間違いはありませんか?",
    7:"ディレクトリ合ってますか？"
};
var AnswerTextQuestion = {
    1:"Pythonのimportとfromの違いがわかりません。",
    2:"JavaとJavaScriptってなにか関係あるんですか？",
    3:"Cの「#include <stdio.h>」ってなにしてるの？",
    4:"HTMLの<br>と<p>の使い分けがわかりません。",
    5:"Flutterの画面遷移の実装が出来ません。",
    6:"Rstudioのバージョンアップでpackageが使えなくなってしまいました。",
    7:"環境変数を設定したのにPythonが使えないです。"
};

var AnswerTime1 = {1:"2024", 2:"04", 3:"22"}
var AnswerTime2 = {1:"2024", 2:"03", 3:"19"}
var AnswerTime3 = {1:"2024", 2:"03", 3:"03"}
var AnswerTime4 = {1:"2024", 2:"03", 3:"02"}
var AnswerTime5 = {1:"2024", 2:"02", 3:"29"}
var AnswerTime6 = {1:"2024", 2:"02", 3:"28"}
var AnswerTime7 = {1:"2024", 2:"02", 3:"20"}
