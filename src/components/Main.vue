<script >

import { store } from '../store.js';
import Card from './Card.vue';
import Rettangolo from './Rettangolo.vue';
import Tick from './Tick.vue';

export default {
    components: {
        Rettangolo,
        Card,
        Tick
    },
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
            <div class="larghezza">
                <Card v-for="card in store.b3" :msg="card" />
            </div>
        </div>

        <div class="b4">
            <div class="larghezza">
                <Tick v-for="tick in store.b4" :msg="tick" />


            </div>
        </div>

        <div class="b5">
            <div class="larghezza">
                <div class="testo">
                    QUESTIONS ABOUT A JUDICAL ISSUE? ASK OUR EXPERTS.
                </div>
                <div class="button">
                    ASK AN EXPERT
                </div>
            </div>
        </div>

        <div class="b6">
            <div class="larghezza">
                <div class="title">
                    GLOBAL CHALLENGE. WORLD CLASS RESPONSE
                </div>
                <div class="riga"></div>
                <div class="rettangoli">
                    <div class="colonna" v-for="(colonna, indice) in store.b6">
                        <div class="title">
                            {{ colonna.titolo }}
                        </div>

                        <Rettangolo v-for="(cosa, index) in colonna.stuff" :msg="cosa" :colonna="indice + 1"
                            :immagine="index + 1" />

                    </div>

                </div>
            </div>
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
        // height: 300px;
        padding: 50px 0;

        .larghezza {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .b4 {

        background-color: white;
        border-top: 1px solid #e3e3e3;
        border-bottom: 1px solid #e3e3e3;
        padding: 50px 0;

        .larghezza {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    .b5 {
        padding: 40px 0;
        background-color: var(--color-green);

        .larghezza {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .testo {
            color: white;
            font-weight: 600;
        }

        .button {
            color: white;
            font-weight: 600;
            font-size: 12px;
            padding: 7px 20px;
            background-color: #ffffff13;
            border-radius: 2px;
            // per sicurezza aggiungo:
            display: flex;
            justify-content: center;
            align-items: center;

        }
    }

    .b6 {
        padding: 70px 0;

        .larghezza {
            display: flex;
            flex-direction: column;
            align-items: center;
        }



        .riga {
            width: 120px;
            margin-top: 30px;
            margin-bottom: 40px;
            border-bottom: 1px solid #ececec;

        }


        .title {
            font-size: 17px;
        }

        .colonna {
            width: 31%;
            // background-color: red;

            .title {
                font-size: 12px;
                font-weight: 700;
            }
        }

        .rettangoli {
            display: flex;
            justify-content: space-between;

            width: 100%;
        }
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
