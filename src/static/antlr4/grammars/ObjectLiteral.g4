/* Source: ECMAScript® 2018 Language Specification - Annex A-2 */

grammar ObjectLiteral;

// ObjectLiteral[Yield, Await]:
//    { }
//    { PropertyDefinitionList[?Yield, ?Await] }
//    { PropertyDefinitionList[?Yield, ?Await] , }
objectLiteral
: OpenBrace CloseBrace
| OpenBrace propertyDefinitionList Comma? CloseBrace
;
/*objectLiteral_Yield
: OpenBrace CloseBrace
| OpenBrace propertyDefinitionList_Yield CloseBrace
| OpenBrace propertyDefinitionList_Yield Comma CloseBrace
;
objectLiteral_Await
: OpenBrace CloseBrace
| OpenBrace propertyDefinitionList_Await CloseBrace
| OpenBrace propertyDefinitionList_Await Comma CloseBrace
;
objectLiteral_Yield_Await
: OpenBrace CloseBrace
| OpenBrace propertyDefinitionList_Yield_Await CloseBrace
| OpenBrace propertyDefinitionList_Yield_Await Comma CloseBrace
;*/

// PropertyDefinitionList[Yield, Await]:
//    PropertyDefinition[?Yield, ?Await]
//    PropertyDefinitionList[?Yield, ?Await] , PropertyDefinition[?Yield, ?Await]
propertyDefinitionList
: propertyDefinition (Comma propertyDefinition)*
;
/*propertyDefinitionList_Yield
: propertyDefinition_Yield (Comma propertyDefinition_Yield)*
;
propertyDefinitionList_Await
: propertyDefinition_Await (Comma propertyDefinition_Await)*
;
propertyDefinitionList_Yield_Await
: propertyDefinition_Yield_Await (Comma propertyDefinition_Yield_Await)*
;*/

// PropertyDefinition[Yield, Await]:
//    IdentifierReference[?Yield, ?Await]
//    CoverInitializedName[?Yield, ?Await]
//    PropertyName[?Yield, ?Await] : AssignmentExpression[+In, ?Yield, ?Await]
//    MethodDefinition[?Yield, ?Await]
propertyDefinition
: /*identifierReference
| coverInitializedName
| */propertyName Colon assignmentExpression_In
/*| methodDefinition*/
;
/*propertyDefinition_Yield
: identifierReference_Yield
| coverInitializedName_Yield
| propertyName_Yield Colon assignmentExpression_In_Yield
| methodDefinition_Yield
;
propertyDefinition_Await
: identifierReference_Await
| coverInitializedName_Await
| propertyName_Await Colon assignmentExpression_In_Await
| methodDefinition_Await
;
propertyDefinition_Yield_Await
: identifierReference_Yield_Await
| coverInitializedName_Yield_Await
| propertyName_Yield_Await Colon assignmentExpression_In_Yield_Await
| methodDefinition_Yield_Await
;*/

// PropertyName[Yield, Await]:
//    LiteralPropertyName
//    ComputedPropertyName[?Yield, ?Await]
propertyName
: literalPropertyName
/*| computedPropertyName*/
;
/*propertyName_Yield
: literalPropertyName
| computedPropertyName_Yield
;
propertyName_Await
: literalPropertyName
| computedPropertyName_Await
;
propertyName_Yield_Await
: literalPropertyName
| computedPropertyName_Yield_Await
;*/

// LiteralPropertyName:
//    IdentifierName
//    StringLiteral
//    NumericLiteral
literalPropertyName
: IdentifierName
| StringLiteral
| NumericLiteral
;

// ComputedPropertyName[Yield, Await]:
//    [AssignmentExpression[+In, ?Yield, ?Await]]
/*computedPropertyName
: assignmentExpression_In
;
computedPropertyName_Yield
: assignmentExpression_In_Yield
;
computedPropertyName_Await
: assignmentExpression_In_Await
;
computedPropertyName_Yield_Await
: assignmentExpression_In_Yield_Await
;*/

// CoverInitializedName[Yield, Await]:
//    IdentifierReference[?Yield, ?Await] Initializer[+In, ?Yield, ?Await]
/*coverInitializedName
: identifierReference initializer_In
;
coverInitializedName_Yield
: identifierReference_Yield initializer_In_Yield
;
coverInitializedName_Await
: identifierReference_Await initializer_In_Await
;
coverInitializedName_Yield_Await
: identifierReference_Yield_Await initializer_In_Yield_Await
;*/
