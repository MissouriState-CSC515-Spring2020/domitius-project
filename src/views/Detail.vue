<template>
    <div>
        <div class="main">
                <main>
                    <!-- Holds the description, video, video information, and title -->
                    <custom-frame :title=this.videoTitle :src=videoUrlComputed 
                    imageAlt="LOTR" :descriptionText=this.videoDescription
                    dateUploaded="02/20/2020" dimensions="500 x 600" tags="Water, Ring, Frodo"
                    :channelTitle=this.channelTitle
                    downloadUrl="https://wallpapercave.com/wp/kGt54AQ.jpg"></custom-frame>
                </main>
            </div>
    </div>
</template>

<script>
export default {
    /**
     * TODO, Right now this is a hardcoded search value. We need to update it to where when any of the thumbnails
     * from the result wrapper are clicked, it pulls up that thumbnails video descriptions.
     */
    name: 'Detail',
    data: function() {
        return {
            videoUrl: '',
            videoTitle: '',
            videoDescription: '',
            channelTitle: ''
        }
    },
    components: {
        CustomFrame : () => import('@/components/videoIframe/CustomFrame')
    },
    computed: {
        videoUrlComputed() {
            return `https://www.youtube.com/embed/${this.videoUrl}`;
        }
    },
    created() {
        const apiKey = 'AIzaSyBIwJbl8s6Q6DmCCTj-aqh3vfCNX4gz-dc';
        if (sessionStorage.getItem('batman')) {
            let itemOne = JSON.parse(sessionStorage.getItem('batman'))[0];
            console.log(itemOne);
            this.videoUrl = itemOne.id.videoId;
            this.videoTitle = itemOne.snippet.title;
            this.videoDescription = itemOne.snippet.description;
            this.channelTitle = itemOne.snippet.channelTitle;
            console.log(`channel title ${this.channelTitle}`);
        } else {
            fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="batman"&key=${apiKey}`)
                        .then((res) => {
                            if (res.ok) {
                                return res.json();
                            }
                        }).then((json) => {
                            console.log(json);
                            this.videoUrl = json.items[0].id.videoId;
                            this.videoTitle = json.items[0].snippet.title;
                            this.videoDescription = json.items[0].snippet.description;
                            this.channelTitle = json.items[0].snippet.channelTitle;
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