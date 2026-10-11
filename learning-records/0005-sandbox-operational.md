# bwrap 檻が実用化 — LSP 復旧・非特権確定

npm・auth・settings・sessions の追加マウントで pi-lens LSP が復旧し、所有権数値対照で非特権起動が確定した。pi の日常運用を檻内で回せる状態に到達。mission の「権限不足の観測可能性」は EACCES/EROFS/ENOENT の3点セット＋trace 流儀として定着。

## Evidence
LSP 復旧の報告、uid_map 誤読訂正の一連。GLOSSARY に7語を昇格（脅威4＋機構3）。

## Implications
bwrap 回は上がり。残る脅威は送信（net 全開）。次は Docker 回（Lesson 0002 作成済み）で束の境界と egress 課題に進む。
