for(var i=0;i<81;i++){
var tile = document.createElement('div');
var body = document.getElementsByTagName('body')[0];
document.body.prepend(tile);
tile.style.width = '11.1%';
tile.style.paddingBottom = '11.1%';
tile.display = 'float';
tile.style.float = 'left';
if(i%2 === 0){
tile.style.backgroundColor = 'black';
}

};

var doc = document.getElementsByTagName('body')[0];
doc.style.background = 'red';
