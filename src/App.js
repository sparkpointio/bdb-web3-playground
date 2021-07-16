import logo from './logo.svg';
import './App.css';
import Web3PlayGround from "./blockchain/Web3PlayGround";
import {useState} from "react";

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

function App(props) {
    const [state, setState] = useState({
        web3Initialized: false,
        contractAddress: '',
        contractABI: ''
    })

    function _setState(name, value) {
        setState(prevState => ({...prevState, [name]: value}));
    }

    function onChange(event) {
        const {name, value} = event.target;
        _setState(name, value);
    }

    const playGround = new Web3PlayGround(props.web3Connection);
    return (
        <>
            <div className="container">
                <main>
                    <div className="py-5 text-center">
                        <img className="d-block mx-auto mb-4" src={logo} alt="" width="72" height="57"/>
                        <h2>Web3js Playground</h2>
                        <p className="lead">Some of functions you will encounter throughout the course, please open browser console for the results</p>
                    </div>

                    <div className="row g-5">
                        <div className="col-md-12">
                            <h4 className="mb-3">Functions</h4>
                            <div>
                                <code>
                                    const web3Obj = new Web3(window.ethereum)
                                    <button className="submit btn btn-flat btn-primary float-end"
                                            type="button"
                                            onClick={async () => {
                                                _setState('web3Initialized', !!playGround.initializeWeb3());
                                            }}
                                    >Run
                                    </button>
                                </code>
                            </div>
                            <hr/>
                            <div>
                                <code>
                                    web3Obj.eth.requestAccounts()
                                    <button className="submit btn btn-flat btn-primary float-end"
                                            type="submit"
                                            disabled={!state.web3Initialized}
                                            onClick={() => {
                                                playGround.requestAccounts();
                                            }}
                                    >Run</button>
                                </code>
                            </div>
                            <hr/>
                            <div>
                                <code>
                                    web3Obj.eth.currentProvider.selectedAddress
                                    <button className="submit btn btn-flat btn-primary float-end"
                                            type="button"
                                            onClick={() => {
                                                playGround.selectedAddress()
                                            }}
                                            disabled={!state.web3Initialized}>Run
                                    </button>
                                </code>
                            </div>
                            <hr/>
                            <div>
                                <code>
                                    web3Obj.eth.utils
                                    <button className="submit btn btn-flat btn-primary float-end"
                                            type="button"
                                            onClick={() => {
                                                playGround.showUtils()
                                            }}
                                            disabled={!state.web3Initialized}>Run
                                    </button>
                                </code>
                            </div>
                            <hr/>
                            <form className="needs-validation" noValidate>
                                <code>
                                    const contract = new web3Obj.eth.Contract(
                                    <textarea name="contractABI"
                                              className={'align-middle'}
                                              rows={1}
                                              onChange={onChange}
                                              placeholder={'contract ABI'}
                                              value={state.contractABI}>
                                    </textarea>,
                                    <input onChange={onChange}
                                           type="text"
                                           className=""
                                           name="contractAddress"
                                           value={state.contractAddress}
                                           required
                                           placeholder={"contract address"}/>
                                    )
                                    <button className="submit btn btn-flat btn-primary float-end"
                                            type="button"
                                            onClick={() => {
                                                playGround.initContract(state.contractABI, state.contractAddress)
                                            }}
                                            disabled={!state.web3Initialized}>Run
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
