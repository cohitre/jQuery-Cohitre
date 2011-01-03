(function ($) {

/*
 * Calls the callback on a jQuery object when
 * the page has loaded.
 * $.initialize(selector, callback, args...); 
 */
$.initialize = function (selector) {
  var args = $.makeArray(arguments).slice(1);
  $(function () {
    $.fn.doOnce.apply($(selector), args);
  });
};

/*
 * An easy way to create jQuery plugins without polluting
 * the jQuery namespace.
 * $(selector).doOnce(someFunction, arg1, arg2, ....);
 */
$.fn.doOnce = function (callback) {
  var args = $.makeArray(arguments).slice(1);
  this.length && callback.apply(this, args);
  return this;
};

/*
 * Empties the collection if the condition is not true.
 * An alternative to conditionals. 
 * $(selector).iff(a === 2)....;
 * $(selector).iff(function () { 
 *   return this.is(".happy"); 
 * }).....;
 */
$.fn.iff = function (condition) {
  if ($.isFunction(condition)) {
    condition = condition.apply(this, $.makeArray(arguments).slice(1));
  }
  return this.pushStack(condition ? this : []); 
};
 
})(jQuery);
