/**
 * =========================================
 * LifeVerse Post Processor
 *
 * 功能：
 * 管理所有后期处理
 *
 * 当前：
 * EffectComposer + RenderPass
 *
 * =========================================
 */

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

class PostProcessor {

    constructor(renderer) {

        this.renderer = renderer;

        this.composer =
            new EffectComposer(
                renderer
            );

        this.renderPass =
            new RenderPass(
                null,
                null
            );

        this.composer.addPass(
            this.renderPass
        );

        this.outputPass =
            new OutputPass();

        this.composer.addPass(
            this.outputPass
        );

    }

     /**
     * 调整渲染尺寸
     */
    resize(width, height) {

        this.composer.setSize(
            width,
            height
        );

    }

    /**
     * 渲染
     */
    render(scene, camera) {

        this.renderPass.scene = scene;
        this.renderPass.camera = camera;

        this.composer.render();

    }
}

export default PostProcessor;