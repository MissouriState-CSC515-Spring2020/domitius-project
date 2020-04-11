<template>
    <router-link  :to="`/detail`">
        <img @click="test" :src=srcLink />
    </router-link>
</template>
<script>
export default {
    data: function() {
        return {
            parsedTag: this.etag.split('"').join('')
        }
    },
    props: {
        srcLink: String,
        etag: String
    },
    methods: {
        test: function() {
            console.log(this.parsedTag);
        }
    }
}
</script>
<style scoped>

</style>