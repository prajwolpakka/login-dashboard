import { Card, Col, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { properCase } from "util/proper-case";
import { fetchAllTransaction } from "../service/action";
import { TransactionProps } from "../service/type";
import { SearchBox } from "./search-box";
import { StatusTag } from "./status-tag";
import { TableFilter } from "./table-filter";
import { TableSorter } from "./table-sorter";

interface Props {}

export const ViewAllTransaction: React.FC<Props> = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchAllTransaction());
	}, [dispatch]);

	const transactions = useAppSelector((root) => root.Transaction.transactions);
	const [sortOption, setSortOption] = useState({});
	const [filterOption, setFilterOption] = useState({});
	const [searchText, setSearchText] = useState<string | undefined>();

	const [selectedTransaction, setSelectedTransaction] = useState<Array<TransactionProps>>([]);

	useEffect(() => {
		if (searchText) {
			const filteredTransactions = transactions.filter((item) =>
				Object.values(item).some((value) => value.toString().toLowerCase().includes(searchText.toLowerCase()))
			);
			setSelectedTransaction(filteredTransactions);
		} else {
			setSelectedTransaction(transactions);
		}
	}, [searchText, transactions]);

	return (
		<>
			<Card
				style={{ backgroundColor: "#f9fafc", marginBottom: 15 }}
				styles={{ header: { border: "none" }, body: { padding: "10px 24px" } }}
				title="Transaction Details"
			>
				<Row justify={"space-between"} gutter={[15, 15]}>
					<Col>
						<Row>
							<TableFilter
								items={[
									{
										label: "Status",
										value: "Current Status",
										options: [
											{ label: "Parking", value: "Parking" },
											{ label: "Authorized", value: "Authorized" },
										],
									},
								]}
								onConfirm={setFilterOption}
								selected={filterOption}
							/>
							<TableSorter
								sortItems={[
									{ key: "Sender Full Name", label: "Sender" },
									{ key: "Receiver Full Name", label: "Receiver" },
									{ key: "Send Country", label: "Send Country" },
									{ key: "Receive Country", label: "Receive Country" },
									{ key: "Send Amount", label: "Send Amount" },
									{ key: "Receive Amount", label: "Receive Amount" },
								]}
								sortOption={sortOption}
								onConfirm={setSortOption}
							/>
						</Row>
					</Col>
					<Col>
						<SearchBox onChange={setSearchText} />
					</Col>
				</Row>
			</Card>

			<Table
				size="small"
				bordered
				style={{ fontWeight: 400 }}
				columns={[
					{ dataIndex: "Sender Full Name", title: "Sender", render: (name) => properCase(name) },
					{ dataIndex: "Receiver Full Name", title: "Receiver", render: (name) => properCase(name) },
					{ dataIndex: "Current Status", title: "Status", render: (status) => <StatusTag status={status} /> },
					{
						title: "Send Details",
						children: [
							{ dataIndex: "Send Country", title: "Country", render: (name) => properCase(name) },
							{ dataIndex: "Send Amount", title: "Amount" },
						],
					},
					{
						title: "Receive Details",
						children: [
							{ dataIndex: "Receive Country", title: "Country", render: (name) => properCase(name) },
							{ dataIndex: "Receive Amount", title: "Amount" },
						],
					},
				]}
				rowKey={(data) => data.id}
				dataSource={selectedTransaction}
				pagination={{ pageSize: 5 }}
			/>
		</>
	);
};
