# 概要

簡単なWebアプリケーションを作ってみる

# npmとは

Node.jsのライブラリやパッケージを管理する

# EJS

Node.jsを使ったサイトのコーディングを、jspのような感じにできるEJSというテンプレートエンジン。
ヘッダーやフッターなど、複数のWebページで共通で使われているコードをテンプレートとしてまとめることで、効率よく開発をすすめることができる。

## EJSのインストール

```sh
npm install ejs
```

## EJSの使い方

| type | 概要 |
|:---|:---|
| <%= キー名 %> | サーバーサイドでキー名に指定した値を書き出します。値にHTMLタグが含まれていた場合はエスケープします。 |
| <%- キー名 %> | サーバーサイドでキー名に指定した値を書き出します。値にHTMLタグが含まれていてもエスケープしません。 |
| <% 処理 %> | 記述された処理がレンダリングの際に実行されます。その処理はサーバーサイドで行われます。 |

### sample

```ejs:temp.ejs
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <title><%= title %></title>
</head>
<body>
  <ul>
      <!-- サーバーサイドで処理を繰り返してHTMLタグを複数回出力する -->
      <% for(var i = 0; i < 3; i++){ %>
    <li><%= i %></li>
    <% } %>
  </ul>
  <%- contents1 %>
  <%= contents2 %>
  <ol>  
    <!-- サーバーサイド(index.js)で用意した配列を繰り返し出力 -->
    <% arr.forEach(function(val) { %>
    <li><%= val %></li>
    <% }) %>
  </ol>
</body>
</html>

```

```javascript:index.js
var http = require('http');
var fs = require('fs');
//EJSを扱うためのオブジェクトを作成
var ejs = require('ejs');

var temp = fs.readFileSync('./temp.ejs', 'utf-8');

var server = http.createServer(function(req, res) {
  //EJSを使ったレンダリング処理
  //第一引数にテンプレート、第二引数に値を連想配列で指定
  var data = ejs.render(temp, {
    title: 'EJSのテスト',
    contents1: '<p>ここはエスケープされない</p>',
    contents2: '<p>ここはエスケープされる</p>',
    arr:['いちご', 'メロン', 'バナナ']
  });
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
});

server.listen(1234);
console.log('サーバを起動しました');
```




