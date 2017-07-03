/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar BindingPattern;

// BindingPattern[Yield, Await]:
//    ObjectBindingPattern[?Yield, ?Await]
//    ArrayBindingPattern[?Yield, ?Await]
bindingPattern
: objectBindingPattern
| arrayBindingPattern
;
/*bindingPattern_Yield
: objectBindingPattern_Yield
| arrayBindingPattern_Yield
;
bindingPattern_Await
: objectBindingPattern_Await
| arrayBindingPattern_Await
;
bindingPattern_Yield_Await
: objectBindingPattern_Yield_Await
| arrayBindingPattern_Yield_Await
;*/

// ObjectBindingPattern[Yield, Await]:
//    { }
//    { BindingPropertyList[?Yield, ?Await] }
//    { BindingPropertyList[?Yield, ?Await] , }
objectBindingPattern
: OpenBrace CloseBrace
| OpenBrace bindingPropertyList CloseBrace
| OpenBrace bindingPropertyList Comma CloseBrace
;
/*objectBindingPattern_Yield
: OpenBrace CloseBrace
| OpenBrace bindingPropertyList_Yield CloseBrace
| OpenBrace bindingPropertyList_Yield Comma CloseBrace
;
objectBindingPattern_Await
: OpenBrace CloseBrace
| OpenBrace bindingPropertyList_Await CloseBrace
| OpenBrace bindingPropertyList_Await Comma CloseBrace
;
objectBindingPattern_Yield_Await
: OpenBrace CloseBrace
| OpenBrace bindingPropertyList_Yield_Await CloseBrace
| OpenBrace bindingPropertyList_Yield_Await Comma CloseBrace
;*/

// ArrayBindingPattern[Yield, Await]:
//    [ Elision[opt] BindingRestElement[?Yield, ?Await][opt] ]
//    [ BindingElementList[?Yield, ?Await] ]
//    [ BindingElementList[?Yield, ?Await] , Elision[opt] BindingRestElement[?Yield, ?Await][opt] ]
arrayBindingPattern
: OpenBracket elision? bindingRestElement? CloseBracket
| OpenBracket bindingPropertyList CloseBracket
| OpenBracket bindingPropertyList Comma elision? bindingRestElement? CloseBracket
;
/*arrayBindingPattern_Yield
: OpenBracket elision? bindingRestElement_Yield? CloseBracket
| OpenBracket bindingPropertyList_Yield CloseBracket
| OpenBracket bindingPropertyList_Yield Comma elision? bindingRestElement_Yield? CloseBracket
;
arrayBindingPattern_Await
: OpenBracket elision? bindingRestElement_Await? CloseBracket
| OpenBracket bindingPropertyList_Await CloseBracket
| OpenBracket bindingPropertyList_Await Comma elision? bindingRestElement_Await? CloseBracket
;
arrayBindingPattern_Yield_Await
: OpenBracket elision? bindingRestElement_Yield_Await? CloseBracket
| OpenBracket bindingPropertyList_Yield_Await CloseBracket
| OpenBracket bindingPropertyList_Yield_Await Comma elision? bindingRestElement_Yield_Await? CloseBracket
;*/

// BindingPropertyList[Yield, Await]:
//    BindingProperty[?Yield, ?Await]
//    BindingPropertyList[?Yield, ?Await] , BindingProperty[?Yield, ?Await]
bindingPropertyList
: bindingProperty (Comma bindingProperty)*
;
/*bindingPropertyList_Yield
: bindingProperty_Yield  (Comma bindingProperty_Yield)*
;
bindingPropertyList_Await
: bindingProperty_Await (Comma bindingProperty_Await)*
;
bindingPropertyList_Yield_Await
: bindingProperty_Yield_Await (Comma bindingProperty_Yield_Await)*
;*/

// BindingProperty[Yield, Await]:
//    SingleNameBinding[?Yield, ?Await]
//    PropertyName[?Yield, ?Await] : BindingElement[?Yield, ?Await]
bindingProperty
: singleNameBinding
| propertyName Colon bindingElement
;
/*bindingProperty_Yield
: singleNameBinding_Yield
| propertyName_Yield Colon bindingElement_Yield
;
bindingProperty_Await
: singleNameBinding_Await
| propertyName_Await Colon bindingElement_Await
;
bindingProperty_Yield_Await
: singleNameBinding_Yield_Await
| propertyName_Yield_Await Colon bindingElement_Yield_Await
;*/
