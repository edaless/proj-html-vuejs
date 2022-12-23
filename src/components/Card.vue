<script >



export default {
    props: ["msg", "immagine"],
    data() {
        return {
            immagini: [
                "../../public/img/law_7.jpg",
                "../../public/img/law_8.jpg",
                "../../public/img/law_3.jpg"
            ]
        }
    }
}


</script>

<template>
    <div class="contain">
        <div class="corpo">
            <div class="immagine" v-if="immagine">
                <img :src="immagini[immagine - 1]" alt="">
            </div>


            <div class="title">
                {{ msg.titolo }}
            </div>
            <div class="text">
                {{ msg.text }}
            </div>
            <!-- il button non ci sarà nelle card con immagine -->
            <div class="button" v-if="!immagine">
                LEARN MORE
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
$w-contain: 300px;

.contain {

    width: $w-contain;
    background-color: white;
    border-top: 4px solid var(--color-green);

    .corpo {
        width: 100%;
        height: 100%;
        padding: 30px;
        border: 1px solid rgb(228, 228, 228);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .immagine {
            width: 100%;
            margin-bottom: 20px;

            img {
                width: 100%;
            }
        }

        .title {
            font-size: 12px;
            font-weight: 800;
        }

        .text {
            font-size: 10px;
            display: flex;
            text-align: center;
            line-height: 20px;
            color: #545454;
            margin: 15px 0;
        }

        .button {
            background-color: var(--scritte-very-dark-grey);
            color: white;
            font-size: 12px;
            font-weight: 700;
            padding: 8px 13px;
            border-radius: 2px;
            // per sicurezza:
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>
