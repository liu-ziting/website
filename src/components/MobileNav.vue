<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const navList = ref([
    { name: 'Home', to: '/' },
    { name: 'Blog', to: '/blog' },
    { name: 'Website', to: '/website' },
    { name: 'Movie', to: '/movie' }
])
const route = useRoute()
const router = useRouter()
const isRouteActive = (to: string) => {
    return route.path === to
}
</script>
<template>
    <div class="mobile-nav">
        <router-link
            v-for="(item, index) in navList"
            :key="index"
            :to="item.to"
            :class="[{ active: isRouteActive(item.to) }]"
        >
            <a href="javascript:;">{{ item.name }}</a>
        </router-link>
    </div>
</template>
<style lang="scss" scoped>
.mobile-nav {
    display: none;
    width: 100%;
    position: fixed;
    text-align: center;
    height: 60px;
    top: 0;
    left: 0;
    line-height: 60px;
    background-color: #faf5f1;
    z-index: 999;
    overflow: hidden;
    a {
        font-family: 'Oswald', sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        text-decoration: none;
        color: #16151b;
        margin: 0 10px;
        font-size: 16px;
        letter-spacing: 1px;
        position: relative;
        display: inline-block;
    }
    a:before {
        opacity: 0;
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        background: #16151b;
        top: 47%;
        animation: out 0.2s cubic-bezier(1, 0, 0.58, 0.97) 1 both;
    }
    a:hover:before {
        animation: in 0.2s cubic-bezier(1, 0, 0.58, 0.97) 1 both;
    }
    .active:before {
        opacity: 1;
        animation: in 0.2s cubic-bezier(1, 0, 0.58, 0.97) 1 both;
    }
}
</style>
