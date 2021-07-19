import logo from './images/logo.svg';
import web3logo from './images/web3jslogo.png';
import configureWeb3Code from './images/configureWeb3Code.png';
import './App.css';
import {useState} from "react";
import {configureWeb3} from "./blockchain-helper";

function App() {
    const [state, setState] = useState({
        web3: null,
        connectedAccounts: [],
        selectedAddress: '',
        fromAddress: '[from address]',
        toAddress: '',
        amountToSendInEther: '',
        valueInWei: '',
        valueInEther: '',
        address: '',
        contractAddress: '',
        contractABI: '',
    })

    function _setState(name, value) {
        setState(prevState => ({...prevState, [name]: value}));
    }

    function onChange(event) {
        const {name, value} = event.target;
        _setState(name, value);
    }

    return (
        <>
            <div className="container">
                <main>
                    <div className="py-5 text-center">
                        <div>
                            <img className="mx-auto mb-4" src={logo} alt="" width="72" height="57"/>
                            <img className="mx-auto mb-4" src={web3logo} alt="" width="72" height="57"/>
                        </div>
                        <h2>Web3js Playground</h2>
                        <p className="lead">Some of functions you will encounter throughout the course, please open
                            browser console for the results</p>
                    </div>

                    <div className="row g-5">
                        <div className="col-md-12">
                            <h4 className="mb-3">Functions (open your browser console for the results)</h4>
                            <div>
                                <code>
                                    [Initialize Web3, before anything else, let's use a custom function for this one]
                                    <br/>
                                    window.web3 = configureWeb3();
                                    <br/>
                                    <img src={configureWeb3Code} alt=""/>
                                    <button
                                        className={"submit btn btn-flat btn-primary float-end " + (!state.web3 ? '' : 'disabled')}
                                        type="button"
                                        onClick={async () => {
                                            // let's expose web3 to the browser
                                            window.web3 = configureWeb3();
                                            console.log("Web3 object created, type window.web3 in the console")
                                            console.log('===========================================================================')
                                            _setState('web3', window.web3);
                                        }}
                                    >Run
                                    </button>
                                </code>
                            </div>
                            <hr/>
                            <div>
                                <code>
                                    [Requests accounts access from metamask/request permission to connect to metamask account]
                                    <br/>
                                    window.web3.eth.requestAccounts()
                                    <button className="submit btn btn-flat btn-primary float-end"
                                            type="submit"
                                            disabled={!state.web3}
                                            onClick={async () => {
                                                window.connectedAccounts = await window.web3.eth.requestAccounts();
                                                _setState('connectedAccounts', window.connectedAccounts);
                                                console.log(window.connectedAccounts)
                                                console.log("Metamask connected")
                                                console.log('===========================================================================')
                                            }}
                                    >Run</button>
                                </code>
                            </div>
                            <hr/>
                            <div>
                                <code>
                                    [Shows the currently selected address, please run requestAccounts first if this returns null]
                                    <br/>
                                    window.web3.eth.currentProvider.selectedAddress
                                    <button className={"submit btn btn-flat btn-primary float-end " + (state.connectedAccounts.length? '': 'disabled')}
                                            type="button"
                                            onClick={() => {
                                                window.selectedAddress = window.web3.eth.currentProvider.selectedAddress;
                                                console.log(window.selectedAddress)
                                                _setState('selectedAddress', window.selectedAddress);
                                                _setState('fromAddress', window.selectedAddress);
                                                console.log("Type 'selectedAddress' in the console")
                                                console.log('===========================================================================')
                                            }}
                                            disabled={!state.web3}>Run
                                    </button>
                                </code>
                            </div>
                            <hr/>
                            <div>
                                <form>
                                    <code>
                                        [get the eth balance]
                                        <br/>
                                        window.web3.eth.balanceOf('
                                        <input onChange={onChange}
                                               type="text"
                                               className=""
                                               name="address"
                                               value={state.address}
                                               required
                                               placeholder={"address"}/>
                                        ')
                                        <button className={"submit btn btn-flat btn-primary float-end " + (state.address ? '' : 'disabled')}
                                                type="button"
                                                onClick={() => {
                                                    window.web3.eth.getBalance(state.address).then(console.log)
                                                    console.log("This is the balance in wei form, to convert to ")
                                                    console.log('===========================================================================')
                                                }}
                                                disabled={!state.web3}>Run
                                        </button>
                                    </code>
                                </form>
                            </div>
                            <hr/>
                            <div>
                                <form>
                                    <code>
                                        [converts wei to ether for it to makes sense in the real world, always pass
                                        values as strings or BN objects]
                                        <br/>
                                        window.web3.utils.fromWei('
                                        <input onChange={onChange}
                                               type="text"
                                               className=""
                                               name="valueInWei"
                                               value={state.valueInWei}
                                               required
                                               placeholder={"value in wei"}/>
                                        ')
                                        <button className={"submit btn btn-flat btn-primary float-end " + (state.valueInWei ? '': 'disabled')}
                                                type="button"
                                                onClick={() => {
                                                    console.log("This is the value in ether")
                                                    console.log(window.web3.utils.fromWei(state.valueInWei))
                                                    console.log('===========================================================================')
                                                }}
                                                disabled={!state.web3}>Run
                                        </button>
                                    </code>
                                </form>
                            </div>
                            <hr/>
                            <div>
                                <form>
                                    <code>
                                        [converts ether to wei for it to makes sense in the blockchain]
                                        <br/>
                                        window.web3.utils.toWei('
                                        <input onChange={onChange}
                                               type="text"
                                               className=""
                                               name="valueInEther"
                                               value={state.valueInEther}
                                               required
                                               placeholder={"value in ether"}/>
                                        ')
                                        <button className={"submit btn btn-flat btn-primary float-end " + (state.valueInEther? '' : 'disabled')}
                                                type="button"
                                                onClick={() => {
                                                    console.log("This is the value in wei")
                                                    console.log(window.web3.utils.toWei(state.valueInEther))
                                                    console.log('===========================================================================')
                                                }}
                                                disabled={!state.web3}>Run
                                        </button>
                                    </code>
                                </form>
                            </div>
                            <hr/>
                            <div>
                                <code>
                                    [All the utilities from web3 object]
                                    <br/>
                                    web3.utils
                                    <button className="submit btn btn-flat btn-primary float-end"
                                            type="button"
                                            onClick={() => {
                                                console.log(window.web3.utils)
                                                console.log('Type web3.utils in the console')
                                                console.log('===========================================================================')
                                            }}
                                            disabled={!state.web3}>Run
                                    </button>
                                </code>
                            </div>
                            <hr/>
                            <form>
                                <code>
                                    [initializing a smart contract]
                                    <br/>
                                    window.contract = new web3.eth.Contract(
                                    '<textarea name="contractABI"
                                               className={'align-middle'}
                                               rows={1}
                                               onChange={onChange}
                                               placeholder={'contract ABI'}
                                               value={state.contractABI}>
                                    </textarea>',
                                    '<input onChange={onChange}
                                            type="text"
                                            className=""
                                            name="contractAddress"
                                            value={state.contractAddress}
                                            required
                                            placeholder={"contract address"}/>'
                                    )
                                    <button className={"submit btn btn-flat btn-primary float-end " + (state.contractABI && state.contractAddress? '': 'disabled')}
                                            type="button"
                                            onClick={() => {
                                                const ABI = JSON.parse(state.contractABI);
                                                const contract = new window.web3.eth.Contract(ABI, state.contractAddress)
                                                window.contract = contract
                                                console.log(contract);
                                                console.log("Contract object has been created, type 'contract' in the console to access")
                                                console.log('===========================================================================')
                                            }}
                                            disabled={!state.web3}>Run
                                    </button>
                                </code>
                            </form>
                            <hr/>
                            <form>
                                <code>
                                    [sending a transaction from metamask, click run on window.web3.eth.currentProvider.selectedAddress first, it will set the fromAddress]
                                    <br/>
                                    window.web3.eth.sendTransaction(
                                    '{state.fromAddress}',
                                    '<input onChange={onChange}
                                            type="text"
                                            className=""
                                            name="toAddress"
                                            value={state.toAddress}
                                            required
                                            placeholder={"enter recipient address"}/>',
                                    '<input onChange={onChange}
                                            type="text"
                                            className=""
                                            name="amountToSendInEther"
                                            value={state.amountToSendInEther}
                                            required
                                            placeholder={"enter amount to send in ether"}/>'
,                                    )
                                    <button className={"submit btn btn-flat btn-primary float-end " + (state.fromAddress && state.toAddress && state.amountToSendInEther? '': 'disabled')}
                                            type="button"
                                            onClick={() => {
                                                window.web3.eth.sendTransaction({
                                                    from: state.fromAddress,
                                                    to: state.toAddress,
                                                    value: window.web3.utils.toWei(state.amountToSendInEther),
                                                }).then(console.log);

                                                console.log("Contract object has been created, type 'contract' in the console to access")
                                                console.log('===========================================================================')
                                            }}
                                            disabled={!state.web3}>Run
                                    </button>
                                </code>
                            </form>
                            <hr/>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;
