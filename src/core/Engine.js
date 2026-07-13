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
 * 负责：
 * 1. 初始化系统
 * 2. 启动程序
 * 3. 更新循环
 *
 * 作者：
 * ZHK-D
 *
 * =========================================
 */


import Renderer from "../graphics/Renderer.js";

import World from "../world/World.js";

import Camera from "../graphics/Camera.js";

import Time from "./Time.js";

import AnimationLoop from "../systems/AnimationLoop.js";

import Controls from "../graphics/Controls.js";

import PostProcessor from "../graphics/postprocessing/PostProcessor.js";

class Engine {


    constructor(){


        this.running=false;


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



    init(){


        console.log(
            "Initializing LifeVerse..."
        );



        // 创建世界
        this.world =
            new World();



        // 创建渲染器
        this.renderer = new Renderer(
            this.container
        );

        // 创建后期处理器
        this.postProcessor =
            new PostProcessor(
                this.renderer.getRenderer()
            );

        // 创建鼠标控制器
        this.controls =
            new Controls(

                this.camera.getCamera(),

                this.renderer.getRenderer()

        );


    }




    start(){


        this.running=true;


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
     * 渲染画面
     */
    render() {

        this.postProcessor.render(

            this.world.getScene(),

            this.camera.getCamera()

        );

    }


}



export default Engine;