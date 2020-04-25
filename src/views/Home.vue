<template>
    <div>
        <page-title title="Recent Videos"></page-title>
        <gallery :srcList=this.thumbnailList alt="Vue Logo"></gallery>
    </div>
</template>

<script>
export default {
    name: 'HomeView',
    data: function() {
        return {
            thumbnailList: []
        }
    },
    components: {
        PageTitle : () => import('@/components/PageTitle'),
        Gallery : () => import('@/components/gallery/Gallery')
    },
    methods: {
        getThumbnails: function () {
            let sessionKeys = Object.keys(sessionStorage);
            let list = [];

            for (let i = 0; i < sessionKeys.length; ++i) {
                let item = sessionStorage.getItem(sessionKeys[i]);
                let jsonArray = JSON.parse(item);
                // We're just displaying the first two videos from each term.
                for (let i = 0; i < 2; ++i) {
                    list[list.length] = jsonArray[i].snippet.thumbnails.high.url;
                }
            }
            this.thumbnailList = list;
        }
    },
    mounted: function() {
        this.getThumbnails();
    }
}
</script>

<style scoped>
</style>