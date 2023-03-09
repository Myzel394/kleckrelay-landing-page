import type {GetStaticProps, NextPage} from "next"
import {useTranslation} from "next-i18next"
import {serverSideTranslations} from "next-i18next/serverSideTranslations"

const Home: NextPage = () => {
	const {t} = useTranslation("landing-page")

	return (<main>
		<h1>
			{t("title")}
		</h1>
	</main>)
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, ["landing-page", "navigation"])),
			// Will be passed to the page component as props
		},
	}
}

export default Home
