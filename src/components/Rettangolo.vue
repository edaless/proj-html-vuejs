<script >



export default {
    props: ["msg", "colonna", "immagine",]
}

// console.log(colonna);

</script>

<template>
    <div class="contain">
        <div class="immagine">
            <img :src="'../../public/img/column' + colonna + '-image' + immagine + '.jpg'" alt="">
        </div>
        <div class="nome">

            {{ msg }}
        </div>


    </div>
</template>

<style lang="scss" scoped>
.contain {
    margin-top: 20px;
    padding: 15px;
    background-color: var(--sfondo-grey);
    display: flex;
    align-items: center;

    .immagine {
        width: 40px;
        height: 40px;
        margin-right: 20px;


        img {
            width: 100%;
        }
    }

    .nome {
        font-size: 10px;
        font-weight: 700;
        color: rgb(97, 97, 97);
    }
}
</style>
