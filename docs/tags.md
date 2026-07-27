---
hide:
  - toc
---

# 标签索引

按模块、类型与领域浏览全部 Script API 页面。点击任意标签可查看归属该标签的所有条目。

<!-- material/tags -->

## 领域标签说明

| 标签 | 含义 |
|------|------|
| event | 事件信号/回调类（BeforeEvent / AfterEvent / EventSignal 等） |
| player | 玩家相关 |
| entity | 实体相关 |
| item | 物品 / 物品堆相关 |
| block | 方块 / 方块排列相关 |
| world | 世界（含 Before/After/Game 系列）相关 |
| dimension | 维度相关 |
| biome | 生物群系相关 |
| damage | 伤害 / 生命值相关 |
| inventory | 物品栏 / 容器相关 |
| scoreboard | 计分板相关 |
| chat | 原始消息 / 聊天相关 |
| permission | 权限 / OP 等级相关 |
| tick | 时序 / Tick 回调 / System 相关 |
| animation | 动画相关 |
| sound | 声音 / 音乐相关 |
| effect | 状态效果相关 |
| debug | 调试绘制（DebugDrawer 等）相关 |
| network | HTTP / WebSocket / 数据包相关 |
| data | 动态属性 / 持久存储相关 |
| error | 错误异常类 |
| component | 实体 / 物品 / 方块组件相关 |

> 标签由 `script/build.ts` 中的 `inferDomainTags` 基于符号名的 CamelCase 段自动生成；
> 新增规则时同时更新本表。
