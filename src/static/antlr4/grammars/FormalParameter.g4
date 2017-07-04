/* Source: ECMAScript® 2018 Language Specification - Annex A-4 */

grammar FormalParameter;

// UniqueFormalParameters[Yield, Await]:
//    FormalParameters[?Yield, ?Await]
uniqueFormalParameters
: formalParameters
;
/*uniqueFormalParameters_Await
: formalParameters_Await
;
uniqueFormalParameters_Yield_Await
: formalParameters_Yield_Await
;*/

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
/*formalParameters_Await
:
| functionRestParameter_Await
| formalParameterList_Await Comma?
| formalParameterList_Await Comma functionRestParameter_Await
;
formalParameters_Yield_Await
:
| functionRestParameter_Yield_Await
| formalParameterList_Yield_Await Comma?
| formalParameterList_Yield_Await Comma functionRestParameter_Yield_Await
;*/

// FormalParameterList[Yield, Await]:
//    FormalParameter[?Yield, ?Await]
//    FormalParameterList[?Yield, ?Await] , FormalParameter[?Yield, ?Await]
formalParameterList
: formalParameter (Comma formalParameter)*
;
/*formalParameterList_Await
: formalParameter_Await (Comma formalParameter_Await)*
;
formalParameterList_Yield_Await
: formalParameter_Yield_Await (Comma formalParameter_Yield_Await)*
;*/

// FunctionRestParameter[Yield, Await]:
//    BindingRestElement[?Yield, ?Await]
functionRestParameter
: bindingRestElement
;
/*functionRestParameter_Await
: bindingRestElement_Await
;
functionRestParameter_Yield_Await
: bindingRestElement_Yield_Await
;*/

// FormalParameter[Yield, Await]:
//    BindingElement[?Yield, ?Await]
formalParameter
: bindingElement
;
/*formalParameter_Await
: bindingElement_Await
;
formalParameter_Yield_Await
: bindingElement_Yield_Await
;*/

// ArrowParameters[Yield, Await]:
//    BindingIdentifier[?Yield, ?Await]
//    CoverParenthesizedExpressionAndArrowParameterList[?Yield, ?Await]
arrowParameters
: bindingIdentifier
| coverParenthesizedExpressionAndArrowParameterList
;
/*arrowParameters_Await
: bindingIdentifier_Await
| coverParenthesizedExpressionAndArrowParameterList_Await
;
arrowParameters_Yield_Await
: bindingIdentifier_Yield_Await
| coverParenthesizedExpressionAndArrowParameterList_Yield_Await
;*/
