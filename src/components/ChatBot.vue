<script setup lang="ts"></script>

<template>
    <div ref="chat" class="chat-bot"></div>
</template>
<style lang="scss" scoped>
.chat-bot {
    width: 400px;
    height: 600px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow:
        0 0 2px 0 rgba(#000, 0.1),
        0 15px 30px rgba(#444, 0.1);
    position: absolute;
    top: 150px;
    right: 110px;
    z-index: 9999;
    iframe {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 10px;
    }
}
</style>
