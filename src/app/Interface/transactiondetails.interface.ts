export interface transaction {
    transactionId: number;
    accountId: number;
    time: string;
    type: string;
    amount: number;
    availableBalance: number;
    accountType: string; // Add accountType property
}
