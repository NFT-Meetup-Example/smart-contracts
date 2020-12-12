// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.6.12;

import "@openzeppelin/contracts/math/SafeMath.sol";

contract Start {
    using SafeMath for uint256;

    uint256 private _magic;

    function magic() public view returns (uint256) {
        return _magic;
    }

    function setMagic(uint256 value) public {
        _magic = value;
    }
}
