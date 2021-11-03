pragma solidity >=0.5 <0.9;

import "./DaiToken.sol";
import "./DappToken.sol";

contract GiveFree{
   string public name = "Give Free App";
   DappToken public dapptoken;
   DaiToken public daiToken;

   constructor(DappToken _daptoken , DaiToken _daiToken) public{
       dapptoken = _daptoken;
       daiToken = _daiToken;
   }
   function stakeTokens(uint _amount) public{
       daiToken.transferFrom(msg.sender, address.this, _amount);
   }
}