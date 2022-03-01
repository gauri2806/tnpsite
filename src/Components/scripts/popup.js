//Used by Why-us

var popbtns = document.querySelectorAll('.popup-open')
popbtns.forEach(function (btn) {
    btn.onclick = function () {
        var pop = btn.getAttribute('data-modal');
        document.getElementById(pop).style.display = 'inline-block';
    };
});

var closebtns = document.querySelectorAll('.popup-close-btn')
closebtns.forEach(function (btn) {
    btn.onclick = function () {
        var pop = (btn.closest(".popup").style.display = "none");
    };
});
