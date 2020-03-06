module.exports = {
	pwa: {
		name: 'Photo Gallery',
		short_name: 'Photos',
		msTileColor: '#000000',
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: 'black',

		// configure the workbox plugin
		workboxPluginMode: 'GenerateSW',

		manifestOptions: {
			name: 'Photo Gallery',
			short_name: 'Photos',
			start_url: '/',
			display: 'fullscreen',
			theme_color: '#00695c',
			icons: [
				{
					'src': './img/icons/photo-icon-192x192.png',
					'sizes': '192x192',
					'type': 'image/png'
				},
				{
					'src': './img/icons/photo-icon-512x512.png',
					'sizes': '512x512',
					'type': 'image/png'
				}
			]
		},

		iconPaths: {
			favicon32: 'img/icons/favicon-32x32.png',
			favicon16: 'img/icons/favicon-16x16.png',
			appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
			msTileImage: 'img/icons/msapplication-icon-144x144.png'
		},
	},
	configureWebpack:{
		optimization: {
			splitChunks: {
				chunks: 'all'
			}
		}
	}
};