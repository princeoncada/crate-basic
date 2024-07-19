/** @type {import('tailwindcss').Config} */
module.exports = {
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
	},
	plugins: [],
}

