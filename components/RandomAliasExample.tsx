import {ReactElement, useEffect, useState} from "react"
import Image from "next/image"

import {useIntervalEffect, useTimeoutEffect} from "@react-hookz/web"

const generateAlias = (): string => {
	// Random characters from a-z, A-Z, 0-9 with a length of 5 characters

	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	const charactersLength = characters.length
	let result = ""

	for (let i = 0; i < 5; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength))
	}

	return result + "@kleckrelay.com"
}

export default function RandomAliasExample(): ReactElement {
	const [alias, setAlias] = useState<string>("")

	useEffect(() => {
		setAlias(generateAlias())
	}, [])

	useIntervalEffect(() => {
		setAlias(generateAlias())
	}, 2000)

	return (
		<div className="space-y-4 flex flex-col items-center w-40">
			<Image priority src="/logo.svg" height={192} width={192} alt="KleckRelay" />
			<h3 className="text-white font-bold">{alias}</h3>
		</div>
	)
}
