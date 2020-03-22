<template>
    <div class="row">
        <h2 class="col-3">{{ title }}</h2>
        <div class="col-9"></div>
        <div class="col-11 border-bottom ml-4 mb-1"></div>
    </div>
</template>
<script>
export default {
    name: 'PageTitle',
    props: {
        title: String
    }
}
</script>
<style scoped>

</style>