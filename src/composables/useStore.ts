export const useCurTitle = () => useState('curTitle', () => '')
export const useIsLeaveTop = () => useState('isLeaveTop', () => false)

export const useProductInfo = () =>
	useState('productInfo', () => {
		return {
			bg: {
				bgTitle: 'Excel at receiving payments in global markets',
				bgText: 'All-in-one payment process for global enterprises,  to offer customers in global markets a seamless and secure z',
			},
			intro: {
				introList: [
					{
						icon: getImageUrl('icon-one.png', 'product'),
						title: '1000+ payment methods in over 40 countries',
						text: 'Accept local currency payments, bypassing challenges related to currency fluctuations and enabling easy funds transfer.',
					},
					{
						icon: getImageUrl('icon-two.png', 'product'),
						title: 'Localized traditional and alternative payment methods',
						text: 'Pay-ins offers cards, cash, bank transfers, mobile money, and eWallets – ensuring a familiar customer checkout experience throughout emerging economies.',
					},
					{
						icon: getImageUrl('icon-thr.png', 'product'),
						title: 'Accept payment in Africa, Asia, and Latin America',
						text: 'Integrating Pay-ins and accepting local payment methods boosts conversion rates, maximizes customer reach, and streamlines your go-to-market strategies.',
					},
				],
			},
			solu: {
				soluImg: getImageUrl('Pay-ins-pic.png', 'product'),
				soluList: [
					{ icon: getImageUrl('icon-payins-one.png', 'product'), text: 'Expand to more than 40 countries worldwide' },
					{ icon: getImageUrl('icon-payins-two.png', 'product'), text: 'Handle payments in local currency' },
					{ icon: getImageUrl('icon-payins-thr.png', 'product'), text: 'Access to over 900 payment methods' },
					{ icon: getImageUrl('icon-payins-four.png', 'product'), text: 'Track transactions, and reconcile payments efficiently' },
					{ icon: getImageUrl('icon-payins-five.png', 'product'), text: 'Manage all your payments, local and cross-border through comprehensive dashboard' },
					{ icon: getImageUrl('icon-payins-six.png', 'product'), text: 'Create the most suitable checkout model that suits both business and brand needs' },
				],
			},
			tab: {
				tabList: ['Financial Institutions', 'Global PayrollMarketplaces', 'Ecommerce', 'Gaming', 'Crypto', 'Digital Media, Entertainment'],
				tabContent: {
					'Financial Institutions': {
						titleImg: getImageUrl('fina.png', 'product'),
						title: 'Use Toppay’s local entities to process payments in different countries.',
						textList: [
							'AUS E-money licensed solution.',
							'Local FX expertise.',
							'Reporting and reconciliation tools for multiple sub-accounts.',
							'Direct connections to multiple acquirers in each market',
						],
					},
					Marketplaces: {
						titleImg: getImageUrl('mark.png', 'product'),
						title: 'Toppay’s local entities to process payments in different countries.',
						textList: ['AUS E-money licensed solution.', 'AUS E-money licensed solution.', 'AUS E-money licensed solution.', 'AUS E-money licensed solution.'],
					},
					'Global PayrollMarketplaces': {
						titleImg: getImageUrl('glob.png', 'product'),
						title: 'Toppay’s local entities to process payments in different countries.',
						textList: ['AUS E-money licensed solution.', 'AUS E-money licensed solution.', 'AUS E-money licensed solution.', 'AUS E-money licensed solution.'],
					},
					Ecommerce: {
						titleImg: getImageUrl('ecom.png', 'product'),
						title: 'Toppay’s local entities to process payments in different countries.',
						textList: ['AUS E-money licensed solution.', 'AUS E-money licensed solution.', 'AUS E-money licensed solution.', 'AUS E-money licensed solution.'],
					},
					Gaming: {
						titleImg: getImageUrl('gami.png', 'product'),
						title: 'Toppay’s local entities to process payments in different countries.',
						textList: ['AUS E-money licensed solution.', 'AUS E-money licensed solution.', 'AUS E-money licensed solution.', 'AUS E-money licensed solution.'],
					},
					Crypto: {
						titleImg: getImageUrl('.png', 'product'),
						title: 'Toppay’s local entities to process payments in different countries.',
						textList: ['AUS E-money licensed solution.', 'AUS E-money licensed solution.', 'AUS E-money licensed solution.', 'AUS E-money licensed solution.'],
					},
					'Digital Media, Entertainment': {
						titleImg: getImageUrl('digi.png', 'product'),
						title: 'Toppay’s local entities to process payments in different countries.',
						textList: ['AUS E-money licensed solution.', 'AUS E-money licensed solution.', 'AUS E-money licensed solution.', 'AUS E-money licensed solution.'],
					},
				},
			},
			other: {
				otherList: [
					{
						title: 'Payouts',
						text: 'Pay your staff, customers, and partners in local currency. Payouts enhances customer satisfaction and streamlines your payment process.',
						goText: 'More info',
						path: '/product/Payouts',
					},
					{
						title: 'Platforms',
						text: 'Handling pay-ins and payouts in local currency through a quick integration.',
						goText: 'More info',
						path: '/product/Platforms',
					},
				],
			},
		}
	})

