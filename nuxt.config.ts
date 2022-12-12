// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	typescript: {
		shim: false
	},
	css: ['~/assets/css/main.scss'],
	app: {
		head: {
			link: [
				{ rel: "icon", href: "./favicon.ico" }
			]
		}
	},
	modules: ['@nuxt/content', '@nuxtjs/color-mode'],
	plugins: [{ src: '~/plugins/vercel.js', mode: 'client' }],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
})
