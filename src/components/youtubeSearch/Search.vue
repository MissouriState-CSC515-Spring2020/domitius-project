<template>
    <div>
        <form v-if="isDisplayed" class="row mb-4 bg-dark p-3">
            <div class="row col-12">
                <div class="inputWrapper mb-3 col-12 row">
                    <div class="form-group col-8 col-md-2 mb-2 m-md-0">
                        <select class="form-control" v-model="searchType">
                            <option value="video">video</option>
                        </select>
                    </div>
                    <div class="form-group col-8 col-md-2 mb-2 m-md-0">
                        <select class="form-control" v-model="resultNumber">
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                        </select>
                    </div>
                    <input type="text" v-model="searchTerm" v-if="items.length > 0" class="col-12 col-md-4 mx-2 mb-2 p-2" placeholder="Search Text, Term, Channel">
                    <input type="text" v-model="searchTerm" v-if="items.length == 0" class="col-12 col-md-5 mx-2 mb-2 p-2" placeholder="Search Text, Term, Channel">
                    <button class="btn btn-primary col-12 col-md-1 ml-2 mb-2" @click.prevent="submitRequest">Submit</button>
                    <button @click.prevent="toggleSearch" class="btn btn-warning col-12 col-md-1 ml-2 mb-2">Toggle</button>
                    <button v-if="items.length > 0" class="btn btn-danger col-12 col-md-1 ml-2 mb-2" @click.prevent="items = []">Clear</button>
                </div>

                <!-- TODO WE NEED TO EXTRACT THE RESULT WRAPPER INTO A GALLERY -->
                <div id="resultWrapper" class="w-100">
                    <div class="row overflow-wrap">
                        <div class="d-inline-block col-2" v-for="item in items" :key="item.etag">
                            <search-thumbnail :srcLink=item.snippet.thumbnails.high.url :etag=item.etag></search-thumbnail>
                        </div>
                    </div>
                </div>
            </div>
            <button v-if="!isDisplayed" @click.prevent="toggleSearch" class="btn btn-warning">Toggle</button>
        </form>
        <form v-if="!isDisplayed" class="row mb-4 bg-dark">
            <button @click.prevent="toggleSearch" class="btn btn-warning d-inline ml-auto rounded-bottom mt-0 mb-2 p-1 w-25 text-center">
                Open YouTube Search
            </button>
        </form>
    </div>

</template>
<script>

// Do we need to lock this away?
const apiKey = 'AIzaSyBIwJbl8s6Q6DmCCTj-aqh3vfCNX4gz-dc';

export default {
    name: "Search",
    data: function () {
        return {
            items: [],
            searchTerm: '',
            parsedSearchTerm: '',
            searchType: 'video',
            resultNumber: 25,
            isDisplayed: true,
            thumbnailList: []
        }    
    },
    components: {
        SearchThumbnail: () => import('@/components/youtubeSearch/SearchThumbnail.vue')
    },
    computed: {
        showResults: function () {
            return this.items.length > 0;
        }
    },
    watch: {
        // When the route changes, clear search results.
        $route (){
            this.items = [];
        }
    },
    methods: {
        // toggle visibility
        toggleSearch: function () {
            this.isDisplayed = !this.isDisplayed;
        },
        // get data from Youtube data API or cache if available.
        submitRequest: function() {
            if (this.searchType.toLowerCase() == 'video') {
                // See if the search term results are already cached
                // TODO make this a computed property
                this.parsedSearchTerm = `${this.searchTerm}${this.resultNumber}`.toLowerCase().trim();
                // Check cache first
                if (sessionStorage.getItem(this.parsedSearchTerm)) {
                    this.items = JSON.parse(sessionStorage.getItem(this.parsedSearchTerm));
                } else {
                    this.fetchVideo();
                }
            }         
        },
        fetchVideo: function() {
            return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${this.resultNumber}&q=${this.searchTerm}&key=${apiKey}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            }).then((json) => {
                // update video items from recent search.
                this.items = json.items;

                // Store cache value and key.. {term}{# of results}
                sessionStorage.setItem(this.parsedSearchTerm, JSON.stringify(json.items));

                return true;
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}

//     // TODO, I want to be able dynamically create searchThumbanil components with router views attached to each
//     // one. I also want each router view to have a queryParameter to distnguish which video was clicked. Even if we
//     // just kept a single counter or something and added that to each json. Something basic like indexId. 
//     // When they click on the thumbnail, it will take them to a details page. The details page will have the video
//     // in an iframe with sandbox features enabled. It will also list video information like author, date released, 
//     // maybe even comments if that's there.
//     // We might also have a dropdown of keys in storage to act as our category page. Who knows
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