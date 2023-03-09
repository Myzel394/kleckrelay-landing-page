import {ReactElement} from "react"
import Image from "next/image"

export default function AmbientLight(): ReactElement {
	return (
		<>
			<Image
				className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 left-1/4 top-1/3"
				src="/images/ambient-circle-1.png"
				alt=""
				width={800}
				height={800}
				loading="lazy"
			/>
			<Image
				className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 left-3/4 top-1/2"
				src="/images/ambient-circle-2.png"
				alt=""
				width={1200}
				height={1200}
				loading="lazy"
			/>
		</>
	)
}
