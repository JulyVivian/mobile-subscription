<template>
    <div id="app">
        <router-view class="page"></router-view>
    </div>
</template>

<script type="es6">
    export default {
        name: 'root',
        data() {
            return {
                direction: 'forward'
            }
        },
        watch: {
            '$route'(to, from) {
                var fd = from.meta.depth || 0;
                var td = to.meta.depth || 0;

                if (!from.path || fd === td) {
                    this.direction = 'null';
                } else if (fd < td) {
                    this.direction = 'forward';
                } else if (fd > td) {
                    this.direction = 'back';
                }
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    @import "../src/styles/vmc.less";

    @import "assets/css/transition.css";
    @import "assets/css/home.less";
    @import "assets/css/_variable.less";
    @import "assets/css/_override.less";

    html, body {
        width: 100%;
        height: 100%;
        border: none;
        font-size: 20px;
        font-family: "PingFang SC", "Microsoft YaHei", Helvetica Neue, Helvetica, Arial, sans-serif;
        font-weight: normal;
        background-color: #0d0d0d;        
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ffffff;
        background-color: #0d0d0d;
        height: 100%;
    }

    .page {
        -webkit-overflow-scrolling: touch;
        background-color: #0d0d0d;
    }
</style>
