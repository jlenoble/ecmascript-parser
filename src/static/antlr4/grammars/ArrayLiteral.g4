/* Source: ECMAScript® 2018 Language Specification - Annex A-2 */

grammar ArrayLiteral;

// ArrayLiteral[Yield, Await]:
//    [ Elision[opt] ]
//    [ ElementList[?Yield, ?Await] ]
//    [ ElementList[?Yield, ?Await] , Elision[opt] ]
arrayLiteral
: OpenBracket elision? CloseBracket
| OpenBracket elementList CloseBracket
| OpenBracket elementList Comma elision? CloseBracket
;
arrayLiteral_Yield
: OpenBracket elision? CloseBracket
| OpenBracket elementList_Yield CloseBracket
| OpenBracket elementList_Yield Comma elision? CloseBracket
;
arrayLiteral_Await
: OpenBracket elision? CloseBracket
| OpenBracket elementList_Await CloseBracket
| OpenBracket elementList_Await Comma elision? CloseBracket
;
arrayLiteral_Yield_Await
: OpenBracket elision? CloseBracket
| OpenBracket elementList_Yield_Await CloseBracket
| OpenBracket elementList_Yield_Await Comma elision? CloseBracket
;

// ElementList[Yield, Await]:
//    Elision[opt] AssignmentExpression[+In, ?Yield, ?Await]
//    Elision[opt] SpreadElement[?Yield, ?Await]
//    ElementList[?Yield, ?Await] , Elision[opt] AssignmentExpression[+In, ?Yield, ?Await]
//    ElementList[?Yield, ?Await] , Elision[opt] SpreadElement[?Yield, ?Await]
elementList
: elision? assignmentExpression_In
| elision? spreadElement
| elementList Comma elision? assignmentExpression_In
| elementList Comma elision? spreadElement
;
elementList_Yield
: elision? assignmentExpression_In_Yield
| elision? spreadElement_Yield
| elementList_Yield Comma elision? assignmentExpression_In_Yield
| elementList_Yield Comma elision? spreadElement_Yield
;
elementList_Await
: elision? assignmentExpression_In_Await
| elision? spreadElement_Await
| elementList_Await Comma elision? assignmentExpression_In_Await
| elementList_Await Comma elision? spreadElement_Await
;
elementList_Yield_Await
: elision? assignmentExpression_In_Yield_Await
| elision? spreadElement_Yield_Await
| elementList_Yield_Await Comma elision? assignmentExpression_In_Yield_Await
| elementList_Yield_Await Comma elision? spreadElement_Yield_Await
;

// Elision:
//    ,
//    Elision ,
elision
: Comma+
;

// SpreadElement[Yield, Await]:
//    ... AssignmentExpression[+In, ?Yield, ?Await]
spreadElement
: Spread assignmentExpression_In
;
spreadElement_Yield
: Spread assignmentExpression_In_Yield
;
spreadElement_Await
: Spread assignmentExpression_In_Await
;
spreadElement_Yield_Await
: Spread assignmentExpression_In_Yield_Await
;
