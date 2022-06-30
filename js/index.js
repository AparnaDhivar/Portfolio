jQuery(document).ready(function () {
    $('.blast').hover(function (e) {
        var rXP = (e.pageX - this.offsetLeft - $(this).width() / 2);
        var rYP = (e.pageY - this.offsetTop - $(this).height() / 2);
        $('h1').css('text-shadow', +rYP / 20 + 'px ' + rXP / 160 + 'px rgb(6, 132, 229), ' + rYP / 25 + 'px ' + rXP / 120 + 'px rgb(6, 21, 229), ' + rXP / 140 + 'px ' + rYP / 30 + 'px rgb(227, 6, 19)');
    });

    $('.blast1').hover(function (e) {
        var rXP = (e.pageX - this.offsetLeft - $(this).width() / 2);
        var rYP = (e.pageY - this.offsetTop - $(this).height() / 2);
        $('.blast1').css('text-shadow', +rYP / 150 + 'px ' + rXP / 1000 + 'px rgb(6, 132, 229), ' + rYP / 250 + 'px ' + rXP / 1000 + 'px rgb(6, 21, 229), ' + rXP / 700 + 'px ' + rYP / 250 + 'px rgb(227, 6, 19)');
    });
   
});

const spans = document.querySelectorAll('.word span');
spans.forEach((span, idx) => {
  span.addEventListener('click', (e) => {
    e.target.classList.add('active');
  });
  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
  });
  
  // Initial animation
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx+1))
});

