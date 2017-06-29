import path from 'path';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {ECMAScriptPassListener} = require(path.join(base, rel,
  'ECMAScriptPassListener'));

const debug = true;

export class TranslatorPass extends ECMAScriptPassListener {
  exitFile (ctx) {
    debugger;

    if (debug) {
      console.log('>>File:', ctx.getText());
    }
  }

  exitStatement (ctx) {
    if (debug) {
      console.log('>>Statement:', ctx.getText());
    }
  }

  exitDeclaration (ctx) {
    if (debug) {
      console.log('>>Declaration:', ctx.getText());
    }
  }

  exitLexicalDeclaration (ctx) {
    if (debug) {
      console.log('>>LexicalDeclaration:', ctx.getText());
    }
  }


  exitFunctionDeclaration (ctx) {
    if (debug) {
      console.log('>>FunctionDeclaration:', ctx.getText());
    }
  }

  exitFunctionExpression (ctx) {
    if (debug) {
      console.log('>>FunctionExpression:', ctx.getText());
    }
  }

  exitCallExpression (ctx) {
    if (debug) {
      console.log('>>CallExpression:', ctx.getText());
    }
  }

  exitMemberExpression (ctx) {
    if (debug) {
      console.log('>>MemberExpression:', ctx.getText());
    }
  }

  exitPrimaryExpression (ctx) {
    if (debug) {
      console.log('>>PrimaryExpression:', ctx.getText());
    }
  }

  exitExpressionStatement (ctx) {
    if (debug) {
      console.log('>>ExpressionStatement:', ctx.getText());
    }
  }

  exitCoverParenthesizedExpressionAndArrowParameterList (ctx) {
    if (debug) {
      console.log('>>CoverParenthesizedExpressionAndArrowParameterList:',
        ctx.getText());
    }
  }
}
