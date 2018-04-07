const Connect = window.uportconnect.Connect
const SimpleSigner = window.uportconnect.SimpleSigner

const connect = new Connect('SIAN', {
  clientId: '2p1Vawa6GFGwQejsQByhq66z6XDs6MjNQZJ',
  network: 'rinkeby',
  signer: SimpleSigner('d07052511537031d48e530083638f94b4b9ad795cc285c6df4179401aa7ef6a0')
})

const web3 = connect.getWeb3()

const abi = [{"constant":false,"inputs":[{"name":"status","type":"string"}],"name":"updateStatus","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getStatus","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"}]

const StatusContract = web3.eth.contract(abi);
const statusInstance = StatusContract.at('0x70A804cCE17149deB6030039798701a38667ca3B')

// uPort connect
const uportConnect = function () {
  web3.eth.getCoinbase((error, address) => {
    if (error) { throw error }
    globalState.ethAddress = address

    // This one is for display purposes - MNID encoding includes network 
    globalState.uportId = window.uportconnect.MNID.encode({network: '0x4', address: address})

    statusInstance.getStatus.call(globalState.ethAddress, (err, st) => {
      globalState.currentStatus = st
      web3.eth.getBalance(globalState.ethAddress, (err, bal) => {
        globalState.ethBalance = web3.fromWei(bal)
        render()
      })
    })
  })
}


/*
// Request credentials to login
connect.requestCredentials({
  requested: ['name', 'phone', 'country'],
  notifications: true // We want this if we want to recieve credentials
})
.then((credentials) => {
  console.log(JSON.stringify( credentials))
  // Do something
})

// Attest specific credentials
connect.attestCredentials({
  sub: THE_RECEIVING_UPORT_ADDRESS,
  claim: {
    CREDENTIAL_NAME: CREDENTIAL_VALUE
  },
  exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
})

*/