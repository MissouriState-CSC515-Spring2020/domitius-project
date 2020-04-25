<template>
    <!-- TODO, we need to separate these into two components. Video Description, customFrame, Description -->
    <div class="row" id="photoInformation">
        <div class="offset-1 col-10" id="photoHeader">
            <div class="row">
                <!-- Title -->
                <h2 class="col-12">{{ title }}</h2>
                <!-- Video Holder -->
                <div class="col-12">
                    <!-- Video -->
                    <iframe class="w-100" height="450" :src=src 
                      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                     allowfullscreen></iframe>
                </div>
            </div>
            <!-- Description Box -->
            <div class="col-9 offset-2">
                <!-- Description Component -->
                <description :descriptionText=descriptionText :channelTitle=channelTitle :dimensions=dimensions
                :tags=tags :downloadUrl=downloadUrl></description>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CustomFrame',
    props: {
        src: String,
        title: String,
        descriptionText: String,
        channelTitle: String,
        dimensions: String,
        tags: String,
        downloadUrl: String
    },
    components: {
        Description : () => import('@/components/imageDetail/components/Description')
    }
}
</script>
<style scoped>

</style>