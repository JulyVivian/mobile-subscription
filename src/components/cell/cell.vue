<template>
    <div class="vmc-cell" @click="_onClick">
        <div class="cell-title">
            <slot name="title">{{title}}</slot>
        </div>
        <div class="cell-content">
            <slot name="content">{{content}}</slot>
        </div>
        <div class="cell-arrow" v-if="props_arrow">
            <slot name="arrow">
                <i class="icono-caretRight"></i>
            </slot>
        </div>
    </div>
</template>

<script type="es6">
    export default {
        props: {
            title: String,
            content: String,
            arrow: {
                type: [Boolean, String],
                default: true
            }
        },
        computed: {
            props_arrow: {
                get() {
                    var val = this.arrow;
                    return !(val === false || val === 'false');
                }
            }
        },
        methods: {
            _onClick(event) {
                this.$emit('click', event)
            }
        }
    }
</script>
