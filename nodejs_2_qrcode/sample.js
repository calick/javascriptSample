console.log("---- variable sample ----")

var message1 = require( './module_sample' ); // 同一ディレクトリのモジュール呼び出し
var message2 = require( './modules/module_sample2' ); // 異なるディレクトリのモジュール呼び出し

console.log(message1);
console.log(message2);

console.log("---- object sample ----")

var moduleObject = require( './modules/module_object' );

// 代入した数の2乗を表示
console.log( moduleObject.square( 5 ) );

// 代入した文字列が整形された結果を表示する
console.log( moduleObject.formatText( "this is TEST." ) );

console.log("---- public module sample ----")

// コンソールにQRコードを出力するツール。背景が黒以外だとQRコードとして認識しないことがあるらしい（Windows10 コマンドプロンプトでは正常に動作した）
// 事前に以下のモジュールを「npm install」しておくこと
// npm install qrcode-console 

var qrcode = require( 'qrcode-console' );

console.log( "\n\n\n\n" ); // 認識しやすいように余白を追加

qrcode.generate( 'TEST' ); // QRコードを生成

console.log( "\n\n\n\n" ); // 認識しやすいように余白を追加


