pragma solidity ^0.5.8;

import "./SafeMath.sol";

contract Start {
    using SafeMath for uint256;

    uint256 _magic;

    function magic() public view returns (uint256) {
        return _magic;
    }

    function setMagic(uint256 value) public {
        _magic = value;
    }
}
