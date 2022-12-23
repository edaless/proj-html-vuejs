<script >


</script>

<template>
    <div class="cont">
        <div class="larghezza">
            <strong>LET'S WORK TOGETHER</strong>
            <div class="riga"></div>
            <p>
                We work as a single team with the market leading firms around the world and give our clients the highest
                quality advice possible.

            </p>
            <div class="button">
                MAKE ENQUIRY
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cont {
    background-image: url("../../public/img/where-we-work-parallax.jpg");

    height: 400px;
    background-size: cover;
    background-position: center;
    color: white;

    .larghezza {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;

        .riga {
            width: 120px;
            margin-top: 30px;
            margin-bottom: 40px;
            border-bottom: 1px solid #ececec12;

        }

        p {
            text-align: center;
            width: 70%;
            line-height: 30px;
            font-weight: 600;
        }

        .button {
            margin-top: 40px;
            padding: 15px 25px;
            background-color: var(--color-green);
        }
    }
}
</style>
