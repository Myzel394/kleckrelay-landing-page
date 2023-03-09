import {ReactElement} from "react"
import {useTranslation} from "next-i18next"

const ROUTES = ["explanation", "features", "legacy", "security", "gettingStarted"]

export default function NavigationBar(): ReactElement {
	const {t} = useTranslation("navigation")

	return (
		<div className="fixed w-full flex flex-row justify-center top-0 left-0">
			<nav className="w-11/12 mt-5">
				<ul className="flex flex-row space-x-5">
					{ROUTES.map(route => (
						<li key={route}>
							<a
								className="py-2 align-middle text-center px-3 text-white font-black text-base hover:bg-white hover:bg-opacity-10 rounded-lg duration-100"
								href={`#${route}`}
							>
								{t(`routes.${route}`)}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}
