/**
 * 表示网络数据包的唯一类型。
 *
 * Represents the unique type of network packet.
 */
export enum PacketId {
    /**
     * 各种实体状态变化（参见 Actor::handleEntityEvent）。
     *
     * All kinds of actor state changes (see Actor::handleEntityEvent).
     */
    ActorEventPacket = 'ActorEventPacket',
    /**
     * 玩家点击世界中的某个实体，例如一只鸡。
     *
     * Player clicks on an actor in the world, eg a chicken.
     */
    ActorPickRequestPacket = 'ActorPickRequestPacket',
    /**
     * 向客户端添加新实体（Actor）的数据包。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/AddActorPacket.html
     */
    AddActorPacket = 'AddActorPacket',
    /**
     * 添加行为树。
     *
     * Add Behavior Tree
     */
    AddBehaviorTreePacket = 'AddBehaviorTreePacket',
    /**
     * 向客户端添加物品实体的数据包（用于掉落物）。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/AddItemActorPacket.html
     */
    AddItemActorPacket = 'AddItemActorPacket',
    /**
     * 从服务端向客户端发送新的画作实体的信息。
     *
     * Sends the information for a new painting actor from server to client.
     */
    AddPaintingPacket = 'AddPaintingPacket',
    /**
     * 向客户端添加玩家实体的数据包。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/AddPlayerPacket.html
     */
    AddPlayerPacket = 'AddPlayerPacket',
    /**
     * 从服务端向客户端发送体积实体的定义和组件。
     *
     * Sends a volume entity's definition and components from server to client.
     */
    AddVolumeEntityPacket = 'AddVolumeEntityPacket',
    /**
     * 包含机器人（Agent）动作类型数据的数据包。
     *
     * packet containing data of Agent Action Type
     */
    AgentActionEventPacket = 'AgentActionEventPacket',
    /**
     * 当机器人（Agent）执行动画时广播给其他玩家，以便正确同步。
     *
     * Broadcasted to other players when an Agent performs an animation so it gets properly replicated.
     */
    AgentAnimationPacket = 'AgentAnimationPacket',
    /**
     * AnimateEntityPacket 用于在其发送到的客户端上触发一次性动画。
     *
     * The AnimateEntityPacket is used to trigger a one - off animation on the client it is sent to.
     */
    AnimateEntityPacket = 'AnimateEntityPacket',
    /**
     * 播放实体动画。
     *
     * Animate Actor
     */
    AnimatePacket = 'AnimatePacket',
    /**
     * 请求使铁砧受损。
     *
     * Requests an anvil to be damaged.
     */
    AnvilDamagePacket = 'AnvilDamagePacket',
    /**
     * 发起 websocket 连接。
     *
     * Initiates websocket connection
     */
    AutomationClientConnectPacket = 'AutomationClientConnectPacket',
    /**
     * 在游戏开始时从服务端发送完整的实体标识符列表。
     *
     * Sends the whole list of actor identifiers at game start from the server.
     */
    AvailableActorIdentifiersPacket = 'AvailableActorIdentifiersPacket',
    /**
     * 包含所有可用的命令。
     *
     * Contains all the available commands.
     */
    AvailableCommandsPacket = 'AvailableCommandsPacket',
    /**
     * 包含要授予的成就的 ID。
     *
     * Contains the ID of the achievement to award
     */
    AwardAchievementPacket = 'AwardAchievementPacket',
    /**
     * 在世界开始时，向客户端发送所有可用生物群系的信息。
     *
     * On world start, send clients the info for all available biomes.
     */
    BiomeDefinitionListPacket = 'BiomeDefinitionListPacket',
    /**
     * 向客户端发送完整的用户数据复合标签以及方块坐标。
     *
     * Sends the entire user data compound tag and the block position to the client.
     */
    BlockActorDataPacket = 'BlockActorDataPacket',
    /**
     * 每当发生方块事件时，从服务端发送以同步客户端与服务端，b0 和 b1 中携带任意编码的信息。
     *
     * Whenever a block event happens it is sent from the server to sync client and server, with arbitrarily encoded information in b0 and b1.
     */
    BlockEventPacket = 'BlockEventPacket',
    /**
     * 玩家在世界中拾取方块；由客户端发往服务端。
     *
     * Player picks up a block in the world; client to server.
     */
    BlockPickRequestPacket = 'BlockPickRequestPacket',
    /**
     * 在使用过程中，从客户端向服务端发送成书与笔物品的更新状态。
     *
     * Sends the updated state of the Book and Quill item from client to server during use.
     */
    BookEditPacket = 'BookEditPacket',
    /**
     * 当 Boss 更新时发送。
     *
     * Sent when a boss gets updated
     */
    BossEventPacket = 'BossEventPacket',
    /**
     * 由服务端向客户端发送的摄像机瞄准辅助实体优先级数据。
     *
     * Camera aim-assist actor priority data sent from the server to clients.
     */
    CameraAimAssistActorPriorityPacket = 'CameraAimAssistActorPriorityPacket',
    /**
     * 摄像机瞄准辅助。
     *
     * CameraAimAssist
     */
    CameraAimAssistPacket = 'CameraAimAssistPacket',
    /**
     * 由服务端向客户端发送的摄像机瞄准辅助注册表预设/分类数据。
     *
     * Camera aim-assist registry presets/categories data sent from the server to clients.
     */
    CameraAimAssistPresetsPacket = 'CameraAimAssistPresetsPacket',
    /**
     * 用于从服务端向指定客户端发送摄像机指令（CameraInstruction）。
     *
     * Used to send a CameraInstruction from the server to the specified clients.
     */
    CameraInstructionPacket = 'CameraInstructionPacket',
    /**
     * 仅在教育版中通过三脚架相机物品或 TakePictureCommand 使用。从服务端发送相机实体 id 和目标玩家 id。
     *
     * Used only in EDU through the tripod camera item or the TakePictureCommand. Sends the camera actor id and the target player id from the server.
     */
    CameraPacket = 'CameraPacket',
    /**
     * 用于从服务端向客户端同步摄像机预设（CameraPresets）数据。
     *
     * Used to sync CameraPresets data from server to clients.
     */
    CameraPresetsPacket = 'CameraPresetsPacket',
    /**
     * 用于控制并触发客户端玩家摄像机的镜头晃动效果。
     *
     * Used to control trigger camera shake movements on the client's player camera
     */
    CameraShakePacket = 'CameraShakePacket',
    /**
     * 由服务端向客户端发送的摄像机自定义样条数据。
     *
     * Camera custom spline data sent from server to client.
     */
    CameraSplinePacket = 'CameraSplinePacket',
    /**
     * 服务端从世界发送此数据包以启动维度切换流程。
     *
     * The server sends this packet from the level to kick off dimension changing process.
     */
    ChangeDimensionPacket = 'ChangeDimensionPacket',
    /**
     * 包含用于更改生物属性的数据的数据包。
     *
     * packet containing data for changing mob property
     */
    ChangeMobPropertyPacket = 'ChangeMobPropertyPacket',
    /**
     * 在世界加载时发送。我们不清楚为何会发送四次。用于定义刻距离（tick distance）。
     *
     * Sent when the world is loading. We don't know why it is sent four times. Defines the tick distance.
     */
    ChunkRadiusUpdatedPacket = 'ChunkRadiusUpdatedPacket',
    /**
     * 将属性层同步到客户端（当前已禁用）。
     *
     * Syncs Attribute Layers to the Client (Currently disabled)
     */
    ClientboundAttributeLayerSyncPacket = 'ClientboundAttributeLayerSyncPacket',
    /**
     * 从服务端发送到客户端，用于强制关闭栈中所有服务端表单并返回 HUD 界面。
     *
     * Sent from the server to client to force close all server forms on the stack and return to the HUD screen.
     */
    ClientboundCloseFormPacket = 'ClientboundCloseFormPacket',
    /**
     * 设置玩家应使用的操作方案。
     *
     * Set the control scheme that the player should use
     */
    ClientboundControlSchemeSetPacket = 'ClientboundControlSchemeSetPacket',
    /**
     * 允许服务端告知客户端关闭数据驱动 UI 界面。
     *
     * Allows the server to tell the client to close Data Driven UI screens.
     */
    ClientboundDataDrivenUICloseScreenPacket = 'ClientboundDataDrivenUICloseScreenPacket',
    /**
     * 允许服务端告知客户端重新加载数据驱动 UI。
     *
     * Allows the server to tell the client to reload the Data Driven UI.
     */
    ClientboundDataDrivenUIReloadPacket = 'ClientboundDataDrivenUIReloadPacket',
    /**
     * 允许服务端告知客户端显示数据驱动 UI 界面。
     *
     * Allows the server to tell the client to show a Data Driven UI screen.
     */
    ClientboundDataDrivenUIShowScreenPacket = 'ClientboundDataDrivenUIShowScreenPacket',
    /**
     * 从服务端向客户端发送一组数据存储属性。
     *
     * Sends a list of data store properties from the server to the client.
     */
    ClientboundDataStorePacket = 'ClientboundDataStorePacket',
    /**
     * 用于添加/移除调试渲染对象。
     *
     * Used to add/remove debug rendering objects.
     */
    ClientboundDebugRendererPacket = 'ClientboundDebugRendererPacket',
    /**
     * 服务端→客户端的地图物品数据包（MapItemDataPacket）。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/ClientboundMapItemDataPacket.html
     */
    ClientboundMapItemDataPacket = 'ClientboundMapItemDataPacket',
    /**
     * 从服务端向客户端发送纹理偏移系统的一组更新属性。
     *
     * Sends a set of update properties for the texture shift system from the server to the client.
     */
    ClientboundTextureShiftPacket = 'ClientboundTextureShiftPacket',
    /**
     * 用于更新声音数据。
     *
     * Sent to update sound data.
     */
    ClientboundUpdateSoundDataPacket = 'ClientboundUpdateSoundDataPacket',
    /**
     * 客户端缓存 Blob 状态数据包。
     *
     * Client Cache Blob Status Packet
     */
    ClientCacheBlobStatusPacket = 'ClientCacheBlobStatusPacket',
    /**
     * 仅在真实的客户端-服务端场景中生效。此数据包只是从服务端发送到客户端的一组 <blobId, blob> 键值对列表。
     *
     * Only active in a real client-server scenario. This packet is just a list of <blobId, blob> pairs sent from server to client.
     */
    ClientCacheMissResponsePacket = 'ClientCacheMissResponsePacket',
    /**
     * 由客户端在登录时发送一次，用于告知是否支持缓存。
     *
     * It is sent by the Client once, at login, to communicate if it supports the cache or not.
     */
    ClientCacheStatusPacket = 'ClientCacheStatusPacket',
    /**
     * 客户端激活瞄准辅助。
     *
     * Client-side activation of aim-assist
     */
    ClientCameraAimAssistPacket = 'ClientCameraAimAssistPacket',
    /**
     * 向服务端发送客户端移动预测信息。
     *
     * Sends client movement prediction information to the server
     */
    ClientMovementPredictionSyncPacket = 'ClientMovementPredictionSyncPacket',
    /**
     * 在教育版中，由客户端在世界启动时发送一次，用于建立加密并进行身份验证。
     *
     * Sets up encryption and authenticates in educational version once at level startup from client.
     */
    ClientToServerHandshakePacket = 'ClientToServerHandshakePacket',
    /**
     * Code Builder 数据包。
     *
     * Code Builder Packet
     */
    CodeBuilderPacket = 'CodeBuilderPacket',
    /**
     * 这是教育版专用，用于 WebviewSystem 的 getInterface()。
     *
     * This is EDU exclusive, used in getInterface() of WebviewSystem
     */
    CodeBuilderSourcePacket = 'CodeBuilderSourcePacket',
    /**
     * 命令方块更新。
     *
     * Command Block Update
     */
    CommandBlockUpdatePacket = 'CommandBlockUpdatePacket',
    /**
     * “斜杠”命令的执行输出，由服务端发往客户端。
     *
     * "slash" command execution output, server to client.
     */
    CommandOutputPacket = 'CommandOutputPacket',
    /**
     * “斜杠”命令的执行，由客户端发往服务端。
     *
     * "slash" command execution, client to server.
     */
    CommandRequestPacket = 'CommandRequestPacket',
    /**
     * 从服务端发往客户端，用于完成物品使用流程。例如当你喝完或吃完时。
     *
     * Send server to client to complete the using item process. An example is when you finish drinking or eating.
     */
    CompletedUsingItemPacket = 'CompletedUsingItemPacket',
    /**
     * 当游戏在客户端删除容器管理器后，客户端会发送此数据包。
     *     随后服务端删除其容器管理器，并向客户端发回一个关闭容器界面的数据包。
     *
     * After the game deletes the container manager on the client, the client sends this packet.
     *     Then the server deletes its container manager, and sends a packet back to the client that closes the container screen.
     */
    ContainerClosePacket = 'ContainerClosePacket',
    /**
     * 从服务端发送，以便客户端知道要打开容器界面并播放箱子打开动画。
     *
     * Sent from the server so that the client knows to open the container screen and do the chest opening animation.
     */
    ContainerOpenPacket = 'ContainerOpenPacket',
    /**
     * 用于触发客户端对动态容器注册表的清理。
     *
     * This is used to trigger a clientside cleanup of the dynamic container registry.
     */
    ContainerRegistryCleanupPacket = 'ContainerRegistryCleanupPacket',
    /**
     * 基本上，每当酿造台或熔炉的“烹饪”状态发生变化（即加载进度条）时，都会从服务端发送此数据包。
     *
     * This is sent from the server basically any time that the "cooking" state of the brewing stand or the furnace changes (i.e. the loading bar)
     */
    ContainerSetDataPacket = 'ContainerSetDataPacket',
    /**
     * 当玩家的移动模拟与服务端偏差过大、服务端需要纠正客户端时，发送给该玩家。
     *
     * Sent to a player when their simulation of movement mismatches enough from the server that it wants to correct the client.
     */
    CorrectPlayerMovePredictionPacket = 'CorrectPlayerMovePredictionPacket',
    /**
     * 客户端向服务端发送的合成数据包（含配方、容器类型等）。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/CraftingDataPacket.html
     */
    CraftingDataPacket = 'CraftingDataPacket',
    /**
     * 玩家现在可以将作品集中的照片导出为其物品栏中的照片物品。教育版。
     *
     * Players now have the possibility to export photos from their portfolios into photo items in their inventory. EDU.
     */
    CreatePhotoPacket = 'CreatePhotoPacket',
    /**
     * 发送给客户端以同步创造模式物品栏内容的数据包。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/CreativeContentPacket.html
     */
    CreativeContentPacket = 'CreativeContentPacket',
    /**
     * 告知客户端玩家当前所处的结构特征（Structure Feature）。
     *
     * Informs the client of which Structure Feature they are currently occupying.
     */
    CurrentStructureFeaturePacket = 'CurrentStructureFeaturePacket',
    /**
     * 当玩家死亡时从服务端发送到客户端（Level::onPlayerDeath）。
     *
     * Sent from the server to client when player dies (Level::onPlayerDeath).
     */
    DeathInfoPacket = 'DeathInfoPacket',
    /**
     * 系统通过一个通用网络数据包发送调试信息。这使得任何服务端信息都能在客户端上（例如在 ImGui 中）渲染。
     *
     * The system sends debug information via a generic network packet. This enables rendering of any server information on the client in for instance ImGui.
     */
    DebugInfoPacket = 'DebugInfoPacket',
    /**
     * 用于同步世界维度（Dimension）数据的数据包。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/DimensionDataPacket.html
     */
    DimensionDataPacket = 'DimensionDataPacket',
    /**
     * 从服务端发送到客户端以触发断开连接。
     *
     * Sent from the server to a client to trigger a disconnection.
     */
    DisconnectPacket = 'DisconnectPacket',
    /**
     * 通用的编辑器专用数据包——携带由各个 IEditorNetworkPayload 生成的任意序列化数据作为载荷。
     *
     * General use Editor specific packet - carries a payload of whatever serialized data that the individual IEditorNetworkPayload generates.
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/EditorNetworkPacket.html
     */
    EditorNetworkPacket = 'EditorNetworkPacket',
    /**
     * 向所有客户端传输 EducationLevelSettings。
     *
     * Transmits EducationLevelSettings to all clients.
     */
    EducationSettingsPacket = 'EducationSettingsPacket',
    /**
     * 向所有客户端传输教育版共享 URI 资源设置。
     *
     * Transmits Edu Shared Uri Resource settings to all clients.
     */
    EduUriResourcePacket = 'EduUriResourcePacket',
    /**
     * 允许客户端下载其他客户端已装备的表情动作。
     *
     * Allows clients to download emotes that other clients have equipped.
     */
    EmoteListPacket = 'EmoteListPacket',
    /**
     * 客户端将此发送给服务端，以将表情动作通知其他客户端。
     *
     * A client sends this to the server to notify other clients about the emote.
     */
    EmotePacket = 'EmotePacket',
    /**
     * 此数据包用于跟踪来自服务端的激活特征注册表数据，以便客户端能够自行放置这些特征。
     *
     * This is the packet that tracks the active feature registry data from the server so that client can place the features themselves.
     */
    FeatureRegistryPacket = 'FeatureRegistryPacket',
    /**
     * 更新游戏规则。
     *
     * Updates game rules.
     */
    GameRulesChangedPacket = 'GameRulesChangedPacket',
    /**
     * 内部文本数据包。
     *
     * Internal Text Packet
     */
    GameTestRequestPacket = 'GameTestRequestPacket',
    /**
     * 游戏测试结果数据包。
     *
     * Game Test Results Packet
     */
    GameTestResultsPacket = 'GameTestResultsPacket',
    /**
     * 当服务端脚本更改渲染设置时，从服务端发送到客户端。
     *
     * Sent from the server to the client when a server script changes the rendering settings
     */
    GraphicsOverrideParameterPacket = 'GraphicsOverrideParameterPacket',
    /**
     * 服务端告知客户端在快捷栏中悬停于哪个物品槽。
     *
     * The server telling the client what item slot to hover over in the hotbar.
     */
    GuiDataPickItemPacket = 'GuiDataPickItemPacket',
    /**
     * 护甲受损。
     *
     * Hurt Armor
     */
    HurtArmorPacket = 'HurtArmorPacket',
    /**
     * 交互。
     *
     * Interact
     */
    InteractPacket = 'InteractPacket',
    /**
     * 用于更新整个容器。示例用途包括：玩家重生、replace 物品命令、第三方内容调用 sendInventory()、方块拾取。
     *
     * This is used for updating an entire container. Example uses include: player respawned, replace items command, 3rd party content calls sendInventory(), block picking.
     */
    InventoryContentPacket = 'InventoryContentPacket',
    /**
     * 更新容器中的单个槽位，而不是整个容器。例如动物物品栏（马、驴等）和箱子。也包括快捷栏、副手以及部分玩家物品栏的变化。
     *
     * Updates one slot in an inventory rather than the whole thing. So like animal inventory (horses, donkeys, etc) and chests. Hotbar, offhand, and some player inventory changes.
     */
    InventorySlotPacket = 'InventorySlotPacket',
    /**
     * 物品栏事务。根据是否启用 ItemStackNetManager，在物品交互 UI 时发送，以及在玩家于游戏中使用物品时发送。更多细节参见 ComplexInventoryTransaction::Type。
     *
     * Inventory Transaction. Sent for item interaction UI depending on if ItemStackNetManager is enabled as well as when the player uses items in gameplay. See ComplexInventoryTransaction::Type for more details.
     */
    InventoryTransactionPacket = 'InventoryTransactionPacket',
    /**
     * 来自服务端的物品数据。包含组件信息。
     *
     * Item data from the server. Contains component information.
     */
    ItemRegistryPacket = 'ItemRegistryPacket',
    /**
     * 客户端→服务端：物品栈请求数据包。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/ItemStackRequestPacket.html
     */
    ItemStackRequestPacket = 'ItemStackRequestPacket',
    /**
     * 服务端→客户端：物品栈响应数据包。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/ItemStackResponsePacket.html
     */
    ItemStackResponsePacket = 'ItemStackResponsePacket',
    /**
     * 供客户端拼图结构世界生成使用的拼图结构数据。此数据包包含行为包拼图结构规则的一份副本。
     *
     * Jigsaw Structure data used by client jigsaw structure worldgen. This packet contains a copy of the behavior pack jigsaw structure rules.
     */
    JigsawStructureDataPacket = 'JigsawStructureDataPacket',
    /**
     * 用于教育版化学实验台方块实体。
     *
     * For the EDU Chemistry Lab Table block actor.
     */
    LabTablePacket = 'LabTablePacket',
    /**
     * 用于讲台方块实体。
     *
     * This is used for the Lectern Block Actor.
     */
    LecternUpdatePacket = 'LecternUpdatePacket',
    /**
     * 向客户端发送遥测事件，以便客户端将其转发到事件系统。
     *
     * Sends telemetry events to the client so the client can then send that on to the eventing system
     */
    LegacyTelemetryEventPacket = 'LegacyTelemetryEventPacket',
    /**
     * 课程进度。
     *
     * Lesson Progress
     */
    LessonProgressPacket = 'LessonProgressPacket',
    /**
     * 用于向客户端发送世界区块数据的数据包（LevelChunkPacket）。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/LevelChunkPacket.html
     */
    LevelChunkPacket = 'LevelChunkPacket',
    /**
     * 通用世界事件数据包（LevelEventGenericPacket）。
     *
     * LevelEventGenericPacket
     */
    LevelEventGenericPacket = 'LevelEventGenericPacket',
    /**
     * 喷溅药水、天气事件、全局暂停、simlock 命令，应有尽有！
     *
     * Splash Potions, weather events, global pause, simlock commands, oh my!
     */
    LevelEventPacket = 'LevelEventPacket',
    /**
     * 世界声音事件。
     *
     * Level Sound Event
     */
    LevelSoundEventPacket = 'LevelSoundEventPacket',
    /**
     * 将服务端上的定位栏（LocatorBar）变化同步到客户端。
     *
     * Syncs LocatorBar changes on the server with the client.
     */
    LocatorBarPacket = 'LocatorBarPacket',
    /**
     * 在登录时由客户端向服务端发送一次。大约 100k。
     *
     * Sent once from client to server at login. About 100k.
     */
    LoginPacket = 'LoginPacket',
    /**
     * 当用户在游戏中使用制图台锁定地图物品时触发。
     *
     * This is fired when the user locks a map item utilizing the Cartography Table in game.
     */
    MapCreateLockedCopyPacket = 'MapCreateLockedCopyPacket',
    /**
     * 当客户端无法找到某地图物品的地图数据时，它会向服务端发送该地图的 uuid。
     *
     * In the case of the client being unable to find map data for a map item it sends a uuid for a map to the server.
     */
    MapInfoRequestPacket = 'MapInfoRequestPacket',
    /**
     * 生物护甲装备。
     *
     * Mob Armor Equipment
     */
    MobArmorEquipmentPacket = 'MobArmorEquipmentPacket',
    /**
     * 生物效果。
     *
     * Mob Effect
     */
    MobEffectPacket = 'MobEffectPacket',
    /**
     * 生物装备。任何生物的手持/副手物品变化都会通过此数据包从服务端发往客户端。当客户端的手持槽位或其内容变化时，也会将此发送给服务端。
     *
     * Mob Equipment. Changes to any mob's held/offhand item are fired from server to client with this packet. Clients also send this to the server when their held slot or its contents change.
     */
    MobEquipmentPacket = 'MobEquipmentPacket',
    /**
     * 模态表单请求。
     *
     * Modal Form Request
     */
    ModalFormRequestPacket = 'ModalFormRequestPacket',
    /**
     * 响应第三方服务端请求以显示自定义 UI 界面时触发。
     *
     * Fired in response to third party server request to show the custom UI screen.
     */
    ModalFormResponsePacket = 'ModalFormResponsePacket',
    /**
     * 它本质上是一个 SetActionMotionPacket，附带一个布尔值，指示在数据包发送时实体是否在地面上。
     *
     * It is essentially a SetActionMotionPacket with a bool indicating if the actor was on the ground at the time the packet is sent or not.
     */
    MotionPredictionHintsPacket = 'MotionPredictionHintsPacket',
    /**
     * 主要用于从服务端向客户端更新所有实体的运动。
     *
     * This is used primarily for motion updates of all actors from server to client.
     */
    MoveActorAbsolutePacket = 'MoveActorAbsolutePacket',
    /**
     * 向客户端发送实体增量移动信息的数据包（MoveActorDeltaPacket）。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/MoveActorDeltaPacket.html
     */
    MoveActorDeltaPacket = 'MoveActorDeltaPacket',
    /**
     * 这些数据包发送到客户端，用于更新特定的移动效果（MovementEffects）。
     *
     * These packets are sent to the client to update specific MovementEffects
     */
    MovementEffectPacket = 'MovementEffectPacket',
    /**
     * 向客户端发送玩家移动信息的数据包（MovePlayerPacket）。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/MovePlayerPacket.html
     */
    MovePlayerPacket = 'MovePlayerPacket',
    /**
     * 同步多人游戏设置。
     *
     * Syncs multiplayer settings
     */
    MultiplayerSettingsPacket = 'MultiplayerSettingsPacket',
    /**
     * 告知客户端为本地玩家更新区块视野。
     *
     * Tells clients to update the chunk view for the local player.
     */
    NetworkChunkPublisherUpdatePacket = 'NetworkChunkPublisherUpdatePacket',
    /**
     * 从主机向客户端发送可调选项（压缩阈值和算法）。
     *
     * Sends tunable options from host to client (compression threshold and algorithm)
     */
    NetworkSettingsPacket = 'NetworkSettingsPacket',
    /**
     * Ping 数据包。
     *
     * Ping Packet
     */
    NetworkStackLatencyPacket = 'NetworkStackLatencyPacket',
    /**
     * 当为客户端远程触发 NPC 对话窗口时，从服务端发送到客户端。
     *
     * Sent from the server to client when remote firing an NPC dialogue window for a client
     */
    NpcDialoguePacket = 'NpcDialoguePacket',
    /**
     * 用于与 NPC 组件的多种交互。
     *
     * Used for a number of interactions with the NPC Component
     */
    NpcRequestPacket = 'NpcRequestPacket',
    /**
     * 屏幕纹理动画。
     *
     * On-Screen Texture Animation
     */
    OnScreenTextureAnimationPacket = 'OnScreenTextureAnimationPacket',
    /**
     * 从服务端发送，以便客户端知道要打开告示牌界面。
     *
     * Sent from the server so that the client knows to open the sign screen.
     */
    OpenSignPacket = 'OpenSignPacket',
    /**
     * 当客户端检测到格式错误的数据包时发送。
     *
     * This is sent when the client detects a malformed packet
     */
    PacketViolationWarningPacket = 'PacketViolationWarningPacket',
    /**
     * 由客户端发送，以提供额外的客户端元数据。
     *
     * Sent by the client to provide additional client metadata.
     */
    PartyChangedPacket = 'PartyChangedPacket',
    /**
     * 由客户端发送到服务端，携带队伍目的地 cookie 响应。
     *
     * Sent by the client to the server with a party destination cookie response.
     */
    PartyDestinationCookieResponsePacket = 'PartyDestinationCookieResponsePacket',
    /**
     * 教育版中有一个相机物品，玩家可以用它截图并添加到剪贴簿中。
     *
     * There is a camera item in EDU and they can use it to take screenshots and add them to a scrapbook.
     */
    PhotoTransferPacket = 'PhotoTransferPacket',
    /**
     * 每当玩家执行动作（冲刺、停止冲刺、使用物品、挖掘/攻击、使用方块等）时，从客户端发送。
     *
     * Sent from the client whenever the player performs an action (dashing, un-dashing, use an item, mine/hit, use a block, etc).
     */
    PlayerActionPacket = 'PlayerActionPacket',
    /**
     * 每当玩家的护甲受到伤害时，从服务端发送。
     *
     * Sent from server whenever the player's armor takes damage.
     */
    PlayerArmorDamagePacket = 'PlayerArmorDamagePacket',
    /**
     * 客户端→服务端：玩家权威输入数据包（PlayerAuthInputPacket）。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/PlayerAuthInputPacket.html
     */
    PlayerAuthInputPacket = 'PlayerAuthInputPacket',
    /**
     * 当玩家右键点击附魔台时，从服务端发送新的附魔选项。
     *
     * Sends the of new Enchanting options  from the server when a player right clicks the enchantment table.
     */
    PlayerEnchantOptionsPacket = 'PlayerEnchantOptionsPacket',
    /**
     * 玩家迷雾数据包。
     *
     * Player Fog Packet
     */
    PlayerFogPacket = 'PlayerFogPacket',
    /**
     * 当玩家对实体或方块使用选取方块时，以及玩家使用 clear、give 或 replace 物品命令，或服务端玩家使用 _sendAdditionalLevelData() 时，从服务端发送。
     *
     * Sent from the server when the player uses pick block on actors or blocks, in addition to the player uses the clear, give, or replace item command or if the serverplayer uses _sendAdditionalLevelData().
     */
    PlayerHotbarPacket = 'PlayerHotbarPacket',
    /**
     * 用于同步玩家在线列表的数据包（PlayerListPacket）。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/PlayerListPacket.html
     */
    PlayerListPacket = 'PlayerListPacket',
    /**
     * 用于上报玩家位置的数据包（PlayerLocationPacket）。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/PlayerLocationPacket.html
     */
    PlayerLocationPacket = 'PlayerLocationPacket',
    /**
     * 当玩家更换皮肤时使用。
     *
     * Used when the player changes their skin
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/PlayerSkinPacket.html
     */
    PlayerSkinPacket = 'PlayerSkinPacket',
    /**
     * 玩家开始物品冷却。
     *
     * Player Start Item Cooldown
     */
    PlayerStartItemCooldownPacket = 'PlayerStartItemCooldownPacket',
    /**
     * 玩家切换合成器槽位请求数据包（PlayerToggleCrafterSlotRequestPacket）。
     *
     * PlayerToggleCrafterSlotRequestPacket
     */
    PlayerToggleCrafterSlotRequestPacket = 'PlayerToggleCrafterSlotRequestPacket',
    /**
     * 用于更新实体覆盖（overrides）的玩家相关数据包。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/PlayerUpdateEntityOverridesPacket.html
     */
    PlayerUpdateEntityOverridesPacket = 'PlayerUpdateEntityOverridesPacket',
    /**
     * 此数据包仅通过命令或脚本事件使用。用于第三方内容。
     *
     * This packet is only used via command or script event. This is for 3rd party content.
     */
    PlaySoundPacket = 'PlaySoundPacket',
    /**
     * 描述玩家的登录状态。
     *
     * Describes the login status of the player
     */
    PlayStatusPacket = 'PlayStatusPacket',
    /**
     * 位置跟踪数据库客户端请求。
     *
     * Position Tracking DB Client Request
     */
    PositionTrackingDBClientRequestPacket = 'PositionTrackingDBClientRequestPacket',
    /**
     * 用于服务端权威运行时数据库（带持久化 LevelStorage 备份）的服务端到客户端数据包，主要用于跟踪磁石相关内容。参见 bedrock-docs 中的 Position Tracking DB Notes.md。
     *
     * Server to client packet for server authoratative runtime database (with persistent LevelStorage backup) designed primarily to track lodestone stuff. See Position Tracking DB Notes.md in bedrock-docs.
     */
    PositionTrackingDBServerBroadcastPacket = 'PositionTrackingDBServerBroadcastPacket',
    /**
     * 将基本绘制形状信息（来自脚本）发送到客户端进行渲染。
     *
     * Send primitive drawing shape info (from scripting) to the client for rendering
     */
    PrimitiveShapesPacket = 'PrimitiveShapesPacket',
    /**
     * 从客户端发送到服务端。
     *
     * Sent from client to server
     */
    PurchaseReceiptPacket = 'PurchaseReceiptPacket',
    /**
     * 刷新权益。
     *
     * Refresh Entitlements
     */
    RefreshEntitlementsPacket = 'RefreshEntitlementsPacket',
    /**
     * 偶尔，在服务端玩家刻处理期间会花一些时间将附近的实体从世界中移除。
     *
     * Occasionally, during the server player tick some time is taken to remove nearby actors from the world.
     */
    RemoveActorPacket = 'RemoveActorPacket',
    /**
     * 用户可以使用 scoreboard 命令移除计分板上跟踪的记分项。
     *
     * Using the scoreboard command, users can remove objectives that are tracked on the scoreboard.
     */
    RemoveObjectivePacket = 'RemoveObjectivePacket',
    /**
     * 从服务端向客户端发送要移除的体积实体。
     *
     * Sends a volume entity to be removed from server to client.
     */
    RemoveVolumeEntityPacket = 'RemoveVolumeEntityPacket',
    /**
     * 从客户端发送到服务端。用于请求更改能力。
     *
     * Sent from client to server. Used to request an ability change.
     */
    RequestAbilityPacket = 'RequestAbilityPacket',
    /**
     * 客户端不能在未经服务端批准的情况下直接更改视野半径，否则未渲染区域可能会出现空洞。
     *
     * The client can't just change the view radius without the server's approval, otherwise there could be holes on unrendered area.
     */
    RequestChunkRadiusPacket = 'RequestChunkRadiusPacket',
    /**
     * 从主机向客户端请求可调选项（压缩阈值和算法）。
     *
     * Requests tunable options from host to client (compression threshold and algorithm).
     */
    RequestNetworkSettingsPacket = 'RequestNetworkSettingsPacket',
    /**
     * 从客户端发送到服务端。用于请求新的权限等级。
     *
     * Sent from client to server. Used to request a new Permissions Levels.
     */
    RequestPermissionsPacket = 'RequestPermissionsPacket',
    /**
     * 资源包分块数据。
     *
     * Resource Pack Chunk Data
     */
    ResourcePackChunkDataPacket = 'ResourcePackChunkDataPacket',
    /**
     * 资源包分块请求。
     *
     * Resource Pack Chunk Request
     */
    ResourcePackChunkRequestPacket = 'ResourcePackChunkRequestPacket',
    /**
     * 客户端→服务端：资源包响应数据包。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/ResourcePackClientResponsePacket.html
     */
    ResourcePackClientResponsePacket = 'ResourcePackClientResponsePacket',
    /**
     * 资源包数据信息。
     *
     * Resource Pack Data Info
     */
    ResourcePackDataInfoPacket = 'ResourcePackDataInfoPacket',
    /**
     * 用于向客户端发送资源包清单信息的数据包。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/ResourcePacksInfoPacket.html
     */
    ResourcePacksInfoPacket = 'ResourcePacksInfoPacket',
    /**
     * 用于通知服务端客户端已完成加载所有资源包。
     *
     * Used to inform the server that the client has finished loading all resource packs.
     */
    ResourcePacksReadyForValidationPacket = 'ResourcePacksReadyForValidationPacket',
    /**
     * 资源包栈。
     *
     * Resource Pack Stack
     */
    ResourcePackStackPacket = 'ResourcePackStackPacket',
    /**
     * 作为客户端与服务端之间的握手发送，用于使玩家重生。
     *
     * Sent as a handshake between the client and server to respawn the player.
     */
    RespawnPacket = 'RespawnPacket',
    /**
     * 用于在客户端与服务端之间发送自定义消息。
     *
     * Used to send custom messages between client and server.
     */
    ScriptMessagePacket = 'ScriptMessagePacket',
    /**
     * 由服务端发送到客户端，携带队伍目的地 cookie。
     *
     * Sent by the server to a client with a party destination cookie.
     */
    SendPartyDestinationCookiePacket = 'SendPartyDestinationCookiePacket',
    /**
     * 当数据驱动界面关闭时，从客户端发送到服务端。
     *
     * Sent from the client to the server when a data driven screen is closed.
     */
    ServerboundDataDrivenScreenClosedPacket = 'ServerboundDataDrivenScreenClosedPacket',
    /**
     * 从客户端向服务端数据存储应用一次更新。
     *
     * Applies a single update to the server data store from the client.
     */
    ServerboundDataStorePacket = 'ServerboundDataStorePacket',
    /**
     * 当 ProfilerLite 启用、且创作者开启了额外客户端遥测开关、且有新的遥测数据就绪（每 500 毫秒）时，从客户端发送到服务端。
     *
     * Sent from the client to the server IF ProfilerLite is enabled AND the creator toggle for additional client telemetry is enabled AND new telemetry data is ready (every 500 ms).
     */
    ServerboundDiagnosticsPacket = 'ServerboundDiagnosticsPacket',
    /**
     * 从客户端发送到服务端，用于向服务端告知加载界面的状态。
     *
     * Sent from the client to the server to message to the server about the state of the loading screen.
     */
    ServerboundLoadingScreenPacket = 'ServerboundLoadingScreenPacket',
    /**
     * 当玩家更改包设置（包 UI）时，从客户端发送到服务端。
     *
     * Sent from the client to the server when players change Pack Settings (pack UI).
     */
    ServerboundPackSettingChangePacket = 'ServerboundPackSettingChangePacket',
    /**
     * 用于在移动结束时将玩家的服务端位置发送到对应客户端。
     *
     * Used to send a player's server position to the respective client at the end of movement.
     */
    ServerPlayerPostMovePositionPacket = 'ServerPlayerPostMovePositionPacket',
    /**
     * 由服务端发送，以向客户端提供 PresenceConfiguration。
     *
     * Sent by the server to provide PresenceConfiguration to the client.
     */
    ServerPresenceInfoPacket = 'ServerPresenceInfoPacket',
    /**
     * 在客户端初始化世界设置期间发送。
     *
     * Sent during the initialization of world settings on the client.
     */
    ServerSettingsRequestPacket = 'ServerSettingsRequestPacket',
    /**
     * 服务端设置响应。
     *
     * Server Settings Response
     */
    ServerSettingsResponsePacket = 'ServerSettingsResponsePacket',
    /**
     * 用于将性能及其他有价值的统计数据发回客户端。
     *
     * Used to send performance and other valuable stats back to the client
     */
    ServerStatsPacket = 'ServerStatsPacket',
    /**
     * 由服务端发送，以向客户端提供 ClientStoreEntryPointConfiguration。
     *
     * Sent by the server to provide ClientStoreEntryPointConfiguration to the client.
     */
    ServerStoreInfoPacket = 'ServerStoreInfoPacket',
    /**
     * 服务端→客户端握手。
     *
     * Server->Client Handshake
     */
    ServerToClientHandshakePacket = 'ServerToClientHandshakePacket',
    /**
     * 用于设置实体数据（SetActorData）的服务端→客户端数据包。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/SetActorDataPacket.html
     */
    SetActorDataPacket = 'SetActorDataPacket',
    /**
     * 由客户端和服务端双方发送，仅由 LegacyClientHandler 接收。
     *
     * Sent by both client and server, only received by LegacyClientHandler.
     */
    SetActorLinkPacket = 'SetActorLinkPacket',
    /**
     * 用于服务端设置客户端实体的速度。
     *
     * This is used for the server to set the velocity of a client actor.
     */
    SetActorMotionPacket = 'SetActorMotionPacket',
    /**
     * 世界设置界面、作弊、面向教师的教育版构建以及其他各种地方使用它来启用作弊/命令。
     *
     * This is used by the world settings screen, cheats, EDU builds for teachers, and various other places to enable cheats/commands
     */
    SetCommandsEnabledPacket = 'SetCommandsEnabledPacket',
    /**
     * 与 SetPlayerGameTypePacket 和 UpdatePlayerGameTypePacket 相同，唯一区别是它会更改所有客户端的默认设置。
     *
     * Same as SetPlayerGameTypePacket & UpdatePlayerGameTypePacket, the only difference is that this changes the default for all clients.
     */
    SetDefaultGameTypePacket = 'SetDefaultGameTypePacket',
    /**
     * 设置难度。
     *
     * Set Difficulty
     */
    SetDifficultyPacket = 'SetDifficultyPacket',
    /**
     * 从服务端发送，供第三方内容显示当前记分项和状态。
     *
     * Sent from the server for 3rd party content to display current objectives and status
     */
    SetDisplayObjectivePacket = 'SetDisplayObjectivePacket',
    /**
     * 当玩家生成以及重生时，此数据包会发送到客户端。
     *
     * This packet is sent to the client when the player is spawned in and when they respawn.
     */
    SetHealthPacket = 'SetHealthPacket',
    /**
     * 此数据包仅通过 set hud 命令使用。用于第三方内容。
     *
     * This packet is only used via the set hud command. This is for 3rd party content.
     */
    SetHudPacket = 'SetHudPacket',
    /**
     * 每当玩家被击中时，最后攻击他们的生物的 id 会被发送到客户端。
     *
     * Any time a player is hit, the id of the last mob that attacked them is sent to the client
     */
    SetLastHurtByPacket = 'SetLastHurtByPacket',
    /**
     * 将本地玩家设为已初始化。
     *
     * Set Local Player As Initialized
     */
    SetLocalPlayerAsInitializedPacket = 'SetLocalPlayerAsInitializedPacket',
    /**
     * 设置玩家游戏模式。
     *
     * Set Player Game Type
     */
    SetPlayerGameTypePacket = 'SetPlayerGameTypePacket',
    /**
     * 设置玩家物品栏选项数据包（SetPlayerInventoryOptionsPacket）。
     *
     * SetPlayerInventoryOptionsPacket
     */
    SetPlayerInventoryOptionsPacket = 'SetPlayerInventoryOptionsPacket',
    /**
     * 用于设置计分板上身份信息的数据包（SetScoreboardIdentityPacket）。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/SetScoreboardIdentityPacket.html
     */
    SetScoreboardIdentityPacket = 'SetScoreboardIdentityPacket',
    /**
     * 用于设置计分板分数的数据包（SetScorePacket）。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/SetScorePacket.html
     */
    SetScorePacket = 'SetScorePacket',
    /**
     * 当玩家登录或使用 SetWorldSpawnCommand 时，从服务端发送到客户端。使用床时不会改变，那是一个单独的数据包（RespawnPacket）。
     *
     * When a player logs in or the SetWorldSpawnCommand is used this is sent from the server to the client. Does not change when using a bed, that is a separate packet (RespawnPacket)
     */
    SetSpawnPositionPacket = 'SetSpawnPositionPacket',
    /**
     * 设置时间。
     *
     * Set Time
     */
    SetTimePacket = 'SetTimePacket',
    /**
     * 请求通过命令更改某项设置。
     *
     * Requests a setting to be changed through commands.
     */
    SettingsCommandPacket = 'SettingsCommandPacket',
    /**
     * 供第三方内容用于显示 UI 横幅。
     *
     * Used by 3rd party content for the purpose of showing ui banners
     */
    SetTitlePacket = 'SetTitlePacket',
    /**
     * 当应弹出制作人员名单界面时，由服务端启动。
     *
     * Starts on server when the credits screen should pop up.
     */
    ShowCreditsPacket = 'ShowCreditsPacket',
    /**
     * 显示个人资料。
     *
     * Show Profile
     */
    ShowProfilePacket = 'ShowProfilePacket',
    /**
     * 用于将用户重定向到正确的商品项。
     *
     * Used for redirecting a user to the right offer.
     */
    ShowStoreOfferPacket = 'ShowStoreOfferPacket',
    /**
     * 此数据包用于启用/禁用命令以及解锁世界模板设置（既解锁客户端上的 UI 按钮，也解锁服务端上的实际设置）。
     *
     * This packet is used for enabling/disabling commands and for unlocking world template settings (both unlocking UI buttons on client and the actual setting on the server).
     */
    SimpleEventPacket = 'SimpleEventPacket',
    /**
     * 在为工具箱模式设置模拟类型时，从服务端发送到客户端。（尚未支持）
     *
     * Sent from the server to the client when setting the simulation type for toolbox mode. (Not yet suported)
     */
    SimulationTypePacket = 'SimulationTypePacket',
    /**
     * 生成经验球。
     *
     * Spawn Experience Orb
     */
    SpawnExperienceOrbPacket = 'SpawnExperienceOrbPacket',
    /**
     * 告知客户端生成一个粒子效果。
     *
     * Tell client to spawn a particle effect.
     */
    SpawnParticleEffectPacket = 'SpawnParticleEffectPacket',
    /**
     * 游戏开始时服务端→客户端的世界初始化数据包。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/StartGamePacket.html
     */
    StartGamePacket = 'StartGamePacket',
    /**
     * 允许你在所有客户端上停止某个声音或所有声音，仅在 /command 中使用。
     *
     * Allows you to stop a sound or all sounds on all clients, only used in a /command
     */
    StopSoundPacket = 'StopSoundPacket',
    /**
     * 用于同步结构方块（Structure Block）更新的数据包。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/StructureBlockUpdatePacket.html
     */
    StructureBlockUpdatePacket = 'StructureBlockUpdatePacket',
    /**
     * 用于从服务端请求结构信息。
     *
     * Used to request structure information from a server.
     */
    StructureTemplateDataRequestPacket = 'StructureTemplateDataRequestPacket',
    /**
     * 用于从加载导出、从存档导出，以及从结构方块查询已保存的结构。
     *
     * This is used in exporting from load, exporting from save, and querying saved structures from structure blocks.
     */
    StructureTemplateDataResponsePacket = 'StructureTemplateDataResponsePacket',
    /**
     * 服务端→客户端：子区块数据传输数据包。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/SubChunkPacket.html
     */
    SubChunkPacket = 'SubChunkPacket',
    /**
     * 从客户端发送到服务端，表示客户端向服务端请求的一批子区块。
     *
     * Sent from the client to the server representing a batch of subchunks that the client requests from the server
     */
    SubChunkRequestPacket = 'SubChunkRequestPacket',
    /**
     * 子客户端（split-screen）登录数据包。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/SubClientLoginPacket.html
     */
    SubClientLoginPacket = 'SubClientLoginPacket',
    /**
     * 允许我们跨网络同步实体属性。
     *
     * Allows us to synchronize Actor properties across the network.
     */
    SyncActorPropertyPacket = 'SyncActorPropertyPacket',
    /**
     * 从服务端向客户端初始化并同步世界时钟。（当前已禁用）
     *
     * Initializes and syncs world clocks from the server to clients. (Currently disabled)
     */
    SyncWorldClocksPacket = 'SyncWorldClocksPacket',
    /**
     * 当处理在世界地面上拾取物品时，发送到服务端的数据包。
     *
     * A packet sent to the server when deal with picking up an item off the ground in the world.
     */
    TakeItemActorPacket = 'TakeItemActorPacket',
    /**
     * 表示需要在游戏内显示的文本消息。
     *
     * Represents a text message that needs to be displayed in-game
     */
    TextPacket = 'TextPacket',
    /**
     * 用于通知客户端服务端正在等待常加载区域完成预加载。
     *
     * Used to inform the client that the server is waiting for ticking areas to finish preloading.
     */
    TickingAreasLoadStatusPacket = 'TickingAreasLoadStatusPacket',
    /**
     * 推送一条 UI toast 消息供客户端显示。
     *
     * Pushes a UI toast message to be displayed by the client
     */
    ToastRequestPacket = 'ToastRequestPacket',
    /**
     * 用于启动将客户端在在线游戏之间转移，也可用于使玩家退出世界并重新加入。
     *
     * Used to kick off transferring the client between online games, or it can be used to cause players to quit the world and rejoin.
     */
    TransferPacket = 'TransferPacket',
    /**
     * 盔甲纹饰（Trim）数据包。
     *
     * @see https://mojang.github.io/bedrock-protocol-docs/html/TrimDataPacket.html
     */
    TrimDataPacket = 'TrimDataPacket',
    /**
     * 从服务端发送到客户端，用于加载时所有先前已解锁的配方，以及游戏过程中任何新解锁的配方。
     *
     * Sent from server to client, for all previously unlocked recipes on load and for any newly unlocked recipes during gameplay.
     */
    UnlockedRecipesPacket = 'UnlockedRecipesPacket',
    /**
     * 由服务端发送，用于更新玩家能力的状态。
     *
     * Sent by the server to update the state of a player's Abilities.
     */
    UpdateAbilitiesPacket = 'UpdateAbilitiesPacket',
    /**
     * 更新冒险模式设置数据包（UpdateAdventureSettingsPacket）。
     *
     * UpdateAdventureSettingsPacket
     */
    UpdateAdventureSettingsPacket = 'UpdateAdventureSettingsPacket',
    /**
     * 更新属性。
     *
     * Update Attributes
     */
    UpdateAttributesPacket = 'UpdateAttributesPacket',
    /**
     * 当方块更新或被刻处理时，服务端偶尔发送的数据包。（例如挖掘时。）
     *
     * Occasional packets sent from server when blocks update or are ticked. (For example, when digging.)
     */
    UpdateBlockPacket = 'UpdateBlockPacket',
    /**
     * 用于与客户端同步移动的方块，使其正确渲染。
     *
     * Used to sync moving blocks with clients so they render correctly
     */
    UpdateBlockSyncedPacket = 'UpdateBlockSyncedPacket',
    /**
     * 更新客户端输入锁数据包（UpdateClientInputLocksPacket）。
     *
     * UpdateClientInputLocksPacket
     */
    UpdateClientInputLocksPacket = 'UpdateClientInputLocksPacket',
    /**
     * 将玩家的选项（主要是设置）同步到服务端。
     *
     * Sync the player's options (mostly settings) to the server.
     */
    UpdateClientOptionsPacket = 'UpdateClientOptionsPacket',
    /**
     * 似乎仅用于马的物品栏……更具体地说，是当玩家打开马的物品栏时。
     *
     * Seemingly only used for the Horse Inventory... More specifically when the player opens the horse inventory.
     */
    UpdateEquipPacket = 'UpdateEquipPacket',
    /**
     * 服务端在收到 SetPlayerGameTypePacket 后，会将其发回所有客户端，以便所有客户端上 mLevel 中缓存的游戏模式和权限标志保持最新。
     *
     * The server will send this back to all clients on receipt of the SetPlayerGameTypePacket so that cached game type and permissions flags in mLevel on all clients is kept up to date.
     */
    UpdatePlayerGameTypePacket = 'UpdatePlayerGameTypePacket',
    /**
     * 用于计分板和标签系统（绝大多数由第三方内容使用）。
     *
     * This is used for the scoreboard and tag systems (overwhelmingly used by 3rd party content)
     */
    UpdateSoftEnumPacket = 'UpdateSoftEnumPacket',
    /**
     * 每刻针对子区块中每组变化的方块发送的数据包。
     *
     * Packet sent for every set of blocks changed in a sub chunk every tick.
     */
    UpdateSubChunkBlocksPacket = 'UpdateSubChunkBlocksPacket',
    /**
     * 当玩家与 NPC 交易时使用。它会在一个大数据包中发送所有更新后的交易信息。
     *
     * This is used when the player trades with an npc. This sends all of the updated trade info in one big ol' packet.
     */
    UpdateTradePacket = 'UpdateTradePacket',
    /**
     * 在加入世界时，将客户端与服务端的体素形状数据同步。此数据包包含所有行为包体素形状数据的一份副本，并被 StartGamePacket 使用。
     *
     * Syncs client with server voxel shape data on world join. This packet contains a copy of all behavior pack voxel shapes data and is used by StartGamePacket.
     */
    VoxelShapesPacket = 'VoxelShapesPacket',
}
