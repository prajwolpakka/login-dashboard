import { FilterFilled } from "@ant-design/icons";
import { Button, Card, Dropdown, Row, Select, Space, Tag } from "antd";
import { useState } from "react";

export interface FilterItemProps<T> {
	label: string;
	value: keyof T;
	options: Array<{ label: string; value: string | boolean }>;
}

export interface FilterOptionProps {
	filterBy?: string;
	filterValue?: string | boolean;
}

interface Props<T> {
	selected?: FilterOptionProps;
	items: Array<FilterItemProps<T>>;
	onConfirm: (filterOption: FilterOptionProps) => void;
}

export const TableFilter = <T,>(props: Props<T>) => {
	const { items, onConfirm, selected } = props;
	const [open, setOpen] = useState(false);

	const [filterBy, setFilterBy] = useState(selected?.filterBy ?? (items[0].value as string));
	const [filterValue, setFilterValue] = useState(selected?.filterValue);

	const confirmFilterSelection = () => {
		onConfirm({ filterBy, filterValue });
		setOpen(false);
	};

	const clearFilterSelection = () => {
		onConfirm({});
		setFilterValue(undefined);
		setOpen(false);
	};

	const toggleDropdownVisibility = () => setOpen((open) => !open);

	return (
		<Dropdown
			trigger={["click"]}
			open={open}
			dropdownRender={() => {
				return (
					<Card
						styles={{ body: { padding: 15 } }}
						style={{ width: 475, backgroundColor: "white", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
						actions={[
							<Row justify={"start"} style={{ paddingLeft: 15, cursor: "default" }}>
								<Space>
									<Button type="primary" onClick={confirmFilterSelection}>
										Confirm
									</Button>
									{selected?.filterValue === undefined ? (
										<Button onClick={clearFilterSelection}>Cancel</Button>
									) : (
										<Button onClick={clearFilterSelection}>Clear</Button>
									)}
								</Space>
							</Row>,
						]}
					>
						<Row style={{ width: "100%" }} justify={"space-between"} align={"middle"}>
							<Select style={{ width: 200 }} placeholder="Select Filter" value={filterBy} onChange={setFilterBy}>
								{items.map(({ value, label }, index) => {
									return (
										<Select.Option key={index} value={value}>
											{label}
										</Select.Option>
									);
								})}
							</Select>
							is
							<Select style={{ width: 200 }} placeholder="Select Option" value={filterValue} onChange={setFilterValue}>
								{items
									.find((item) => item.value === filterBy)
									?.options.map(({ value, label }, index) => (
										<Select.Option key={index} value={value}>
											{label}
										</Select.Option>
									))}
							</Select>
						</Row>
					</Card>
				);
			}}
		>
			<>
				<Tag.CheckableTag
					checked={false}
					onClick={toggleDropdownVisibility}
					style={{
						padding: "5px 15px",
						fontSize: 12,
						backgroundColor: "white",
						border: "1px solid #e8eaed",
						display: "flex",
						alignItems: "center",
					}}
				>
					<Space
						style={{
							color: selected?.filterValue === undefined ? "#656f7d" : "blue",
						}}
					>
						Filter
						<FilterFilled />
					</Space>
				</Tag.CheckableTag>

				{selected?.filterValue !== undefined && (
					<Tag
						color="blue"
						closable
						onClose={() => clearFilterSelection()}
						style={{ display: "flex", alignItems: "center" }}
					>
						{
							items
								.find((item) => item.value === selected?.filterBy)
								?.options.find((item) => item.value === filterValue)?.label as string
						}
					</Tag>
				)}
			</>
		</Dropdown>
	);
};
