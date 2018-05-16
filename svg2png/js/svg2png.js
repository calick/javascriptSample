// #svg1: ターゲットの svg 要素
var width = $("#svg1").width()
var height = $("#svg1").height()
$("body").append("<canvas id='canvas1' class='hidden' width="
                                  + width + " height=" + height +"></canvas>")

var canvas = $("#canvas1")[0]
var ctx = canvas.getContext("2d")

var svg = $("#svg1")
svg.attr("viewBox", "0 0 " + width + " " + height)

var data = new XMLSerializer().serializeToString(svg[0])
var imgsrc = "data:image/svg+xml;charset=utf-8;base64,"
                       + btoa(unescape(encodeURIComponent(data)))
var image = new Image()
image.onload = function(){

    ctx.drawImage(image, 0, 0);
    // Optional: 自動でダウンロードさせる場合
    $("body").append("<a id='image-file' class='hidden' type='application/octet-stream' href='"
                       + canvas.toDataURL("image/png") + "' download='sample1.png'>Donload Image</a>")
    $("#image-file")[0].click()

    // 後処理
    $("#canvas1").remove()
    $("#image-file").remove()

}
image.src = imgsrc;