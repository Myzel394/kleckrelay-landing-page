import type {GetStaticProps, NextPage} from "next"
import {useTranslation} from "next-i18next"
import {serverSideTranslations} from "next-i18next/serverSideTranslations"

import CatchScreen from "../components/CatchScreen"
import ExplanationScreen from "../components/ExplanationScreen"
import FeaturesScreen from "../components/FeaturesScreen"
import GettingStarted from "../components/GettingStarted"
import LandingScreen from "../components/LandingScreen"

const Home: NextPage = () => {
	const {t} = useTranslation("landingPage")

	return (
		<main className="overflow-x-hidden">
			<LandingScreen />
			<ExplanationScreen />
			<FeaturesScreen />
			<CatchScreen />
			<GettingStarted />
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
