/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar BindingElement;

// BindingElementList[Yield, Await]:
//    BindingElisionElement[?Yield, ?Await]
//    BindingElementList[?Yield, ?Await] , BindingElisionElement[?Yield, ?Await]
bindingElementList
: bindingElisionElement (Comma bindingElisionElement)*
;

// BindingElisionElement[Yield, Await]:
//    Elision[opt] BindingElement[?Yield, ?Await]
bindingElisionElement
: elision? bindingElement
;

// BindingElement[Yield, Await]:
//    SingleNameBinding[?Yield, ?Await]
//    BindingPattern[?Yield, ?Await] Initializer[+In, ?Yield, ?Await][opt]
bindingElement
: singleNameBinding
| bindingPattern initializer?
;

// BindingRestElement[Yield, Await]:
//    ... BindingIdentifier[?Yield, ?Await]
//    ... BindingPattern[?Yield, ?Await]
bindingRestElement
: Spread bindingIdentifier
| Spread bindingPattern
;

// SingleNameBinding[Yield, Await]:
//    BindingIdentifier[?Yield, ?Await] Initializer[+In, ?Yield, ?Await][opt]
singleNameBinding
: bindingIdentifier initializer?
;
