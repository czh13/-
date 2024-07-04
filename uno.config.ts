import { defineConfig, presetUno, presetAttributify, transformerDirectives } from 'unocss'
export default defineConfig({
	rules: [],
	presets: [presetUno(), presetAttributify()],
	transformers: [transformerDirectives()],
	shortcuts: {
		'f-ic': 'f-ic',
		'fc-ic': 'flex flex-col items-center',
		'f-c-b': 'flex justify-between items-center',
		'f-c-c': 'flex justify-center items-center',
		'fc-c-c': 'flex flex-col justify-center items-center',
		'tp-t-white': 'text-#fff',
		'tp-t-color': 'text-#0961cf',
		'tp-bg-color': 'bg-#0961cf',
	},
	theme: {},
})
