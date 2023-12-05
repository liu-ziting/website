<script lang="ts" setup>
import { ref } from 'vue'
const snowflakes = ref(['小雪', '大雪', '圣诞', '快乐', '雪', '小雪', '大雪', '圣诞', '快乐'])
</script>

<template>
    <div class="snowflakes">
        <div class="snowflake" v-for="(snowflake, index) in snowflakes" :key="index">
            {{ snowflake }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.snowflake {
    color: #f29873;
    font-size: 1em;
    font-weight: bold;
    font-family: 'ALIBABA';
    text-shadow: 0 0 1px #f29873;
}

@-webkit-keyframes snowflakes-fall {
    0% {
        top: -10%;
    }
    100% {
        top: 100%;
    }
}
@-webkit-keyframes snowflakes-shake {
    0% {
        transform: translateX(0px);
    }
    50% {
        transform: translateX(80px);
    }
    100% {
        transform: translateX(0px);
    }
}
@keyframes snowflakes-fall {
    0% {
        top: -10%;
    }
    100% {
        top: 100%;
    }
}
@keyframes snowflakes-shake {
    0% {
        transform: translateX(0px);
    }
    50% {
        transform: translateX(80px);
    }
    100% {
        transform: translateX(0px);
    }
}
.snowflake {
    position: fixed;
    top: -10%;
    z-index: 9999;
    user-select: none;
    cursor: default;
    animation-name: snowflakes-fall, snowflakes-shake;
    animation-duration: 10s, 3s;
    animation-timing-function: linear, ease-in-out;
    animation-iteration-count: infinite, infinite;
    animation-play-state: running, running;
}
.snowflake:nth-of-type(0) {
    left: 1%;
    animation-delay: 0s, 0s;
}
.snowflake:nth-of-type(1) {
    left: 10%;
    animation-delay: 1s, 1s;
}
.snowflake:nth-of-type(2) {
    left: 20%;
    animation-delay: 6s, 0.5s;
}
.snowflake:nth-of-type(3) {
    left: 30%;
    animation-delay: 4s, 2s;
}
.snowflake:nth-of-type(4) {
    left: 40%;
    animation-delay: 2s, 2s;
}
.snowflake:nth-of-type(5) {
    left: 50%;
    animation-delay: 8s, 3s;
}
.snowflake:nth-of-type(6) {
    left: 60%;
    animation-delay: 6s, 2s;
}
.snowflake:nth-of-type(7) {
    left: 70%;
    animation-delay: 2.5s, 1s;
}
.snowflake:nth-of-type(8) {
    left: 80%;
    animation-delay: 1s, 0s;
}
.snowflake:nth-of-type(9) {
    left: 90%;
    animation-delay: 3s, 1.5s;
}
</style>
