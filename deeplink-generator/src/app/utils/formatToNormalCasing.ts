export const formatToNormalCasing = (str: string, sep: string = "_") => {
	return str
		.split(sep)
		.map(
			(each) =>
				each.substring(0, 1).toUpperCase() + each.substring(1).toLowerCase()
		)
		.join(" ");
};
