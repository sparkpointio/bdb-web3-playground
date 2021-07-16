export default class Web3PlayGround {
    web3Conn = null;
    web3 = null;
    constructor(web3Connection) {
        this.web3Conn = web3Connection
    }

    initializeWeb3() {
        this.web3 = this.web3Conn.web3Raw;
        console.log("You are now connected, type 'web3Obj' in the console")
        window.web3Obj = this.web3;
        return this.web3;
    }

    async requestAccounts() {
        if (!this.web3) {
            this.initializeWeb3()
        }
        window.connectedAccounts = await this.web3.eth.requestAccounts();
        console.log("Accounts retrieved, type 'connectedAccounts' in the console")
        return await this.web3.eth.requestAccounts();
    }

    selectedAddress() {
        if (!this.web3) {
            this.initializeWeb3()
        }
        let selectedAddress = this.web3.eth.currentProvider.selectedAddress;
        console.log("Got the selected address, type 'selectedAddress' in the console")
        window.selectedAddress = selectedAddress;
        return selectedAddress;
    }
    showUtils() {
        if (!this.web3) {
            this.initializeWeb3()
        }
        let utils = this.web3.utils;
        console.log("Got the utilities, type 'utils' in the console")
        window.utils = utils;
        return utils;
    }

    async initContract(ABI, address) {
        if (!this.web3) {
            this.initializeWeb3()
        }
        ABI = JSON.parse(ABI);
        const contract = new this.web3.eth.Contract(ABI, address)
        window.contract = contract
        console.log("Contract object has been created, type 'contract' in the console to access")
        return contract;
    }

}
