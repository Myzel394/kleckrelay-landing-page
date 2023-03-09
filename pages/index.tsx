import type {GetStaticProps, NextPage} from "next"
import {useTranslation} from "next-i18next"
import {serverSideTranslations} from "next-i18next/serverSideTranslations"

import LandingScreen from "../components/LandingScreen"

const Home: NextPage = () => {
	const {t} = useTranslation("landingPage")

	return (
		<main>
			<LandingScreen />
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
