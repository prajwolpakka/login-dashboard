import { SortAscendingOutlined, SortDescendingOutlined } from "@ant-design/icons";
import { Dropdown, Space, Tag } from "antd";

export type SortOrderProp = "ASC" | "DESC";

export interface SortItemProps<T> {
	label: string;
	key: keyof T;
}

export interface SortOptionProps<T> {
	sortField?: keyof T;
	sortOrder?: SortOrderProp;
}

interface Props<T> {
	sortItems: Array<SortItemProps<T>>;
	sortOption: SortOptionProps<T>;
	onConfirm: (sortOption: SortOptionProps<T>) => void;
}

export const TableSorter = <T,>(props: Props<T>) => {
	const { sortItems, onConfirm, sortOption } = props;
	const { sortOrder, sortField } = sortOption;

	const updateSortFieldAndDirection = (item: any) => {
		const newSortField: keyof T = item.key === "none" ? undefined : item.key;
		let newSortOrder: SortOrderProp = "ASC";

		if (sortField === item.key) newSortOrder = sortOrder === "ASC" ? "DESC" : "ASC";

		onConfirm({ sortField: newSortField, sortOrder: newSortOrder });
	};

	const items: any = sortItems.map((item) => ({
		key: item.key,
		label: item.label,
		icon: item.key === sortField && (sortOrder === "ASC" ? <SortDescendingOutlined /> : <SortAscendingOutlined />),
	}));

	if (sortField) items.unshift({ key: "none", label: "None" });

	return (
		<Dropdown
			trigger={["click"]}
			menu={{
				items,
				selectable: true,
				selectedKeys: [(sortField as string) ?? ""],
				style: { width: 200 },
				onClick: updateSortFieldAndDirection,
			}}
		>
			<Tag.CheckableTag
				checked={false}
				style={{
					padding: "5px 15px",
					fontSize: 12,
					backgroundColor: "white",
					border: "1px solid #e8eaed",
					display: "flex",
					alignItems: "center",
					color: sortField ? "blue" : "#656f7d",
				}}
			>
				<Space>
					{sortField ? "Sorted By : " + sortItems.find((item) => item.key === sortField)?.label : "Sort By"}
					{sortOrder === "DESC" ? <SortDescendingOutlined /> : <SortAscendingOutlined />}
				</Space>
			</Tag.CheckableTag>
		</Dropdown>
	);
};
