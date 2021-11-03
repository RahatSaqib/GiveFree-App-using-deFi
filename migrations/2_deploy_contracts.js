const Migrations = artifacts.require("Migrations");
const DaiToken = artifacts.require("DaiToken");
const DappToken = artifacts.require("DappToken");


module.exports = async function (deployer ,network ,accounts) {
    await deployer.deploy(DaiToken);
    let daitoken = DaiToken.deployed();

    await deployer.deploy(DaiToken);
    let dapToken = DappToken.deployed();

  deployer.deploy(Migrations);
};
