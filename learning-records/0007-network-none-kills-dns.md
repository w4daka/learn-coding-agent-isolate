# net 切断で名前解決が死ぬことを観測

`--network none` で `getent hosts api.anthropic.com` が exit=2（解決失敗）、net ありで exit=0（IPv6 到達）。送信を閉じる代償＝pi（LLM API 依存）の死を目撃した。mission の送信脅威が具体化。

## Evidence
上記コマンド出力。exit code 対照（0 vs 2）。

## Implications
次は egress 絞り（API のみ許可）。IP 許可の脆さ（DNS で変わる）→ FQDN proxy の必然性を Lesson 0003 で扱う。
