import type {GetStaticProps, NextPage} from "next"
import {useTranslation} from "next-i18next"
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import {CgArrowLongDown} from "react-icons/cg"

import {MdMail} from "react-icons/md"
import Logo from "../public/logo.svg"
import RandomAliasExample from "../components/RandomAliasExample"
import ServicesRoulette from "../components/ServicesRoulette"

const Home: NextPage = () => {
	const {t} = useTranslation("landingPage")

	return (
		<main className="flex flex-row justify-center">
			<div className="w-11/12 h-screen flex flex-column items-center">
				<div className="basis-7/12">
					<h1
						className="text-9xl font-bold bg-gradient-to-br from-cyan-200 to-blue-800 text-transparent bg-clip-text"
						style={
							{
								fontSize: "10rem",
								lineHeight: "1.2",
								"--tw-gradient-from": "#70D9F0",
								"--tw-gradient-to": "#3D71F5",
							} as any
						}
					>
						{t("title")}
					</h1>
				</div>
				<div className="basis-5/12">
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
		</main>
	)
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, ["landingPage", "navigation"])),
		},
	}
}

export default Home
