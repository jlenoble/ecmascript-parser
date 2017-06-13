/* Source: ECMAScript® 2018 Language Specification - Annex A-2 */

grammar BindingIdentifier;

// IdentifierReference[Yield, Await]:
//    Identifier
//    [~Yield] yield
//    [~Await] await *
identifierReference
: identifier
| Yield
| Await Multiply
;
identifierReference_Yield
: identifier
| Await Multiply
;
identifierReference_Await
: identifier
| Yield
;
identifierReference_Yield_Await
: identifier
;

// BindingIdentifier[Yield, Await]:
//    Identifier
//    [~Yield] yield
//    [~Await] await
bindingIdentifier
: identifier
| Yield
| Await
;
bindingIdentifier_Yield
: identifier
| Await
;
bindingIdentifier_Await
: identifier
| Yield
;
bindingIdentifier_Yield_Await
: identifier
;

// Identifier:
//    IdentifierName but not ReservedWord
identifier
: IdentifierName
;
