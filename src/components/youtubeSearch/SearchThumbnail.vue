<template>
    <router-link  :to="`/detail`">
        <img :src=srcLink />
    </router-link>
</template>
<script>
export default {
    name: 'SearchThumbnail',
    props: {
        srcLink: String,
        etag: String
    }
}
</script>
<style scoped>

</style>