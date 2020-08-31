module.exports = {
	purge: [],
	theme: {
		fontFamily: {
			sans: ['Avenir', 'Avenir', 'sans-serif'],
			Avenir: ['Avenir'],
		},
		extend: {
			colors: {
				// primary: 'var(--bg-background-primary)',
				// secondary: 'var(--bg-background-secondary)',
				// indigo: '#4F63FF',
				// green: {
				// 	main: '#28B759',
				// 	sub: '#35BB63',
				// },
				// black: {
				// 	main: '#27292D',
				// 	sub: '#7E7E7E',
				// 	ternary: '#9BA1B5',
				// },

				background: {
					primary: 'var(--bg-background-primary)',
					secondary: 'var(--bg-background-secondary)',
					indigo: '#4F63FF',
					green: {
						main: '#28B759',
						sub: '#35BB63',
					},
					black: {
						main: '#27292D',
						sub: '#7E7E7E',
						ternary: '#9BA1B5',
					},
				},

				copy: {
					primary: 'var(--text-copy-primary)',
				},

				progressbar: {
					primary: 'var(--text-copy-primary)',
				},

				textColor: {
					primary: 'var(--bg-background-primary)',
					secondary: 'var(--bg-background-secondary)',
					indigoish: '#4F63FF',
					green: {
						main: '#28B759',
						sub: '#35BB63',
					},
					black: {
						main: '#27292D',
						sub: '#7E7E7E',
						ternary: '#9BA1B5',
					},
				},
			},

			fontSize: {
				xxs: '.5625rem',
				xs: '.59375rem',
				sm: '.625rem',
				md: '75rem',
				lg: '875rem',
				xl: '2.25rem',
				'2xl': '1.5rem',
				'3xl': '1.875rem',
				'4xl': '2.25rem',
				'5xl': '3rem',
				'6xl': '4rem',
				'7xl': '5rem',
			},

			spacing: {
				21: '5.8rem',
				26: '4.9rem',
				27: '6.4rem',
				28: '7.25rem',
				30: '7.50rem',
			},
		},
	},
	variants: {
		outline: ['responsive', 'focus', 'hover', 'active'],
	},
};
