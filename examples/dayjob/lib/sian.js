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
    document.location = 'dashboard.html'
    
  })
}
