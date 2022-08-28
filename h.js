
const ethEnabled = async () => {
  if (window.ethereum) {
    await window.ethereum.request({method: 'eth_requestAccounts'});
    
    window.web3 = new Web3(window.ethereum);
    // console.log(window.ethereum);
    // console.log(window.web3);
    return true;
  }
  else{
    return alert("install metamask");
  }
}




// var Web3 = require("web3");

// console.log(Web3);

// async function log(){
//   if (window.ethereum) {
//           const myWeb3 = await new Web3(window.ethereum)
//           console.log(myWeb3);
//           await window.ethereum.enable()
//           .then(async wallet => {
//             console.log(wallet);
            
//           })
    
//         } else {
//             console.log("install meta");
//           alert("Install Metamask")
//         }
          
  
// }

console.log("hi");