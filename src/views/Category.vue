<template>
    <div>
        <page-title :title=this.categoryTitle></page-title>
        <gallery :tempSrcImage=this.thumbnailDefault :alt=this.categoryTitle></gallery>
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
    },
    data: function() {
        return {
            thumbnailDefault: '',
            categoryTitle: ''
        }
    },
    created() {
        /**
         * TODO, Right now this is a hardcoded value for the category page. We will need to fix this
         * to show all of the previous search terms as categories.
         */
        const apiKey = 'AIzaSyBIwJbl8s6Q6DmCCTj-aqh3vfCNX4gz-dc';
        if (sessionStorage.getItem('batman')) {
            let itemOne = JSON.parse(sessionStorage.getItem('batman'))[0];
            console.log(itemOne);
            this.thumbnailDefault = itemOne.snippet.thumbnails.default.url;
            this.categoryTitle = itemOne.snippet.title;
            console.log(`channel title ${this.channelTitle}`);
        } else {
            fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="batman"&key=${apiKey}`)
                        .then((res) => {
                            if (res.ok) {
                                return res.json();
                            }
                        }).then((json) => {                            
                            this.thumbnailDefault = json.items[0].snippet.thumbnails.default.url;
                            this.categoryTitle = json.items[0].snippet.title;
                            // Display Thumbnails from recently fetched data.
                            sessionStorage.setItem('batman', JSON.stringify(json.items));
                           // displayThumbnails(json.items);

                        }).catch((error) => {
                            console.log(error);
                        });
        }
        
    }
}
</script>