<!-- Minecraft / 平台 -->
*[MC]: Minecraft，本文档参考的沙盒游戏本体。
*[MCBE]: Minecraft: Bedrock Edition，基岩版。
*[BE]: Bedrock Edition，基岩版。
*[BDS]: Bedrock Dedicated Server，基岩版官方专用服务器程序。
*[SAPI]: Script API，基岩版官方脚本接口，本文档的主体。
*[API]: Application Programming Interface，应用程序编程接口。
*[BP]: Behavior Pack，行为包；脚本运行的载体。
*[RP]: Resource Pack，资源包。
*[OP]: Operator，服务器管理员权限等级。
*[UUID]: Universally Unique Identifier，通用唯一标识符。
*[NBT]: Named Binary Tag，Minecraft 用于存储结构化数据的二进制格式。
*[GameTest]: 基岩版自动化测试框架（@minecraft/server-gametest）。

<!-- 语言 / 类型 -->
*[TS]: TypeScript，带静态类型的 JavaScript 超集。
*[JS]: JavaScript。
*[d.ts]: TypeScript 声明文件，本文档由官方 @minecraft/*.d.ts 生成。
*[JSON]: JavaScript Object Notation，轻量级数据交换格式。
*[ESM]: ECMAScript Modules，ES 官方模块规范。
*[readonly]: TypeScript 只读修饰符，标记属性不可重新赋值。

<!-- Minecraft 领域术语（释义参考 中文 Minecraft Wiki zh.minecraft.wiki） -->
*[Entity]: 实体，Minecraft 中所有动态的、可移动对象的统称（如生物、掉落物、玩家）。
*[Dimension]: 维度，Minecraft 中平行世界的称谓；基岩版含主世界、下界、末地（DimensionId 0~2）。
*[Block]: 方块，Minecraft 世界最基本的组成单位；同种方块共用一个实例。
*[BlockActor]: 方块实体，赋予特定方块独立数据的对象（如箱子、告示牌），继承自 BlockActor。
*[Player]: 玩家，一种特殊实体，代表接入服务器的用户。
*[World]: 世界（存档），包含全部维度、实体与数据的顶层容器。
*[Component]: 组件，实体/方块/物品上可插拔的能力单元（如 inventory、health）。
*[ItemStack]: 物品堆，表示一组同类物品及其数量与元数据。
*[Scoreboard]: 计分板，记录玩家/实体数值分数的系统，常用于命令逻辑。
*[Command]: 命令，以斜杠开头触发游戏内操作的指令。
*[Biome]: 生物群系，具有特定气候、地形与生物分布的区域类型。
*[Vector3]: 三维向量，用 x/y/z 表示坐标或方向。
*[Tick]: 游戏刻，Minecraft 逻辑更新的最小时间单位（正常 20 刻/秒）。

<!-- 附加包 / 脚本开发术语（释义参考 Bedrock Wiki wiki.bedrock.dev，源码 github.com/Bedrock-OSS/bedrock-wiki） -->
*[Addon]: 附加包，行为包与资源包的组合，用于扩展/修改基岩版内容。
*[Manifest]: manifest.json，声明包元数据、版本与模块依赖的清单文件。
*[Molang]: Mojang 的轻量表达式语言，像游戏持续求解的小数学题，用于资源/行为定义中的数值与动画计算。
*[Permutation]: 方块状态组合，某个方块在一组方块状态取值下的所有可能配置。
*[BlockState]: 方块状态，描述方块变体的键值属性（如朝向、开合）。
*[BlockComponent]: 方块组件，改变方块在世界中外观与行为的逻辑单元，在 `components` 子项或方块 permutation 中应用。
*[BlockTrait]: 方块特性，可复用地为方块批量赋予行为的预设（如方向），无需手写事件与触发器。
*[ItemComponent]: 物品组件，改变物品在世界中外观与行为的逻辑单元，在 `components` 子项中应用。
*[EntityComponent]: 实体组件，组成 Minecraft 实体的逻辑构建块，由 Mojang 预置（如 `minecraft:can_climb`）。
*[ComponentGroup]: 实体组件组，一组可整体添加/移除的组件集合，常用于实体的状态切换。
*[Tag]: 标签，用于按类型成组匹配方块/物品的机制（如 `minecraft:is_solid`）；可启用特定原生功能。
*[Event]: 事件，游戏运行时触发的通知（如方块被破坏、实体生成）。
*[BeforeEvent]: 前置事件，在动作发生前触发、可读写并可取消的事件。
*[AfterEvent]: 后置事件，在动作发生后触发、只读的通知事件。
*[System]: system 对象，提供计时、tick 回调与跨维度运行时能力的入口。
*[Namespace]: 命名空间，标记内容归属的标识符（`命名空间:名称` 冒号左侧部分，如 minecraft），避免命名冲突。
*[Subpack]: 子包，附加包内可切换的不同配置（常用于按内存/分辨率加载不同材质），选中时其文件覆盖主包同名文件。
*[TextureAtlas]: 材质图集（spritesheet），把多张小材质合并为一张大图，减少加载数量、提升性能。
*[FormatVersion]: 格式版本，行为/资源包 JSON 顶部的 `format_version`，决定可用的字段与特性集合。
*[QuickJS]: 基岩版 Script API 内嵌的 JavaScript 引擎；脚本以 ES 模块组织，调度使用 tick 驱动，不提供 setTimeout/setInterval。
*[RawMessage]: 原始消息，支持翻译键与占位符的结构化文本消息。
*[Structure]: 结构，可保存与放置的方块与实体集合（.mcstructure）。
*[LootTable]: 战利品表，定义方块/实体掉落物概率与数量的 JSON 配置。
*[Waterlogged]: 含水状态，方块在其空间内同时容纳水（如台阶、栅栏）。

<!-- 工具链 -->
*[TypeDoc]: 从 TypeScript 源码/声明文件生成 API 文档的工具。
*[MkDocs]: 基于 Markdown 的静态文档站点生成器。
*[npm]: Node Package Manager，Node.js 包管理器。
*[CLI]: Command-Line Interface，命令行接口。
*[MDN]: Mozilla Developer Network，Web/JS 标准参考文档站。
*[CI]: Continuous Integration，持续集成（此处指 GitHub Actions）。
*[CDN]: Content Delivery Network，内容分发网络。
