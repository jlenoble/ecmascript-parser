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
/*expression_Yield
: assignmentExpression_Yield (Comma assignmentExpression_Yield)*
;
expression_Await
: assignmentExpression_Await (Comma assignmentExpression_Await)*
;
expression_Yield_Await
: assignmentExpression_Yield_Await (Comma assignmentExpression_Yield_Await)*
;*/
expression_In
: assignmentExpression_In (Comma assignmentExpression_In)*
;
expression_In_Yield
: assignmentExpression_In_Yield (Comma assignmentExpression_In_Yield)*
;
/*expression_In_Await
: assignmentExpression_In_Await (Comma assignmentExpression_In_Await)*
;
expression_In_Yield_Await
: assignmentExpression_In_Yield_Await (Comma assignmentExpression_In_Yield_Await)*
;*/
