<template>
    <div>
        <page-title title="Lord of the Rings"></page-title>
        <gallery tempSrcImage="img/LOTR.jpg" alt="LOTR"></gallery>
    </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import Gallery from '@/components/gallery/Gallery'
export default {
    name: 'CategoryView',
    components: {
        PageTitle,
        Gallery
    }
}
</script>