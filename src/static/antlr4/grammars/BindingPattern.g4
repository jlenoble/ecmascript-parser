/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar BindingPattern;

// BindingPattern[Yield, Await]:
//    ObjectBindingPattern[?Yield, ?Await]
//    ArrayBindingPattern[?Yield, ?Await]
bindingPattern
: objectBindingPattern
| arrayBindingPattern
;

// ObjectBindingPattern[Yield, Await]:
//    { }
//    { BindingPropertyList[?Yield, ?Await] }
//    { BindingPropertyList[?Yield, ?Await] , }
objectBindingPattern
: OpenBrace CloseBrace
| OpenBrace bindingPropertyList Comma? CloseBrace
;

// ArrayBindingPattern[Yield, Await]:
//    [ Elision[opt] BindingRestElement[?Yield, ?Await][opt] ]
//    [ BindingElementList[?Yield, ?Await] ]
//    [ BindingElementList[?Yield, ?Await] , Elision[opt]
//        BindingRestElement[?Yield, ?Await][opt] ]
arrayBindingPattern
: OpenBracket elision? bindingRestElement? CloseBracket
| OpenBracket bindingPropertyList CloseBracket
| OpenBracket bindingPropertyList Comma elision? bindingRestElement?
  CloseBracket
;

// BindingPropertyList[Yield, Await]:
//    BindingProperty[?Yield, ?Await]
//    BindingPropertyList[?Yield, ?Await] , BindingProperty[?Yield, ?Await]
bindingPropertyList
: bindingProperty (Comma bindingProperty)*
;

// BindingProperty[Yield, Await]:
//    SingleNameBinding[?Yield, ?Await]
//    PropertyName[?Yield, ?Await] : BindingElement[?Yield, ?Await]
bindingProperty
: singleNameBinding
| propertyName Colon bindingElement
;
