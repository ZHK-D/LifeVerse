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


    constructor(){


        /**
         * 核心主体
         */
        const geometry =
            new THREE.SphereGeometry(
                1,
                64,
                64
            );


        const material =
            new THREE.MeshStandardMaterial({

                color:0x33ccff,

                emissive:0x0088ff,

                emissiveIntensity:3,

                metalness:0.8,

                roughness:0.12

            });



        this.mesh =
            new THREE.Mesh(
                geometry,
                material
            );



        /**
         * 外层能量球
         */
        const auraGeometry =
            new THREE.SphereGeometry(
                1.15,
                64,
                64
            );


        const auraMaterial =
            new THREE.MeshBasicMaterial({

                color:0x0088ff,

                transparent:true,

                opacity:0.18,

                side:THREE.BackSide

            });



        this.aura =
            new THREE.Mesh(
                auraGeometry,
                auraMaterial
            );


        this.mesh.add(
            this.aura
        );



        this.time = 0;


    }





    update(deltaTime){


        this.time += deltaTime;



        // 核心旋转

        this.mesh.rotation.y +=
            deltaTime * 0.4;



        // 呼吸

        const pulse =
            1 +
            Math.sin(
                this.time * 2
            )
            *
            0.05;



        this.mesh.scale.set(

            pulse,

            pulse,

            pulse

        );



        // 外层能量呼吸

        const auraScale =
            1 +
            Math.sin(
                this.time * 3
            )
            *
            0.08;



        this.aura.scale.set(

            auraScale,

            auraScale,

            auraScale

        );


    }





    getObject(){

        return this.mesh;

    }


}


export default CoreSphere;