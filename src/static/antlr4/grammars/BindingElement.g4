/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar BindingElement;

// BindingElementList[Yield, Await]:
//    BindingElisionElement[?Yield, ?Await]
//    BindingElementList[?Yield, ?Await] , BindingElisionElement[?Yield, ?Await]
/*bindingElementList
: bindingElisionElement (Comma bindingElisionElement)*
;
bindingElementList_Yield
: bindingElisionElement_Yield (Comma bindingElisionElement_Yield)*
;
bindingElementList_Await
: bindingElisionElement_Await (Comma bindingElisionElement_Await)*
;
bindingElementList_Yield_Await
: bindingElisionElement_Yield_Await (Comma bindingElisionElement_Yield_Await)*
;*/

// BindingElisionElement[Yield, Await]:
//    Elision[opt] BindingElement[?Yield, ?Await]
/*bindingElisionElement
: elision? bindingElement
;
bindingElisionElement_Await
: elision? bindingElement_Await
;
bindingElisionElement_Yield_Await
: elision? bindingElement_Yield_Await
;*/

// BindingElement[Yield, Await]:
//    SingleNameBinding[?Yield, ?Await]
//    BindingPattern[?Yield, ?Await] Initializer[+In, ?Yield, ?Await][opt]
bindingElement
: singleNameBinding
| bindingPattern initializer_In?
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
: bindingIdentifier initializer_In?
;
