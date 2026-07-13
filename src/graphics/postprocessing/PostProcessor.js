/**
 * =========================================
 * LifeVerse Post Processor
 *
 * 功能：
 * 管理所有后期处理
 *
 * 当前：
 * EffectComposer
 * RenderPass
 * UnrealBloomPass
 * OutputPass
 *
 * =========================================
 */


import { EffectComposer } 
from "three/examples/jsm/postprocessing/EffectComposer.js";


import { RenderPass } 
from "three/examples/jsm/postprocessing/RenderPass.js";


import { OutputPass } 
from "three/examples/jsm/postprocessing/OutputPass.js";


import { UnrealBloomPass } 
from "three/examples/jsm/postprocessing/UnrealBloomPass.js";


import { Vector2 } 
from "three";



class PostProcessor {



    constructor(renderer) {



        this.renderer = renderer;



        /**
         * 创建 Composer
         */
        this.composer =
            new EffectComposer(
                renderer
            );



        /**
         * 关键修复：
         *
         * 初始化 RenderTarget 尺寸
         */
        this.composer.setSize(

            window.innerWidth,

            window.innerHeight

        );





        /**
         * 场景渲染 Pass
         */
        this.renderPass =
            new RenderPass(

                null,

                null

            );



        this.composer.addPass(

            this.renderPass

        );





        /**
         * Bloom辉光
         */
        this.bloomPass =
            new UnrealBloomPass(

                new Vector2(

                    window.innerWidth,

                    window.innerHeight

                ),

                1.5,

                0.4,

                0.85

            );



        this.composer.addPass(

            this.bloomPass

        );





        /**
         * 输出 Pass
         */
        this.outputPass =
            new OutputPass();



        this.composer.addPass(

            this.outputPass

        );


    }






    /**
     * 调整尺寸
     */
    resize(width,height){



        this.composer.setSize(

            width,

            height

        );



        /**
         * Bloom同步尺寸
         */
        this.bloomPass.setSize(

            width,

            height

        );


    }







    /**
     * 渲染
     */
    render(scene,camera){



        this.renderPass.scene =
            scene;


        this.renderPass.camera =
            camera;



        this.composer.render();


    }



}



export default PostProcessor;