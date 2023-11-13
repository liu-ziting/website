<script setup lang="ts">
import gptImage from '@/assets/blog/gpt.png'
import typechoImage from '@/assets/blog/typecho.png'
import cursorImage from '@/assets/blog/cursor.png'
import jsImage from '@/assets/blog/js.png'
import yxalImage from '@/assets/blog/yxal.png'
import qdzdImage from '@/assets/blog/qdzd.png'
import { ref } from 'vue'
import { useSvgIcons } from '../lib/svgIcons'
const { getSvgIcon } = useSvgIcons()
const blogList = ref([
    {
        title: 'Chatgpt3.5+Vercel，零代码在线部署到云端.',
        content:
            '本文将详细介绍如何配置和部署chatGPT，以及如何使用Vercel平台进行自动化部署和持续集成，无需编写任何代码，即可轻松地将chatGPT部署到云端，实现智能对话和自然语言处理的应用场景。',
        tag: ['GPT', 'Vercel'],
        time: '2023-03-18',
        src: 'https://paragraph.xyz/@lzt/preview/9RCkzzDpDakfx6Qof3Qd',
        img: gptImage,
        showDescription: false
    },
    {
        title: 'Vercel+Railway部署Typecho动态博客.',
        content:
            'Vercel和Railway是两个流行的云平台，它们可以帮助开发者快速部署和管理各种应用程序。在这里，我们将探讨如何使用Vercel和Railway来部署Typecho动态博客，从而使您的博客更加稳定和高效。',
        tag: ['Vercel', 'Typecho', 'Railway'],
        time: '2022-06-15',
        src: 'https://paragraph.xyz/@lzt/preview/z2wfOEx5417LB22TOxy4',
        img: typechoImage,
        showDescription: false
    },
    {
        title: 'Cursor一个集成了GPT-4的编辑器.',
        content: '编辑器+GPT-4 ，程序员写代码利器',
        tag: ['GPT', 'Cursor'],
        time: '2023-10-25',
        src: 'https://paragraph.xyz/@lzt/preview/1LlkQGo7MJ8nOyUx9JVV',
        img: cursorImage,
        showDescription: false
    },
    {
        title: '前端工具类网站.',
        content:
            '本次分享的内容主要有：前端部署平台、灵感代码网站、前端框架、GPT平台、AI生成页面、大模型、以及图标库、AI色彩等其他工具',
        tag: ['Website', 'PPT'],
        time: '2023-09-30',
        src: 'https://gamma.app/public/-8sse4vampaeyogm',
        img: qdzdImage,
        showDescription: false
    },
    {
        title: '优秀网站案例.',
        content: '推荐一些优秀的前端网站，涵盖了出色的设计和创新的思路',
        tag: ['Case', 'PPT'],
        time: '2023-09-31',
        src: 'https://gamma.app/public/-u01r2v0m32l9t21',
        img: yxalImage,
        showDescription: false
    },
    {
        title: 'Js中?.、??、??=的用法及使用场景.',
        content:
            '深入了解JavaScript中的可选链操作符(?.)、空值合并操作符(??)和逻辑赋值操作符(??=)的用法及其在实际开发中的应用场景。',
        tag: ['Js'],
        time: '2023-11-08',
        src: 'https://paragraph.xyz/@lzt/preview/QBemWyLa2SewXYa3PNQ4',
        img: jsImage,
        showDescription: false
    }
])
const openLink = (url: string) => {
    window.open(url)
}
const toggleDescription = (index: number) => {
    blogList.value[index].showDescription = !blogList.value[index].showDescription
}
</script>
<template>
    <div class="home">
        <div class="content">
            <div class="content-body">
                <section class="overview">
                    <header class="overview-header">
                        <h2 class="overview-header-title">
                            最近的博客<span>{{ blogList.length }}</span>
                        </h2>
                        <a href="https://paragraph.xyz/@lzt" target="_blank" class="link">View all</a>
                    </header>
                    <div class="overview-body">
                        <div class="summary" v-show="false">
                            <h3 class="summary-date">2023年</h3>
                            <span class="summary-amount"></span>
                        </div>
                        <div class="list" v-for="(item, index) in blogList" :key="index" v-auto-animate>
                            <div class="list-item">
                                <div class="list-item-company" @click="openLink(item.src)">
                                    <figure class="list-item-company-logo">
                                        <img v-if="item.img" :src="item.img" />
                                        <span v-else class="list-item-company-logo--square" />
                                    </figure>
                                    <div class="list-item-company-info">
                                        <h4 class="list-item-company-name">{{ item.title }}</h4>
                                        <a v-for="tag in item.tag" :key="tag" href="#" class="list-item-company-hashtag"
                                            >#{{ tag }}</a
                                        >
                                    </div>
                                </div>
                                <div class="list-item-transaction">
                                    <div class="list-item-transaction-values">
                                        <time class="list-item-transaction-time">{{ item.time }}</time>
                                    </div>
                                    <button @click="toggleDescription(index)" class="list-item-transaction-action">
                                        <div
                                            class="icon"
                                            v-html="getSvgIcon(item.showDescription ? 'Up' : 'Down')"
                                        ></div>
                                    </button>
                                </div>
                            </div>
                            <p v-if="item.showDescription" class="list-item-description">
                                {{ item.content }}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.overview {
    border: 1px solid #dedede;
    border-radius: 8px;
    min-height: 100px;
    padding: 2rem;
    & + & {
        margin-top: 3rem;
    }
}

.overview-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.overview-header-title {
    font-size: 1.25rem;
    font-weight: 700;
    span {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 0.75em;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        color: #6d7680;
        background-color: #f7f6fc;
        margin-left: 0.5rem;
    }
}

.summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    margin-top: 1.5rem;
    color: #6d7680;
}

.summary-amount {
    font-family: 'Space Mono', monospace;
}

.list {
    margin-top: 1rem;
    & + .summary {
        margin-top: 2.5rem;
    }
    .list-item-description {
        font-size: 14px;
        color: #363434;
        padding-left: 75px;
    }
}

.list-item {
    border-top: 1px solid #dedede;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .list &:last-child {
        border-bottom: 1px solid #dedede;
    }
}

.list-item-company {
    display: flex;
    align-items: center;
}

.list-item-company-logo {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &--square {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        box-shadow: 0 0 4px 0 #dedede;
        background-color: #f1f1f1;
    }
}

.list-item-company-info {
    margin-left: 1.25rem;
}

.list-item-company-name {
    font-weight: 600;
    cursor: pointer;
}

.list-item-company-hashtag {
    display: inline-block;
    text-decoration: none;
    color: #6d7680;
    margin-top: 0.125rem;
    & + & {
        margin-left: 0.25rem;
    }
}

.list-item-transaction {
    display: flex;
    align-items: center;
}

.list-item-transaction-values {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.list-item-transaction-value {
    font-weight: 600;
    font-family: 'Space Mono', monospace;
    display: inline-flex;
    align-items: center;
    i {
        margin-right: 0.5rem;
    }

    &--positive {
        color: #63c4b1;
    }
}

.list-item-transaction-time {
    color: #6d7680;
    font-size: 0.875rem;
}

.list-item-transaction-action {
    border: none;
    background-color: #f0f4f5;
    border-radius: 8px;
    margin-left: 1rem;
    width: 2.25rem;
    height: 2.25rem;
    color: #6d7680;
    cursor: pointer;
    .icon {
        width: 20px;
        margin: 0 auto;
        margin-top: 5px;
    }
}

.overview-footer {
    display: flex;
    justify-content: center;
    padding-top: 1.25rem;
}
</style>
