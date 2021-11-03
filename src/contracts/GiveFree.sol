pragma solidity >=0.5 <0.9;

import "./DaiToken.sol";
import "./DappToken.sol";

contract GiveFree{
    address public owner;
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
        owner = msg.sender;
    }
    function stakeTokens(uint _amount) public{
        require(_amount > 0 ,"Amount cannot be");
        daiToken.transferFrom(msg.sender, address.this, _amount);
        stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;
        //add user to stakers array only if they haven't staked
        if(!hasStaked[msg.sender]){
            stakers.push(msg.sender);
        }
        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;

    }
    function unstakeTokens() public{
        uint balance = stakingBalance[msg.sender];
        require(balance > 0,"Staking balance ");
        daiToken.transfer(msg.sender, balance);
        stakingBalance[msg.sender] = 0;
        isStaking[msg.sender] = false;
    }
    function issueToken() public{
        require(msg.sender == owner ,"Must be owner");
        for(uint i = 0;i<stakers.length; i++){
            address recipent = stakers[i];
            uint balance = stakingBalance[recipent];
            if(balance > 0){
                dappToken.transfer(recipent , balance);
            }

        }
    }

}