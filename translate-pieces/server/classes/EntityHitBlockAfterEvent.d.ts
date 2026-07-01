/* IMPORT */ import { Block, BlockHitInformation, Dimension, Direction, Entity, Vector3 } from '..';

/**
 * 包含实体撞击方块后的相关信息。
 *
 * Contains information related to an entity hitting a block.
 */
export class EntityHitBlockAfterEvent {
    private constructor();
    readonly block: Block;
    readonly blockFace: Direction;
    readonly dimension: Dimension;
    readonly entity: Entity;
    readonly faceLocation: Vector3;
    readonly hitBlockInformation: BlockHitInformation;
    readonly location: Vector3;
}
