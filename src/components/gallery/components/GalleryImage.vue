<template>
    <div>
        <vue-image :src=src :alt=alt
        classes=""></vue-image>
    </div>
</template>
<script>
export default {
    name: 'GalleryImage',
    components: {
        VueImage : () => import('@/components/VueImage')
    },
    props: {
        src: String,
        alt: String
    }
}
</script>
<style scoped>
    /* deep allows the styles to be passed down to it's children */
    /deep/ img {
        width: 100%;
        height: 250px;
        transition: all .30s ease-in-out;
    }

    @media screen and (min-width: 845px) {
        /deep/ img:hover {
            transform: scale(1.1);
            border-radius: 10%;
            cursor: pointer;
        }		
    }
</style>