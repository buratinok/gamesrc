
//Получаем обекты, переменные счечика, булево значение
var $count = 0;
var $time = document.querySelector('.timer__hr');
var $timeMs = document.querySelector('.timer__mls');
var $timer = document.querySelector('#timer');
var $start = document.querySelector('.start');
var $split = document.querySelector('.split');
var $reset = document.querySelector('.reset');
var $info = document.querySelector('.info');
let $pause = false;
var $in, $hours, $minutes, $seconds, $mlseconds;
var isPause = false;

//на поле timer отслеживаем события
$timer.addEventListener('click', function (ev) {

    var $ev = ev.target;

    var $if = ($ev == $start) ? $start : ($ev == $split) ? $split : ($ev == $reset) ? $reset : '';

    switch ($if) {
        case $start:
            $startsTimer();
            $startPause();
            if (isPause == false) $splitTimer();
            break;
        case $split:
            $splitTimer();
            break;
        case $reset:
            $resetTimer();
            break;

    }

});

//функцыя добавления нуля если еньше 10
function plusNull(dt) {
    if (dt < 10) dt = '0' + dt;
    return dt;
}

//функцыя паузы таймера блокировка кнопок, изменение стилей
function $startPause() {

    if ($pause == true) {
        $start.innerHTML = 'Start';
        $start.style.backgroundColor = '';
        $reset.style.pointerEvents = '';
        $reset.style.color = '';
        $reset.style.backgroundColor = '';
        $split.style.pointerEvents = 'none';
        $split.style.color = '#505050';
        $split.style.backgroundColor = 'white';
        $pause = false;
        isPause = false;
    } else if ($pause == false) {
        $start.innerHTML = 'Pause';
        $start.style.backgroundColor = 'black';
        $reset.style.pointerEvents = 'none';
        $reset.style.color = '#505050';
        $reset.style.backgroundColor = 'white';
        $split.style.pointerEvents = '';
        $split.style.color = '';
        $split.style.backgroundColor = '';
        isPause = true;
        $pause = true;
    }
}

//функцыя запуска таймера setInterval
function $startsTimer() {
    if (isPause == false) {
    $in = setInterval(function () {
            $hours = plusNull(Math.floor((++$count / (1000 * 60 * 60)) % 24));
            $minutes = plusNull(Math.floor((++$count / 1000 / 60) % 60));
            $seconds = plusNull(Math.floor((++$count / 1000) % 60));
            $mlseconds =  plusNull(Math.floor(++$count % 1000));
            $time.innerHTML = `${$hours}:${$minutes}:${$seconds}.${('' + $mlseconds * 100).substr(0, 1)}`;
            $timeMs.innerHTML = `${('' + $mlseconds).slice(-2)}`;
        }, 1)}else if (isPause == true){
            clearInterval($in);
    }
}

//функцыя создание контрольной точки
function $splitTimer() {
    let $infoSplit = $time.innerHTML + $timeMs.innerHTML;
    let $slitElem = document.createElement('div');
    $slitElem.classList = 'info__split mt_1';
    $slitElem.innerHTML = $infoSplit;
    $info.appendChild($slitElem);
}

//функцыя очистки таймера и удаление данных контрольной точки
function $resetTimer() {
    var $infoSplit = document.querySelector('.info__split');
    $count = 0;
    $time.innerHTML = '00:00:00.0';
    $timeMs.innerHTML = '00';
    while ($info.firstChild){
        $info.removeChild($info.firstChild);
    }
    if(isPause ==false){
        $reset.style.pointerEvents = 'none';
        $reset.style.color = '#505050';
        $reset.style.backgroundColor = 'white';
    }else{
        $reset.style.pointerEvents = '';
        $reset.style.color = '';
        $reset.style.backgroundColor = '';
    }
}
