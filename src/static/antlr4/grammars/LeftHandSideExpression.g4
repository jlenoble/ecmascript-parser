/* Source: ECMAScript® 2018 Language Specification - Annex A-2 */

grammar LeftHandSideExpression;

// LeftHandSideExpression[Yield, Await]:
//    NewExpression[?Yield, ?Await]
//    CallExpression[?Yield, ?Await]
// NOTE: reordered to make (arguments) prevalent over parenthesizedExpression
leftHandSideExpression
: callExpression
| newExpression
;
/*leftHandSideExpression_Yield
: callExpression_Yield
| newExpression_Yield
;
leftHandSideExpression_Await
: callExpression_Await
| newExpression_Await
;
leftHandSideExpression_Yield_Await
: callExpression_Yield_Await
| newExpression_Yield_Await
;*/

// NewExpression[Yield, Await]:
//    MemberExpression[?Yield, ?Await]
//    newNewExpression[?Yield, ?Await]
newExpression
: memberExpression
| New newExpression
;
/*newExpression_Yield
: memberExpression_Yield
| New newExpression_Yield
;
newExpression_Await
: memberExpression_Await
| New newExpression_Await
;
newExpression_Yield_Await
: memberExpression_Yield_Await
| New newExpression_Yield_Await
;*/

// MemberExpression[Yield, Await]:
//    PrimaryExpression[?Yield, ?Await]
//    MemberExpression[?Yield, ?Await] [ Expression[+In, ?Yield, ?Await] ]
//    MemberExpression[?Yield, ?Await] . IdentifierName
//    MemberExpression[?Yield, ?Await] TemplateLiteral[?Yield, ?Await]
//    SuperProperty[?Yield, ?Await]
//    MetaProperty
//    new MemberExpression[?Yield, ?Await] Arguments[?Yield, ?Await]
memberExpression
: primaryExpression
| memberExpression OpenBracket expression_In CloseBracket
| memberExpression Dot identifierName
/*| memberExpression templateLiteral
| superProperty
| metaProperty*/
| New memberExpression arguments
;
/*memberExpression_Yield
: primaryExpression_Yield
| memberExpression_Yield OpenBracket expression_In_Yield CloseBracket
| memberExpression_Yield Dot identifierName
| memberExpression_Yield templateLiteral_Yield
| superProperty_Yield
| metaProperty
| New memberExpression_Yield arguments_Yield
;
memberExpression_Await
: primaryExpression_Await
| memberExpression_Await OpenBracket expression_In_Await CloseBracket
| memberExpression_Await Dot identifierName
| memberExpression_Await templateLiteral_Await
| superProperty_Await
| metaProperty
| New memberExpression_Await arguments_Await
;
memberExpression_Yield_Await
: primaryExpression_Yield_Await
| memberExpression_Yield_Await OpenBracket expression_In_Yield_Await CloseBracket
| memberExpression_Yield_Await Dot identifierName
| memberExpression_Yield_Await templateLiteral_Yield_Await
| superProperty_Yield_Await
| metaProperty
| New memberExpression_Yield_Await arguments_Yield_Await
;*/
