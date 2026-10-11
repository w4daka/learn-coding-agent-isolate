# Mission: pi coding agent の隔離

## Why
pi にフルファイルアクセスを与えて開発速度を上げたいが、`rm -rf`級の破壊と `~/.ssh` 等の秘密鍵読み取り・外部送信が怖い。安全に全開で走らせるための隔離引き出しを持ちたい。

## Success looks like
- 脅威モデル（破壊・窃取・送信・汚染）を自分の言葉で説明できる
- 手段（専用ユーザー・ACL・bwrap・systemd sandbox・Docker・MicroVM）を条件で選べる
- pi を隔離下で走らせ、権限不足を exit code / `EACCES`・`EROFS`・audit ログで観測可能にできる

## Constraints
- Arch Linux (zen 7.2.9), 1日5時間
- sudo は人間のみ実行可、agent には付与しない
- Docker 可、bwrap・systemd-run 可（firejail / proot / podman 未導入）

## Out of scope
- なし。当面は隔離に関わるものは段階的に全部追う
