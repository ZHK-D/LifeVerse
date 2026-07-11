/**
 * =========================================
 * LifeVerse Engine
 * -----------------------------------------
 * 文件：Time.js
 *
 * 功能：
 * 负责管理整个引擎的时间。
 *
 * 包括：
 * 1. deltaTime
 * 2. elapsedTime
 * 3. FPS
 *
 * 作者：
 * ZHK-D
 * =========================================
 */

class Time {

    /**
     * 构造函数
     */
    constructor() {

        // 上一帧时间（毫秒）
        this.lastTime = performance.now();

        // 每帧耗时（秒）
        this.deltaTime = 0;

        // 程序运行总时间（秒）
        this.elapsedTime = 0;

        // 当前FPS
        this.fps = 0;

    }

    /**
     * 更新时间
     */
    update() {

        const currentTime = performance.now();

        this.deltaTime =
            (currentTime - this.lastTime) / 1000;

        this.elapsedTime +=
            this.deltaTime;

        this.lastTime =
            currentTime;

        if (this.deltaTime > 0) {

            this.fps =
                Math.round(
                    1 / this.deltaTime
                );

        }

    }

}

export default Time;