<script >

export default {
    props: ["msg"]
}


</script>

<template>
    <div class="contain">

        <i class="fa-sharp fa-solid fa-check"></i>
        <div class="title">
            {{ msg.titolo }}
        </div>
        <div class="text">
            {{ msg.text }}
        </div>



    </div>
</template>

<style lang="scss" scoped>
.contain {
    width: 190px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background-color: red;


    i {
        margin-bottom: 10px;
        font-size: 12px;
        color: var(--color-green);
    }

    .title {
        font-size: 11px;
        font-weight: 800;
    }

    .text {
        font-size: 11px;
        display: flex;
        text-align: center;
        line-height: 20px;
        color: #545454;
        margin-top: 10px;
        line-height: 20px;
    }
}
</style>
