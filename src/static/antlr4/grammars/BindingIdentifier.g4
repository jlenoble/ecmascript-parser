/* Source: ECMAScript® 2018 Language Specification - Annex A-2 */

grammar BindingIdentifier;

// IdentifierReference[Yield, Await]:
//    Identifier
//    [~Yield] yield
//    [~Await] await *
identifierReference
: identifier
| {!this.canYield()}? Yield
// | Await Multiply
;

// BindingIdentifier[Yield, Await]:
//    Identifier
//    [~Yield] yield
//    [~Await] await
// See ECMAScript® 2018 Language Specification - Section 12.1:
// NOTE yield and await are permitted as BindingIdentifier in the grammar, and
// prohibited with static semantics below, to prohibit automatic semicolon
// insertion in cases such as
//   let
//   await 0;
bindingIdentifier
: identifier
| {!this.canYield()}? Yield
// | Await
;

// Identifier:
//    IdentifierName but not ReservedWord
identifier
: IdentifierName
| miscIdentifier
;
