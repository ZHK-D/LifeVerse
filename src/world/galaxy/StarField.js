/**
 * =========================================
 * LifeVerse Star Field
 *
 * 文件：
 * StarField.js
 *
 * 功能：
 * 创建动态宇宙星空
 *
 * 新增：
 * 1. 多层星空
 * 2. 星星闪烁
 * 3. 银河缓慢旋转
 *
 * =========================================
 */


import * as THREE from "three";



class StarField {



    constructor(count = 3000) {


        this.time = 0;


        this.points =
            this.createStars(count);


    }





    createStars(count){


        const geometry =
            new THREE.BufferGeometry();



        const positions = [];

        const sizes = [];



        for(let i = 0; i < count; i++){



            /**
             * 创建空间范围
             */
            const radius =
                300;



            const x =
                (Math.random()-0.5)
                * radius;


            const y =
                (Math.random()-0.5)
                * radius;


            const z =
                (Math.random()-0.5)
                * radius;



            positions.push(

                x,

                y,

                z

            );



            /**
             * 随机星星大小
             */
            sizes.push(

                Math.random()

            );


        }




        geometry.setAttribute(

            "position",

            new THREE.Float32BufferAttribute(

                positions,

                3

            )

        );



        geometry.setAttribute(

            "size",

            new THREE.Float32BufferAttribute(

                sizes,

                1

            )

        );





        const material =
            new THREE.PointsMaterial({



                color:0xffffff,



                size:0.35,



                sizeAttenuation:true



            });





        const points =
            new THREE.Points(

                geometry,

                material

            );



        return points;


    }







    /**
     * 更新星空
     */
    update(deltaTime){



        this.time += deltaTime;



        /**
         * 银河缓慢旋转
         */
        this.points.rotation.y +=

            deltaTime * 0.01;





        /**
         * 星光呼吸
         */
        const scale =

            1 +

            Math.sin(
                this.time * 2
            )
            *
            0.08;



        this.points.scale.set(

            scale,

            scale,

            scale

        );


    }







    getObject(){


        return this.points;


    }


}



export default StarField;