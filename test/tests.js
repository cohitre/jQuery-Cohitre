$.initialize(".green-1", function () {
   this.addClass('ok');
});

$.initialize(".red", function () {
  this
    .iff(this.is('.red'))
      .addClass('ok')
    .end()
    .iff(this.is('.green'))
      .addClass('error');
});

$(function () {
  function addClass2(klass) {
    this.addClass(klass); 
  }
  $(".green-2").doOnce(addClass2, 'ok');
})

$(".green-1, .green-2").addClass('ok');
