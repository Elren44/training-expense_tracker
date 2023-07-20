export const getFormattedDate = (date) => {

	const day = date.getDate()
	const month = date.getMonth() + 1
	const year = date.getFullYear()
	return `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`
}

export const getDateMinusDays = (date, days) => {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}
