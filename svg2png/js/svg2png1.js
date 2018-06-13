var OFF_SCREEN_CANVAS_ID = "svgOffScreeenRenderCanvas";
var OFF_SCREEN_CANVAS_CLASS = "svg-off-screen-render-canvas";

function saveToPngByCanvg(svgId, callback){
    var svg = document.getElementById(svgId);
    var svgStr = new XMLSerializer().serializeToString(svg);

    var canvas = document.getElementById(OFF_SCREEN_CANVAS_ID);
    if(!canvas){
        var svgW = svg.getAttribute('width');
        var svgH = svg.getAttribute('height');
        canvas = createOffScreenCanvas(svgW, svgH);
    }

    canvg(OFF_SCREEN_CANVAS_ID, svgStr, {
        renderCallback:function(data){
            if(callback){
                var data = canvas.toDataURL('image/png');
                callback(data);
            }
        }
    });
}

function createOffScreenCanvas(width, height){
    var newCanvas = document.createElement('canvas');
    newCanvas.setAttribute('id', OFF_SCREEN_CANVAS_ID);
    newCanvas.setAttribute('width', width);
    newCanvas.setAttribute('height', height);

    //styleの設定
    var style = newCanvas.style;
    style.position = 'absolute';
    style.left = '-9999px';
    style.top = '0px';

    newCanvas.classList.add(OFF_SCREEN_CANVAS_CLASS);
    document.querySelector('body').appendChild(newCanvas);
    return newCanvas;
}

window.onload = function(){
    document.getElementById('saveButton').addEventListener('click', function(){
        // saveToPngByCanvg('mysvg', function(data){
        svgToPngByNative('mysvg1', function(data){
            console.log('callback----');
            console.log(data);
            //ここからajaxでもfetchでも使ってサーバーにデータを送る
        });
    })
};

function svgToPngByNative(svgId, callback){
    var svg = document.getElementById(svgId);
    var svgStr = new XMLSerializer().serializeToString(svg);
    svgStr = encodeURIComponent(svgStr);
    var newImage = new Image();
    newImage.crossOrigin = "Anonymous";
    newImage.onload = function(){
        // var canvas = document.getElementById(OFF_SCREEN_CANVAS_ID);
        var canvas = document.getElementById("tutorial");
        if(!canvas){
            const svgW = svg.getAttribute('width');
            const svgH = svg.getAttribute('height');
            canvas = createOffScreenCanvas(svgW, svgH);
        }
        var ctx = canvas.getContext("2d");
        ctx.drawImage(newImage, 0, 0);
        $("body").append("<a id='image-file' class='hidden' type='application/octet-stream' href='"
        + canvas.toDataURL("image/png") + "' download='graph.png'>Donload Image</a>")
        $("#image-file")[0].click();

    };
    document.querySelector('body').appendChild(newImage);
    newImage.src = "data:image/svg+xml," + svgStr;
}
