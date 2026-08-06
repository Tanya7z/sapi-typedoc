/* IMPORT */ import { BlockBoundingBox, BlockLocationIterator, CompoundBlockVolumeItem, CompoundBlockVolumePositionRelativity, Vector3 } from '..';

/**
 * @beta
 * Compound Block Volume 是单个方块体积定义的集合，这些定义共同定义一个更大的（有时是非连续的）不规则形状的体积。
 * 该类大致基于 CSG（计算实体几何）的概念，允许用户通过构建体积和空洞的堆栈来创建复杂的体积，形成一个更大的单一体积。
 * 例如——通常创建者会为每个面创建 6 个"墙壁"表面来制作一个空心立方体。
 * 使用 Compound Block Volume，创建者可以通过创建一个单独的外部实体立方体，然后在较大的立方体内部定义一个单独的"空洞"立方体来制作一个空心立方体。
 * 同样，Compound Block Volume 可以表示不规则的形状体积（例如，一棵树由树干和许多树叶方块组成，这些方块不一定连续放置）。
 * 添加到 CompoundBlockVolume 的每个体积（默认情况下）都是相对于设置的原点（在构造时或通过某个 set 函数设置）的。
 * 然而，也可以将绝对性质的体积推送到复合集合中，这些体积不受原点变化的影响。
 *
 * The Compound Block Volume is a collection of individual
 * block volume definitions which, as a collection, define a
 * larger volume of (sometimes non-contiguous) irregular
 * shapes.
 * This class is loosely based on the concept of CSG
 * (Computational Solid Geometry) and allows a user to create
 * complex volumes by building a stack of volumes and voids to
 * make a larger single volume.
 * For example - normally a creator would create a hollow cube
 * by creating 6 "wall" surfaces for each face.
 * With a Compound Block Volume, a creator can define a hollow
 * cube by creating a single outer solid cube, and then
 * defining a further single 'void' cube inside the larger one.
 * Similarly, the Compound Block Volume can represent irregular
 * shaped volumes (e.g. a tree consists of a trunk and lots of
 * leaf cubes which are not necessarily contiguously placed).
 * Each of the volumes added to the CompoundBlockVolume are (by
 * default) relative to the origin set (either at construction
 * or via one of the set functions).
 * However, it is also possible to push volumes to the compound
 * collection which are absolute in nature and are not affected
 * by origin changes.
 */
