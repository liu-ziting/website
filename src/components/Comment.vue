<script lang="ts" setup>
import { onMounted } from 'vue'
import Gitalk from 'gitalk'
import 'gitalk/dist/gitalk.css'

onMounted(() => {
    var gitalk = new Gitalk({
        clientID: '0d1b36638bd8c75e4b5c',
        clientSecret: 'a9f6fb72e3a088e134109ce5589b31589f93c392',
        repo: 'Blog-Comment',
        owner: 'liu-ziting',
        admin: ['liu-ziting'],
        id: location.pathname,
        distractionFreeMode: false
    })

    gitalk.render('gitalk-container')
})
</script>
<template>
    <div id="gitalk-container"></div>
</template>
<style lang="scss" scoped>
#gitalk-container {
}
</style>
