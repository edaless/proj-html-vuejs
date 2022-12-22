<script >



export default {
    props: ["msg"]
}


</script>

<template>
    <div class="contain">
        <div class="corpo">
            <div class="titolo">
                {{ msg.titolo }}
            </div>
            <div class="text">
                {{ msg.text }}
            </div>
            <div class="button">
                LEARN MORE
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
$w-contain: 300px;

.contain {

    width: $w-contain;
    height: calc($w-contain * 0.8);
    background-color: white;
    border-top: 4px solid var(--color-green);

    .corpo {
        width: 100%;
        height: 100%;
        padding: 0 10%;
        border: 1px solid rgb(228, 228, 228);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;


        .titolo {
            font-weight: 600;
            color: var(--scritte-very-dark-grey);
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
            padding: 10px 15px;
            border-radius: 3px;
        }
    }
}
</style>
