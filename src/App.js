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
                            {/* Web3 initialization */}
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
                            {/* Request accounts function */}

                            {/* Show selected address function */}

                            {/* Get eth balance function */}

                            {/* Convert wei to ether function */}

                            {/* Convert ether to wei function */}

                            {/* Show Web3 utilities function */}

                            {/* Initialize a contract function */}

                            {/* Initialize a contract function */}

                            {/* Send a transaction from metamask function */}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;
