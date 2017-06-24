<template>
    <div class="home-page">
        <div class="slider-box">
            <slider :list="items" height="100%" auto="3"></slider>
        </div>      
        <div class="mine">
            <p><img src="../assets/person.png"/>个人中心<img src="../assets/enter.png" class="enter"/></p>
            <p class="my-pre"><img src="../assets/myappoint.png"/>我的预约<span>2</span><img src="../assets/enter.png" class="enter"/></p>
        </div>
        <ul class="lessons clx">
            <li @click="jump('trader')"><img src="https://julyvivian.github.io/js_css_sources/1.png"/></li>
            <li @click="jump('group')"><img src="https://julyvivian.github.io/js_css_sources/2.png"/></li>
            <li @click="jump('playground')"><img src="https://julyvivian.github.io/js_css_sources/3.png"/></li>
            <li><img src="https://julyvivian.github.io/js_css_sources/4.png"/></li>
            <li><img src="https://julyvivian.github.io/js_css_sources/5.png"/></li>
        </ul>
    </div>
</template>

<script type="es6">
    import { Cell, Slider } from 'vmc'

    export default {
        name: 'index',
        data () {
            return {
                items: [
                    {
                        image: 'https://julyvivian.github.io/js_css_sources/homebanner1.jpg',
                        title: '',
                        link: ''
                    }, {
                        image: 'https://julyvivian.github.io/js_css_sources/homebanner2.jpg',
                        title: '',
                        link: ''
                    }, {
                        image: 'https://julyvivian.github.io/js_css_sources/homebanner3.jpg',
                        title: '',
                        link: ''
                    }
                ]
                }
        },
        components: {
            Cell,
            Slider
        },
        methods: {
            jump(path) {
                this.$router.push('/components/' + path)
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
.home-page {
    width: 7.5rem;
    .slider-box {
        width: 7.5rem;
        height: 2.8rem;
        overflow: hidden;
        .vmc-slider{
            .slider-dots{
                i{
                    background-color: #9da0a4;
                }
                i.active{
                    background-color: #ffffff;
                }
            }
        }
    }
.mine {
    width: 100%;
    display: flex;
    height: .37rem;
    border-bottom: 1px solid #323232;
    padding: .25rem 0;
    background-color: #171717;
    p {
        flex: 1;
        height: .38rem;
        line-height: .38rem;
        text-align: left;
        color: #ffffff;
        font-size: .3rem;
    }
    .my-pre{
        span {
        font-size: .3rem;
        color: #ff851a;
        margin-left: .8rem;
        }
        img{
            margin-left: .2rem;
        }
    }
    p {
        &:nth-child(1) {
        border-right: 1px solid #545454;
        }
        .enter {
            float: right;
            margin-top: .04rem;
            width: .15rem;
            height: .25rem;
        }
        img {
            width: .25rem;
            height: .28rem;
            float: left;
            margin: .03rem .3rem 0 .3rem;
        }
    }
    }

.lessons {
  width: 6.9rem;
  padding: .2rem .3rem;
  li {
    width: 3.33rem;
    float: left;
    margin-bottom: .24rem;
    &:nth-child(1), &:nth-child(4) {
      margin-right: .24rem;
    }
    &:nth-child(3) {
      width: 100%;
    }
    img {
      display: block;
      width: 100%;
    }
  }
}
}
</style>
