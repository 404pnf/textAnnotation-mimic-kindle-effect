
// usage:
// 1. mouse select text range to highlight
// 2. click on highlighted range to remove highlight
//
(function () {
    // rangy.init(); // init() by default?

    // highlight selected text range
    $('#yuedu').mouseup(function(e) {
        rangy.getSelection();
        rangy.createCssClassApplier('annotation').applyToSelection(); // 默认将选中内容用span裹起来
    });

    // remove hightlight
    // prevent nested hightlight
    $('#yuedu').delegate("span", "click mousedown", function (e) {
        var text = $(this).text();
        $(this).replaceWith(text);
    });

})();
