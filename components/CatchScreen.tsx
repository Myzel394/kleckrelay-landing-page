import {useTranslation} from "next-i18next"
import {ReactElement} from "react"

export default function CatchScreen(): ReactElement {
	const {t} = useTranslation("landingPage")

	return (
		<section
			className="w-full bg-pitch flex justify-center items-center min-h-screen bg-opacity-100"
			id="catch"
		>
			<div className="w-11/12 flex flex-col xl:flex-row space-y-5 xl:space-y-0 pt-5 xl:pt-0 justify-evenly items-center">
				<div className="xl:basis-4/12 flex flex-col items-start space-y-10">
					<div>
						<h1 className="text-6xl text-white font-bold">{t("catch.title")}</h1>
					</div>
				</div>
				<div className="bg-backgroundLight xl:basis-4/12 flex flex-col space-y-4 rounded-2xl p-10">
					<p className="text-base text-gray-300">{t("catch.description")}</p>
				</div>
			</div>
		</section>
	)
}
