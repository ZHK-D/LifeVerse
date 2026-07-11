/**
 * =========================================
 * LifeVerse Engine
 * -----------------------------------------
 * 文件：AnimationLoop.js
 *
 * 功能：
 * 管理整个引擎的动画循环。
 *
 * 作者：
 * ZHK-D
 * =========================================
 */

class AnimationLoop {

    /**
     * 构造函数
     * @param {Function} callback 每帧执行的方法
     */
    constructor(callback) {

        this.callback = callback;

        this.running = false;

    }

    /**
     * 开始循环
     */
    start() {

        if (this.running) {

            return;

        }

        this.running = true;

        this.loop();

    }

    /**
     * 动画循环
     */
    loop() {

        if (!this.running) {

            return;

        }

        requestAnimationFrame(() => {

            this.loop();

        });

        this.callback();

    }

    /**
     * 停止循环
     */
    stop() {

        this.running = false;

    }

}

export default AnimationLoop;