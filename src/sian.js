const Connect = window.uportconnect.Connect
const SimpleSigner = window.uportconnect.SimpleSigner

const connect = new Connect('SIAN', {
  clientId: '2p1Vawa6GFGwQejsQByhq66z6XDs6MjNQZJ',
  network: 'rinkeby',
  signer: SimpleSigner('d07052511537031d48e530083638f94b4b9ad795cc285c6df4179401aa7ef6a0')
})

const web3 = connect.getWeb3()

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