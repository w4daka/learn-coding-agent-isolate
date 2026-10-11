# NOTES.md

- 言語: 日本語・常体。迎合なし。
- sudo は人間のみ。agent（pi）に sudo を渡さない。レッスン内の実験はすべて非特権で完結させる。
- 手元検証済み: bwrap 0.13.0 / Docker 29.9.0 / systemd 262。firejail・proot・podman は未導入。
- `~/.ssh` に実鍵あり（id_ed25519）。レッスンの実験では必ず `/tmp/pi-isolate-lab/fake_secret` 等の偽物を使う。実鍵に触れない。
- Lesson 0001 は脅威モデル＋物差し＋EACCES/EROFS 観測実験まで。Docker 本格隔離は Lesson 0002 以降。
