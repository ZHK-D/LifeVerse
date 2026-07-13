/**
 * =========================================
 * LifeVerse World System
 *
 * 文件：
 * World.js
 *
 * 功能：
 * 管理整个3D世界
 *
 * =========================================
 */

import * as THREE from "three";
import SceneManager from "../graphics/SceneManager.js";
import StarField from "./galaxy/StarField.js";
import CoreSphere from "./objects/CoreSphere.js";

class World {

    constructor() {

        // 场景管理器
        this.sceneManager = new SceneManager();

        // Scene
        this.scene = this.sceneManager.getScene();

        // 背景
        this.scene.background = new THREE.Color(0x050510);

        // 初始化
        this.createLights();

        this.createStarField();

        this.createCore();

    }

    /**
     * 创建灯光
     */
    createLights() {

        const ambientLight =
            new THREE.AmbientLight(
                0xffffff,
                1.2
            );

        this.scene.add(
            ambientLight
        );

        const directionalLight =
            new THREE.DirectionalLight(
                0xffffff,
                2
            );

        directionalLight.position.set(
            5,
            5,
            5
        );

        this.scene.add(
            directionalLight
        );

    }

    /**
     * 创建星空
     */
    createStarField() {

        this.starField = new StarField(3000);

        this.scene.add(
            this.starField.getObject()
        );

    }

    /**
     * 创建中心
     */
    createCore(){

        this.core = new CoreSphere();

        this.scene.add(

            this.core.getObject()

        );

    }

    /**
     * 创建测试立方体
     */
    createCube() {

        const geometry =
            new THREE.BoxGeometry(
                1,
                1,
                1
            );

        const material =
            new THREE.MeshStandardMaterial({

                color:0x00ffff,

                metalness:0.5,

                roughness:0.3

            });

        this.cube =
            new THREE.Mesh(
                geometry,
                material
            );

        this.sceneManager.add(
            this.cube
        );

    }

    /**
     * 更新世界
     */
    update(deltaTime) {

        if(this.core){

            this.core.update(

                deltaTime

            );

        }

    }

    /**
     * 返回Scene
     */
    getScene() {

        return this.scene;

    }

}

export default World;