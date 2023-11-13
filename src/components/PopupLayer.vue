<script setup lang="ts">
import { ref } from 'vue'

import 'ldrs/helix'
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

            <l-helix v-show="loading" class="loading" size="45" speed="2.5" color="#f29873"></l-helix>
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
</style>
