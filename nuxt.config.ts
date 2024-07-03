// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	devtools: { enabled: true },

	srcDir: 'src/',

	dir: {
		public: 'public',
	},

	devServer: {
		host: '0.0.0.0',
		port: 3091,
	},

	nitro: {
		compressPublicAssets: {
			gzip: true,
			brotli: true,
		},
	},

	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover',
			title: 'Cartbank',
			link: [{ rel: 'icon', type: 'image/x-icon', href: '' }],
		},
		pageTransition: { name: 'page', mode: 'out-in' },
		layoutTransition: { name: 'layout', mode: 'out-in' },
	},

	modules: ['@unocss/nuxt', '@nuxtjs/i18n', '@nuxt/image'],

	i18n: {
		lazy: true,
		langDir: 'locales',
		defaultLocale: 'en-US',
		locales: [
			{
				code: 'en-US',
				iso: 'en-US',
				file: 'en-US.json',
			},
			{
				code: 'zh-CN',
				iso: 'zh-Hans',
				file: 'zh-CN.json',
			},
		],
	},

	image: {
		domains: ['http://192.168.1.34:3090/'],
		dir: 'assets/images',
	},

	components: [
		{ path: '~/components' },
		{
			path: '~/components/features/',
			pathPrefix: false,
		},
	],

	plugins: [{ src: '~/plugins/aos.client.ts', mode: 'client', ssr: false }],

	router: {
		options: {
			scrollBehaviorType: 'smooth',
		},
	},

	css: ['~/assets/styles/common.scss', '~/assets/styles/reset.scss'],

	unocss: {
		rules: [
			['tp-bg-color', { background: '#0961cf' }],
			['tp-t-color', { color: '#0961cf' }],
			['tp-t-white', { color: '#fff' }],
		],
	},
	vite: {
		css: {
			preprocessorOptions: {
				additionalData: '@import "@/assets/styles/default.scss";',
			},
		},
		optimizeDeps: {
			exclude: ['*.ts', '*.vue'],
		},
	},

	build: {
		analyze: true,
	},
})
