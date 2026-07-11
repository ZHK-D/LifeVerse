/**
 * =========================================
 * LifeVerse World System
 *
 * 文件：
 * World.js
 *
 * 功能：
 * 管理3D世界
 *
 * 当前：
 * 创建基础Scene
 *
 * =========================================
 */


import * as THREE from "three";



class World {


    constructor(){


        // 创建3D场景
        this.scene =
            new THREE.Scene();



        // 设置背景颜色
        this.scene.background =
            new THREE.Color(
                0x000000
            );


        // 创建测试立方体几何体
        const geometry =
            new THREE.BoxGeometry();


        // 创建材质
        const material =
            new THREE.MeshBasicMaterial({
                color:0x00ffff
            });


        // 创建Mesh
        const cube =
            new THREE.Mesh(
                geometry,
                material
            );


        // 加入世界
        this.scene.add(
            cube
        );


    }




    /**
     * 返回场景
     */
    getScene(){


        return this.scene;


    }


}



export default World;