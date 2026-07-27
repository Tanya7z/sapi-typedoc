---
hide:
  - toc
  - path
---

# 术语与译名变更日志

记录本项目每次**术语译名变更**的决策、依据与原文链接，便于追溯与审查。

> 本文档与 [abbreviations.md][abbr] 同步维护：abbreviations 是当前生效的悬停提示词表，
> 本日志是修订历史。**新增 / 修改译名时须同时更新两边**。

## 格式约定

| 字段 | 含义 |
|------|------|
| 日期 | 修订日期（ISO 8601） |
| 原文 | API 中使用的英文单词或类名 |
| 原译法 | 修订前的中文译名（如曾不正确） |
| 新译法 | 修订后采用的中文译名 |
| 类别 | `机制名` / `API 类名` / `概念术语` / `官方特性` / `引擎术语` |
| 依据 | wiki 链接 / 官方文档链接 / 内部约定 |
| 影响范围 | 受影响的 translate-pieces/ 文件 |

## 变更记录

### 2026-07-27 · Vibrant Visuals 译名统一

| 字段 | 值 |
|------|-----|
| 原文 | Vibrant Visuals |
| 原译法 | 「生动视觉」(31 处)、「绚丽视界」(1 处) |
| 新译法 | 「灵动视效」(共 32 处) |
| 类别 | 官方特性 |
| 依据 | [Minecraft 官方文章（中文）](https://www.minecraft.net/zh-hans/article/vibrant-visuals-java-edition)、[MiaowCham/Vibrant-Visuals-Optimization 资源包描述](https://github.com/MiaowCham/Vibrant-Visuals-Optimization)（GitHub 生态命名） |
| 影响范围 | `translate-pieces/server-graphics/classes/BiomeAtmospherics.d.ts`、`BiomeColorGrading.d.ts`、`BiomeLighting.d.ts`、`BiomeWater.d.ts`、`functions/getBiomeAtmospherics.d.ts`、`getBiomeColorGrading.d.ts`、`getBiomeLighting.d.ts`、`getBiomeWater.d.ts`、`getPlayerAtmospherics.d.ts`、`getPlayerColorGrading.d.ts`、`getPlayerLighting.d.ts`、`getPlayerWater.d.ts` |

### 2026-07-27 · 通用术语译名标准化

| 字段 | 值 |
|------|-----|
| 原文 | fallDistance |
| 原译法 | 「坠落距离」 |
| 新译法 | 「摔落距离」 |
| 类别 | 机制名 |
| 依据 | [中文 Minecraft Wiki · 摔落](https://minecraft.fandom.com/zh/wiki/%E6%91%94%E8%90%BD)（中文 Wiki 标准译法为「摔落伤害」，而非「坠落」） |
| 影响范围 | `translate-pieces/server/classes/Entity.d.ts`、`BlockComponentEntityFallOnEvent.d.ts`、`enums/EntityDamageCause.d.ts`、`enums/GameRule.d.ts` |

### 2026-07-27 · 活塞/红石/耐久术语标准化

| 字段 | 值 |
|------|-----|
| 原文 | expanding / retracting (piston) |
| 原译法 | 「扩展或收缩」、「扩展或缩回」、「伸出或收回」(各文件不一致) |
| 新译法 | 「伸出或缩回」 |
| 类别 | 机制名 |
| 依据 | [中文 Minecraft Wiki · 活塞](https://zh.minecraft.wiki/w/%E6%B4%BB%E5%A1%9E) 区分「伸出」（expending）与「缩回」（retracting）；与英文 `expanding/retracting` 对应 |
| 影响范围 | `BlockPistonComponent.d.ts`、`PistonActivateAfterEvent.d.ts`、`PistonActivateAfterEventSignal.d.ts`、`WorldAfterEvents.d.ts`、`enums/BlockPistonState.d.ts` |

| 字段 | 值 |
|------|-----|
| 原文 | redstone power / redstone energy |
| 原译法 | 「红石能量」「红石能量强度」「输出功率」 |
| 新译法 | 「红石信号强度」 |
| 类别 | 概念术语 |
| 依据 | [中文 Minecraft Wiki · 红石电路](https://zh.minecraft.wiki/w/%E7%BA%A2%E7%9F%B3%E7%94%B5%E8%B7%AF) 规范用「信号强度」表述 redstone power；不再使用「能量」「功率」 |
| 影响范围 | `Block.d.ts`、`BlockRedstoneProducerComponent.d.ts`、`BlockComponentRedstoneUpdateEvent.d.ts`、`PressurePlatePopAfterEvent.d.ts`、`PressurePlatePushAfterEvent.d.ts`、`TargetBlockHitAfterEvent.d.ts`、`interfaces/BlockCustomComponent.d.ts`、`server-gametest/classes/Test.d.ts` |

| 字段 | 值 |
|------|-----|
| 原文 | durability damage |
| 原译法 | 「耐久组件」描述用「受到损坏」「当前损坏值」 |
| 新译法 | 「耐久组件」描述用「损耗耐久」「当前损耗值」 |
| 类别 | 概念术语 |
| 依据 | [中文 Minecraft Wiki · 耐久](https://zh.minecraft.wiki/w/%E8%80%90%E4%BC%90)：损耗（durability loss）指已损耗量，不要理解为「伤害」 |
| 影响范围 | `ItemDurabilityComponent.d.ts` |

### 2026-07-27 · 补完漏译 JSDoc 段

| 字段 | 值 |
|------|-----|
| 原文 | class-level descriptions of `LeverActionAfterEvent` / `PistonActivateAfterEvent` / `PressurePlatePopAfterEvent` |
| 原译法 | 第一行已译，第二/三行漏译（"changes to a lever activating or deactivating" 等仍为英文） |
| 新译法 | 补完中文叙述：去掉冗余的「变化」一词使句意通顺 |
| 类别 | 内部约定 |
| 依据 | 翻译纪律：双语段必须中英全部翻译，原文第二、三行属 JSDoc 同段 |
| 影响范围 | `LeverActionAfterEvent.d.ts`、`PistonActivateAfterEvent.d.ts`、`PressurePlatePopAfterEvent.d.ts` |

### 2026-07-27 · `PlayerCancelBreakingBlockAfterEvent` 句式修正

| 字段 | 值 |
|------|-----|
| 原文 | "包含玩家取消破坏方块后的事件相关信息" |
| 原译法 | 表述冗长且读不通 |
| 新译法 | 「包含玩家取消方块破坏时触发事件的相关信息」 |
| 类别 | 句式修正 |
| 依据 | 句意清晰：触发时机=「玩家取消方块破坏」 |
| 影响范围 | `PlayerCancelBreakingBlockAfterEvent.d.ts` |

### 2026-07-27 · 压力板/击中/角点术语精确化

| 字段 | 值 |
|------|-----|
| 原文 | pressure plate push |
| 原译法 | 「压力板按下」 |
| 新译法 | 「压力板触发」 |
| 类别 | 机制名 |
| 依据 | [中文 Minecraft Wiki · 压力板](https://zh.minecraft.wiki/w/%E5%8E%8B%E5%8A%9B%E6%9D%BF)：压力板被踩下进入「激活」状态的标准说法为「触发」 |
| 影响范围 | `PressurePlatePushAfterEvent.d.ts`、`PressurePlatePushAfterEventSignal.d.ts` |

| 字段 | 值 |
|------|-----|
| 原文 | pressure plate pop |
| 原译法 | 「压力板弹起」 |
| 新译法 | 「压力板复位」 |
| 类别 | 机制名 |
| 依据 | 同上：实体离开后压力板恢复原状的标准说法为「复位」（英文 `pop`） |
| 影响范围 | `PressurePlatePopAfterEvent.d.ts`、`PressurePlatePopAfterEventSignal.d.ts` |

| 字段 | 值 |
|------|-----|
| 原文 | entity hits a block/entity |
| 原译法 | 「实体撞击方块 / 撞击另一个实体」 |
| 新译法 | 「实体击中方块 / 击中另一个实体」 |
| 类别 | 事件语义 |
| 依据 | `EntityHitBlockAfterEvent` / `EntityHitEntityAfterEvent`：SAPI 文档 `hitting` 标准译为「击中」（而非「撞击」） |
| 影响范围 | `EntityHitBlockAfterEvent.d.ts`、`EntityHitBlockAfterEventSignal.d.ts`、`EntityHitEntityAfterEvent.d.ts`、`EntityHitEntityAfterEventSignal.d.ts` |

| 字段 | 值 |
|------|-----|
| 原文 | corner (of bounding box) |
| 原译法 | 「角落」 |
| 新译法 | 「角点」 |
| 类别 | 几何术语 |
| 依据 | AABB 学术标准用「角点」表述 bounding box 顶点；游戏开发文档亦统一使用「角点」（UI 角落除外） |
| 影响范围 | `BlockBoundingBoxUtils.d.ts`、`BlockVolume.d.ts`、`BlockVolumeBase.d.ts`、`TickingAreaOptions.d.ts` |

| 字段 | 值 |
|------|-----|
| 原文 | subject (of an event) |
| 原译法 | 「事件主题方块」 |
| 新译法 | 「事件主体方块」 |
| 类别 | 概念术语 |
| 依据 | subject 在事件语义里的标准译法为「主体」（subject-of relation） |
| 影响范围 | `translate-pieces/server/classes/BlockEvent.d.ts` |

| 字段 | 值 |
|------|-----|
| 原文 | Actor |
| 原译法 | 「导致破坏的 Actor」 |
| 新译法 | 「导致破坏的 Actor（引擎对象）」 |
| 类别 | 引擎术语 |
| 依据 | `Actor` 是 Mojang 引擎层术语，不译；Script API 对应 `Entity`；加注释帮助读者理解 |
| 影响范围 | `translate-pieces/server/classes/BlockComponentBlockBreakEvent.d.ts` |

| 字段 | 值 |
|------|-----|
| 原文 | BlockPermutation（概念用法） |
| 原译法 | 「派生 BlockPermutation」、「BlockPermutation 对象」 |
| 新译法 | 「派生方块排列」、「方块排列对象」 |
| 类别 | API 类名 |
| 依据 | 基岩版 Script API 用 `BlockPermutation` 表示一个方块的具体形态（含全部状态值）；与 Java 版 `BlockState` 同义但 API 模型不同。中文 Bedrock 社区标准译名为「方块排列」 |
| 保留 | 类定义 `export class BlockPermutation` 与类型签名 `): BlockPermutation` 不译（API 标识符） |
| 影响范围 | `translate-pieces/server/classes/BlockPermutation.d.ts` |

| 字段 | 值 |
|------|-----|
| 原文 | location（类型 Vector3） |
| 原译法 | 「距离位置最近/最远」 |
| 新译法 | 「距离坐标最近/最远」 |
| 类别 | 概念术语 |
| 依据 | Minecraft Wiki 与游戏内 UI 统一使用「坐标」表述三维位置（`Vector3`） |
| 影响范围 | `translate-pieces/server/interfaces/BlockQueryOptions.d.ts` |

### 2026-07-27 · 领域标签自动注入

| 字段 | 值 |
|------|-----|
| 原文 | （构造项） |
| 原译法 | tags 仅为「模块 + 类型」 |
| 新译法 | 22 个领域标签自动注入：event / player / entity / item / block / world / dimension / biome / damage / inventory / scoreboard / chat / permission / tick / animation / sound / effect / debug / network / data / error / component |
| 类别 | 内部约定 |
| 依据 | 基于类名 CamelCase 段的启发式推断（`script/build.ts · inferDomainTags`） |
| 影响范围 | 所有 API 成员页 front matter；访客可在 [标签索引页](tags.md) 按维度浏览 |

### 2026-07-27 · BlockVolume 类描述润色

| 字段 | 值 |
|------|-----|
| 原文 | `BlockVolume` 类 JSDoc |
| 原译法 | 「是一个简单的接口对象」+「想象一下」等冗长口吻 |
| 新译法 | 「是一个简单对象，描述世界中位于方块坐标处的给定大小（以方块计）的 3D 矩形区域」+「类比编辑器中分配角点的场景」 |
| 类别 | 句式精炼 |
| 依据 | 文档应避免「想象一下」「注意这些并不等同于」等冗词；改用「位于方块坐标处」「按方块计数」等准确表述 |
| 影响范围 | `BlockVolume.d.ts` |

### 2026-07-27 · inserted into 漏译补完

| 字段 | 值 |
|------|-----|
| 原文 | "Array of block locations to be inserted into container" |
| 原译法 | 上一行已译「要插入容器的方块位置数组」，但英文原文未补 |
| 新译法 | 「要添加到容器中的方块位置数组」+ 「雾设置被插入到堆栈后所在位置的从零开始索引」 |
| 类别 | 漏译补完 |
| 依据 | 翻译纪律：双语段必须中英全部翻译 |
| 影响范围 | `ListBlockVolume.d.ts`、`FogSettings.d.ts` |

### 2026-07-27 · `instance` 冗余去除

| 字段 | 值 |
|------|-----|
| 原文 | "方块实例" / "block instance"（非类名 `*Instance` 场景） |
| 原译法 | 4 处「方块实例」 |
| 新译法 | 改为「方块」（实例冗余） |
| 类别 | 冗余去除 |
| 依据 | 中文「实例」在「方块」/「组件」/「实体」等可数名词后通常冗余；仅类名 `*Instance` 场景保留 |
| 影响范围 | `BlockComponent.d.ts`、`BlockPermutation.d.ts`、`BlockStateType.d.ts`、`Dimension.d.ts` |

### 2026-07-27 · base color 译名统一

| 字段 | 值 |
|------|-----|
| 原文 | base color (banner / map) |
| 原译法 | 「基础颜色」(Banner)、「基础地图颜色」+「基色」(Map)——三种说法不一致 |
| 新译法 | 统一为「底色」 |
| 类别 | 概念术语 |
| 依据 | [中文 Minecraft Wiki · 旗帜](https://zh.minecraft.wiki/w/%E6%97%97%E5%B8%9C) 标准用「旗帜底色」；地图 base color 同理 |
| 影响范围 | `SetBannerDetailsFunction.d.ts`、`BlockMapColorComponent.d.ts` |

[abbr]: https://github.com/Tanya7z/sapi-typedoc/blob/main/includes/abbreviations.md