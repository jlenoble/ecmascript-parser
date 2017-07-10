import {customizeListener} from './helpers';

const BaseListener = customizeListener('ECMAScript', {
  exitDeclaration (ctx) {
    if (debug) {
      console.log('Declaration:', ctx.getText());
    }
  },

  exitStatement (ctx) {
    if (debug) {
      console.log('Statement:', ctx.getText());
    }
  },

  exitExpression (ctx) {
    if (debug) {
      console.log('Expression:', ctx.getText());
    }
  },
});

export class ECMAScriptTranslator extends BaseListener {}
