import {useTranslation} from "next-i18next"
import {ReactElement} from "react"

export default function CatchScreen(): ReactElement {
	const {t} = useTranslation("landingPage")

	return (
		<section className="w-full bg-pitch flex justify-center h-screen bg-opacity-100" id="catch">
			<div className="w-11/12 h-screen flex flex-row justify-evenly items-center">
				<div className="basis-4/12 flex flex-col items-start space-y-10">
					<div>
						<h1 className="text-6xl text-white font-bold">{t("catch.title")}</h1>
					</div>
				</div>
				<div className="bg-backgroundLight basis-4/12 flex flex-col space-y-4 rounded-2xl p-10">
					<p className="text-base text-gray-300">{t("catch.description")}</p>
				</div>
			</div>
		</section>
	)
}
