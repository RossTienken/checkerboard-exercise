for(var i=0;i<81;i++){
var tile = document.createElement('div');
var body = document.getElementsByTagName('body')[0];
var random = '#'+Math.random().toString(16).slice(-6);
document.body.prepend(tile);
tile.style.width = '11.1%';
tile.style.paddingBottom = '11.1%';
tile.display = 'float';
tile.style.float = 'left';
if(i%2 === 0){
tile.style.backgroundColor = random;
}
if(i%2 !== 0){
  tile.style.backgroundColor = random;
}
console.log(random)
};
