import type { PathType } from '#src/config/type.ts'

// 千分位
export const toThousandths = (num: number) => num.toLocaleString(navigator.language)

// 转时间倒计时00:00:00
export const remainingTime = (expireTime: number) => {
	const difference = expireTime * 1000
	if (difference) {
		const hours = Math.floor(difference / (1000 * 60 * 60))
		const minutes = Math.floor((difference / (1000 * 60)) % 60)
		const seconds = Math.floor((difference / 1000) % 60)
		const paddedHours = hours.toString().padStart(2, '0')
		const paddedMinutes = minutes.toString().padStart(2, '0')
		const paddedSeconds = seconds.toString().padStart(2, '0')

		if (hours === 0) {
			return `${paddedMinutes}:${paddedSeconds}`
		}
		return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`
	}
	return '00:00'
}

export const _generateTimestamp = () => {
	const now = new Date()
	const gmtTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000) // 加上时区偏移
	// const timestamp = Math.floor(gmtTime.getTime() / 1000); // 转换为秒级时间戳
	const timestamp = Math.floor(gmtTime.getTime())
	return timestamp
}

export const _sortAndFilterNull = (obj: any) => {
	const sortedObject: any = {}
	const sortedKeys = Object.keys(obj).sort()

	for (const key of sortedKeys) {
		if (obj[key] !== null && obj[key] !== undefined) {
			sortedObject[key] = obj[key]
		}
	}

	return JSON.stringify(sortedObject)
}

// 转时间戳
export const utcStringToTimestamp = (utcString: any) => {
	const year = utcString.slice(0, 4)
	const month = utcString.slice(4, 6) - 1 // 月份从0开始，需要减1
	const day = utcString.slice(6, 8)
	const hours = utcString.slice(8, 10)
	const minutes = utcString.slice(10, 12)
	const seconds = utcString.slice(12, 14)

	const utcDate = new Date(Date.UTC(year, month, day, hours, minutes, seconds))

	// ->YYYY-MM-DD:HH:MM:SS
	const formattedDate = utcDate.toISOString().slice(0, 19).replace('T', ' ')

	// YYYY-MM-DD:HH:MM:SS->时间戳
	const timestamp = new Date(formattedDate).getTime()
	return timestamp
}

// 转YYYY-MM-DD:HH:MM:SS
export const utcStringToTime = (utcString: any) => {
	const year = utcString.slice(0, 4)
	const month = utcString.slice(4, 6) - 1 // 月份从0开始，需要减1
	const day = utcString.slice(6, 8)
	const hours = utcString.slice(8, 10)
	const minutes = utcString.slice(10, 12)
	const seconds = utcString.slice(12, 14)

	const utcDate = new Date(Date.UTC(year, month, day, hours, minutes, seconds))

	// ->YYYY-MM-DD:HH:MM:SS
	const formattedDate = utcDate.toISOString().slice(0, 19).replace('T', ' ')

	return formattedDate
}

export const getImageUrl = (name: string, path: PathType | 'common') => {
	const assets = import.meta.glob('/assets/Images/**/*', { eager: true, import: 'default' })
	return assets[`/assets/Images/${path}/${name}`] as string
}

export const handleToScroll = (path: string, s: number) => {
	const router = useRouter()
	router.push({ path, query: { s } }).then(() => {
		window.location.reload()
	})
}

export const handleContacUs = () => {
	handleToScroll('/company', 2500)
}

export const handleGo = (path: string) => {
	const router = useRouter()
	router.push(path).then(() => {
		window.location.reload()
	})
}

export const handleLeaveNav = () => {
	const curTitle = useCurTitle()
	curTitle.value = ''
}
