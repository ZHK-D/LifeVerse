/**
 * =========================================
 * LifeVerse Sky System
 *
 * 功能：
 * 管理宇宙天空环境
 *
 * =========================================
 */


import * as THREE from "three";


class SkySystem {


    constructor(scene){


        this.scene = scene;


        this.createBackground();


        this.createFog();


    }





    /**
     * 创建深空背景
     */
    createBackground(){


        this.scene.background =
            new THREE.Color(
                0x02030a
            );


    }





    /**
     * 创建宇宙雾
     */
    createFog(){


        this.scene.fog =
            new THREE.FogExp2(

                0x02030a,

                0.0008

            );


    }



}



export default SkySystem;