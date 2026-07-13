/**
 * =========================================
 * LifeVerse Animation Manager
 *
 * 文件：
 * AnimationManager.js
 *
 * 功能：
 * 管理所有需要更新的对象
 *
 * =========================================
 */

class AnimationManager {

    constructor() {

        /**
         * 所有动画对象
         */
        this.objects = [];

    }

    /**
     * 注册动画对象
     *
     * 对象必须实现：
     * update(deltaTime)
     */
    add(object) {

        if (
            object &&
            typeof object.update === "function"
        ) {

            this.objects.push(object);

        }

    }

    /**
     * 移除动画对象
     */
    remove(object) {

        this.objects =
            this.objects.filter(
                item => item !== object
            );

    }

    /**
     * 更新全部动画
     */
    update(deltaTime) {

        for (const object of this.objects) {

            object.update(deltaTime);

        }

    }

}

export default AnimationManager;