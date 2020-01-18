
const playAgain = function () {
    var playAgain = document.querySelectorAll('.play__again');

    for (let i = 0; i < playAgain.length; i++) {

        playAgain[i].onclick = function () {
                location.reload();
        }
    }
};

export default playAgain;