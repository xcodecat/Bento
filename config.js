// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Laura',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '771da75e0bd9d72e5b8e4bee2a3c96a5', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '49.801680',
	defaultLongitude: '9.164816',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Google Docs',
			icon: 'file',
			link: 'https://docs.google.com/',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Favourite Songs',
					link: 'https://music.youtube.com/playlist?list=LM',
				},
				{
					name: 'Study & Focus',
					link: 'https://music.youtube.com/playlist?list=PLFQJnfSh-Ua_43j_RZ_c_ROPHCXuhmHhx&si=ZSvnJAMCErGjWncn',
				},
				{
					name: 'Code & Focus',
					link: 'https://music.youtube.com/playlist?list=PLFQJnfSh-Ua_QA7E8sljW64L3ll3yNaXn&si=_8DCBn3zeh01px50',
				},
				
				{
					name: 'Byte Beats',
					link: 'https://music.youtube.com/playlist?list=PLFQJnfSh-Ua8L32PlcF3_fxEMV3KVWv-K&si=DCLBy83nY1-A-dov',
				},
			],
		},
		{
			icon: 'book-open-text',
			id: '2',
			links: [
				{
					name: 'Mebis',
					link: 'https://mebis.bycs.de/',
				},
				{
					name: 'bapp',
					link: 'https://bapp.hsgerlenbach.de/newestArticles',
				},
				{
					name: 'schul.cloud',
					link: 'https://app.schul.cloud/',
				},
				{
					name: 'Sharezone',
					link: 'https://web.sharezone.net/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'guitar',
			id: '1',
			links: [
				{
					name: 'Gitarre lernen',
					link: 'https://www.onlinegitarrelernen.de/',
				},
				{
					name: 'Ultimate Guitar',
					link: 'https://www.ultimate-guitar.com/explore',
				},
				{
					name: '',
					link: '',
				},
				{
					name: '',
					link: '',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Colormind',
					link: 'http://colormind.io/',
				},
				{
					name: 'Realtime Colors',
					link: 'https://realtimecolors.com/',
				},
				{
					name: 'Mockaroo',
					link: 'https://www.mockaroo.com/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/xcodecat',
				},
			],
		},
	],
};
