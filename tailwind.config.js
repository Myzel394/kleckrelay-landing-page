const {fontFamily, colors} = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				...colors,
				background: "#060913",
			},
			fontFamily: {
				sans: ["var(--font-montserrat)", ...fontFamily.sans],
			},
		},
	},
	plugins: [],
}
