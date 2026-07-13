/**
 * =========================================
 * LifeVerse Renderer System
 *
 * 文件：
 * Renderer.js
 *
 * 功能：
 * 管理Three.js渲染器
 *
 * 新增：
 * EffectComposer 后期处理系统
 *
 * =========================================
 */


// 导入Three.js
import * as THREE from "three";


// 导入后期处理
import PostProcessor from "../graphics/postprocessing/PostProcessor.js";




class Renderer {



    /**
     * 创建渲染器
     *
     * @param {HTMLElement} container
     */
    constructor(container){



        // 创建WebGL渲染器
        this.renderer =
            new THREE.WebGLRenderer({

                antialias:true

            });



        // 高清屏幕适配
        this.renderer.setPixelRatio(

            window.devicePixelRatio

        );



        // 设置尺寸
        this.renderer.setSize(

            window.innerWidth,

            window.innerHeight

        );



        // 添加Canvas
        container.appendChild(

            this.renderer.domElement

        );





        /**
         * 创建后期处理系统
         *
         * WebGLRenderer
         *
         *        |
         *
         *        ↓
         *
         * EffectComposer
         *
         */
        this.postProcessor =
            new PostProcessor(

                this.renderer

            );




        /**
         * 初始化 Composer 尺寸
         *
         * 修复：
         *
         * Framebuffer incomplete
         *
         * Attachment has zero size
         *
         */
        this.postProcessor.resize(

            window.innerWidth,

            window.innerHeight

        );




        // 窗口变化监听
        window.addEventListener(

            "resize",

            ()=>{

                this.resize();

            }

        );


    }







    /**
     * 渲染场景
     *
     * @param scene
     * @param camera
     */
    render(scene,camera){


        this.postProcessor.render(

            scene,

            camera

        );


    }








    /**
     * 窗口大小变化处理
     */
    resize(){



        const width =
            window.innerWidth;


        const height =
            window.innerHeight;




        // WebGL尺寸

        this.renderer.setPixelRatio(

            window.devicePixelRatio

        );


        this.renderer.setSize(

            width,

            height

        );




        // Composer尺寸同步

        this.postProcessor.resize(

            width,

            height

        );


    }








    /**
     * 获取Three渲染器
     */
    getRenderer(){


        return this.renderer;


    }



}



// 导出
export default Renderer;