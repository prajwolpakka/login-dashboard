export type TransactionProps = {
	id: string;
	"Sender Full Name": string;
	"Receiver Full Name": string;
	"Current Status": string;
	"Send Amount": string;
	"Send Country": string;
	"Receive Amount": string;
	"Receive Country": string;
};

export type GetAllTransactionResponse = {
	data: {
		data: Array<TransactionProps>;
	};
};
