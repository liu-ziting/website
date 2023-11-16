<script setup lang="ts">
import PopupLayer from '@/components/PopupLayer.vue'
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
        <div class="content">
            <div class="content-header">
                <div class="content-header-inner">
                    <h1 class="content-header-title">Hi there 👋 welcome！</h1>
                    <div class="content-header-tag">欢迎来到我的个人网站！</div>
                    <div class="content-header-info">- 这里是一个收集平时常用网站合集以及个人知识整理的个人站点.</div>
                    <div class="content-header-info">- 本站点Vue3 + Vite + TypeScript 技术栈进行构建</div>
                    <div class="content-header-info">- 并通过 Netlify 进行部署</div>
                    <div class="content-header-info">
                        - 历史站点：<a class="link" href="https://lztweb.netlify.app/" target="_blank"
                            >lztweb.netlify.app</a
                        >
                    </div>

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
                    <img src="https://assets.codepen.io/285131/illustration-2.svg" />
                </div>
            </div>
            <div class="wrapper">
                <div class="sofa">
                    <div class="sofa-cushion"></div>
                    <div class="sofa-bottom-l"></div>
                    <div class="sofa-bottom-r"></div>
                </div>
                <div class="cat">
                    <div class="cat-arm-shoulder"></div>
                    <div class="cat-head">
                        <div class="cat-ear-l"></div>
                        <div class="cat-ear-r"></div>
                        <div class="cat-eye-l"></div>
                        <div class="cat-eye-r"></div>
                    </div>
                    <div class="cat-arm-l"></div>
                    <div class="cat-arm-r"></div>
                    <div class="cat-tale"></div>
                </div>
                <div class="boy">
                    <div class="arm-l"></div>
                    <div class="foot-l"></div>
                    <div class="head">
                        <div class="face">
                            <div class="hair-1"></div>
                            <div class="hair-2"></div>
                            <div class="eye-l"></div>
                            <div class="eye-r"></div>
                        </div>
                        <div class="hair-3"></div>
                    </div>
                    <div class="foot-r"></div>
                    <div class="arm-r"></div>
                    <div class="laptop">
                        <div class="light"></div>
                    </div>
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
    img {
        max-width: 400px;
        max-height: 300px;
    }
}

$black: #180c0b;
$yellow: #ffd100;

