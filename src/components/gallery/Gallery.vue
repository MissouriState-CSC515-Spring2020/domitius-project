<template>
    <div class="recentPhotos p-3">
        <div class="row overflow-wrap">
            <div v-for="srcUrl in srcList" :key="srcUrl" class="videoContainer offset-1 offset-sm-0 col-10 col-sm-4 col-md-3 col-lg-2 mb-3">
                <gallery-image :src=srcUrl></gallery-image>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Gallery',
    components: {
        GalleryImage : () => import('@/components/gallery/components/GalleryImage')
    },
    props: {
        // remove me TODO, this is just so we can change the image for category and home for check point 3.
        srcList: Array,
        alt: String
    }
}
</script>
<style scoped>
    .videoContainer {
        display: inline-block;
    }
</style>