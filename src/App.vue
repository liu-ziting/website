<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useSvgIcons } from './lib/svgIcons'
const navList = ref([
    { name: 'Home', to: '/' },
    { name: 'Blog', to: '/blog' },
    { name: 'Website', to: '/website' },
    { name: 'Movie', to: '/movie' }
])
const route = useRoute()
const { getSvgIcon } = useSvgIcons()
const isRouteActive = (to: string) => {
    return route.path === to
}

import MobileNav from './components/MobileNav.vue'

const handleEnterKey = () => {
    window.open('https://lztweb.netlify.app/')
}
</script>

<template>
    <div class="index">
        <mobile-nav />
        <div class="main-app">
            <header class="header">
                <h1 class="header-logo">
                    <span @click="$router.push('/')" class="underlined underlined--offset">Interesting.</span>
                </h1>
                <div class="header-content">
                    <div class="header-search">
                        <input @keyup.enter="handleEnterKey" type="text" class="search-field" placeholder="Search..." />
                        <button type="submit" class="search-btn">
                            <div class="icon" v-html="getSvgIcon('Search')"></div>
                        </button>
                    </div>
                    <button class="header-avatar">
                        <a href="https://bento.me/liuziting" target="_blank">
                            <span class="header-avatar-img"></span>
                        </a>
                        <span class="header-avatar-name">Liu Ziting</span>
                    </button>
                </div>
            </header>
            <main class="main" v-auto-animate>
                <nav class="nav">
                    <ul class="tabs">
                        <li class="tab" v-for="item in navList" :key="item.name">
                            <button
                                @click="$router.push(item.to)"
                                :class="['tab-btn', { 'tab-btn--active': isRouteActive(item.to) }]"
                            >
                                <div class="icon" v-html="getSvgIcon(item.name)"></div>
                                <span class="tab-btn-title">{{ item.name }}</span>
                            </button>
                        </li>
                    </ul>
                </nav>
                <!-- 主体 -->
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.index {
    line-height: 1.5;
    // min-height: 100vh;
    background-color: #faf5f1;
    color: #162121;
    padding: 2rem;
}

.main-app {
    box-shadow:
        0 0 2px 0 rgba(#000, 0.1),
        0 15px 30px rgba(#444, 0.1);
    padding: 3rem;
    border-radius: 15px;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    background-color: #fcfcfc;
    min-height: calc(100vh - 10rem);
}

.header {
    display: flex;
    align-items: center;
    .header-logo {
        span {
            font-family: 'Lora', sans-serif;
            font-weight: 700;
            font-size: 1.5rem;
            cursor: pointer;
        }
    }

    .header-content {
        margin-left: auto;
        display: flex;
        flex-wrap: wrap;
    }

    .header-search {
        display: flex;
        position: relative;
    }

    .search-field {
        border-radius: 99em;
        background-color: #f0f4f5;
        border: none;
        padding-left: 2.75rem;
        height: 3rem;
        transition: width 380ms ease;
        width: 250px;
        &:focus {
            width: 400px;
        }
    }

    .search-btn {
        border: none;
        position: absolute;
        left: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon {
            width: 24px;
            color: #abb5bd;
            margin-top: 4px;
        }
    }

    .header-avatar {
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;
        margin-left: 1rem;
    }

    .header-avatar-img {
        display: block;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-image: url('@/assets/logo.png');
        background-position: 50% 50%;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .header-avatar-name {
        margin-left: 0.75rem;
    }
}

.main {
    margin-top: 6rem;
    display: grid;
    grid-template-columns: 1fr 4fr;
    column-gap: 5rem;

    .tabs {
        display: flex;
        flex-direction: column;
        .tab {
            display: flex;
            & + .tab {
                margin-top: 0.5rem;
            }

            .tab-btn {
                border: none;
                background-color: transparent;
                padding: 0.75rem;
                border-radius: 6px;
                display: flex;
                align-items: center;
                width: 100%;
                font-weight: 500;
                .icon {
                    width: 20px;
                    height: 20px;
                    margin-right: 0.75rem;
                    color: #6d7680;
                }
                &--active,
                &:hover {
                    color: #f29873;
                    background-color: #faf5f1;
                    cursor: pointer;
                    .icon {
                        color: #f29873;
                    }
                }

                &--active {
                    font-weight: 600;
                    transition: all 380ms;
                }
            }
        }
    }
}
</style>
