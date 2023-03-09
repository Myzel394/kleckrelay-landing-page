import {ReactElement, useMemo, useState} from "react"
import {
	BsFacebook,
	BsLinkedin,
	BsMicrosoftTeams,
	BsPinterest,
	BsReddit,
	BsSlack,
	BsStackOverflow,
	BsTwitch,
	BsTwitter,
} from "react-icons/bs"
import {FaAmazon, FaDiscord, FaTiktok} from "react-icons/fa"
import {IoLogoFigma} from "react-icons/io5"
import {
	SiAdobecreativecloud,
	SiAirbnb,
	SiApple,
	SiAsana,
	SiBabel,
	SiBitly,
	SiBitwarden,
	SiDeutschebahn,
	SiDuolingo,
	SiEbay,
	SiElement,
	SiFirefox,
	SiGithub,
	SiInstagram,
	SiNetflix,
	SiObsidian,
	SiOdysee,
	SiSketch,
	SiSnapchat,
	SiVercel,
	SiZoom,
} from "react-icons/si"
import {IconType} from "react-icons"

import {useFirstMountState, useIntervalEffect} from "@react-hookz/web"

const SERVICES_ICONS: IconType[] = [
	BsStackOverflow,
	BsTwitter,
	BsFacebook,
	FaAmazon,
	BsSlack,
	SiElement,
	BsTwitch,
	SiAirbnb,
	SiInstagram,
	FaTiktok,
	SiNetflix,
	BsReddit,
	BsLinkedin,
	FaDiscord,
	BsPinterest,
	SiEbay,
	SiZoom,
	BsMicrosoftTeams,
	SiAsana,
	SiBitwarden,
	SiBitly,
	SiAdobecreativecloud,
	SiGithub,
	SiVercel,
	SiOdysee,
	SiDeutschebahn,
	SiObsidian,
	IoLogoFigma,
	SiFirefox,
	SiSketch,
	SiBabel,
	SiDuolingo,
	SiSnapchat,
	SiApple,
]

const INDEX_OPACITY_MAP: Record<string, string> = {
	"-1": "opacity-0",
	0: "opacity-0",
	1: "opacity-10",
	2: "opacity-50",
	3: "opacity-100",
	4: "opacity-50",
	5: "opacity-10",
	6: "opacity-0",
}

export default function ServicesRoulette(): ReactElement {
	const services = useMemo(() => SERVICES_ICONS.sort(() => 0.5 - Math.random()), [])
	const [index, setIndex] = useState<number>(0)
	const [shouldAnimate, setShouldAnimate] = useState<boolean>(false)
	const isFirstMount = useFirstMountState()

	const visibleServices = [
		services[index],
		services[(index + 1) % services.length],
		services[(index + 2) % services.length],
		services[(index + 3) % services.length],
		services[(index + 4) % services.length],
		services[(index + 5) % services.length],
		services[(index + 6) % services.length],
	]

	useIntervalEffect(() => {
		if (shouldAnimate) {
			setShouldAnimate(false)
			setIndex(currentIndex => (currentIndex + 1) % services.length)
		} else {
			setShouldAnimate(true)
		}
	}, 1000)

	if (isFirstMount) {
		return <></>
	}

	return (
		<div className="flex flex-row">
			{visibleServices.map((Icon, iconIndex) => {
				return (
					<div
						key={`${index}-${Icon.name}`}
						className={`px-5 text-white duration-500 ${
							shouldAnimate
								? INDEX_OPACITY_MAP[iconIndex - 1] + " -translate-x-full"
								: INDEX_OPACITY_MAP[iconIndex]
						}`}
					>
						<Icon size={48} />
					</div>
				)
			})}
		</div>
	)
}
