/**
 * =========================================
 * LifeVerse Camera Controls
 *
 * OrbitControls
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

        // 开启阻尼（更丝滑）
        this.controls.enableDamping = true;

        // 阻尼系数
        this.controls.dampingFactor = 0.05;

        // 禁止飞到物体里面
        this.controls.minDistance = 2;

        this.controls.maxDistance = 50;

        // 限制上下旋转角度
        this.controls.maxPolarAngle = Math.PI;

    }

    update() {

        this.controls.update();

    }

}

export default Controls;