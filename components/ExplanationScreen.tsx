import {ReactElement} from "react"
import {useTranslation} from "next-i18next"
import {FaMask} from "react-icons/fa"
import {FcCursor} from "react-icons/fc"
import {TbMailFast} from "react-icons/tb"

import Divider from "./Divider"

export default function ExplanationScreen(): ReactElement {
	const {t} = useTranslation("landingPage")

	return (
		<section
			className="w-full bg-pitch flex justify-center min-h-screen bg-opacity-100"
			id="explanation"
		>
			<div className="w-11/12 flex flex-col space-y-10 pt-10 xl:space-y-0 xl:pt-0 xl:flex-row justify-evenly items-center">
				<div className="xl:basis-4/12 flex flex-col items-start space-y-10">
					<div>
						<h1 className="text-6xl text-white font-bold">{t("explanation.title")}</h1>
					</div>
				</div>
				<div className="bg-backgroundLight xl:basis-4/12 flex flex-col space-y-4 rounded-2xl p-10 max-w-xl">
					<div className="flex flex-col space-y-4 items-center">
						<div>
							<FaMask className="text-white" size={48} />
						</div>
						<div>
							<h2 className="text-xl text-white text-bold">
								{t("explanation.creation.title")}
							</h2>
						</div>
						<div>
							<p className="text-base text-gray-300">
								{t("explanation.creation.description")}
							</p>
						</div>
					</div>
					<Divider />
					<div className="flex flex-col space-y-4 items-center">
						<div>
							<FcCursor className="text-white" size={48} />
						</div>
						<div>
							<h2 className="text-xl text-white text-bold">
								{t("explanation.usage.title")}
							</h2>
						</div>
						<div>
							<p className="text-base text-gray-300">
								{t("explanation.usage.description")}
							</p>
						</div>
					</div>
					<Divider />
					<div className="flex flex-col space-y-4 items-center">
						<div>
							<TbMailFast className="text-white" size={48} />
						</div>
						<div>
							<h2 className="text-xl text-white text-bold">
								{t("explanation.forward.title")}
							</h2>
						</div>
						<div>
							<p className="text-base text-gray-300">
								{t("explanation.forward.description")}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
