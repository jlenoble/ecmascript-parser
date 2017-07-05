import path from 'path';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {ECMAScriptPassListener} = require(path.join(base, rel,
  'ECMAScriptPassListener'));

const debug = true;

export class TranslatorPass extends ECMAScriptPassListener {
  enterFile (ctx) {
    debugger;
  }

  exitFile (ctx) {
    if (debug) {
      console.log('>>File:', ctx.getText());
    }
  }

  exitStatement (ctx) {
    if (debug) {
      console.log('>>Statement:', ctx.getText());
    }
  }

  exitCoverCallExpressionAndAsyncArrowHead (ctx) {
    if (debug) {
      console.log('>>CoverCallExpressionAndAsyncArrowHead:', ctx.getText());
    }
  }

  exitDeclaration (ctx) {
    if (debug) {
      console.log('>>Declaration:', ctx.getText());
    }
  }

  exitBindingPattern (ctx) {
    if (debug) {
      console.log('>>BindingPattern:', ctx.getText());
    }
  }

  exitLexicalDeclaration (ctx) {
    if (debug) {
      console.log('>>LexicalDeclaration:', ctx.getText());
    }
  }

  exitBindingIdentifier (ctx) {
    if (debug) {
      console.log('>>BindingIdentifier:', ctx.getText());
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

  exitEmptyStatement (ctx) {
    if (debug) {
      console.log('>>EmptyStatement:', ctx.getText());
    }
  }

  exitNewExpression (ctx) {
    if (debug) {
      console.log('>>NewExpression:', ctx.getText());
    }
  }

  exitPropertyDefinition (ctx) {
    if (debug) {
      console.log('>>PropertyDefinition:', ctx.getText());
    }
  }

  exitMemberExpression (ctx) {
    if (debug) {
      console.log('>>MemberExpression:', ctx.getText());
    }
  }

  exitUpdateExpression (ctx) {
    if (debug) {
      console.log('>>UpdateExpression:', ctx.getText());
    }
  }

  exitPrimaryExpression (ctx) {
    if (debug) {
      console.log('>>PrimaryExpression:', ctx.getText());
    }
  }

  exitArrowFunction_In (ctx) {
    if (debug) {
      console.log('>>ArrowFunction_In:', ctx.getText());
    }
  }

  exitExpression_In (ctx) {
    if (debug) {
      console.log('>>Expression_In:', ctx.getText());
    }
  }

  exitIfStatement (ctx) {
    if (debug) {
      console.log('>>IfStatement:', ctx.getText());

      const s1 = ctx.statement(0);
      const s2 = ctx.statement(1);

      console.log('s1', s1 && s1.getText())
      console.log('s2', s2 && s2.getText())
    }
  }

  exitExpressionStatement (ctx) {
    if (debug) {
      console.log('>>ExpressionStatement:', ctx.getText());
    }
  }

  exitArgumentsExpression_In (ctx) {
    if (debug) {
      console.log('>>ArgumentsExpression_In:', ctx.getText());
    }
  }

  exitParenExpression_In (ctx) {
    if (debug) {
      console.log('>>ParenExpression_In:', ctx.getText());
    }
  }

  exitCoverParenthesizedExpressionAndArrowParameterList (ctx) {
    if (debug) {
      console.log('>>CoverParenthesizedExpressionAndArrowParameterList:',
        ctx.getText());
    }
  }
}
