import React, { Component } from 'react'
import Navbar from './Navbar'
import Content from './Content'

import './App.css'
import Web3 from 'web3'
import DaiToken from '../abis/DaiToken.json'
import DappToken from '../abis/DappToken.json'
import GiveFree from '../abis/GiveFree.json'



class App extends Component {

  async componentMount(){
    await this.loadWeb3()
    await this.loadBlockChainData()
  }
  async loadBlockChainData(){
    const web3 = window.web3
    const account = await web3.eth.getAccounts()
    this.setState({account: account[0]});
    const networkId = await web3.eth.net.getId();
    //load daiTOken
    const daiTokenData = DaiToken.networks[networkId]
    if(daiTokenData){
      const daiToken =  new web3.eth.Contract(DaiToken.abi, daiTokenData.address)
      this.setState({daiToken});
      let daiTokenBalance =  await daiToken.methods.balanceOf(this.state.account).call()
      this.setState({daiTokenBalance : daiTokenBalance.toString()})
    }
    else{
      window.alert('DaiTOken contract not deployed')
    }

    //load DAPPTOKEN
    const dappTokenData = DappToken.networks[networkId]
    if(dappTokenData){
      const dappToken =  new web3.eth.Contract(DappToken.abi, dappTokenData.address)
      this.setState({dappToken});
      let dappTokenBalance =  await dappToken.methods.balanceOf(this.state.account).call()
      this.setState({dappTokenBalance : dappTokenBalance.toString()})
    }
    else{
      window.alert('DappToken contract not deployed')
    }
    
    //load givefree
    const giveFreeData = GiveFree.networks[networkId]
    if(giveFreeData){
      const giveFree =  new web3.eth.Contract(GiveFree.abi, giveFreeData.address)
      this.setState({giveFree});
      let stakingBalance =  await giveFree.methods.balanceOf(this.state.account).call()
      this.setState({stakingBalance : stakingBalance.toString()})
    }
    else{
      window.alert('GiveFree contract not deployed')
    }
    this.setState({loading : false})
    
  }
  async loadWeb3(){
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else{
      window.alert("Non-ethereum browser detected");
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      daiToken: {},
      dappToken: {},
      giveFree: {},
      daiTokenBalance: '0',
      dappTokenBalance: '0',
      stakingBalance: '0',
      loading: true
    }
  }

  render() {
    let loadContent;
    if(this.state.loading){
      loadContent = <p id ="loader" className ="text-center">Loading ...</p>
    }
    return (
      <div>
        <Navbar account={this.state.account} />
        <Content/>
      </div>
    );
  }
}

export default App;
