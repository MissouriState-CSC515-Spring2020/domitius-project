<template>
    <form class="row my-4 bg-dark p-3">
        <div class="form-group col-2 m-0">
            <select class="form-control" id="youtubeSearchType" v-model="searchType">
                <option value="playlist">playlist</option>
                <option value="video">video</option>
                <option value="channel">channel</option>
            </select>

        </div>
        <input type="text" v-model="searchTerm" class="col-6 mx-2" placeholder="Search Text, Term, Channel" id="youtubeSearchTerm">
        <button class="btn btn-primary col-2" id="youtubeSearchBtn" @click.prevent="submitRequest">Submit</button>
        <div id="resultWrapper">
        </div>
    </form>
</template>
<script>
import SearchThumbnailVue from './SearchThumbnail.vue';
    const apiKey = 'AIzaSyDvtqDh6EkhAtqWVHysogZx7Iavz4BIPM0';

export default {
    data: function () {
        return {
            searchTerm: '',
            searchType: 'playlist'
        }    
    },
    methods: {
        submitRequest: function() {
            if (this.searchType == 'video') {
                if (sessionStorage.getItem(this.searchTerm)) {
                    displayThumbnails(JSON.parse(sessionStorage.getItem(this.searchTerm)));
                } else {
                    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${this.searchTerm}&key=${apiKey}`)
                        .then((res) => {
                            if (res.ok) {
                                return res.json();
                            }
                        }).then((json) => {
                            console.log(json);
                            // Display Thumbnails from recently fetched data.
                            sessionStorage.setItem(this.searchTerm, JSON.stringify(json.items));
                            displayThumbnails(json.items);

                        }).catch((error) => {
                            console.log(error);
                        });
                }
                

            } else {
                fetch(`https:www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=${apiKey}&part=snippet,contentDetails,statistics,status`)
                        .then((res) => {
                            if (res.ok) {
                                return res.json();
                            }
                        }).then((json) => {
                            console.log(json);
                        }).catch((error) => {
                            console.log(error);
                        });
            }
        
           
        }
    }
}

// function createIframe(videoId) {
//     let iframe = document.createElement('iframe');
//     iframe.width = 560;
//     iframe.height = 315;
//     iframe.src = `https://www.youtube.com/embed/${videoId}`;
//     iframe.frameBorder = 0;
//     iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';

//     return iframe;
// }

function createThumbnail(srcLink) {
    // TODO, I want to be able dynamically create searchThumbanil components with router views attached to each
    // one. I also want each router view to have a queryParameter to distnguish which video was clicked. Even if we
    // just kept a single counter or something and added that to each json. Something basic like indexId. 
    // When they click on the thumbnail, it will take them to a details page. The details page will have the video
    // in an iframe with sandbox features enabled. It will also list video information like author, date released, 
    // maybe even comments if that's there.
    // We might also have a dropdown of keys in storage to act as our category page. Who knows



    let img = document.createElement('img');
    img.classList = "offset-1 offset-sm-0 col-10 col-sm-4 col-md-3 col-lg-2 mb-3";
    img.src = srcLink;

    // TODO move the methods and events into vue component
    img.addEventListener('click', function() {

    });


    return img;
}

 function displayThumbnails(items) {
     // web component
     console.log(items);
    let resultWrapper = document.getElementById('resultWrapper');
    resultWrapper.innerHTML = "";
    for (let i = 0; i < items.length; ++i) {
        if (i > 10) {
            break;
        }
    resultWrapper.appendChild(createThumbnail(items[i].snippet.thumbnails.default.url));
    }
 }

</script>
<style scoped>
    /* deep allows the styles to be passed down to it's children */
    /deep/ img {
        width: 100%;
        height: 250px;
        transition: all .30s ease-in-out;
    }

    @media screen and (min-width: 845px) {
        /deep/ img:hover {
            transform: scale(1.1);
            border-radius: 10%;
            cursor: pointer;
        }		
    }
</style>