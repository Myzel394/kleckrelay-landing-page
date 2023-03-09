import {appWithTranslation} from "next-i18next"
import type {AppProps} from "next/app"
import {Montserrat} from "next/font/google"

import {NavigationBar} from "../components"
import "../styles/globals.css"

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
})

function MyApp({Component, pageProps}: AppProps) {
	return (
		<div className={`${montserrat.variable} font-sans`}>
			<NavigationBar />
			<Component {...pageProps} />
		</div>
	)
}

export default appWithTranslation(MyApp)
