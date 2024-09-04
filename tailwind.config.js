/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: 'x-',
	important: true,
	content: [
		"./**/*.liquid",
		"./**/*.css",
		"./**/*.html",
		"./**/*.js"
	],
	theme: {
		extend: {
            fontFamily: {
                'jost': ['Jost'],
                'lora': ['Lora'],
            },
		},
        screens: {
            'sm': '425px',
            'mdt': '768px',
            'md': '990px',
            'lg': '1280px'
        }
	},
	plugins: [],
}

