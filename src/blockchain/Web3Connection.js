import Web3 from "web3";

export class Web3Connection {
    web3Raw = null;
    ethereum = null;

    constructor(provider = window.ethereum) {
        if (!window.ethereum || !provider) {
            throw new Error('no ethereum provider detected')
        }
        this.ethereum = window.ethereum;
        this.web3Raw = new Web3(provider)
    }

    checkConnection() {
        if (!this.web3Raw) {
            throw new Error('No current connection with the blockchain')
        }
    }

    async requestAccounts() {
        this.checkConnection();
        return await this.web3Raw.eth.requestAccounts();
    }

    listenToEvents() {
        this.checkConnection();
        this.ethereum.on('accountsChanged', async (accounts) => {
            // Time to reload your interface with accounts[0]!
            if (accounts.length !== 0) {
                console.log('accounts updated')
            }
        });

        //see https://docs.metamask.io/guide/ethereum-provider.html#chain-ids
        //for important information about the MetaMask provider's chain IDs.
        this.ethereum.on('chainChanged', async () => {
            document.location.reload();
        });
    }
}
