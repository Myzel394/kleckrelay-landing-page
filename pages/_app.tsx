import {appWithTranslation, useTranslation} from "next-i18next"
import type {AppProps} from "next/app"
import {Montserrat} from "next/font/google"
import Head from "next/head"

import {NavigationBar} from "../components"
import "../styles/globals.css"

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
})

function MyApp({Component, pageProps}: AppProps) {
	return (
		<div className={`${montserrat.variable} font-sans`}>
			<Head>
				{/* eslint-disable-next-line i18next/no-literal-string */}
				<title>
					KleckRelay - Create unlimited email aliases, remove trackers and preload images
					using KleckRelay
				</title>
				<meta
					name="description"
					content="Create unlimited email aliases, remove trackers and preload images using KleckRelay"
				/>
				<link rel="icon" type="image/x-icon" href="logo.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property="og:title" content="KleckRelay" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="KleckRelay" />
				<meta
					property="og:description"
					content="Create unlimited email aliases, remove trackers and preload images using KleckRelay"
				/>
				<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
				<meta property="og:image" content="https://www.kleckrelay.com/images/og-card.png" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:site" content="@kleckrelay" />
				<meta property="twitter:title" content="KleckRelay" />
				<meta
					property="twitter:description"
					content="Create unlimited email aliases, remove trackers and preload images using KleckRelay"
				/>
				<meta
					property="twitter:image"
					content="https://www.kleckrelay.com/images/twitter-card.png"
				/>
				<meta name="theme-color" content="#3D71F5" />
			</Head>
			<NavigationBar />
			<Component {...pageProps} />
		</div>
	)
}

export default appWithTranslation(MyApp)
