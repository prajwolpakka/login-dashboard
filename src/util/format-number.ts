export const formatNumber = (number: number): string => {
	const numberFormatOptions: Intl.NumberFormatOptions = {
		style: "decimal",
		useGrouping: true,
	};

	const formattedNumber = new Intl.NumberFormat("en-IN", numberFormatOptions).format(number);

	return formattedNumber;
};
