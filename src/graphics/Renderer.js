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
 * 负责：
 * 1. 创建WebGL Renderer
 * 2. 设置画布
 * 3. 管理窗口变化
 *
 * 作者：
 * ZHK-D
 *
 * =========================================
 */


// 导入Three.js
import * as THREE from "three";



class Renderer {


    /**
     * 创建渲染器
     *
     * @param {HTMLElement} container
     * 页面容器
     */
    constructor(container){


        // 创建WebGL渲染器
        this.renderer =
            new THREE.WebGLRenderer({
                antialias:true
            });



        // 设置屏幕尺寸
        this.renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );



        // 添加到网页
        container.appendChild(
            this.renderer.domElement
        );



        // 监听窗口变化
        window.addEventListener(
            "resize",
            ()=>{
                this.resize();
            }
        );


    }




    /**
     * 窗口大小变化处理
     */
    resize(){


        this.renderer.setSize(
            window.innerWidth,
            window.innerHeight
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