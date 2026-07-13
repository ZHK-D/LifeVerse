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

    }

    render(scene, camera) {

        this.renderPass.scene = scene;
        this.renderPass.camera = camera;

        this.composer.render();

    }

}

export default PostProcessor;