export class CompoundBlockVolume {
    /**
     * @remarks
     * 返回表示堆栈中体积集合的边界矩形的"容量"。
     *
     * Return the 'capacity' of the bounding rectangle which
     * represents the collection of volumes in the stack
     *
     */
    readonly capacity: number;
    readonly items: CompoundBlockVolumeItem[];
    readonly itemsAbsolute: CompoundBlockVolumeItem[];
    /**
     * @remarks
     * 返回体积堆栈中体积（正向和负向）的数量。
     *
     * Return the number of volumes (positive and negative) in the
     * volume stack
     *
     */
    readonly volumeCount: number;
    /**
     * @remarks
     * 创建一个 CompoundBlockVolume 对象。
     *
     * Create a CompoundBlockVolume object
     *
     * @param origin
     * 一个可选的用于居中复合体积的世界空间原点。如果未指定，原点设置为 `(0,0,0)`。
     *
     * An optional world space origin on which to center the
     * compound volume.
     * If not specified, the origin is set to (0,0,0)
     */
    constructor(origin?: Vector3);
    /**
     * @remarks
     * 清空体积堆栈的内容。
     *
     * Clear the contents of the volume stack
     *
     * @worldMutation
     *
     */
    clear(): void;
    /**
     * @remarks
     * 获取 Compound Block Volume 的方块位置迭代器。此迭代器将允许创建者遍历更大边界区域内所有选中的体积。已被减去体积覆盖的体积区域将不包含在迭代器步骤中（即，如果你向堆栈推送一个立方体，然后向同一位置推送一个减去体积，迭代器将跳过初始体积，因为它被视为负空间）。请注意，此迭代器返回的方块位置是绝对世界空间坐标（无论推送的复合体积项是绝对的还是相对的）。
     *
     * Fetch a Block Location Iterator for the Compound Block
     * Volume.  This iterator will allow a creator to iterate
     * across all of the selected volumes within the larger
     * bounding area.
     * Areas of a volume which have been overridden by a
     * subtractive volume will not be included in the iterator
     * step.
     * (i.e. if you push a cube to the stack, and then push a
     * subtractive volume to the same location, then the iterator
     * will step over the initial volume because it is considered
     * negative space)
     * Note that the Block Locations returned by this iterator are
     * in absolute world space (irrespective of whether the
     * compound volume items pushed are absolute or relative)
     *
     * @worldMutation
     *
     */
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * @remarks
     * 获取表示堆栈上所有体积容器的最大的边界框。请注意，返回的边界框以绝对世界空间坐标表示（无论推送的复合体积项是绝对的还是相对的）。
     *
     * Get the largest bounding box that represents a container for
     * all of the volumes on the stack
     * Note that the bounding box returned is represented in
     * absolute world space  (irrespective of whether the compound
     * volume items pushed are absolute or relative)
     *
     * @worldMutation
     *
     */
    getBoundingBox(): BlockBoundingBox;
    /**
     * @remarks
     * 获取表示堆栈上体积的最外层边界矩形的最大方块位置。请注意，返回的最大位置以绝对世界空间坐标表示（无论推送的复合体积项是绝对的还是相对的）。
     *
     * Get the max block location of the outermost bounding
     * rectangle which represents the volumes on the stack.
     * Note that the max location returned is in absolute world
     * space (irrespective of whether the compound volume items
     * pushed are absolute or relative)
     *
     * @worldMutation
     *
     */
    getMax(): Vector3;
    /**
     * @remarks
     * 获取表示堆栈上体积的最外层边界矩形的最小方块位置。请注意，返回的最小位置以绝对世界空间坐标表示（无论推送的复合体积项是绝对的还是相对的）。
     *
     * Get the min block location of the outermost bounding
     * rectangle which represents the volumes on the stack.
     * Note that the min location returned is in absolute world
     * space (irrespective of whether the compound volume items
     * pushed are absolute or relative)
     *
     * @worldMutation
     *
     */
    getMin(): Vector3;
    /**
     * @remarks
     * 获取复合体积在世界空间中的原点。
     *
     * Fetch the origin in world space of the compound volume
     *
     * @worldMutation
     *
     */
    getOrigin(): Vector3;
    /**
     * @remarks
     * 返回一个布尔值，指示是否有体积项被推送到体积堆栈中。
     *
     * Return a boolean which signals if there are any volume items
     * pushed to the volume
     *
     * @worldMutation
     *
     */
    isEmpty(): boolean;
    /**
     * @remarks
     * 返回一个布尔值，表示给定的绝对世界空间方块位置是否在正向方块体积内部。例如，如果堆栈包含一个大立方体后面跟着一个稍小的负立方体，并且测试位置在负立方体内部——该函数将返回 `false`，因为它不在体积"内部"（它在边界矩形内部，但不在正确定义的位置内部）。
     *
     * Return a boolean representing whether or not a given
     * absolute world space block location is inside a positive
     * block volume.
     * E.g. if the stack contains a large cube followed by a
     * slightly smaller negative cube, and the test location is
     * within the negative cube - the function will return false
     * because it's not 'inside' a volume (it IS inside the
     * bounding rectangle, but it is not inside a positively
     * defined location)
     *
     * @worldMutation
     *
     */
    isInside(worldLocation: Vector3): boolean;
    /**
     * @remarks
     * 检查推送到体积堆栈的最后一个条目，而不影响堆栈内容。
     *
     * Inspect the last entry pushed to the volume stack without
     * affecting the stack contents.
     *
     * @worldMutation
     *
     * @param forceRelativity
     * 确定函数是否返回强制为相对或绝对坐标系的 CompoundBlockVolumeItem。
     * `true` = 强制返回的项相对于体积原点
     * `false` = 强制返回的项为绝对世界空间位置
     * 如果未指定标志，返回的项保留其推送时的相对性。
     *
     * Determine whether the function returns a
     * CompoundBlockVolumeItem which is forced into either relative
     * or absolute coordinate system.
     * `true` = force returned item to be relative to volume origin
     * `false` = force returned item to be absolute world space
     * location
     *
     * If no flag is specified, the item returned retains whatever
     * relativity it had when it was pushed
     * @returns
     * 如果堆栈为空则返回 `undefined`。
     *
     * Returns undefined if the stack is empty
     */
    peekLastVolume(forceRelativity?: CompoundBlockVolumePositionRelativity): CompoundBlockVolumeItem | undefined;
    /**
     * @remarks
     * 从体积堆栈中移除最后一个条目。这将使堆栈大小减一。
     *
     * Remove the last entry from the volume stack.  This will
     * reduce the stack size by one
     *
     * @worldMutation
     *
     */
    popVolume(): boolean;
    /**
     * @remarks
     * 将一个体积项推送到堆栈。该体积项包含一个 `action` 参数，用于确定该体积是正向空间还是负向空间。该项还包含一个 `locationRelativity`，用于确定它是相对于复合体积原点还是绝对的。
     *
     * Push a volume item to the stack.  The volume item contains
     * an 'action' parameter which determines whether this volume
     * is a positive or negative space.
     * The item also contains a `locationRelativity` which
     * determines whether it is relative or absolute to the
     * compound volume origin
     *
     * @worldMutation
     *
     * @param item
     * 要推送到堆栈末尾的项。
     *
     * Item to push to the end of the stack
     */
    pushVolume(item: CompoundBlockVolumeItem): void;
    /**
     * @remarks
     * 如果体积堆栈为空，此函数将推送指定项到堆栈。如果体积堆栈不为空，此函数将用新项替换堆栈上的最后一个项。
     *
     * If the volume stack is empty, this function will push the
     * specified item to the stack.
     * If the volume stack is NOT empty, this function will replace
     * the last item on the stack with the new item.
     *
     * @worldMutation
     *
     * @param item
     * 要添加或替换的项。
     *
     * Item to add or replace
     */
    replaceOrAddLastVolume(item: CompoundBlockVolumeItem): boolean;
    /**
     * @remarks
     * 将复合体积的原点设置为绝对世界空间位置。
     *
     * Set the origin of the compound volume to an absolute world
     * space location
     *
     * @worldMutation
     *
     * @param preserveExistingVolumes
     * 此可选的布尔标志确定相对的 `CompoundBlockVolumeItem` 是固定在原地，还是受新原点影响。
     * 想象一个场景，你有一系列围绕原点的相对位置，构成一个球体；所有这些位置的范围在 -2 到 2 之间。
     * 将这些位置作为相对项推送到复合体积中。
     * 现在，移动原点，表示球体的所有位置也会随之移动。
     * 然而，假设你想在第一个球体旁边添加第二个球体。
     * 在这种情况下，将新原点设置在几个位置之外，但设置 `preserveExistingVolumes` = `true`。
     * 这将设置一个新原点，但现有的球体位置将保持相对于原始原点。
     * 现在，你可以再次推送相对的球体位置（这次它们将相对于新原点）——结果得到两个相邻的球体。
     *
     * This optional boolean flag determines whether the relative
     * `CompoundBlockVolumeItem`'s are frozen in place, or are
     * affected by the new origin.
     * Imagine a scenario where you have a series of relative
     * locations around an origin which make up a sphere; all of
     * these locations are in the range of -2 to 2.
     * Push each of these locations to the compound volume as
     * relative items.
     * Now, move the origin and all of the locations representing
     * the sphere move accordingly.
     * However, let's say you want to add a 2nd sphere next to the
     * 1st.
     * In this case, set the new origin a few locations over, but
     * 'preserveExistingVolumes' = true.
     * This will set a new origin, but the existing sphere
     * locations will remain relative to the original origin.
     * Now, you can push the relative sphere locations again (this
     * time they will be relative to the new origin) - resulting in
     * 2 spheres next to each other.
     */
    setOrigin(position: Vector3, preserveExistingVolumes?: boolean): void;
    /**
     * @remarks
     * 类似于 {@link CompoundBlockVolume.setOrigin}——此函数会将原点按给定增量平移到一个新位置。
     *
     * Similar to {@link CompoundBlockVolume.setOrigin} - this
     * function will translate the origin by a given delta to a new
     * position
     *
     * @worldMutation
     *
     * @param preserveExistingVolumes
     * 参见 {@link CompoundBlockVolume.setOrigin} 参数的描述。
     *
     * See the description for the arguments to {@link
     * CompoundBlockVolume.setOrigin}
     */
    translateOrigin(delta: Vector3, preserveExistingVolumes?: boolean): void;
}
