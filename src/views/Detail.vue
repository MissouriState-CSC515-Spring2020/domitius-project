<template>
    <div>

        <div class="main">
                <main>
                    <image-detail title="Lord of the Rings Scene" src="https://wallpapercave.com/wp/kGt54AQ.jpg" 
                    imageAlt="LOTR" descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    dateUploaded="02/20/2020" dimensions="500 x 600" tags="Water, Ring, Frodo" 
                    downloadUrl="https://wallpapercave.com/wp/kGt54AQ.jpg"></image-detail>
                </main>
            </div>



        
    </div>
</template>

<script>
import ImageDetail from '@/components/imageDetail/ImageDetail'

export default {
    name: 'Detail',
    components: {
        ImageDetail
    }
}
</script>