.wrapper {
    position: relative;
    width: 300px;
    margin: 70px auto;
    display: none;
    &:before {
        content: '';
        background: rgba(#fff, 0.04);
        width: 350px;
        height: 350px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: -95%;
        transform: translate(-50%);
        box-shadow: 0 0 0 50px rgba(#fff, 0.01);
    }
}

.sofa {
    position: relative;
    width: 265px;
    height: 95px;
    background: $yellow;
    border-radius: 35px 35px 0 0;
    border: 1px solid $black;
    box-shadow: inset 30px 0 #efbb02;
    filter: brightness(0.8);

    &:after {
        content: '';
        width: 130px;
        height: 70px;
        background: #efbb02;
        border-radius: 25px;
        position: absolute;
        bottom: -40px;
        right: 0;
        transform: translatex(40%);
        border: 1px solid $black;
        box-shadow: inset -30px 0 0 3px #ffd100;
    }

    .sofa-cushion {
        width: 300px;
        height: 40px;
        border-radius: 30px;
        background: $yellow;
        border: 1px solid $black;
        position: absolute;
        z-index: 1;
        bottom: -40px;
        left: 50%;
        transform: translatex(-50%);
        box-shadow: inset -150px 0 #efbb02;

        &:after {
            content: '';
            width: 130px;
            height: 70px;
            background: #efbb02;
            border-radius: 25px;
            position: absolute;
            bottom: -1px;
            left: -10px;
            border: 1px solid $black;
            box-shadow: inset -30px 0 0 3px #ffd100;
        }
    }

    .sofa-bottom-l,
    .sofa-bottom-r {
        width: 20px;
        height: 40px;
        background: #cea77a;
        position: absolute;
        bottom: -79px;
        border: 1px solid $black;
        transform: skew(-30deg);
        box-shadow: inset 5px 10px #b2906a;

        &:after {
            content: '';
            width: 20px;
            height: 40px;
            background: #cea77a;
            position: absolute;
            bottom: -1px;
            border: 1px solid $black;
            transform: skew(50deg);
            box-shadow: inset -5px 10px #b2906a;
        }
    }

    .sofa-bottom-r {
        right: -20px;
        transform: skew(30deg);

        &:after {
            right: 70px;
            transform: skew(-50deg);
        }
    }

    .sofa-bottom-l {
        &:after {
            left: 70px;
        }
    }
}

.cat {
    position: absolute;
    z-index: 1;
    width: 75px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid $black;
    background: #d3d2d4;
    bottom: -15px;
    right: 93px;
    box-shadow: inset 14px -33px #fff;

    &:after {
        content: '';
        background: #ffd100;
        border: 1px solid $black;
        width: 150px;
        height: 40px;
        position: absolute;
        bottom: -25px;
        border-radius: 0 50px 50px 100px;
    }

    .cat-head {
        position: absolute;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 1px solid $black;
        background: #fff;
        bottom: 5px;
        right: -10px;
        transform: rotate(-14deg);
        animation: sleep 2s infinite alternate linear;

        .cat-ear-l,
        .cat-ear-r {
            position: absolute;
            width: 25px;
            height: 13px;
            border-radius: 50%;
            border: 1px solid $black;
            background: #fff;
            top: -5px;

            &:after {
                content: '';
                width: 9px;
                height: 19px;
                border-radius: 50%;
                border: 1px solid $black;
                background: #fe8aa5;
                position: absolute;
                top: -2px;
                transform: rotate(98deg);
                left: 4px;
            }
        }

        .cat-ear-l {
            left: 0;
            transform: rotate(35deg);

            &:before {
                content: '';
                background: #fff;
                width: 33px;
                height: 21px;
                border-radius: 50%;
                position: absolute;
                transform: rotate(-35deg);
                left: 7px;
                top: -3px;
                z-index: 1;
            }
        }

        .cat-ear-r {
            background: #d3d2d4;
            right: 3px;
            top: -5px;
            transform: rotate(55deg);

            &:before {
                content: '';
                background: #d3d2d4;
                width: 26px;
                height: 21px;
                border-radius: 50%;
                position: absolute;
                transform: rotate(-55deg);
                left: 4px;
                top: 3px;
                z-index: 1;
            }
        }

        .cat-eye-l,
        .cat-eye-r {
            width: 7px;
            height: 5px;
            border-radius: 50%;
            border: 1px solid $black;
            background: #d3d2d4;
            position: absolute;
            top: 12px;
            border-top: 0;
            border-right: 0;
            border-left: 0;
        }

        .cat-eye-l {
            left: 11px;
        }
        .cat-eye-r {
            right: 11px;
        }
    }

    .cat-arm-shoulder {
        position: absolute;
        width: 26px;
        height: 15px;
        border-radius: 50%;
        border: 1px solid $black;
        background: #fff;
        bottom: 20px;
        right: -22px;
        transform: rotate(-122deg);
    }

    .cat-arm-l,
    .cat-arm-r {
        position: absolute;
        width: 35px;
        height: 13px;
        border-radius: 50%;
        border: 1px solid $black;
        background: #fff;
        bottom: 10px;
    }

    .cat-arm-l {
        transform: rotate(-10deg);
        right: -18px;

        &:after {
            content: '';
            background: #fff;
            width: 8px;
            height: 11px;
            position: absolute;
            border-radius: 50%;
            right: -1px;
            top: -3px;
        }
    }

    .cat-arm-r {
        transform: rotate(10deg);
        right: 15px;
    }

    .cat-tale {
        position: absolute;
        width: 25px;
        height: 13px;
        border-radius: 50%;
        border: 1px solid $black;
        background: #fff;
        bottom: 10px;
        left: 10px;
        transform: rotate(-45deg);
    }
}

.boy {
    position: absolute;
    width: 65px;
    height: 100px;
    border-radius: 150px 25px 25px 80px;
    border: 1px solid $black;
    background: #d8d8d8;
    bottom: -80px;
    left: 80px;
    z-index: 1;
    box-shadow:
        inset -28px -10px #40505e,
        inset 8px 1px #c6c6c6;

    .arm-l,
    .arm-r {
        position: absolute;
        width: 75px;
        height: 25px;
        border-radius: 12px;
        border: 1px solid $black;
        background: #d8d8d8;
        bottom: 40px;
        left: 30px;
        transform: rotate(30deg);
        box-shadow: inset -9px -7px #c6c6c6;
    }

    .arm-l {
        animation: type 0.1s 0.1s infinite alternate;
    }

    .arm-r {
        width: 85px;
        height: 25px;
        bottom: 35px;
        left: 5px;
        z-index: 1;
        border-radius: 12px 0 0 12px;
        border-left: 3px solid #d8d8d8;
        animation: type 0.1s infinite alternate;

        &:before {
            content: '';
            width: 20px;
            height: 18px;
            border: 1px solid $black;
            background: #e8c6a9;
            bottom: 3px;
            right: -20px;
            position: absolute;
        }
    }

    .foot-l,
    .foot-r {
        position: absolute;
        width: 30px;
        height: 85px;
        border-radius: 50%;
        border: 1px solid $black;
        background: #526576;
        bottom: 0;
        right: -20px;
        box-shadow: inset 10px 1px rgba(#2f3b46, 0.6);

        &:before {
            content: '';
            width: 35px;
            height: 15px;
            border: 1px solid $black;
            background: #526576;
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translate(-50%);
            z-index: 1;
            box-shadow: inset 15px 1px rgba(#2f3b46, 0.6);
        }

        &:after {
            content: '';
            width: 50px;
            height: 15px;
            border: 1px solid $black;
            border-radius: 0 100px 0 0;
            background: #266780;
            position: absolute;
            bottom: -2px;
            left: 0;
        }
    }

    .foot-r {
        right: 0;
    }

    .head {
        position: absolute;
        width: 65px;
        height: 60px;
        border-radius: 50%;
        border: 1px solid $black;
        background: #d8d8d8;
        top: -33px;
        left: 6px;
        transform: rotate(-20deg);
        box-shadow: inset 6px 8px #c6c6c6;
        animation: head 2s linear infinite alternate;
    }

    .face {
        position: absolute;
        width: 40px;
        height: 60px;
        border-radius: 50%;
        border: 1px solid $black;
        background: #e8c6a9;
        bottom: -11px;
        right: 6px;
        transform: rotate(52deg);
        overflow: hidden;
        box-shadow: inset 14px 8px rgba(#c99e79, 0.6);
    }

    .hair-1 {
        position: absolute;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 100px solid #000;
        bottom: 3px;
        right: 13px;
        transform: rotate(7deg);
    }

    .hair-2 {
        position: absolute;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 100px solid #000;
        bottom: 24px;
        right: 23px;
        transform: rotate(-15deg);
    }

    .hair-3 {
        position: absolute;
        border-left: 20px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 34px solid #000;
        bottom: 19px;
        right: -12px;
        transform: rotate(-66deg) skew(11deg) scale(-1);
    }

    .eye-l,
    .eye-r {
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #000;
        bottom: 30px;
        right: 5px;
    }

    .eye-r {
        right: 13px;
        bottom: 26px;
    }
}

.laptop {
    position: absolute;
    width: 75px;
    height: 7px;
    border-radius: 5px;
    border: 1px solid rgba(#fff, 0.2);
    background: #000000;
    bottom: -1px;
    right: -67px;

    &:after {
        content: '';
        position: absolute;
        width: 70px;
        height: 55px;
        border-radius: 10px;
        border: 1px solid rgba(#fff, 0.2);
        background: #000000;
        bottom: -1px;
        right: -30px;
        z-index: 1;
        transform: skew(-25deg);
    }

    .light {
        width: 127px;
        height: 300px;
        opacity: 0.3;
        background: linear-gradient(rgba(#fff, 0.8), rgba(#fff, 0));
        clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
        position: absolute;
        z-index: 1;
        transform: rotate(133deg) translate(-130px, 263px);
        animation: light 1s infinite alternate cubic-bezier(1, -0.93, 0.08, 0.18);
    }
}

@keyframes type {
    to {
        transform: rotate(35deg);
    }
}

@keyframes light {
    to {
        opacity: 0.5;
    }
}

@keyframes sleep {
    to {
        transform: rotate(14deg);
    }
}

@keyframes head {
    from {
        transform: rotate(-20deg);
    }

    to {
        transform: rotate(-20deg) translatey(3px);
    }
}

.content-header-title {
    width: 19ch;
    animation:
        typing 2s steps(19),
        blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
}

@keyframes typing {
    from {
        width: 0;
    }
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}
footer {
    width: 100%;
    float: left;
    text-align: center;
    margin-top: 100px;
}
</style>
