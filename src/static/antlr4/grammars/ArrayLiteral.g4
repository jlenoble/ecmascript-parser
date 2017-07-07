/* Source: ECMAScript® 2018 Language Specification - Annex A-2 */

grammar ArrayLiteral;

// ArrayLiteral[Yield, Await]:
//    [ Elision[opt] ]
//    [ ElementList[?Yield, ?Await] ]
//    [ ElementList[?Yield, ?Await] , Elision[opt] ]
arrayLiteral
: OpenBracket Comma* (Spread? expression (Comma+ Spread? expression)*)?
  Comma* CloseBracket
;

// ElementList[Yield, Await]:
//    Elision[opt] AssignmentExpression[+In, ?Yield, ?Await]
//    Elision[opt] SpreadElement[?Yield, ?Await]
//    ElementList[?Yield, ?Await] , Elision[opt] AssignmentExpression[+In, ?Yield, ?Await]
//    ElementList[?Yield, ?Await] , Elision[opt] SpreadElement[?Yield, ?Await]
/* elementList
: Comma* Spread? expression (Comma+ Spread? expression)*
;*/

// Elision:
//    ,
//    Elision ,
/* elision
: Comma+
;*/

// SpreadElement[Yield, Await]:
//    ... AssignmentExpression[+In, ?Yield, ?Await]
/* spreadElement
: Spread expression
;*/
