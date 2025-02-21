const fs = require("fs");
const hypc = require("@theqrl/hypc");

/* The main contract should be mentioned here */
var input = {
    language: 'Hyperion',
    sources: {
        'MyToken.hyp': {
            content: fs.readFileSync("./contracts/MyToken.hyp").toString(),
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

/* All imports of solidity contract should be mentioned here (if any) otherwise should be left blank */
function findImports(path) {
    if (path === 'ERC20.hyp')
        return {
            contents:
                fs.readFileSync("./contracts/ERC20.hyp").toString()
        };
    else if (path === 'IERC20.hyp')
        return {
            contents:
                fs.readFileSync("./contracts/IERC20.hyp").toString()
        };
    else return { error: 'File not found' };
}

function GetCompilerOutput() {
    return JSON.parse(hypc.compile(JSON.stringify(input), {import: findImports}))
}

module.exports = {
    GetCompilerOutput,
}