export const useCovInfo = () =>
	useState('covInfo', () => {
		return {
			bg: {
				img: getImageUrl('cov-bg-as.png', 'coverage'),
				c: 'Asia: ',
				title: 'The world’s leader in eCommerce market sales',
				text: 'Asia leads global eCommerce, driving nearly 50% of worldwide revenue *. Offer local payment methods to tap into the exploding digital payment world within the region. * Source: Statista, 2023',
			},
			reason: {
				list: [
					{ afasTitle: 'eCommerce growth', afasText: 'eCommerce revenue in Asia is expected to reach USD 2.82 trillion by 2027.' },
					{
						afasTitle: 'Online shoppers',
						afasText: 'eWallets have emerged as the preferred payment method in Asia, accounting for 69% of the total eCommerce purchases in the region.',
					},
					{
						afasTitle: 'Mobile money users',
						afasText: 'The internet penetration rate in Asia doubled from 2011 to 2022, reaching 67.4%.',
					},
					{
						afasTitle: 'Mobile money users',
						afasText: 'The number of online shoppers in Asia is forecast to reach 3.38 billion by 2027.',
					},
				],
				title: 'Make innovation of payment service in asia',
				soluTitle: 'Explore exciting business possibilities in Africa',
			},
			tab: {
				tabList: ['Philippines', 'Indonesia', 'Malaysia', 'Pakistan', 'Thailand', 'Vietnam', 'Saudi Arabia'],
				tabContent: {
					Philippines: {
						isCard: false,
						tabTitle: '',
						tabSpan: '',
						tabText: '',
						img: '',
						payImages: [
							{
								title: '',
								images: [],
							},
						],
					},
					Indonesia: {
						isCard: false,
						tabTitle: '',
						tabSpan: '',
						tabText: '',
						img: '',
						payImages: [
							{
								title: '',
								images: [],
							},
						],
					},
					Malaysia: {
						isCard: false,
						tabTitle: '',
						tabSpan: '',
						tabText: '',
						img: '',
						payImages: [
							{
								title: '',
								images: [],
							},
						],
					},
					Pakistan: {
						isCard: false,
						tabTitle: '',
						tabSpan: '',
						tabText: '',
						img: '',
						payImages: [
							{
								title: '',
								images: [],
							},
						],
					},
					Thailand: {
						isCard: false,
						tabTitle: '',
						tabSpan: '',
						tabText: '',
						img: '',
						payImages: [
							{
								title: '',
								images: [],
							},
						],
					},
					Vietnam: {
						isCard: false,
						tabTitle: '',
						tabSpan: '',
						tabText: '',
						img: '',
						payImages: [
							{
								title: '',
								images: [],
							},
						],
					},
					'Saudi Arabia': {
						isCard: false,
						tabTitle: '',
						tabSpan: '',
						tabText: '',
						img: '',
						payImages: [
							{
								title: '',
								images: [],
							},
						],
					},
				},
			},
		}
	})
