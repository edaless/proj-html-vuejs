<script >



export default {
    props: ["msg"]
}


</script>

<template>
    <div class="contain">
        <div class="corpo">
            <div class="title">
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


        .title {
            font-size: 16px;
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
