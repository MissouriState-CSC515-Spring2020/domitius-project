<template>
    <div class="row" id="photoInformation">
        <div class="offset-1 col-10" id="photoHeader">
            <div class="row">
                <h2 class="col-12">{{ title }}</h2>
                <div class="col-12">
                    <vue-image :src=src :alt=imageAlt classes="col-12 col-sm-10 col-md-8 pt-2 pb-2"></vue-image>
                </div>
            </div>
            <div class="col-9 offset-2">
            <description :descriptionText=descriptionText :dateUpload=dateUploaded :dimensions=dimensions
            :tags=tags :downloadUrl=downloadUrl></description>
            </div>
        </div>
    </div>
</template>
<script>
const VueImage = () => import('@/components/VueImage')
const Description = () => import('@/components/imageDetail/components/Description')

export default {
    name: 'ImageDetail',
    components: {
        VueImage,
        Description
    },
    props: {
        title: String,
        descriptionText: String,
        src: String,
        imageAlt: String,
        dateUploaded: String,
        dimensions: String,
        tags: String,
        downloadUrl: String
    }    
}
</script>
<style scoped>
    /* deep allows the styles to be passed down to it's children */
    /deep/ img {
        width: 100%;
        max-height: 800px;
        transition: all .30s ease-in-out;
    }

    @media screen and (min-width: 845px) {
        /deep/ img:hover {
            transform: scale(1.4);
            border-radius: 10%;
            cursor: pointer;
            z-index: 2;
        }		
    }
</style>