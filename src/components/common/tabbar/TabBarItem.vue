<template>
    <div class="item" @click="jump">
        <div v-if="!isActive">
            <slot name="itemIcon"></slot>
        </div>
        <div v-else>
            <slot name="itemIconActive"></slot>
        </div>
        <div :style="{color:[isActive?activeColor:'']}">
            <slot name="itemText"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        activeColor: String,
    },
    computed: {
        isActive() {
            return this.$route.path.includes(this.path);
        },
       /* activeStyle() {
            return this.isActive ? {color: this.activeColor} : {}
        }*/
    },
    data() {
        return {}
    },
    methods: {
        jump() {
            console.log(this.path);
            this.$router.push(this.path);
        }
    }
}
</script>

<style scoped lang="scss">
.item {
    flex: 1;
    text-align: center;
    height: 49px;

    img {
        width: 25px;
        height: 25px;
    }
}

</style>
