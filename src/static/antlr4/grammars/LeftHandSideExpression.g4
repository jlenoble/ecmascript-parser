/* Source: ECMAScript® 2018 Language Specification - Annex A-2 */

grammar LeftHandSideExpression;

// LeftHandSideExpression[Yield, Await]:
//    NewExpression[?Yield, ?Await]
//    CallExpression[?Yield, ?Await]
leftHandSideExpression
: newExpression
// | callExpression
;

// NewExpression[Yield, Await]:
//    MemberExpression[?Yield, ?Await]
//    newNewExpression[?Yield, ?Await]
newExpression
: memberExpression
| New newExpression
;

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
| memberExpression OpenBracket expressionList CloseBracket
| memberExpression Dot identifierName
| memberExpression templateLiteral
| superProperty
| metaProperty
| New memberExpression arguments
;

// SuperProperty[Yield, Await]:
//    super [ Expression[+In, ?Yield, ?Await] ]
//    super . IdentifierName
superProperty
: Super OpenBracket expressionList CloseBracket
| Super Dot identifierName
;

// MetaProperty:
//    NewTarget
metaProperty
: newTarget
;

// NewTarget:
//    new.target
newTarget
: New Dot Target
;
