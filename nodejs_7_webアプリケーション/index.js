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
