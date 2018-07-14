import { Connect, SimpleSigner } from 'uport-connect'

export const uport = new Connect('sample app', {
  clientId: '2om8QVhSgPkChNGGRAKNtKYcDbEeoych8ht',
  network: 'rinkeby',
  signer: SimpleSigner('f5adf841d6a4659961c1478a4670a5f3e54e61c1c55f4e33424c9f1ce1b714ea')
})
export const web3 = uport.getWeb3()
