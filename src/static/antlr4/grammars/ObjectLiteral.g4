/* Source: ECMAScript® 2018 Language Specification - Annex A-2 */

grammar ObjectLiteral;

// ObjectLiteral[Yield, Await]:
//    { }
//    { PropertyDefinitionList[?Yield, ?Await] }
//    { PropertyDefinitionList[?Yield, ?Await] , }
objectLiteral
: OpenBrace (propertyDefinitionList Comma?)? CloseBrace
;

// PropertyDefinitionList[Yield, Await]:
//    PropertyDefinition[?Yield, ?Await]
//    PropertyDefinitionList[?Yield, ?Await] , PropertyDefinition[?Yield, ?Await]
propertyDefinitionList
: propertyDefinition (Comma propertyDefinition)*
;

// PropertyDefinition[Yield, Await]:
//    IdentifierReference[?Yield, ?Await]
//    CoverInitializedName[?Yield, ?Await]
//    PropertyName[?Yield, ?Await] : AssignmentExpression[+In, ?Yield, ?Await]
//    MethodDefinition[?Yield, ?Await]
propertyDefinition
: methodDefinition
| coverInitializedName
| propertyName Colon expression
| identifierReference
;

// PropertyName[Yield, Await]:
//    LiteralPropertyName
//    ComputedPropertyName[?Yield, ?Await]
propertyName
: literalPropertyName
| computedPropertyName
;

// LiteralPropertyName:
//    IdentifierName
//    StringLiteral
//    NumericLiteral
literalPropertyName
: (identifierName|StringLiteral|NumericLiteral)
;

// ComputedPropertyName[Yield, Await]:
//    [AssignmentExpression[+In, ?Yield, ?Await]]
computedPropertyName
: expression
;

// CoverInitializedName[Yield, Await]:
//    IdentifierReference[?Yield, ?Await] Initializer[+In, ?Yield, ?Await]
coverInitializedName
: identifierReference initializer
;
