<script >

import { store } from '../store.js';

export default {
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <div class="cont">
        <div class="b1">
            <div class="larghezza">
                <div class="text">
                    {{ store.b1 }}
                </div>

                <div class="socials">
                    <a href="#" class="social">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" class="social">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" class="social">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" class="social">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="b2">
            <img src="../../public/img/video_law_home_preview.jpg" alt="">
        </div>

        <div class="b3">

        </div>
    </div>
</template>

<style lang="scss" scoped>
.cont {
    // margin perché parta da sotto l'header
    margin-top: var(--h-header);




    .b1 {
        border-top: 2px solid var(--color-green);
        padding: 15px 0;
        color: var(--scritte-dark-grey);
        font-weight: 600;
        font-size: 12px;
        background-color: var(--sfondo-grey);


        .larghezza {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }


        .socials {
            display: flex;
        }

        .social {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--color-green);
            width: 35px;
            height: 35px;
            border-radius: 5px;
            font-size: 18px;
            margin-left: 15px;
            text-decoration: none;

            color: white;
        }
    }

    .b2 {

        height: 400px;
        overflow: hidden;
        // display: flex;
        // justify-content: center;
        // margin-top: -100px;
        object-fit: cover;

        img {
            margin-top: -50px;
            width: 100%;
            height: auto;
        }
    }

    .b3 {
        background-color: var(--sfondo-grey);
        height: 500px;
    }

}




@media screen and (max-width: 1154px) {
    .cont {


        .b2 {

            height: 300px;
        }
    }

}

@media screen and (max-width: 874px) {
    .cont {


        .b2 {

            height: 200px;
        }
    }

}
</style>
