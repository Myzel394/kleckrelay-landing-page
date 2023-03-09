import {ReactElement} from "react"
import {useTranslation} from "next-i18next"
import {AiFillFileImage} from "react-icons/ai"
import {BiCodeCurly} from "react-icons/bi"
import {BsImageFill} from "react-icons/bs"
import {FaExpandAlt} from "react-icons/fa"
import {FaVirus} from "react-icons/fa"
import {MdLock} from "react-icons/md"

const FEATURES = [
	{
		icon: BsImageFill,
		title: "features.imageProxy.title",
		description: "features.imageProxy.description",
	},
	{
		icon: AiFillFileImage,
		title: "features.imageFormat.title",
		description: "features.imageFormat.description",
	},
	{
		icon: FaExpandAlt,
		title: "features.expandUrls.title",
		description: "features.expandUrls.description",
	},
	{
		icon: FaVirus,
		title: "features.removeTrackers.title",
		description: "features.removeTrackers.description",
	},
	{
		icon: BiCodeCurly,
		title: "features.openSource.title",
		description: "features.openSource.description",
	},
	{
		icon: MdLock,
		title: "features.encryption.title",
		description: "features.encryption.description",
	},
]

export default function FeaturesScreen(): ReactElement {
	const {t} = useTranslation("landingPage")

	return (
		<section
			className="w-full bg-pitch flex flex-col justify-center h-screen bg-opacity-100 "
			id="features"
		>
			<h1 className="text-6xl text-white font-bold text-center mb-28 mt-20">
				{t("features.title")}
			</h1>
			<div className="w-11/12 h-screen flex-wrap flex flex-row justify-evenly items-stretch">
				{FEATURES.map(feature => (
					<div key={feature.title} className="basis-4/12 shrink-0 px-10">
						<div className="bg-backgroundLight flex flex-col items-center rounded-md p-5 space-y-4">
							<div>
								<feature.icon className="text-white" size={48} />
							</div>
							<div>
								<h2 className="text-white text-xl">{t(feature.title)}</h2>
							</div>
							<div>
								<p className="text-gray-300">{t(feature.description)}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
