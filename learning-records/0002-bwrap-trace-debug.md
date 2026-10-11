# bwrap 起動エラーを trace で自力特定

ユーザーは `bwrap: --ro-bind takes two arguments` に対し、`cat`＋`bash -x` の証拠を揃えて報告した。trace から行継続 `\` の脱落を特定し、修正後は sandbox 内で pi が起動することを確認した（`pi-safe --help` が exit=0）。

## Evidence
`bash -x` 出力で `exec bwrap ... --ro-bind .../pi-node` で終わっていることの指摘→現物照合→1文字修正で解決。

## Implications
bwrap 引数エラーの読解は習得済みとして扱う。次は実行時エラー（EACCES/ENOENT）の締め上げに進める。`--ro-bind-try` の使い分け（pi-node 不在への対応）も定着した。
