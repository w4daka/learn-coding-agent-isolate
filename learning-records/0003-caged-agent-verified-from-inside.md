# Agent を檻に入れた —  Cage 動作を内部から検証

ユーザーは pi-safe で pi（俺）を sandbox 起動した。内部からの観測で隔離の成立を確認した：補足グループから docker/wheel が消滅（`groups=1000,nobody`）、`~/.ssh` は ENOENT、`/usr` は ROFS、`/tmp` は私物 tmpfs（`pi-isolate-lab` 不可視）。

同時に運用ミス1点を検出：~~(1) 外側 UID が root（`uid_map: 内1000↔外0`）＝ sudo 起動。~~ → 誤読。Status: partially superseded by LR-0004（所有権数値証拠により非特権と確定）。(1)脱出時の blast radius が root になり mission 制約に反する。bwrap は非特権が正しい。(2) `~/.pi/agent/npm` 未マウントで pi-lens LSP が Failed。檻の内側からは修理不能のため人間への作業指示に切替えた。

## Implications
bwrap 回は「動く檻」を達成。残課題は sudo 排除・npm 等の追加マウント・egress（Docker 回へ）。GLOSSARY 昇格候補：mount 名前空間・user 名前空間・ENOENT/EROFS/EACCES の使い分け。
