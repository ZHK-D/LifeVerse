/**
 * =========================================
 * LifeVerse Orbit Controls
 *
 * 文件：
 * Controls.js
 *
 * 功能：
 * 管理鼠标控制
 *
 * =========================================
 */

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

class Controls {

    constructor(camera, renderer) {

        this.controls = new OrbitControls(

            camera,

            renderer.domElement

        );

        // 开启阻尼（更加丝滑）
        this.controls.enableDamping = true;

        this.controls.dampingFactor = 0.05;

        // 缩放距离
        this.controls.minDistance = 2;
        this.controls.maxDistance = 80;

        // 防止翻转
        this.controls.maxPolarAngle = Math.PI;

    }

    update() {

        this.controls.update();

    }

}

export default Controls;