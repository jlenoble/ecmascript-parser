/* Source: ECMAScript® 2018 Language Specification - Annex A-2 */

grammar AssignmentPattern;

// In certain circumstances when processing an instance of the production
// AssignmentExpression:LeftHandSideExpression = AssignmentExpression
// the following grammar is used to refine the interpretation of
// LeftHandSideExpression:
// AssignmentPattern[Yield, Await]:
//    ObjectAssignmentPattern[?Yield, ?Await]
//    ArrayAssignmentPattern[?Yield, ?Await]
assignmentPattern
: objectAssignmentPattern
| arrayAssignmentPattern
;

// ObjectAssignmentPattern[Yield, Await]:
//    { }
//    { AssignmentPropertyList[?Yield, ?Await] }
//    { AssignmentPropertyList[?Yield, ?Await] , }
objectAssignmentPattern
: OpenBrace CloseBrace
| OpenBrace assignmentPropertyList Comma? CloseBrace
;

// ArrayAssignmentPattern[Yield, Await]:
//    [ Elision[opt] AssignmentRestElement[?Yield, ?Await][opt] ]
//    [ AssignmentElementList[?Yield, ?Await] ]
//    [ AssignmentElementList[?Yield, ?Await] , Elision[opt]
//        AssignmentRestElement[?Yield, ?Await][opt] ]
arrayAssignmentPattern
: OpenBracket elision? assignmentRestElement? CloseBracket
| OpenBracket assignmentElementList CloseBracket
| OpenBracket assignmentElementList Comma elision? assignmentRestElement?
  CloseBracket
;

// AssignmentPropertyList[Yield, Await]:
//    AssignmentProperty[?Yield, ?Await]
//    AssignmentPropertyList[?Yield, ?Await] ,
//        AssignmentProperty[?Yield, ?Await]
assignmentPropertyList
: assignmentProperty (Comma assignmentProperty)*
;

// AssignmentElementList[Yield, Await]:
//    AssignmentElisionElement[?Yield, ?Await]
//    AssignmentElementList[?Yield, ?Await] ,
//        AssignmentElisionElement[?Yield, ?Await]
assignmentElementList
: assignmentElisionElement (Comma assignmentElisionElement)*
;

// AssignmentElisionElement[Yield, Await]:
//    Elision[opt] AssignmentElement[?Yield, ?Await]
assignmentElisionElement
: elision? assignmentElement
;

// AssignmentProperty[Yield, Await]:
//    IdentifierReference[?Yield, ?Await] Initializer[+In, ?Yield, ?Await][opt]
//    PropertyName[?Yield, ?Await] : AssignmentElement[?Yield, ?Await]
assignmentProperty
: identifierReference initializer_In?
| propertyName Colon assignmentElement
;

// AssignmentElement[Yield, Await]:
//    DestructuringAssignmentTarget[?Yield, ?Await]
//        Initializer[+In, ?Yield, ?Await][opt]
assignmentElement
: destructuringAssignmentTarget initializer_In?
;

// AssignmentRestElement[Yield, Await]:
//    ... DestructuringAssignmentTarget[?Yield, ?Await]
assignmentRestElement
: Spread destructuringAssignmentTarget
;

// DestructuringAssignmentTarget[Yield, Await]:
//    LeftHandSideExpression[?Yield, ?Await]
destructuringAssignmentTarget
: leftHandSideExpression
;
