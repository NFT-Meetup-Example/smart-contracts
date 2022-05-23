// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is Ownable, ERC721 {
    /// @notice Total number of NFTs.
    uint256 private _totalSupply = 0;

    /// @notice URI
    string private _uri = "https://test.site/";

    /// @notice Price for 1 NFT
    uint256 private _price = 1 ether;

    /// @notice Initializes the contract by setting a `name` and a `symbol` to the token collection.
    constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_) {}

    /// @notice Get the total number of NFTs.
    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    /// @notice Mint NFTs.
    function mint() public payable {
        require(_totalSupply < 10000, "NFTs are out of stock!");
        require(msg.value >= _price, "Value sent is not correct!");

        _safeMint(msg.sender, _totalSupply);
        _totalSupply += 1;
    }

    /// @notice Withdraw ether from this contract.
    function withdraw() external onlyOwner {
        uint balance = address(this).balance;
        payable(msg.sender).transfer(balance);
    }

    /// @notice set price fot 1 NFT
    function setPrice(uint256 price) external onlyOwner {
        _price = price;
    }

    /// @notice set base URI
    function setBaseURI(string memory uri) external onlyOwner {
        _uri = uri;
    }

    /// @notice URL where the metadata are located.
    function _baseURI() internal view override returns (string memory) {
        return _uri;
    }
}
