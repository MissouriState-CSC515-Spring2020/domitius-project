<template>
    <div>
        <page-title title="Recent Photos"></page-title>
        <gallery tempSrcImage="img\icons\android-chrome-192x192.png" alt="Vue Logo"></gallery>
    </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import Gallery from '@/components/gallery/Gallery'

export default {
    name: 'HomeView',
    components: {
        PageTitle,
        Gallery
    }
}
</script>

<style scoped>
</style>