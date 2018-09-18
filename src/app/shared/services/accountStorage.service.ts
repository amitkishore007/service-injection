export class AccountStorageService{
    accounts = [
        {
            name: "Test Account 1",
            status: "active"
        },
        {
            name: "Test Account 2",
            status: "inactive"
        },
        {
            name: "Test Account 3",
            status: "unknown"
        }
    ];

    onAddAccount(name: string, status: string) { 
        this.accounts.push({name, status});
        return false;
    }

    onAccountUpdate(id: number, status: string) {
        this.accounts[id].status = status;
    }
}