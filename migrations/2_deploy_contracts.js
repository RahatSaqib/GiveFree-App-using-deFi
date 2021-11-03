const GiveFree = artifacts.require("GiveFree");
const DaiToken = artifacts.require("DaiToken");
const DappToken = artifacts.require("DappToken");


module.exports = async function (deployer ,network ,accounts) {
    await deployer.deploy(DaiToken);
    let daitoken = await DaiToken.deployed();

    await deployer.deploy(DappToken);
    let dapToken = await DappToken.deployed();

    await deployer.deploy(GiveFree , dapToken.address , daitoken.address);
    let giveFree = await GiveFree.deployed()

    await dapToken.transfer(giveFree.address , "1000000000000000000000000")
    await daitoken.transfer(accounts[1], "1000000000000000000000000")
};
