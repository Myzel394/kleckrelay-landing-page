import {appWithTranslation} from "next-i18next"
import type {AppProps} from "next/app"

import {NavigationBar} from "../components"
import "../styles/globals.css"

function MyApp({Component, pageProps}: AppProps) {
	return (
		<>
			<NavigationBar />
			<Component {...pageProps} />
		</>
	)
}

export default appWithTranslation(MyApp)
