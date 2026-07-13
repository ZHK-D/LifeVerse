/**
 * =========================================
 * LifeVerse Core Engine
 *
 * 文件：
 * Engine.js
 *
 * 功能：
 * 管理整个LifeVerse生命周期
 *
 * =========================================
 */

import Renderer from "../graphics/Renderer.js";
import World from "../world/World.js";
import Camera from "../graphics/Camera.js";
import Time from "./Time.js";
import AnimationLoop from "../systems/AnimationLoop.js";
import Controls from "../graphics/Controls.js";

class Engine {

    constructor() {

        this.running = false;

        // 获取网页容器
        this.container =
            document.querySelector("#app");

        // 创建摄像机
        this.camera =
            new Camera();

        // 创建时间系统
        this.time =
            new Time();

        // 创建动画循环
        this.animationLoop =
            new AnimationLoop(
                () => {

                    this.update();

                    this.render();

                }
            );

    }

    /**
     * 初始化
     */
    init() {

        console.log(
            "Initializing LifeVerse..."
        );

        // 创建世界
        this.world =
            new World();

        // 创建渲染器
        this.renderer =
            new Renderer(
                this.container
            );

        // 创建鼠标控制器
        this.controls =
            new Controls(

                this.camera.getCamera(),

                this.renderer.getRenderer()

            );

    }

    /**
     * 启动
     */
    start() {

        this.running = true;

        console.log(
            "LifeVerse Started"
        );

        this.animationLoop.start();

    }

    /**
     * 更新逻辑
     */
    update() {

        this.time.update();

        if (this.world) {

            this.world.update(

                this.time.deltaTime

            );

        }

        if (this.controls) {

            this.controls.update();

        }

    }

    /**
     * 渲染
     */
    render() {

        this.renderer.render(

            this.world.getScene(),

            this.camera.getCamera()

        );

    }

}

export default Engine;