/* Source: ECMAScript® 2018 Language Specification - Annex A-2 */

// A.2 Expressions
grammar Expressions;
import
  BindingIdentifier,
  PrimaryExpression,
  CoverExpressions,
  ArrayLiteral,
  ObjectLiteral,
  CallExpression,
  LeftHandSideExpression,
  AssignmentExpression;

// Expression[In, Yield, Await]:
//    AssignmentExpression[?In, ?Yield, ?Await]
//    Expression[?In, ?Yield, ?Await] , AssignmentExpression[?In, ?Yield, ?Await]
expression
: assignmentExpression (Comma assignmentExpression)*
;
expression_In
: assignmentExpression_In (Comma assignmentExpression_In)*
;
