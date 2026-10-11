# pi 隔離 Resources

## Knowledge

- [Blog: Secure AI Coding Agents with Containers — Dillon Browne](https://www.dillonbrowne.com/blog/sandboxing-ai-coding-agents/)
  エージェントを用途別 ephemeral container で走らせる定番形。`--network none / --read-only / --cap-drop ALL / -v workspaceのみ` の雛形に使う。Lesson 0001 の推奨一次読物。
- [bubblewrap — GitHub: containers/bubblewrap](https://github.com/containers/bubblewrap)
  非特権で namespaces を使う低水準サンドボックスの一次資料。`--ro-bind / --bind / --unshare-all` の意味論はここが正。bwrap 系レッスンの正本。
- [Man page: bwrap (Debian / mankier)](https://manpages.debian.org/stretch/bubblewrap/bwrap.1.en.html)
  オプションリファレンス。`--dev / --proc / --tmpfs` の細部確認用。
- [Article: systemd Unit Hardening — systemshardening.com](https://www.systemshardening.com/articles/linux/systemd-unit-hardening/)
  `ProtectSystem / PrivateTmp / NoNewPrivileges / SystemCallFilter` など30超の directive の整理。systemd-sandbox レッスン用。
- [Man page: systemd.exec (freedesktop)](https://www.freedesktop.org/software/systemd/man/systemd.exec.html)
  上の正本。手元では `man systemd.exec` で同内容を引ける。
- [Article: AI Agent Sandboxing — OpenLegion](https://www.openlegion.ai/en/learn/ai-agent-sandboxing)
  container / MicroVM / 言語ランタイムの層別と escape CVE への注意。Docker-で十分かの判断材料。
- [Post: Docker Sandboxes for AI Coding Agents — mantbyte](https://mantbyte.github.io/tech/2026/08/10/docker-sandboxes-secure-ai-coding-agents.html)
  Docker Sandboxes（MicroVM 境界）の実験機能の解説。MicroVM 回の予習用。

## Wisdom (Communities)

- 未登録。ユーザーは段階的に追いたい意向のみ表明、community 参加の可否は未確認。
- 候補: Arch BBS / r/archlinux（bwrap・systemd 運用の実例）、Docker Community Forums（agent sandbox 構成例）。

## Gaps

- pi 固有の隔離公式ガイドが見当たらない。pi の実行形態（どのパス・env・network を要求するか）の一次資料が必要。
- firejail / proot は未導入環境のため、手元検証の裏付けなし。導入後に検証予定。
