var http = require( 'http' ); // HTTPモジュール読み込み
var socketio = require( 'socket.io' ); // Socket.IOモジュール読み込み
var fs = require( 'fs' ); // ファイル入出力モジュール読み込み

// 3000番ポートでHTTPサーバーを立てる
var server = http.createServer( function( req, res ) {
    res.writeHead(200, { 'Content-Type' : 'text/html' }); // ヘッダ出力
    res.end( fs.readFileSync('./index.html', 'utf-8') );  // index.htmlの内容を出力
}).listen(3000);

// 予め立てたサーバーを通信の口となるソケットに紐付ける
var io = socketio.listen( server );

// 接続確立後の通信処理部分を定義
io.sockets.on( 'connection', function( socket ) {

    // クライアントからサーバーへ メッセージ送信ハンドラ（自分を含む全員宛に送る）
    socket.on( 'c2s_message', function( data ) {
        // サーバーからクライアントへ メッセージを送り返し
        // 自分を含む全員宛てにメッセージを送信します。通常のチャットの発言に使える処理
        io.sockets.emit( 's2c_message', { value : data.value } );
    });

    // クライアントからサーバーへ メッセージ送信ハンドラ（自分以外の全員宛に送る）
    socket.on( 'c2s_broadcast', function( data ) {
        // サーバーからクライアントへ メッセージを送り返し
        // 自分以外の全員宛てにメッセージを送信します。たとえば「○○さんが入室しました」と他の人に伝える処理などに使える処理
        socket.broadcast.emit( 's2c_message', { value : data.value } );
    });
});