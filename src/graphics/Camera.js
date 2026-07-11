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
 * 负责：
 * 1. 创建透视摄像机
 * 2. 管理窗口比例
 * 3. 更新摄像机
 *
 * 作者：
 * ZHK-D
 *
 * 版本：
 * v0.1.4
 *
 * =========================================
 */


// 导入Three.js
import * as THREE from "three";



class Camera {


    /**
     * 初始化摄像机
     */
    constructor(){


        // 创建透视摄像机
        this.camera =
            new THREE.PerspectiveCamera(

                // 视角范围
                75,

                // 屏幕比例
                window.innerWidth /
                window.innerHeight,

                // 最近距离
                0.1,

                // 最远距离
                1000

            );


        // 设置摄像机位置
        this.camera.position.z = 5;


        // 监听窗口变化
        window.addEventListener(
            "resize",
            ()=>{
                this.resize();
            }
        );


    }



    /**
     * 窗口变化更新比例
     */
    resize(){


        this.camera.aspect =
            window.innerWidth /
            window.innerHeight;


        this.camera.updateProjectionMatrix();


    }




    /**
     * 返回Three.js Camera
     */
    getCamera(){


        return this.camera;


    }


}



export default Camera;