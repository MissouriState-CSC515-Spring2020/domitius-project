<template>
    <div>
        <page-title title="Recent Photos"></page-title>
        <gallery tempSrcImage="https://bachasoftware.com/wp-content/uploads/2019/07/form-with-vuejs.jpg" alt="Vue Logo"></gallery>
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