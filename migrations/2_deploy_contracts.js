var ShailToken = artifacts.require("./ShailToken.sol");
var ShailTokenSale = artifacts.require("./ShailTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(ShailToken, 1000000).then(function(){
    var tokenPrice = 1000000000000000;

  return deployer.deploy(ShailTokenSale, ShailToken.address, tokenPrice);
});
};
