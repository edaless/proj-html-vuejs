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
    </div>
</template>

<style lang="scss" scoped>
.cont {
    // margin perché parta da sotto l'header
    margin-top: var(--h-header);


}

.b1 {
    border-top: 2px solid var(--color-green);
    padding: 15px 0;
    color: var(--scritte-dark-grey);
    font-weight: 600;
    font-size: 12px;
    background-color: #fcfcfc;

    .larghezza {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
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
</style>
