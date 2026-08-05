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
*[JSON]: JavaScript Object Notation，轻量级数据交换格式。
*[ESM]: ECMAScript Modules，ES 官方模块规范。
*[readonly]: TypeScript 只读修饰符，标记属性不可重新赋值。

<!-- Minecraft 领域术语（释义参考 中文 Minecraft Wiki zh.minecraft.wiki） -->
*[Entity]: 实体，Minecraft 中所有动态的、可移动对象的统称（如生物、掉落物、玩家）。[Bedrock Wiki · Entity Intro (BP)](https://wiki.bedrock.dev/entities/entity-intro-bp.html)
*[Dimension]: 维度，Minecraft 中平行世界的称谓；基岩版含主世界、下界、末地（DimensionId 0~2）。[中文 Minecraft Wiki · 维度](https://zh.minecraft.wiki/w/%E7%BB%B4%E5%BA%A6)
*[Block]: 方块，Minecraft 世界最基本的组成单位；同种方块共用一个实例。[中文 Minecraft Wiki · 方块](https://zh.minecraft.wiki/w/%E6%96%B9%E5%9D%97)
*[BlockActor]: 方块实体，赋予特定方块独立数据的对象（如箱子、告示牌），继承自 BlockActor。[Bedrock Wiki · Block Components](https://wiki.bedrock.dev/blocks/block-components.html)
*[Player]: 玩家，一种特殊实体，代表接入服务器的用户。
*[World]: 世界（存档），包含全部维度、实体与数据的顶层容器。
*[Component]: 组件，实体/方块/物品上可插拔的能力单元（如 inventory、health）。
*[ItemStack]: 物品堆，表示一组同类物品及其数量与元数据。[Bedrock Wiki · Items Intro](https://wiki.bedrock.dev/items/items-intro.html)
*[Scoreboard]: 计分板，记录玩家/实体数值分数的系统，常用于命令逻辑。
*[Command]: 命令，以斜杠开头触发游戏内操作的指令。[中文 Minecraft Wiki · 命令](https://zh.minecraft.wiki/w/%E5%91%BD%E4%BB%A4)
*[Biome]: 生物群系，决定地形、植被、气候与生物生成特征的区域类型（参数含温度、湿度、海拔等）。[Bedrock Wiki · Biomes](https://wiki.bedrock.dev/world-generation/biomes-intro.html)
*[Vector3]: 三维向量，用 x/y/z 表示坐标或方向。
*[Tick]: 游戏刻，Minecraft 逻辑更新的最小时间单位（正常 20 刻/秒）。

<!-- 游戏机制（参考 中文 Minecraft Wiki） -->
*[Enchantment]: 附魔，赋予装备/工具/武器特殊能力的强化机制。[Bedrock Wiki · Enchantments](https://wiki.bedrock.dev/items/enchantments.html)
*[Potion]: 药水，对生物施加状态效果的消耗品。[Bedrock Wiki · Potion (reference)](https://wiki.bedrock.dev/items/potions.html)
*[Effect]: 状态效果，临时改变生物属性的加成/减益。
*[Damage]: 伤害，作用于实体的减益值，由近战、远程、爆炸、摔落、魔法等来源产生。
*[Knockback]: 击退，实体被攻击后产生的位移。
*[Spawn]: 生成，实体/物品在世界中出现的机制（含自然生成、刷怪箱生成、刷怪蛋等）。
*[Inventory]: 物品栏，存放与操作物品堆的容器界面（含玩家背包、箱子、漏斗等）。
*[Chunk]: 区块，世界的加载与生成单元（16×16 方块，跨整个高度）；决定服务端模拟与玩家可视范围。[Bedrock Wiki · Worlds & Dimensions](https://wiki.bedrock.dev/world-generation/worlds-and-dimensions.html)
*[Identifier]: 标识符，SAPI 中指 `namespace:id` 形式的字符串（如 `minecraft:oak_planks`），用于唯一定位方块/物品/实体/维度/生物群系/附魔等类型。
*[NamespacedIdentifier]: 命名空间标识符，命名空间 + 冒号 + 名称构成的 ID（如 `minecraft:frozen_peaks`）。SAPI 中绝大多数 `Identifier` 类型参数都期望这种格式。
*[AdditionalValidation]: 额外验证，组件有效性检查中除「所有者有效」外的附加校验。
*[Instrument]: 乐器，Note Block（音符盒）所模拟的声音类型（如钢琴、低音鼓、小军鼓等）；通过 `minecraft:instrument_sound` 组件在不同面分配。[中文 Minecraft Wiki · 音符盒](https://zh.minecraft.wiki/w/%E9%9F%B3%E7%AC%A6%E7%9B%92)
*[BaseColor]: 底色，旗帜/地图等场景作为底层的颜色；与「染料色」(Dye Color)同义（指获得该颜色的染料来源）。

*[BlockVolume]: 方块体积，用两个对角 `Vector3` 描述世界中一个由整数方块坐标围成的 3D 矩形区域；不同于数学 AABB,BlockVolume 端到端测量方块（即同一点 `(0,0,0)` 到 `(0,0,0)` 表示 1×1×1 而非 0×0×0）。
*[BlockVolumeBase]: 方块体积基类，`BlockVolume` 与 `ListBlockVolume` 的共同父类；提供位置迭代器等公共方法。
*[ListBlockVolume]: 列表方块体积，由一组显式列举的方块位置（不要求连续）构成的体积。
*[BlockBoundingBoxUtils]: 边界框工具类，提供 `createValid` / `dilate` / `expand` / `getCenter` / `getIntersection` 等静态方法。
*[Instance]: 实例，对象的运行时个体；本项目译「实例」时通常可省略（如「方块实例」→「方块」），仅在类名 `*Instance` 场景下保留。
*[Inserted]: 插入（动作），添加到容器/集合的语义；SAPI 中 `add()`/`push()` 描述常用此词。
*[WDH]: Width-Depth-Height，宽-深-高，三维尺寸的常用缩写；Bedrock API 中 `(width, depth, height)` 顺序而非 `(width, height, depth)`。

*[PressurePlate]: 压力板，被实体踩踏后输出红石信号、可被红石/RCON 触发查询或重置的方块。[中文 Minecraft Wiki · 压力板](https://zh.minecraft.wiki/w/%E5%8E%8B%E5%8A%9B%E6%9D%BF)
*[PressurePlatePush]: 压力板触发，压力板被踩下时进入「激活 / 输出红石信号」的状态（对应 API 事件 `PressurePlatePushAfterEvent`）。
*[PressurePlatePop]: 压力板复位，压力板在实体离开后恢复原状、停止输出红石信号的状态（对应 API 事件 `PressurePlatePopAfterEvent`）。
*[HitBlock]: 击中方块，实体与方块发生碰撞接触的事件。SAPI 用 `EntityHitBlockAfterEvent`，描述字段含 `block` / `faceLocation`。
*[HitEntity]: 击中实体，实体与实体发生碰撞接触的事件。SAPI 用 `EntityHitEntityAfterEvent`，区分「主动伤害实体」(`damagingEntity`)与「被击中实体」(`hitEntity`)。
*[Corner]: 角点，边界框（AABB）的顶点；与 UI「角落」（表单按钮位置）含义不同。
*[BlockBoundingBox]: 边界框 / 包围盒，表示一组方块集合的最小立方体区域（min/max 两点确定）。[Bedrock Wiki · Volumes (Bounding Boxes)](https://wiki.bedrock.dev/concepts/volumes.html)
*[Farthest]: 最远距离，`BlockVolumeBase.getFarthest` 按距离排序返回最远的 N 个方块坐标。
*[AABB]: Axis-Aligned Bounding Box，轴对齐包围盒；游戏开发中「边界框」的学术译法。

*[Redstone]: 红石，用于制作机械、电路与自动化装置的游戏内材料系统。[Bedrock Wiki · Redstone (intro)](https://wiki.bedrock.dev/redstone/index.html)
*[RedstonePower]: 红石信号强度，红石电路中一个方块当前承载的信号量（0~15），决定相邻元件是否被激活。[中文 Minecraft Wiki · 红石电路](https://zh.minecraft.wiki/w/%E7%BA%A2%E7%9F%B3%E7%94%B5%E8%B7%AF)
*[PowerJump]: 蓄力跳跃，实体（如马）通过长按跳跃键实现的二段跳。
*[Piston]: 活塞，伸出/缩回推动或拉回相邻方块的方块。普通活塞只能推、粘性活塞既能推也能拉。[中文 Minecraft Wiki · 活塞](https://zh.minecraft.wiki/w/%E6%B4%BB%E5%A1%9E)
*[Expanding]: 活塞伸出，活塞臂从「未伸出」状态变为「伸出」状态的动作（也作「活塞扩展」/「活塞推出」）。
*[Retracting]: 活塞缩回，活塞臂从「伸出」状态回到「未伸出」状态的动作。
*[Durability]: 耐久度，物品可承受的损耗总量；当前已损耗值由 `damage` 字段表示，`maxDurability - damage` 即剩余耐久。[中文 Minecraft Wiki · 耐久](https://zh.minecraft.wiki/w/%E8%80%90%E4%BC%90)
*[Damage]: 损耗值，物品已损失的耐久（数值越大 = 越接近损坏）。
*[HUD]: Heads-Up Display，玩家屏幕上的实时信息显示（血量、饥饿、经验等）。
*[GUI]: Graphical User Interface，图形用户界面（与 TUI 相对）。
*[TUI]: Text-based User Interface，文本终端界面。

<!-- 附加包 / 脚本开发术语（释义参考 Bedrock Wiki wiki.bedrock.dev，源码 github.com/Bedrock-OSS/bedrock-wiki） -->
*[Addon]: 附加包，行为包与资源包的组合，用于扩展/修改基岩版内容。[Bedrock Wiki · Add-on Introduction](https://wiki.bedrock.dev/guide/guide.html)
*[Manifest]: manifest.json，声明包元数据、版本与模块依赖的清单文件。[Bedrock Wiki · Manifest](https://wiki.bedrock.dev/guide/manifest.html)
*[Molang]: Mojang 的轻量表达式语言，像游戏持续求解的小数学题，用于资源/行为定义中的数值与动画计算。[Bedrock Wiki · MoLang](https://wiki.bedrock.dev/concepts/molang.html)
*[BlockPermutation]: 方块排列，基岩版 Script API 中描述一个方块具体形态（含全部方块状态值）的对象；与 Java 版的 `BlockState` 方块状态同义但 API 不同。[Bedrock Wiki · Block Components](https://wiki.bedrock.dev/blocks/block-components.html)
*[BlockState]: 方块状态，描述方块变体的键值属性（如朝向、开合）。
*[Permutation]: 方块排列，等同于 `BlockPermutation`。[Bedrock Wiki · Block Permutations](https://wiki.bedrock.dev/blocks/block-permutations.html)
*[Actor]: Actor，基岩版引擎内部的实体运行时对象（Mojang 引擎层术语）；Script API 中对应 `Entity`。
*[Subject]: 事件主体，事件所作用的目标对象（如 `BlockEvent.dimension` 即「此事件的 subject of 维度」）。
*[Location]: 坐标，类型为 `Vector3` 的三维位置；游戏内 UI 显示为「坐标」。[中文 Minecraft Wiki · 坐标](https://zh.minecraft.wiki/w/%E5%9D%90%E6%A0%87)
*[FallDistance]: 摔落距离，实体从高处坠落时累加的距离值，到达地面时按公式转换为伤害。[中文 Minecraft Wiki · 摔落](https://zh.minecraft.wiki/w/%E6%91%94%E8%90%BD)
*[BlockComponent]: 方块组件，改变方块在世界中外观与行为的逻辑单元，在 `components` 子项或方块 permutation 中应用。[Bedrock Wiki · Block Components](https://wiki.bedrock.dev/blocks/block-components.html)
*[BlockTrait]: 方块特性，可复用地为方块批量赋予行为的预设（如方向），无需手写事件与触发器。[Bedrock Wiki · Block Traits](https://wiki.bedrock.dev/blocks/block-traits.html)
*[ItemComponent]: 物品组件，改变物品在世界中外观与行为的逻辑单元，在 `components` 子项中应用。[Bedrock Wiki · Item Components](https://wiki.bedrock.dev/items/item-components.html)
*[EntityComponent]: 实体组件，组成 Minecraft 实体的逻辑构建块，由 Mojang 预置（如 `minecraft:can_climb`），不可自创。[Bedrock Wiki · Entity Components](https://wiki.bedrock.dev/entities/entity-components.html)
*[ComponentGroup]: 实体组件组，一组可整体添加/移除的组件集合，常用于实体的状态切换。[Bedrock Wiki · Component Groups](https://wiki.bedrock.dev/entities/component-groups.html)
*[AnimationController]: 动画控制器，用状态机驱动实体/物品动画的 MoLang 脚本系统。[Bedrock Wiki · Animation Controllers](https://wiki.bedrock.dev/animation-controllers/introduction.html)
*[Tag]: 标签，用于按类型成组匹配方块/物品的机制（如 `minecraft:is_solid`）；可启用特定原生功能。[Bedrock Wiki · Block Tags](https://wiki.bedrock.dev/blocks/block-tags.html)
*[Event]: 事件，游戏运行时触发的通知（如方块被破坏、实体生成）。[Bedrock Wiki · Entity Events](https://wiki.bedrock.dev/entities/entity-events.html)
*[BeforeEvent]: 前置事件，在动作发生前触发、可读写并可取消的事件。
*[AfterEvent]: 后置事件，在动作发生后触发、只读的通知事件。
*[System]: system 对象，提供计时、tick 回调与跨维度运行时能力的入口。[Bedrock Wiki · Scripting API Modules](https://wiki.bedrock.dev/scripting/api-modules.html)
*[Namespace]: 命名空间，标记内容归属的标识符（`命名空间:名称` 冒号左侧部分，如 minecraft），避免命名冲突。[Bedrock Wiki · Namespaces](https://wiki.bedrock.dev/concepts/namespaces.html)
*[Subpack]: 子包，附加包内可切换的不同配置（常用于按内存/分辨率加载不同材质），选中时其文件覆盖主包同名文件。[Bedrock Wiki · Subpacks](https://wiki.bedrock.dev/concepts/subpacks.html)
*[TextureAtlas]: 材质图集（spritesheet），把多张小材质合并为一张大图，减少加载数量、提升性能。[Bedrock Wiki · Texture Atlases](https://wiki.bedrock.dev/concepts/texture-atlases.html)
*[FormatVersion]: 格式版本，行为/资源包 JSON 顶部的 `format_version`，决定可用的字段与特性集合。[Bedrock Wiki · Format Version](https://wiki.bedrock.dev/guide/format-version.html)
*[QuickJS]: 基岩版 Script API 内嵌的 JavaScript 引擎；脚本以 ES 模块组织，调度使用 tick 驱动，不提供 setTimeout/setInterval。[Bedrock Wiki · API Environment](https://wiki.bedrock.dev/scripting/api-environment.html)
*[RawMessage]: 原始消息，支持翻译键与占位符的结构化文本消息。
*[Structure]: 结构，可保存与放置的方块与实体集合（.mcstructure）。[Bedrock Wiki · Structures](https://wiki.bedrock.dev/world-generation/structures.html)
*[LootTable]: 战利品表，定义方块/实体掉落物概率与数量的 JSON 配置。[Bedrock Wiki · Loot Tables](https://wiki.bedrock.dev/loot/loot-intro.html)
*[Waterlogged]: 含水状态，方块在其空间内同时容纳水（如台阶、栅栏）。
*[MessageId]: 消息 ID，QQ / OneBot 协议中每条消息的唯一标识，用于去重。
*[Echo]: 回声消息，本系统自己发出的消息再回流（如 QQ bot 自己说的话再次被 WebSocket 接收）。
*[GameRules]: 游戏规则，运行时可调整的服务器级布尔/数值开关（如 keepInventory、doDaylightCycle）。
*[Difficulty]: 难度，影响怪物生成、伤害与饥饿的全局设定（peaceful/easy/normal/hard）。
*[VibrantVisuals]: 灵动视效，基岩版 1.21.70+ 引入的官方视效增强（定向光、体积雾、反射等）。[Minecraft 官方文章（中文）](https://www.minecraft.net/zh-hans/article/vibrant-visuals-java-edition)
*[Looting]: 抢夺，附魔类型之一；提高生物掉落物的数量与稀有度概率。
*[SilkTouch]: 精准采集，附魔类型之一；使方块以原形态掉落（含工具自身耐久等级）。

<!-- 工具链 -->
*[TypeDoc]: 从 TypeScript 源码/声明文件生成 API 文档的工具。
*[MkDocs]: 基于 Markdown 的静态文档站点生成器。
*[npm]: Node Package Manager，Node.js 包管理器。
*[CLI]: Command-Line Interface，命令行接口。
*[MDN]: Mozilla Developer Network，Web/JS 标准参考文档站。
*[CI]: Continuous Integration，持续集成（此处指 GitHub Actions）。
*[CDN]: Content Delivery Network，内容分发网络。
