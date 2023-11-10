import Vue from 'vue'

function changeStr(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
//require.context('.', false, /\.vue$/)
//三个参数 分别表示 1.指定路径（.指当前路径） 2.是否使用子目录 false/true 3.使用正则匹配
const requireComponent = require.context('.', false, /\.vue$/)
requireComponent.keys().forEach(filename => {
    const config = requireComponent(filename)
    const componentName = changeStr(filename.replace(/^\.\//, '').replace(/\.\w+$/, ''))
    Vue.component(componentName, config.default || config)
})
