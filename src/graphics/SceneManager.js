/**
 * =========================================
 * LifeVerse Engine
 * -----------------------------------------
 * 文件：SceneManager.js
 *
 * 功能：
 * 统一管理 Three.js Scene。
 *
 * 作者：
 * ZHK-D
 * =========================================
 */

import * as THREE from "three";

class SceneManager {

    constructor() {

        this.scene = new THREE.Scene();

    }

    /**
     * 添加对象
     * @param {THREE.Object3D} object
     */
    add(object) {

        this.scene.add(object);

    }

    /**
     * 删除对象
     * @param {THREE.Object3D} object
     */
    remove(object) {

        this.scene.remove(object);

    }

    /**
     * 获取 Scene
     */
    getScene() {

        return this.scene;

    }

}

export default SceneManager;