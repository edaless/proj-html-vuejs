<script >

export default {
    props: ["msg"]
}


</script>

<template>
    <div class="contain">

        <i class="fa-sharp fa-solid fa-check"></i>
        <div class="titolo">
            {{ msg.titolo }}
        </div>
        <div class="text">
            {{ msg.text }}
        </div>



    </div>
</template>

<style lang="scss" scoped>
.contain {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background-color: red;


    i {
        margin-bottom: 10px;
        font-size: 20px;
        color: var(--color-green);
    }

    .titolo {
        font-size: 14px;
        font-weight: 600;
        color: var(--scritte-very-dark-grey);
    }

    .text {
        font-size: 12px;
        display: flex;
        text-align: center;
        line-height: 20px;
        color: #545454;
        margin-top: 15px;
    }
}
</style>
