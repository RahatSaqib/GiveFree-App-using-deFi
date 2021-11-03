pragma solidity >=0.5 <0.9;

import "./DaiToken.sol";
import "./DappToken.sol";

contract GiveFree{
   string public name = "Give Free App";
   DappToken public dapptoken;
   DaiToken public daiToken;
   address[] public stakers;
   mapping(address => uint) public stakingBalance;
   mapping(address => bool) public hasStaked;
   mapping(address => bool) public isStaking;

   constructor(DappToken _daptoken , DaiToken _daiToken) public{
       dapptoken = _daptoken;
       daiToken = _daiToken;
   }
   function stakeTokens(uint _amount) public{
       daiToken.transferFrom(msg.sender, address.this, _amount);
       stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;
       //add user to stakers array only if they haven't staked
       if(!hasStaked[msg.sender]){
           stakers.push(msg.sender);
       }
       isStaking[msg.sender] = true;
       hasStaked[msg.sender] = true;

   }
   function issueToken() public{
       for(uint i = 0;i<stakers.length; i++){
           address recipent = stakers[i];
           uint balance = stakingBalance[recipent];
           if(balance > 0){
             dappToken.transfer(recipent , balance);
           }

       }
   }

}