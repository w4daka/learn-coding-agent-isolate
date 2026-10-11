# uid_map を誤読した — 所有権数値が非特権を証明

`uid_map` の `1000 0 1` を「内1000↔外0＝sudo 起動」と断定したが誤りだった。`stat -c %u` の数値証拠：ホスト root 所有物（/usr/bin/*）→ 檻内 65534、ホスト w4daka 所有物（workspace）→ 檻内 1000。外側 UID 0 は写像外、すなわち起動は非特権で正しかった。ユーザーの主張が正で、俺の査読が誤だった。

## Evidence
`stat -c '%u %U %n'` の4点セット。名前（%U）ではなく数値（%u）で見たことが決め手。`id` の 1000 表示と `groups` 混入の nobody は、写像外 ID の overflow 表示という正常動作。

## Implications
- userns の検証は `uid_map` の目視ではなく所有権の数値対照で行う。以後の sandbox 点検の定番手順にする。
- LR-0003 の sudo 指摘は撤回。断定前の複数証拠対照を徹底する。
