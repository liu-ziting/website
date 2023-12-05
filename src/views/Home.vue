<script setup lang="ts">
import PopupLayer from '@/components/PopupLayer.vue'
// import ChristmasBox from '@/components/ChristmasBox.vue'
import { ref } from 'vue'
const popupLayer = ref()
const openLayer = (url: string, type: boolean) => {
    if (type) {
        popupLayer.value.openLayer(url)
    } else {
        window.open(url)
    }
}
</script>
<template>
    <div class="home">
        <!-- <ChristmasBox /> -->
        <div class="content">
            <div class="content-header">
                <div class="content-header-inner">
                    <h1 class="content-header-title">Hi there 👋 welcome！</h1>
                    <div class="content-header-tag">欢迎来到我的个人网站！</div>
                    <div class="content-header-info">- 这里是一个收集平时常用网站合集以及个人知识整理的个人站点.</div>
                    <div class="content-header-info">- 本站点Vue3 + Vite + TypeScript 技术栈进行构建</div>
                    <div class="content-header-info">- 并通过 Netlify 进行部署</div>
                    <!-- <div class="content-header-info">
                        - 历史站点：<a class="link" href="https://lztweb.netlify.app/" target="_blank"
                            >lztweb.netlify.app</a
                        >
                    </div> -->
                    <div class="content-header-info" @click="openLayer('https://excalidraw.com', true)">
                        <a class="link" href="javascript:;">
                            <svg
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
                                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                                />
                            </svg>
                            来灵感了，画下来~
                        </a>
                    </div>
                </div>
                <div class="content-header-illustration">
                    <img src="@/assets/tx.png" />
                </div>
            </div>
            <popup-Layer ref="popupLayer" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content-header {
    display: flex;
}

.content-header-inner {
    flex: 1;
    font-family: 'ALIBABA';
}

.content-header-title {
    font-size: 2.5rem;
    font-weight: 700;
    font-family: 'ALIBABA';
    line-height: 1.125;
}
.content-header-tag {
    font-size: 2.5rem;
    display: block;
    font-weight: 400;
    font-family: 'ALIBABA';
    color: #63c4b1;
    margin-top: 0.5em;
}
.content-header-info {
    margin-top: 1.2rem;
    font-weight: 600;
    svg {
        width: 22px;
    }
}

.content-header-illustration {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    svg,
    img {
        max-width: 500px;
        max-height: 400px;
        margin-top: -40px;
    }
}
</style>
