<script >

import { store } from '../store.js';

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        changeActive(index) {
            // rendo falso lo stato active in tutti gli elementi
            (store.a1).forEach(element => {
                element.active = false;
            });
            // rendo vero lo stato dell'elemeno alla posizione passata al richiamo della funzione
            store.a1[index].active = true;
        }
    }
}

</script>

<template>



    <div class="a1">
        <div class="larghezza">
            <div class="logo">
                <img src="../../public/img/avada-law-logo.png" alt="">
            </div>

            <div class="links">
                <div class="link" v-for="(link, index) in store.a1" :class="link.active === true ? 'active' : ''"
                    @click="changeActive(index)">
                    {{ link.text }}
                </div>
            </div>


        </div>
    </div>


</template>

<style lang="scss" scoped>
$color-header: #ffffff;

.a1 {
    height: var(--h-header);
    // box-shadow: 2px black;
    position: fixed;
    top: 0;
    background-color: $color-header;
    width: 100%;
}

.larghezza {

    display: flex;
    justify-content: space-between;
    align-items: center;

}

.logo {
    height: var(--h-header);
    padding: 5px 0;

    display: flex;
    align-items: center;
    justify-content: center;



    img {
        height: 70%;
    }
}

.links {
    height: 100%;
    // background-color: aqua;
    display: flex;
}

.link {
    display: flex;
    align-items: center;
    height: var(--h-header);
    margin-left: 20px;
    font-size: 11px;
    font-weight: 600;
    color: #858a8d;

    &:hover,
    &.active {
        color: var(--color-green);
        border-top: 2px solid var(--color-green);

        // border bottom dello stesso colore dello sfondo in modo che non si sposti la scritta
        border-bottom: 2px solid $color-header;
    }

}
</style>
