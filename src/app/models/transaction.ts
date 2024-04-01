export default interface Transaction {
    type: string;
    source: string;
    destination: string;
    amount: number;
    category: string;
    description: string;
}