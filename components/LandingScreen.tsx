import {useTranslation} from "next-i18next"
import {ReactElement} from "react"
import {CgArrowLongDown} from "react-icons/cg"
import {MdMail} from "react-icons/md"
import AmbientLight from "./AmbientLight"
import RandomAliasExample from "./RandomAliasExample"
import ServicesRoulette from "./ServicesRoulette"

export default function LandingPage(): ReactElement {
	const {t} = useTranslation("landingPage")

	return (
		<section className="flex flex-row justify-center relative overflow-hidden w-screen">
			<AmbientLight />
			<div className="w-11/12 h-screen flex flex-row justify-between items-center">
				<div className="basis-6/12 flex flex-col items-start space-y-10">
					<div>
						<h1
							className="text-9xl font-bold bg-gradient-to-br from-cyan-200 to-blue-800 text-transparent bg-clip-text"
							style={
								{
									fontSize: "9rem",
									lineHeight: "1.2",
									"--tw-gradient-from": "#70D9F0",
									"--tw-gradient-to": "#3D71F5",
								} as any
							}
						>
							{t("landing.title")}
						</h1>
					</div>
					<div>
						<a
							href="#explanation"
							className="text-background font-black uppercase rounded-full text-xl px-4 py-2 from-blue-400 to-blue-800 bg-gradient-to-br"
						>
							{t("landing.goToExplanation")}
						</a>
					</div>
				</div>
				<div className="basis-4/12">
					<div className="flex flex-col items-center justify-center space-y-8">
						<div>
							<p className="text-white font-bold">
								{t("landing.creationExplanation")}
							</p>
						</div>
						<div>
							<ServicesRoulette />
						</div>
						<div>
							<CgArrowLongDown className="text-white" size={32} />
						</div>
						<div>
							<RandomAliasExample />
						</div>
						<div>
							<CgArrowLongDown className="text-white" size={32} />
						</div>
						<div className="flex flex-col items-center space-y-2">
							<MdMail className="text-white" size={64} />
							<p className="text-gray-100 text-center">{t("landing.privateMail")}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
