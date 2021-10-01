(this["webpackJsonpweb3-playground"]=this["webpackJsonpweb3-playground"]||[]).push([[0],{214:function(e,t,n){},216:function(e,t,n){},229:function(e,t){},238:function(e,t){},256:function(e,t){},258:function(e,t){},274:function(e,t){},275:function(e,t){},340:function(e,t){},342:function(e,t){},374:function(e,t){},376:function(e,t){},377:function(e,t){},382:function(e,t){},384:function(e,t){},390:function(e,t){},392:function(e,t){},405:function(e,t){},417:function(e,t){},420:function(e,t){},425:function(e,t){},433:function(e,t){},507:function(e,t,n){"use strict";n.r(t);var c=n(50),o=n.n(c),s=n(202),r=n.n(s),i=(n(213),n(214),n(21)),a=n.n(i),d=n(106),l=n(73),b=n(107),u=n(206),j=n.p+"static/media/logo.b9546dff.svg",h=n.p+"static/media/web3jslogo.f2bc2894.png",w=n.p+"static/media/configureWeb3Code.0cc46ab9.png",m=(n(216),n(108)),f=n.n(m),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!window.ethereum&&!e)throw new Error("no ethereum provider detected");return e?new f.a(e):new f.a(window.ethereum)},O=n(1);var p=function(){var e=Object(c.useState)({web3:null,connectedAccounts:[],selectedAddress:"",fromAddress:"[from address]",toAddress:"",amountToSendInEther:"",valueInWei:"",valueInEther:"",addressToGetBalance:"",contractAddress:"",contractABI:""}),t=Object(u.a)(e,2),n=t[0],o=t[1];function s(e,t){o((function(n){return Object(b.a)(Object(b.a)({},n),{},Object(l.a)({},e,t))}))}function r(e){var t=e.target;s(t.name,t.value)}return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("main",{children:[Object(O.jsxs)("div",{className:"py-5 text-center",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{className:"mx-auto mb-4",src:j,alt:"",width:"72",height:"57"}),Object(O.jsx)("img",{className:"mx-auto mb-4",src:h,alt:"",width:"72",height:"57"})]}),Object(O.jsx)("h2",{children:"Web3js Playground"}),Object(O.jsx)("p",{className:"lead",children:"Some of functions you will encounter throughout the course, please open browser console for the results"})]}),Object(O.jsx)("div",{className:"row g-5",children:Object(O.jsxs)("div",{className:"col-md-12",children:[Object(O.jsx)("h4",{className:"mb-3",children:"Functions (open your browser console for the results)"}),Object(O.jsx)("div",{children:Object(O.jsxs)("code",{children:["[Initialize Web3, before anything else, let's use a custom function for this one]",Object(O.jsx)("br",{}),"window.web3 = configureWeb3();",Object(O.jsx)("br",{}),Object(O.jsx)("img",{src:w,alt:""}),Object(O.jsx)("button",{className:"submit btn btn-flat btn-primary float-end ",type:"button",disabled:n.web3,onClick:Object(d.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.web3=x(),console.log("Web3 object created, type window.web3 in the console"),console.log("==========================================================================="),s("web3",window.web3);case 4:case"end":return e.stop()}}),e)}))),children:"Run"})]})}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{children:Object(O.jsxs)("code",{children:["[Requests accounts access from metamask/request permission to connect to metamask account]",Object(O.jsx)("br",{}),"window.web3.eth.requestAccounts()",Object(O.jsx)("button",{className:"submit btn btn-flat btn-primary float-end ",type:"submit",disabled:!n.web3||n.connectedAccounts.length,onClick:Object(d.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.web3.eth.requestAccounts();case 2:window.connectedAccounts=e.sent,s("connectedAccounts",window.connectedAccounts),console.log(window.connectedAccounts),console.log("Metamask connected, type window.connectedAccounts to view the accounts"),console.log("===========================================================================");case 7:case"end":return e.stop()}}),e)}))),children:"Run"})]})}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{children:Object(O.jsxs)("code",{children:["[Shows the currently selected address, please run requestAccounts first if this returns null]",Object(O.jsx)("br",{}),"window.web3.eth.currentProvider.selectedAddress",Object(O.jsx)("button",{className:"submit btn btn-flat btn-primary float-end ",type:"button",disabled:!n.web3||!n.connectedAccounts.length,onClick:function(){window.selectedAddress=window.web3.eth.currentProvider.selectedAddress,console.log(window.selectedAddress),s("selectedAddress",window.selectedAddress),s("fromAddress",window.selectedAddress),console.log("Type 'selectedAddress' in the console"),console.log("===========================================================================")},children:"Run"})]})}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{children:Object(O.jsx)("form",{children:Object(O.jsxs)("code",{children:["[get the eth balance]",Object(O.jsx)("br",{}),"window.web3.eth.getBalance('",Object(O.jsx)("input",{onChange:r,type:"text",className:"",name:"addressToGetBalance",value:n.addressToGetBalance,required:!0,placeholder:"addressToGetBalance"}),"')",Object(O.jsx)("button",{className:"submit btn btn-flat btn-primary float-end ",type:"button",disabled:!n.web3||!n.addressToGetBalance,onClick:function(){window.web3.eth.getBalance(n.addressToGetBalance).then(console.log),console.log("This is the balance in wei form, to convert to "),console.log("===========================================================================")},children:"Run"})]})})}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{children:Object(O.jsx)("form",{children:Object(O.jsxs)("code",{children:["[converts wei to ether for it to makes sense in the real world, always pass values as strings or BN objects]",Object(O.jsx)("br",{}),"window.web3.utils.fromWei('",Object(O.jsx)("input",{onChange:r,type:"text",className:"",name:"valueInWei",value:n.valueInWei,required:!0,placeholder:"value in wei"}),"')",Object(O.jsx)("button",{className:"submit btn btn-flat btn-primary float-end "+(n.valueInWei?"":"disabled"),type:"button",onClick:function(){console.log("This is the value in ether"),console.log(window.web3.utils.fromWei(n.valueInWei)),console.log("===========================================================================")},disabled:!n.web3,children:"Run"})]})})}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{children:Object(O.jsx)("form",{children:Object(O.jsxs)("code",{children:["[converts ether to wei for it to makes sense in the blockchain]",Object(O.jsx)("br",{}),"window.web3.utils.toWei('",Object(O.jsx)("input",{onChange:r,type:"text",className:"",name:"valueInEther",value:n.valueInEther,required:!0,placeholder:"value in ether"}),"')",Object(O.jsx)("button",{className:"submit btn btn-flat btn-primary float-end "+(n.valueInEther?"":"disabled"),type:"button",onClick:function(){console.log("This is the value in wei"),console.log(window.web3.utils.toWei(n.valueInEther)),console.log("===========================================================================")},disabled:!n.web3,children:"Run"})]})})}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{children:Object(O.jsxs)("code",{children:["[All the utilities from web3 object]",Object(O.jsx)("br",{}),"web3.utils",Object(O.jsx)("button",{className:"submit btn btn-flat btn-primary float-end",type:"button",onClick:function(){console.log(window.web3.utils),console.log("Type web3.utils in the console"),console.log("===========================================================================")},disabled:!n.web3,children:"Run"})]})}),Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{children:[Object(O.jsx)("form",{children:Object(O.jsxs)("code",{children:["[initializing a smart contract]",Object(O.jsx)("br",{}),"window.contract = new web3.eth.Contract( '",Object(O.jsx)("textarea",{name:"contractABI",className:"align-middle",rows:1,onChange:r,placeholder:"contract ABI",value:n.contractABI}),"', '",Object(O.jsx)("input",{onChange:r,type:"text",className:"",name:"contractAddress",value:n.contractAddress,required:!0,placeholder:"contract address"}),"' )",Object(O.jsx)("button",{className:"submit btn btn-flat btn-primary float-end "+(n.contractABI&&n.contractAddress?"":"disabled"),type:"button",onClick:function(){var e=JSON.parse(n.contractABI),t=new window.web3.eth.Contract(e,n.contractAddress);window.contract=t,console.log(t),console.log("Contract object has been created, type 'contract' in the console to access"),console.log("===========================================================================")},disabled:!n.web3,children:"Run"})]})}),Object(O.jsx)("hr",{})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("form",{children:Object(O.jsxs)("code",{children:["[sending a transaction from metamask, click run on window.web3.eth.currentProvider.selectedAddress first, it will set the fromAddress]",Object(O.jsx)("br",{}),"window.web3.eth.sendTransaction( '",n.fromAddress,"', '",Object(O.jsx)("input",{onChange:r,type:"text",className:"",name:"toAddress",value:n.toAddress,required:!0,placeholder:"enter recipient address"}),"', '",Object(O.jsx)("input",{onChange:r,type:"text",className:"",name:"amountToSendInEther",value:n.amountToSendInEther,required:!0,placeholder:"enter amount to send in ether"}),"' ,                                    )",Object(O.jsx)("button",{className:"submit btn btn-flat btn-primary float-end "+(n.fromAddress&&n.toAddress&&n.amountToSendInEther?"":"disabled"),type:"button",onClick:function(){window.web3.eth.sendTransaction({from:n.fromAddress,to:n.toAddress,value:window.web3.utils.toWei(n.amountToSendInEther)}).then(console.log),console.log("Contract object has been created, type 'contract' in the console to access"),console.log("===========================================================================")},disabled:!n.web3,children:"Run"})]})}),Object(O.jsx)("hr",{})]})]})})]})})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,511)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(p,{})}),document.getElementById("root")),g()}},[[507,1,2]]]);
//# sourceMappingURL=main.3e8ac70e.chunk.js.map