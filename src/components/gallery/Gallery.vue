<template>
    <div class="recentPhotos p-3">
        <div class="row overflow-wrap">
            <gallery-image :src=tempSrcImage :alt=alt></gallery-image>
            <gallery-image :src=tempSrcImage :alt=alt></gallery-image>
            <gallery-image :src=tempSrcImage :alt=alt></gallery-image>
            <gallery-image :src=tempSrcImage :alt=alt></gallery-image>
            <gallery-image :src=tempSrcImage :alt=alt></gallery-image>
            <gallery-image :src=tempSrcImage :alt=alt></gallery-image>
            <gallery-image :src=tempSrcImage :alt=alt></gallery-image>
            <gallery-image :src=tempSrcImage :alt=alt></gallery-image>
            <gallery-image :src=tempSrcImage :alt=alt></gallery-image>
            <gallery-image :src=tempSrcImage :alt=alt></gallery-image>
            <gallery-image :src=tempSrcImage :alt=alt></gallery-image>
            <gallery-image :src=tempSrcImage :alt=alt></gallery-image>
            <gallery-image :src=tempSrcImage :alt=alt></gallery-image>
            <gallery-image :src=tempSrcImage :alt=alt></gallery-image>
            <gallery-image :src=tempSrcImage :alt=alt></gallery-image>
            <gallery-image :src=tempSrcImage :alt=alt></gallery-image>
        </div>
    </div>
</template>
<script>
const GalleryImage = () => import('@/components/gallery/components/GalleryImage')
export default {
    name: 'Gallery',
    components: {
        GalleryImage
    },
    props: {
        // remove me TODO, this is just so we can change the image for category and home for check point 3.
        tempSrcImage: String,
        alt: String
    }
}
</script>
<style scoped>

</style>