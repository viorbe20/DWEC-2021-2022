jQuery.fn.greyOn = function (options) {
  let settings = $.extend(
    {
      filter: "grayscale(50%)",
    },
    options
  );
  return this.css({
    filter: settings.filter,
  });
};