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
bindingElisionElement_Yield
: elision? bindingElement_Yield
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
/*| bindingPattern initializer_In?*/
;
/*bindingElement_Yield
: singleNameBinding_Yield
| bindingPattern_Yield initializer_In_Yield?
;
bindingElement_Await
: singleNameBinding_Await
| bindingPattern_Await initializer_In_Await?
;
bindingElement_Yield_Await
: singleNameBinding_Yield_Await
| bindingPattern_Yield_Await initializer_In_Yield_Await?
;*/

// BindingRestElement[Yield, Await]:
//    ... BindingIdentifier[?Yield, ?Await]
//    ... BindingPattern[?Yield, ?Await]
bindingRestElement
: Spread bindingIdentifier
/*| Spread bindingPattern*/
;
/*bindingRestElement_Yield
: Spread bindingIdentifier_Yield
| Spread bindingPattern_Yield
;
bindingRestElement_Await
: Spread bindingIdentifier_Await
| Spread bindingPattern_Await
;
bindingRestElement_Yield_Await
: Spread bindingIdentifier_Yield_Await
| Spread bindingPattern_Yield_Await
;*/

// SingleNameBinding[Yield, Await]:
//    BindingIdentifier[?Yield, ?Await] Initializer[+In, ?Yield, ?Await][opt]
singleNameBinding
: bindingIdentifier initializer_In?
;
/*singleNameBinding_Yield
: bindingIdentifier_Yield initializer_In_Yield?
;
singleNameBinding_Await
: bindingIdentifier_Await initializer_In_Await?
;
singleNameBinding_Yield_Await
: bindingIdentifier_Yield_Await initializer_In_Yield_Await?
;*/
