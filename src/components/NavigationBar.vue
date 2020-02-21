<template>

    <!--Nav Bar -->
	<nav class="row navbar navbar-expand-sm bg-light navbar-light border-bottom mb-5 pt-3 pb-3">
        <router-link :to="'/'" class="navbar-brand text-decoration-none text-dark"><h3>Company Name</h3></router-link> 
		<ul class="offset-1 offset-sm-2 offset-md-4 offset-lg-6 navbar-nav d-none d-sm-flex">
			<li class="nav-item text-white">
                <router-link :to="'/'" class="nav-link">Home</router-link>
			</li>
			<li class="nav-item dropdown text-white">
				<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Categories
				</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <router-link :to="'/category'" class="dropdown-item">Art</router-link>
                    <router-link :to="'/category'" class="dropdown-item">Category 2</router-link>
                    <router-link :to="'/category'" class="dropdown-item">Etc</router-link>

                    <div class="dropdown-divider"></div>
                    <router-link :to="'/category'" class="dropdown-item">All</router-link>
                </div>
			</li>
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Albums
				</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <router-link :to="'/category'" class="dropdown-item">Album 1</router-link>
                    <router-link :to="'/category'" class="dropdown-item">Album 2</router-link>
                    <router-link :to="'/category'" class="dropdown-item">Etc</router-link>

					<div class="dropdown-divider"></div>
                    <router-link :to="'/category'" class="dropdown-item">All</router-link>
				</div>
			</li>
		</ul>

		<!-- Collapse button -->
		<div class="mobileNavBar d-sm-none col-5">
			<button class="navbar-toggler offset-8" type="button" data-toggle="collapse" data-target="#mobileNavBar"
			aria-controls="mobileNavBar" aria-expanded="false" aria-label="Toggle navigation">
				<div id="mobileHamburger">
					<img src="https://static.thenounproject.com/png/659803-200.png" alt="tempHamburgerMenu">
				</div>
			</button>

			<!-- Collapsible content -->
			<div class="collapse navbar-collapse" id="mobileNavBar">

				<!-- Links -->
				<ul class="navbar-nav mr-auto">
					<li class="nav-item border border-dark bg-white p-2">
                        <router-link :to="'/'" class="nav-link">Home</router-link>
					</li>
					<li class="nav-item border border-dark bg-white p-2">
                        <router-link :to="'/category'" class="nav-link">Categories</router-link>
					</li>
					<li class="nav-item border border-dark bg-white p-2">
                        <router-link :to="'/category'" class="nav-link">Albums</router-link>
					</li>
				</ul>
				<!-- Links -->
			</div>
		</div>
	</nav>
	<!--End of Nav Bar -->
</template>

<script>
export default {
    name: 'NavigationBar'
}
</script>

<style scoped>
    .mobileNavBar {
        z-index: 1;
    }

    #mobileHamburger {
        width: 40px;
        height: 40px;
    }

    #mobileHamburger img {
        width: 100%;
        height: auto;
    }
</style>