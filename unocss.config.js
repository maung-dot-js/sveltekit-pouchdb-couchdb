import {
	defineConfig,
	// presetAttributify,
	presetWind,
	// presetMini,
	presetIcons,
	// presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives
	// transformerVariantGroup
} from 'unocss';

export default defineConfig({
	shortcuts: [
		['w-fill', 'w-[-moz-available] w-[-webkit-fill-available]'],
		[
			'form-input',
			'bg-white px-3 rounded-lg h-11 w-fill text-sm border-1 border-solid border-gray-3  focus:outline-none focus:border-black'
		],
		[
			'btn-fill-primary',
			'bg-primaryColor p-2 rounded-lg border-none text-white cursor-pointer hover:bg-primaryDark disabled:opacity-25 disabled:cursor-not-allowed'
		],
		[
			'btn-outline-primary',
			'bg-transparent border-1 border-solid border-primaryColor p-2 rounded-lg text-primaryColor cursor-pointer hover:bg-primaryColor hover:text-white disabled:opacity-25 disabled:cursor-not-allowed'
		],
		[
			'btn-fill-error',
			'bg-error p-2 rounded-lg border-none text-white cursor-pointer hover:bg-errorDark disabled:opacity-25 disabled:cursor-not-allowed'
		],
		[
			'btn-outline-error',
			'bg-transparent border-1 border-solid border-error p-2 rounded-lg text-error cursor-pointer hover:bg-error hover:text-white'
		],
		[
			'btn-fill-warning',
			'bg-warning p-2 rounded-lg border-none text-white cursor-pointer hover:bg-warningDark disabled:opacity-25 disabled:cursor-not-allowed'
		],
		[
			'btn-fill-default',
			'bg-white p-2 rounded-lg border-1 border-gray-3 text-black cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed hover:bg-gray-2 hover:border-gray-2'
		],
		['btn-default-text', 'bg-transparent text-black border-none hover:bg-transparent'],
		['btn-primary-text', 'bg-transparent text-primaryColor border-none hover:bg-transparent'],
		['btn-error-text', 'bg-transparent text-error border-none hover:bg-transparent'],
		['btn-warning-text', 'bg-transparent text-warning border-none hover:bg-transparent'],
		[
			'btn-outline-warning',
			'bg-transparent border-1 border-solid border-warning p-2 rounded-lg text-warning cursor-pointer hover:bg-warning hover:text-white'
		],
		[
			'btn-transparent',
			'bg-transparent border-none cursor-pointer p-0 hover:bg-transparent hover:opacity-80'
		],
		['list-default', 'list-none ms-0 ps-0 py-2']
	],
	presets: [
		presetUno(),
		presetWind(),
		// presetMini({
		// 	dark: 'class'
		// }),
		// presetTypography({}),
		// presetAttributify(),
		presetIcons({
			warn: true
		}),
		presetWebFonts({
			provider: 'google',
			fonts: {
				sans: 'Poppins:400,600'
			}
		})
	],
	transformers: [transformerDirectives()],
	safelist:
		'prose prose-sm m-auto text-left ml-64 w-3/4 pl-2 pr-2 bg-blue-5 bg-orange-5 bg-[#56d1c9] bg-[#e5e7eb]'.split(
			' '
		),
	rules: [
		// ['w-fill', { width: '-webkit-fill-available' }],
		// ['moz-w-fill', { width: '-moz-available' }],
		['dir-rtl', { direction: 'rtl' }],
		['dir-ltr', { direction: 'ltr' }]
	],
	theme: {
		colors: {
			primaryColor: '#00b8ac',
			primarySoft: '#56d1c9',
			primaryDark: '#0eaca2',
			error: '#ef4444',
			errorSoft: '#f76363',
			errorDark: '#c23838',
			warning: '#ffa500',
			warningSoft: '#faae22',
			warningDark: '#ee9c07',
			backgroundContent: '#fbfbfb',
			blackSoft: 'rgba(0, 0, 0, 0.8)',
			disabled: '#e5e7eb',
			dark: {
				0: '#000000',
				1: '#202124',
				2: '#303134'
			},
			light: {
				0: '#ffffff',
				1: '#e8eaed',
				2: '#bdc1c6',
				3: '#969ba1'
			}
		},
		borderWidth: {
			0.5: '0.5px'
		},
		boxShadow: {
			insetBoxShadow:
				'inset 0 -1px 1px rgba(33, 71, 41, 0.15),0 0.25rem 1.5rem rgba(255, 255, 255, 0.75)',
			standard: '0px 0px 10px #d9d9d9',
			card: '0px 1px 2px rgba(0, 0, 0, 0.12)',
			'inner-md': 'inset 2px 4px 8px 2px rgb(0 0 0 / 0.1)',
			gmail: '0px 1px 1px 0 rgba(65, 69, 73, .3), 0 1px 3px 1px rgba(65, 69, 73, .15)'
		},
		zIndex: {
			60: '60',
			70: '70',
			80: '80',
			90: '90',
			100: '100',
			110: '110',
			2000: '2000',
			3000: '3000'
		},
		breakpoints: {
			xxs: '320px',
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px'
		},
		gridTemplateColumns: {
			menuAndContent: '15rem 100%',
			filterQueryAnakMd: '40% 27% 23%',
			listMpasi: '90% 10%'
		},
		flexGrow: {
			2: '2',
			3: '3',
			4: '4',
			5: '5'
		}
	}
});
