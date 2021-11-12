# Give Free

***

## 【Introduction of Safe Hand】
- This application is based on trading where user can stake their ether with Daitoken and can get reward of Dapp Token which he/she can use in liquidity pool like Uniswap

&nbsp;


***

## 【Setup】

### Setup private network by using Ganache-CLI
1. Download Ganache-CLI from link below  
https://www.trufflesuite.com/ganache  


2. Execute Ganache   (If you want to use local test network .You can also use Rinkby,ropsten,kovan test network also)
```
$ ganache-cli -d
```
※ `-d` option is the option in order to be able to use same address on Ganache-CLI every time.

&nbsp;


### Setup wallet by using Metamask
1. Add MetaMask to browser (Chrome or FireFox or Opera or Brave)    
https://metamask.io/  


2. Adjust appropriate newwork below 
```
http://127.0.0.1:7545
```

&nbsp;


### Setup backend
1. Deploy contracts to private network of Ganache
```
(root directory)

$ truffle migrate --reset development/rinkby/ropsten/kovan
```

&nbsp;


### Setup frontend
1. NPM modules install
```
$ cd client
$ npm install

```

2. Execute command below in root directory.
```
$ cd ..
$ npm run start
```

3. Access to browser by using link 
```
http://localhost:3000
```

&nbsp;
3. After stake you should issue your token
```
$ truffle scripts/issue-token.js

```

&nbsp;

***