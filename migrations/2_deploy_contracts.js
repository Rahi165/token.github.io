var ShailToken = artifacts.require("./ShailToken.sol");

module.exports = function(deployer) {
  deployer.deploy(ShailToken);
};
