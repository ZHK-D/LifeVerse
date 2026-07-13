/**
 * =========================================
 * LifeVerse Galaxy
 *
 * 文件：
 * Galaxy.js
 *
 * 功能：
 * 创建银河
 *
 * =========================================
 */

import * as THREE from "three";

class Galaxy {

    constructor(count = 8000) {

        this.points = this.createGalaxy(count);

        this.time = 0;

    }

    createGalaxy(count) {

        const geometry = new THREE.BufferGeometry();

        const positions = [];

        const colors = [];

        const colorInside = new THREE.Color(0x44ccff);

        const colorOutside = new THREE.Color(0xffffff);

        for (let i = 0; i < count; i++) {

            const radius = Math.random() * 40;

            const spin = radius * 0.4;

            const branch = (i % 4) * (Math.PI * 2 / 4);

            const randomX = (Math.random() - 0.5) * 1.2;
            const randomY = (Math.random() - 0.5) * 0.6;
            const randomZ = (Math.random() - 0.5) * 1.2;

            const angle = branch + spin;

            positions.push(
                Math.cos(angle) * radius + randomX,
                randomY,
                Math.sin(angle) * radius + randomZ
            );

            const color = colorInside.clone();

            color.lerp(
                colorOutside,
                radius / 40
            );

            colors.push(
                color.r,
                color.g,
                color.b
            );

        }

        geometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(
                positions,
                3
            )
        );

        geometry.setAttribute(
            "color",
            new THREE.Float32BufferAttribute(
                colors,
                3
            )
        );

        const material = new THREE.PointsMaterial({

            size: 0.12,

            vertexColors: true,

            depthWrite: false,

            blending: THREE.AdditiveBlending

        });

        return new THREE.Points(
            geometry,
            material
        );

    }

    update(deltaTime) {

        this.points.rotation.y += deltaTime * 0.02;

    }

    getObject() {

        return this.points;

    }

}

export default Galaxy;