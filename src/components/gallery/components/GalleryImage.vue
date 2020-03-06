<template>
    <div class="offset-1 offset-sm-0 col-10 col-sm-4 col-md-3 col-lg-2 mb-3">
        <vue-image :src=src :alt=alt
        classes=""></vue-image>
    </div>
</template>
<script>
const VueImage = () => import('@/components/VueImage')

export default {
    name: 'GalleryImage',
    components: {
        VueImage
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