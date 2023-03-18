import {useTranslation} from "next-i18next"
import {ReactElement} from "react"

import AmbientLight from "./AmbientLight"

export default function GettingStarted(): ReactElement {
	const {t} = useTranslation("landingPage")

	return (
		<section
			className="w-full bg-pitch flex flex-col items-center justify-center min-h-screen relative overflow-hidden"
			id="gettingStarted"
		>
			<AmbientLight />
			<div className="w-11/12 xl:w-8/12 flex flex-col justify-evenly items-center space-y-5">
				<h1 className="text-4xl text-center xl:text-6xl font-bold bg-gradient-to-br from-gray-400 to-white text-transparent bg-clip-text">
					{t("gettingStarted.title")}
				</h1>
				<a
					rel="noopener noreferrer nofollow"
					href="https://app.kleckrelay.com"
					className="text-background font-black cursor-pointer uppercase rounded-full text-base xl:text-xl px-4 py-2 from-blue-400 to-blue-800 bg-gradient-to-br"
				>
					{t("gettingStarted.action")}
				</a>
			</div>
		</section>
	)
}
