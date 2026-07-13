/**
 * =========================================
 * LifeVerse Core Sphere
 *
 * 功能：
 * 宇宙生命核心
 *
 * =========================================
 */

import * as THREE from "three";

class CoreSphere {

    constructor() {

        const geometry = new THREE.SphereGeometry(

            1,

            64,

            64

        );

        const material = new THREE.MeshStandardMaterial({

            color:0x33ccff,

            emissive:0x0088ff,

            emissiveIntensity:2,

            metalness:0.7,

            roughness:0.15

        });

        this.mesh = new THREE.Mesh(

            geometry,

            material

        );

        this.time = 0;

    }

    update(deltaTime){

        this.time += deltaTime;

        this.mesh.rotation.y += deltaTime * 0.4;

        const scale =

            1 +

            Math.sin(this.time * 2) * 0.05;

        this.mesh.scale.set(

            scale,

            scale,

            scale

        );

    }

    getObject(){

        return this.mesh;

    }

}

export default CoreSphere;