/**
 * =========================================
 * LifeVerse Star Field
 *
 * 文件：
 * StarField.js
 *
 * 功能：
 * 创建宇宙星空
 *
 * =========================================
 */

import * as THREE from "three";

class StarField {

    constructor(count = 3000) {

        this.points = this.createStars(count);

    }

    createStars(count) {

        const geometry = new THREE.BufferGeometry();

        const vertices = [];

        for (let i = 0; i < count; i++) {

            const x = (Math.random() - 0.5) * 300;
            const y = (Math.random() - 0.5) * 300;
            const z = (Math.random() - 0.5) * 300;

            vertices.push(x, y, z);

        }

        geometry.setAttribute(

            "position",

            new THREE.Float32BufferAttribute(
                vertices,
                3
            )

        );

        const material = new THREE.PointsMaterial({

            color: 0xffffff,

            size: 0.35,

            sizeAttenuation: true

        });

        return new THREE.Points(
            geometry,
            material
        );

    }

    getObject() {

        return this.points;

    }

}

export default StarField;