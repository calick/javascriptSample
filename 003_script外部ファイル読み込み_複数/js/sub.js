
function addtag(tagName){
    var info = document.getElementById('info');
    var h1Node = document.createElement(tagName);
    var textNode = document.createTextNode('Hello World');
    h1Node.appendChild(textNode);
    info.appendChild(h1Node);    
};

