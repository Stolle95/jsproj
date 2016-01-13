var memory_array = ['cow','cow','pig','pig','chicken','chicken'];

Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard()
{
	memory_array.memory_tile_shuffle();
}
function check(pos1,pos2)
{

}
document.getElementById("memory").onclick=function(){
	console.log("asd");
};