# 概要

Node.jsとは、Google V8 JavaScript Engine上で動作するサーバーサイドJavaScript環境  
Node.jsの大きな特長のひとつは「イベント駆動型言語」であるということ  
プログラムは起動すると同時にイベントを待機する状態となり、この「イベント駆動型」は、随時リクエストを受け付けるサーバープログラムを記述する上ではとても好都合  

Node.jsのイベント処理は「ノンブロッキング（非同期）IO」という方式をとっている。  

「通信の完了を待たずにどんどんリクエストを処理していく」  
一般的にはプロセスごとの通信がひと通り完了してから次のリクエストを処理しますが、Node.jsでは文字通り非同期にどんどんリクエストを受け付けていくため、サーバーの返答待ちが発生しない  

ex.   
Node.jsでWebサーバーを記述した場合、Apacheなどの一般的なWebサーバーに比べ、同規模ではるかに大量のリクエストをさばくことが可能

# 簡単なWebサーバの例  

同ディレクトリ内にあるwebserver.jsで起動してみよう。

# 起動例


```sh
node webserver.js
```

# 参考

https://engineer.recruit-lifestyle.co.jp/techblog/2015-06-22-node1/
