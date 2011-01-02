(function ($) {

/*
 * $.initialize(selector, callback, args...); 
 */
$.initialize = function (selector) {
  var args = $.makeArray(arguments).slice(1);
  $(function () {
    $.fn.doOnce.apply($(selector), args);
  });
};

/*
 * $(selector).doOnce(someFunction, arg1, arg2, ....);
 */
$.fn.doOnce = function (callback) {
  var args = $.makeArray(arguments).slice(1);
  this.length && callback.apply(this, args);
  return this;
};
 
})(jQuery);
