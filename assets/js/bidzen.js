Moralis.initialize("v5h0f7JLvfwCTgTOTI1mCkqNYAHIVLzEf8JwmfPv");

Moralis.serverURL = 'https://h3elxwyvv50y.usemoralis.com:2053/server'

init = async () => {
    try {
        Window.web3 = await Moralis.enableWeb3();
        initUser();
    }
    catch (err) {
        
    }
}
initUser = async () => {
    if (await Moralis.User.current()) {
        hiding(header);
        showing(headerAdmin);
    } else {
        showing(header);
        hiding(headerAdmin);
    }
}
login = async () => {
    try {
        await Moralis.Web3.authenticate();
        initUser();
    }
    catch (err) {
        alert("you don't have metamsk in your browser, please download it from https://metamask.io/")
    }
}


hiding = (element) => element.style.display = 'block';
showing = (element) => element.style.display = 'none';

const header = document.getElementById('site-header');
const headerAdmin = document.getElementById('header_admin');



const connectBtn = document.getElementById('connectbtn');

connectBtn.onclick = login;

init()