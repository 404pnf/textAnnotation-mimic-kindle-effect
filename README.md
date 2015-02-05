

## 使用方法：

参考两个demo。鼠标选中的文字会变红，表示高亮。点一下变红的文字，就取消红色，表示取消高亮。

完全参考 https://github.com/neisbut/textAnnotator 内容。

我做了简化。

## 技术关键：

是rangy.js和rangy_cssapplier.js两个库。

我只是使用它们提供的帮助方法。

这两个库让我们可以用同一个方法获得鼠标已经选中的文字，且此方法是跨浏览器的。默认ie和非ie的原生方法还不一样。

