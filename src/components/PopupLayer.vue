<script setup lang="ts">
import { ref } from 'vue'

const link = ref('')
const loading = ref(true)
const showLayer = ref(false)
const fullScreenType = ref(false)
const closeLayer = () => {
    showLayer.value = false
}
const openLayer = async (src: string) => {
    showLayer.value = true
    loading.value = true
    link.value = src
}
const handleLoad = () => {
    loading.value = false
}
const openLink = () => {
    window.open(link.value)
}
const fullScreen = () => {
    fullScreenType.value = !fullScreenType.value
}
// 暴露方法和属性给父组件
defineExpose({ openLayer })
</script>
<template>
    <div class="layer" v-show="showLayer" @click="closeLayer">
        <div :class="['content', fullScreenType ? 'fullScreen' : '']" @click.stop>
            <div class="svg-box">
                <p>{{ link }}</p>
                <svg
                    @click="closeLayer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="close"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <svg
                    @click="openLink"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                </svg>
                <svg
                    v-if="!fullScreenType"
                    @click="fullScreen"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="fullScreenSvg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                </svg>
                <svg
                    v-if="fullScreenType"
                    @click="fullScreen"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="fullScreenSvg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
                    />
                </svg>
            </div>

            <div class="container loading" v-show="loading">
                <div class="slice"></div>
                <div class="slice"></div>
                <div class="slice"></div>
                <div class="slice"></div>
                <div class="slice"></div>
                <div class="slice"></div>
            </div>

            <iframe v-show="!loading" :src="link" @load="handleLoad" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.layer {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    .content {
        width: 80vw;
        height: 90vh;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        .svg-box {
            width: 100%;
            height: 30px;
            background-color: #f1f1f1;
            border-radius: 10px 10px 0 0;
            padding: 2 0px;
            p {
                float: left;
                font-size: 12px;
                color: #999;
                line-height: 30px;
                padding-left: 10px;
            }
            svg {
                width: 20px;
                float: right;
                cursor: pointer;
                margin-top: 5px;
                margin-right: 10px;
            }
            .close {
                width: 22px;
            }
        }
    }
    .fullScreen {
        width: 100%;
        height: 100%;
        border-radius: 0;
        box-shadow: none;
    }
    iframe {
        width: 100%;
        height: calc(100% - 50px);
        border: none;
        overflow: hidden;
        background-color: #fff;
    }
    .loading {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
.container {
    --uib-size: 45px;
    --uib-color: black;
    --uib-speed: 2.5s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: var(--uib-size);
    width: var(--uib-size);
}

.slice {
    position: relative;
    height: calc(var(--uib-size) / 6);
    width: 100%;
}

.slice::before,
.slice::after {
    --uib-a: calc(var(--uib-speed) / -2);
    --uib-b: calc(var(--uib-speed) / -6);
    content: '';
    position: absolute;
    top: 0;
    left: calc(50% - var(--uib-size) / 12);
    height: 100%;
    width: calc(100% / 6);
    border-radius: 50%;
    background-color: var(--uib-color);
    flex-shrink: 0;
    animation: orbit var(--uib-speed) linear infinite;
    transition: background-color 0.3s ease;
}

.slice:nth-child(1)::after {
    animation-delay: var(--uib-a);
}

.slice:nth-child(2)::before {
    animation-delay: var(--uib-b);
}

.slice:nth-child(2)::after {
    animation-delay: calc(var(--uib-a) + var(--uib-b));
}

.slice:nth-child(3)::before {
    animation-delay: calc(var(--uib-b) * 2);
}
.slice:nth-child(3)::after {
    animation-delay: calc(var(--uib-a) + var(--uib-b) * 2);
}

.slice:nth-child(4)::before {
    animation-delay: calc(var(--uib-b) * 3);
}
.slice:nth-child(4)::after {
    animation-delay: calc(var(--uib-a) + var(--uib-b) * 3);
}

.slice:nth-child(5)::before {
    animation-delay: calc(var(--uib-b) * 4);
}
.slice:nth-child(5)::after {
    animation-delay: calc(var(--uib-a) + var(--uib-b) * 4);
}

.slice:nth-child(6)::before {
    animation-delay: calc(var(--uib-b) * 5);
}
.slice:nth-child(6)::after {
    animation-delay: calc(var(--uib-a) + var(--uib-b) * 5);
}

@keyframes orbit {
    0% {
        transform: translateX(calc(var(--uib-size) * 0.25)) scale(0.73684);
        opacity: 0.65;
    }
    5% {
        transform: translateX(calc(var(--uib-size) * 0.235)) scale(0.684208);
        opacity: 0.58;
    }
    10% {
        transform: translateX(calc(var(--uib-size) * 0.182)) scale(0.631576);
        opacity: 0.51;
    }
    15% {
        transform: translateX(calc(var(--uib-size) * 0.129)) scale(0.578944);
        opacity: 0.44;
    }
    20% {
        transform: translateX(calc(var(--uib-size) * 0.076)) scale(0.526312);
        opacity: 0.37;
    }
    25% {
        transform: translateX(0%) scale(0.47368);
        opacity: 0.3;
    }
    30% {
        transform: translateX(calc(var(--uib-size) * -0.076)) scale(0.526312);
        opacity: 0.37;
    }
    35% {
        transform: translateX(calc(var(--uib-size) * -0.129)) scale(0.578944);
        opacity: 0.44;
    }
    40% {
        transform: translateX(calc(var(--uib-size) * -0.182)) scale(0.631576);
        opacity: 0.51;
    }
    45% {
        transform: translateX(calc(var(--uib-size) * -0.235)) scale(0.684208);
        opacity: 0.58;
    }
    50% {
        transform: translateX(calc(var(--uib-size) * -0.25)) scale(0.73684);
        opacity: 0.65;
    }
    55% {
        transform: translateX(calc(var(--uib-size) * -0.235)) scale(0.789472);
        opacity: 0.72;
    }
    60% {
        transform: translateX(calc(var(--uib-size) * -0.182)) scale(0.842104);
        opacity: 0.79;
    }
    65% {
        transform: translateX(calc(var(--uib-size) * -0.129)) scale(0.894736);
        opacity: 0.86;
    }
    70% {
        transform: translateX(calc(var(--uib-size) * -0.076)) scale(0.947368);
        opacity: 0.93;
    }
    75% {
        transform: translateX(0%) scale(1);
        opacity: 1;
    }
    80% {
        transform: translateX(calc(var(--uib-size) * 0.076)) scale(0.947368);
        opacity: 0.93;
    }
    85% {
        transform: translateX(calc(var(--uib-size) * 0.129)) scale(0.894736);
        opacity: 0.86;
    }
    90% {
        transform: translateX(calc(var(--uib-size) * 0.182)) scale(0.842104);
        opacity: 0.79;
    }
    95% {
        transform: translateX(calc(var(--uib-size) * 0.235)) scale(0.789472);
        opacity: 0.72;
    }
    100% {
        transform: translateX(calc(var(--uib-size) * 0.25)) scale(0.73684);
        opacity: 0.65;
    }
}
</style>
