var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

var WEIGHTS = [500, 700, 900];
var MAX_ROTATE = 20;
var MAX_SCALE = 1;
var MIN_SCALE = 0.5;
var IS_RANSOM = false;

var el = document.querySelector('.sketchy');
var text = el.innerText;
var spans = [];

/*var convertToSpans = function convertToSpans() {
    var words = text.split(' ');

    el.innerHTML = '';
    words.forEach(function (word) {
        var letters = word.split('').filter(function (letter) {return !!letter.trim().length;});
        var wordSpan = document.createElement('span');
        letters.forEach(function (letter) {
            var span = document.createElement('span');
            span.className = 'letter';
            span.innerText = letter;
            wordSpan.appendChild(span);
            spans.push(span);
        });
        el.appendChild(wordSpan);
    });
};

var sketchify = function sketchify() {
    var scaleDiff = MAX_SCALE - MIN_SCALE;
    spans.forEach(function (span) {
        var rotate = MAX_ROTATE * (Math.random() - Math.random());
        var scale = MIN_SCALE + scaleDiff * Math.random();
        if (IS_RANSOM) {
            span.style.fontWeight = WEIGHTS[Math.floor(WEIGHTS.length * Math.random())];
        }
        span.style.transform = 'rotate(' + rotate + 'deg) scale(' + scale + ')';
    });
};

convertToSpans();
sketchify();
