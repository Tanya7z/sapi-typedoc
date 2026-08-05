/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { Vector3 } from '..';

/**
 * BlockLocationIterator 返回其正在迭代的方块体积中的下一个方块位置。
 * BlockLocationIterator 用于抽象其获取来源的方块体积的形状（因此它可以表示构成矩形、立方体、球体、线条和复杂形状的所有方块位置）。
 * 每次迭代传递返回父形状中的下一个有效方块位置。
 * 除非父形状另有指定，否则 BlockLocationIterator 将按 X 递增、然后 Z 递增、然后 Y 递增的顺序在 3D 空间中进行迭代。
 * （实际上是在 XZ 平面上逐步移动，当该平面中所有位置都遍历完毕后，将 Y 坐标递增到下一个 XZ 切片）。
 * 
 * A BlockLocationIterator returns the next block location of
 * the block volume across which it is iterating.
 * The BlockLocationIterator is used to abstract the shape of
 * the block volume it was fetched from (so it can represent
 * all the block locations that make up rectangles, cubes,
 * spheres, lines and complex shapes).
 * Each iteration pass returns the next valid block location in
 * the parent shape.
 * Unless otherwise specified by the parent shape - the
 * BlockLocationIterator will iterate over a 3D space in the
 * order of increasing X, followed by increasing Z followed by
 * increasing Y.
 * (Effectively stepping across the XZ plane, and when all the
 * locations in that plane are exhausted, increasing the Y
 * coordinate to the next XZ slice)
 */
export class BlockLocationIterator implements Iterable<Vector3> {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    [Symbol.iterator](): Iterator<Vector3>;
    /**
     * @beta
     * @remarks
     * 检查底层的方块体积是否已失效。如果方块体积在创建迭代器之后和迭代之前被修改，则返回 `false`，否则返回 `true`。
     * 
     * Checks if the underlining block volume has been invalidated.
     * Will return false if the block volume was modified between
     * creating the iterator and iterating it, and true otherwise.
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    isValid(): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    next(): IteratorResult<Vector3>;
}
