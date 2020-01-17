
/*
* game
* */

/*
* переменые
 */
var  startBlock  = document.querySelector('#startBlock');
var  startBtn = document.querySelector('#startBtn');
var  resetBlock = document.querySelector('#resetBlock');
var  resetBtn = document.querySelector('#resetBtn');

var start = false;

startBtn.onclick = function (event) {

     if (start == false){

         startBlock.style.display = 'none';
         resetBlock.style.display = '';
         start = true;
     }
}

resetBtn.onclick = function () {
    if (start == true){
        location.reload();
        start = false;
    }
}
