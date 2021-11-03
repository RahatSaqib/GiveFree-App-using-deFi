const GiveFree = artifacts.require("GiveFree");
module.exports = async function (callback) {
    let giveFree = await GiveFree.deployed()
    await giveFree.issueToken()
    console.log("TokenIssued")
    callback()
};