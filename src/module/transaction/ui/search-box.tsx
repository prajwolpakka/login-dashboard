import { Input } from "antd";
import React, { useState } from "react";

interface Props {
	value?: string;
	onChange: (value?: string) => void;
}

export const SearchBox: React.FC<Props> = (props) => {
	const { onChange, value } = props;
	const [searchText, setSearchText] = useState(value);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value) setSearchText(e.target.value);
		else {
			setSearchText(undefined);
			onChange(undefined);
		}
	};

	const handleSearch = () => {
		onChange(searchText);
	};

	return (
		<Input
			allowClear
			value={searchText}
			style={{ width: 250 }}
			onPressEnter={handleSearch}
			onChange={handleInputChange}
			placeholder="Search..."
		/>
	);
};
