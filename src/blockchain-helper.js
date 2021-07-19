import Web3 from "web3";

export const configureWeb3 = (provider = null) => {
    if (!window.ethereum && !provider) {
        throw new Error('no ethereum provider detected')
    }
    return new Web3(provider?
        new Web3.providers.HttpProvider(provider):
            window.ethereum);
};
