/* Source: ECMAScript® 2018 Language Specification - Annex A-4 */

grammar FormalParameter;

// UniqueFormalParameters[Yield, Await]:
//    FormalParameters[?Yield, ?Await]
uniqueFormalParameters
: formalParameters
;

// FormalParameters[Yield, Await]:
//    [empty]
//    FunctionRestParameter[?Yield, ?Await]
//    FormalParameterList[?Yield, ?Await]
//    FormalParameterList[?Yield, ?Await] ,
//    FormalParameterList[?Yield, ?Await] , FunctionRestParameter[?Yield, ?Await]
formalParameters
:
| functionRestParameter
| formalParameterList Comma?
| formalParameterList Comma functionRestParameter
;

// FormalParameterList[Yield, Await]:
//    FormalParameter[?Yield, ?Await]
//    FormalParameterList[?Yield, ?Await] , FormalParameter[?Yield, ?Await]
formalParameterList
: formalParameter (Comma formalParameter)*
;

// FunctionRestParameter[Yield, Await]:
//    BindingRestElement[?Yield, ?Await]
functionRestParameter
: bindingRestElement
;

// FormalParameter[Yield, Await]:
//    BindingElement[?Yield, ?Await]
formalParameter
: bindingElement
;

// ArrowParameters[Yield, Await]:
//    BindingIdentifier[?Yield, ?Await]
//    CoverParenthesizedExpressionAndArrowParameterList[?Yield, ?Await]
arrowParameters
: bindingIdentifier
| coverParenthesizedExpressionAndArrowParameterList
;
