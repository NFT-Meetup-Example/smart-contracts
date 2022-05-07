// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Example {
    uint256 private _magic;

    function magic() public view returns (uint256) {
        return _magic;
    }

    function setMagic(uint256 value) public {
        _magic = value;
    }
}
