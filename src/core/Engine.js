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


    }



    init(){


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


    }




    start(){


        this.running=true;


        console.log(
            "LifeVerse Started"
        );



        this.loop();


    }




    loop(){


        requestAnimationFrame(
            ()=>{
                this.loop();
            }
        );


        // 更新时间
        this.time.update();


        // 渲染当前世界
        this.renderer
            .getRenderer()
            .render(
                this.world.getScene(),
                this.camera.getCamera()

            );


    }


}



export default Engine;