<template>
    <div>
        <div class="row">
            <div class="d-none d-md-block col-12 p-5" id="photoSpecs">
                <p>Date Uploaded: <span class="text-muted">{{ dateUpload }}</span></p>
                <p>Dimensions: <span class="text-muted">{{ dimensions }}</span></p>
                <p>Tags: <span class="text-muted">{{ tags }}</span></p>
                <a :href=downloadUrl download>Download</a>
            </div>
            <span class="col-12 d-md-none"><a :href=downloadUrl>Download</a></span>
        </div>
        <div class="row">
            <div class="col-11 mt-2 p-1" id="photoDescription">
                <div class="row">
                    <h5 class="col-3">Description:</h5>
                    <span class="col-9"></span>
                    <p class="col-11 offset-1 p-2 border border-dark bg-light text-dark">{{ descriptionText }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Description',
    props: {
        descriptionText: String,
        dateUpload: String,
        dimensions: String,
        tags: String,
        downloadUrl: String
    }
}
</script>
<style scoped>

</style>