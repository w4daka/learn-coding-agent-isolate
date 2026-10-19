# Docker で EROFS を観測・daemon error を切り分け

実験Aが予測通り（EROFS・exit=1・work 書込可）。実験Bは `your-pi-image` 不在で daemon が pull 拒否 — 叩き台の placeholder を置換しなかった人為ミス。container 内 error と daemon error の出所切り分けが課題として浮上。

## Implications
実験Bは archlinux:base で代替（net 有無での名前解決対照）。image 固有の話ではなく network 名前空間の話だと理解させればよい。
