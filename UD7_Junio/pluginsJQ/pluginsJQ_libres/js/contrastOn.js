jQuery.fn.contrastOn = function (options) {
  let settings = $.extend(
    {
      filter: "contrast(50%)",
    },
    options
  );
  return this.css({
    filter: settings.filter,
  });
};