/* IMPORT */ import { RGBA, Vector3 } from '../../server';
/* IMPORT */ import { GuidePlane } from '..';

export class GuidePlaneManager {
    private constructor();
    /**
     * @remarks
     * @privilege restricted-execution-read-only - @worldMutation
     *
     */
    allPlanesVisible: boolean;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    addPlane(
        origin: Vector3,
        normal: Vector3,
        visible: boolean,
        outlineColor: RGBA,
        fillColor: RGBA,
    ): string;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    getPlane(planeId: string): GuidePlane | undefined;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    getPlanes(): GuidePlane[];
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    removePlane(planeId: string): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    setPlaneColors(planeId: string, outlineColor: RGBA, fillColor: RGBA): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    setPlaneNormal(planeId: string, normal: Vector3): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    setPlaneOrigin(planeId: string, origin: Vector3): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - @worldMutation
     *
     * @throws This function can throw errors.
     */
    setPlaneVisibility(planeId: string, visible: boolean): void;
}
