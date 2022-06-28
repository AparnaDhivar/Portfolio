jQuery(document).ready(function () {
    $('.blast').mousemove(function (e) {
        var rXP = (e.pageX - this.offsetLeft - $(this).width() / 2);
        var rYP = (e.pageY - this.offsetTop - $(this).height() / 2);
        $('h1').css('text-shadow', +rYP / 10 + 'px ' + rXP / 80 + 'px rgb(6, 132, 229), ' + rYP / 8 + 'px ' + rXP / 60 + 'px rgb(6, 21, 229), ' + rXP / 70 + 'px ' + rYP / 12 + 'px rgb(227, 6, 19)');
    });
});