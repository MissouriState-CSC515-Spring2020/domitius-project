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
                <!-- <div class="d-none d-md-block col-5 p-5" id="photoSpecs">
                    <p>Date Uploaded: <span class="text-muted">2/5/2020</span></p>
                    <p>Dimensions: <span class="text-muted">500 x 600</span></p>
                    <p>Tags: <span class="text-muted">frog, green, rain, pairing</span></p>
                    <a href="#">Download</a>
                </div>
                <span class="col-12 d-md-none"><a href="#">Download</a></span>
            </div>
            <div class="col-10 mt-2 p-1" id="photoDescription">
                <h5>Description:</h5>
                <p>{{ descriptionText }}</p>
            </div> -->
        </div>
    </div>
</template>
<script>
import VueImage from '@/components/VueImage'
import Description from '@/components/imageDetail/components/Description'

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