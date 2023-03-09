import type {GetStaticProps, NextPage} from "next"
import {useTranslation} from "next-i18next"
import {serverSideTranslations} from "next-i18next/serverSideTranslations"

const Home: NextPage = () => {
	const {t} = useTranslation("landingPage")

	return (
		<main className="flex flex-row justify-center">
			<div className="w-11/12 h-screen flex flex-column items-center">
				<div className="w-7/12">
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
