// Babel parser experiment
//
// See:
// https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md


const babylon = require('babylon');

const snippets = require('./codesnippets');
const { fileToHtml } = require('./fileToHtml');
const { write, writeLn } = require('./io');

const traverseModule = require('babel-traverse');

traverse = traverseModule.default;

var ast = babylon.parse(snippets.square);

traverse(ast, {
  enter(path) {
    if (
      path.node.type === "Identifier" &&
      path.node.name === "n"
    ) {
      path.node.name = "x";
    }
  }
});

fileToHtml(ast);
//console.log(result);