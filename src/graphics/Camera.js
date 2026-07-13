/**
 * =========================================
 * LifeVerse Camera System
 *
 * 文件：
 * Camera.js
 *
 * 功能：
 * 管理3D世界观察视角
 *
 * 新增：
 * 1. OrbitControls
 * 2. 平滑阻尼
 * 3. 自动环绕
 *
 * =========================================
 */


import * as THREE from "three";

import { OrbitControls }
from "three/examples/jsm/controls/OrbitControls.js";




class Camera {



    constructor(){



        /**
         * 创建透视摄像机
         */
        this.camera =
            new THREE.PerspectiveCamera(

                75,

                window.innerWidth /
                window.innerHeight,

                0.1,

                2000

            );




        /**
         * 初始位置
         */
        this.camera.position.set(

            0,

            2,

            8

        );






        /**
         * 控制器
         */
        this.controls =
            new OrbitControls(

                this.camera,

                document.body

            );



        /**
         * 平滑阻尼
         */
        this.controls.enableDamping = true;



        this.controls.dampingFactor =
            0.05;



        /**
         * 最大最小距离
         */
        this.controls.minDistance =
            3;


        this.controls.maxDistance =
            50;




        /**
         * 自动旋转
         */
        this.controls.autoRotate =
            true;



        this.controls.autoRotateSpeed =
            0.3;




        /**
         * 默认观察中心
         */
        this.controls.target.set(

            0,

            0,

            0

        );



        this.controls.update();






        /**
         * 窗口变化
         */
        window.addEventListener(

            "resize",

            ()=>{

                this.resize();

            }

        );



    }








    /**
     * 更新Camera
     *
     * 每帧调用
     */
    update(){


        if(this.controls){


            this.controls.update();


        }


    }







    /**
     * 窗口变化
     */
    resize(){



        this.camera.aspect =

            window.innerWidth /

            window.innerHeight;



        this.camera.updateProjectionMatrix();



    }







    /**
     * 返回Camera
     */
    getCamera(){


        return this.camera;


    }


}



export default Camera;