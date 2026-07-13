/**
 * =========================================
 * LifeVerse Planet
 *
 * 功能：
 * 创建行星
 *
 * =========================================
 */

import * as THREE from "three";

class Planet {

    constructor() {

        const geometry =
            new THREE.SphereGeometry(
                0.6,
                48,
                48
            );

        const material =
            new THREE.MeshStandardMaterial({

                color: 0x6ea8ff,

                roughness: 0.9,

                metalness: 0.1

            });

        this.mesh =
            new THREE.Mesh(
                geometry,
                material
            );

        // 放在生命核心右侧
        this.mesh.position.set(
            4,
            0,
            0
        );

        this.angle = 0;

    }

    update(deltaTime) {

        // 自转
        this.mesh.rotation.y +=
            deltaTime * 0.4;

        // 公转
        this.angle +=
            deltaTime * 0.2;

        this.mesh.position.x =
            Math.cos(this.angle) * 4;

        this.mesh.position.z =
            Math.sin(this.angle) * 4;

    }

    getObject() {

        return this.mesh;

    }

}

export default Planet;