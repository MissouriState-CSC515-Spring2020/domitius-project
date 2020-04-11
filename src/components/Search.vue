<template>
    <form class="row mb-4 bg-dark p-3">

        <div class="inputWrapper mb-3 col-12 row">
            <div class="form-group col-2 m-0">
                <select class="form-control" v-model="searchType">
                    <option value="video">video</option>
                </select>
            </div>
             <div class="form-group col-2 m-0">
                <select class="form-control" v-model="resultNumber">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                </select>
            </div>
            <input type="text" v-model="searchTerm" class="col-6 mx-2" placeholder="Search Text, Term, Channel" id="youtubeSearchTerm">
            <button class="btn btn-primary col-1 ml-2 mb-2" @click.prevent="submitRequest">Submit</button>
            <button v-if="items.length > 0" class="btn btn-danger col-1 ml-2 mb-2" @click.prevent="items = []">Clear</button>
        </div>

        <div id="resultWrapper">
            <div class="row overflow-wrap">
                <div class="d-inline-block col-2" v-for="item in items" :key="item.etag">
                    <search-thumbnail :srcLink=item.snippet.thumbnails.default.url :etag=item.etag></search-thumbnail>
                </div>
            </div>
        </div>

    </form>
</template>
<script>
import SearchThumbnail from './SearchThumbnail.vue';
    
// Do we need to lock this away?
const apiKey = 'AIzaSyBIwJbl8s6Q6DmCCTj-aqh3vfCNX4gz-dc';

export default {
    data: function () {
        return {
            items: [],
            searchTerm: '',
            parsedSearchTerm: '',
            searchType: 'video',
            resultNumber: 25
        }    
    },
    components: {
        SearchThumbnail
    },
    watch: {
        // When the route changes, clear search results.
        $route (){
            this.items = [];
        }
    },
    methods: {
        // get data from Youtube data API or cache if available.
        submitRequest: function() {
            if (this.searchType.toLowerCase() == 'video') {
                // See if the search term results are already cached
                // TODO make this a computed property
                this.parsedSearchTerm = `${this.searchTerm}${this.resultNumber}`.toLowerCase().trim();
                // Check cache first
                if (sessionStorage.getItem(this.parsedSearchTerm)) {
                    this.items = JSON.parse(sessionStorage.getItem(this.parsedSearchTerm))
                } else {
                    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${this.resultNumber}&q=${this.searchTerm}&key=${apiKey}`)
                        .then((res) => {
                            if (res.ok) {
                                return res.json();
                            }
                        }).then((json) => {
                            console.log(json);
                            // Display Thumbnails from recently fetched data.
                            this.items = json.items;

                            // Store cache value and key.. {term}{# of results}
                            sessionStorage.setItem(this.parsedSearchTerm, JSON.stringify(json.items));
                        }).catch((error) => {
                            console.log(error);
                        });
                }
            } else {
                this.fetchVideo();
            }           
        },
        fetchVideo: function() {
            fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${this.resultNumber}&q=${this.searchTerm}&key=${apiKey}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            }).then((json) => {
                // update video items from recent search.
                this.items = json.items;

                // Store cache value and key.. {term}{# of results}
                sessionStorage.setItem(this.parsedSearchTerm, JSON.stringify(json.items));
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}

// TODO REMOVE THESE UNUSED FUNCTIONS
// function createIframe(videoId) {
//     let iframe = document.createElement('iframe');
//     iframe.width = 560;
//     iframe.height = 315;
//     iframe.src = `https://www.youtube.com/embed/${videoId}`;
//     iframe.frameBorder = 0;
//     iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';

//     return iframe;
// }

// function createThumbnail(srcLink) {
//     // TODO, I want to be able dynamically create searchThumbanil components with router views attached to each
//     // one. I also want each router view to have a queryParameter to distnguish which video was clicked. Even if we
//     // just kept a single counter or something and added that to each json. Something basic like indexId. 
//     // When they click on the thumbnail, it will take them to a details page. The details page will have the video
//     // in an iframe with sandbox features enabled. It will also list video information like author, date released, 
//     // maybe even comments if that's there.
//     // We might also have a dropdown of keys in storage to act as our category page. Who knows



//     let img = document.createElement('img');
//     img.classList = "offset-1 offset-sm-0 col-10 col-sm-4 col-md-3 col-lg-2 mb-3";
//     img.src = srcLink;

//     // TODO move the methods and events into vue component
//     img.addEventListener('click', function() {

//     });


//     return img;
// }

//  function displayThumbnails(items) {
//      // web component
//      console.log(items);
//     let resultWrapper = document.getElementById('resultWrapper');
//     resultWrapper.innerHTML = "";
//     for (let i = 0; i < items.length; ++i) {
//         if (i > 10) {
//             break;
//         }
//     resultWrapper.appendChild(createThumbnail(items[i].snippet.thumbnails.default.url));
//     }
//  }

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