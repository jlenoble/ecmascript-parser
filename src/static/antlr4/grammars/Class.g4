/* Source: ECMAScript® 2018 Language Specification - Annex A-4 */

grammar Class;

// ClassDeclaration[Yield, Await, Default]:
//    class BindingIdentifier[?Yield, ?Await] ClassTail[?Yield, ?Await]
//    [+Default] class ClassTail[?Yield, ?Await]
classDeclaration
: Class bindingIdentifier classTail
;
/*classDeclaration_Yield
: Class bindingIdentifier_Yield classTail_Yield
;
classDeclaration_Await
: Class bindingIdentifier_Await classTail_Await
;
classDeclaration_Yield_Await
: Class bindingIdentifier_Yield_Await classTail_Yield_Await
;
classDeclaration_Default
: Class bindingIdentifier classTail
| Class classTail
;
classDeclaration_Yield_Default
: Class bindingIdentifier_Yield classTail_Yield
| Class classTail_Yield
;
classDeclaration_Await_Default
: Class bindingIdentifier_Await classTail_Await
| Class classTail_Await
;
classDeclaration_Yield_Await_Default
: Class bindingIdentifier_Yield_Await classTail_Yield_Await
| Class classTail_Yield_Await
;*/

// ClassExpression[Yield, Await]:
//    class BindingIdentifier[?Yield, ?Await][opt] ClassTail[?Yield, ?Await]
classExpression
: Class bindingIdentifier? classTail
;
/*classExpression_Yield
: Class bindingIdentifier_Yield? classTail_Yield
;
classExpression_Await
: Class bindingIdentifier_Await? classTail_Await
;
classExpression_Yield_Await
: Class bindingIdentifier_Yield_Await? classTail_Yield_Await
;*/

// ClassTail[Yield, Await]:
//    ClassHeritage[?Yield, ?Await][opt] { ClassBody[?Yield, ?Await][opt] }
classTail
: classHeritage? OpenBrace classBody? CloseBrace
;
/*classTail_Yield
: classHeritage_Yield? OpenBrace classBody_Yield? CloseBrace
;
classTail_Await
: classHeritage_Await? OpenBrace classBody_Await? CloseBrace
;
classTail_Yield_Await
: classHeritage_Yield_Await? OpenBrace classBody_Yield_Await? CloseBrace
;*/

// ClassHeritage[Yield, Await]:
//    extends LeftHandSideExpression[?Yield, ?Await]
classHeritage
: Extends leftHandSideExpression
;
/*classHeritage_Yield
: Extends leftHandSideExpression_Yield
;
classHeritage_Await
: Extends leftHandSideExpression_Await
;
classHeritage_Yield_Await
: Extends leftHandSideExpression_Yield_Await
;*/

// ClassBody[Yield, Await]:
//    ClassElementList[?Yield, ?Await]
classBody
: classElementList
;
/*classBody_Yield
: classElementList_Yield
;
classBody_Await
: classElementList_Await
;
classBody_Yield_Await
: classElementList_Yield_Await
;*/

// ClassElementList[Yield, Await]:
//    ClassElement[?Yield, ?Await]
//    ClassElementList[?Yield, ?Await] ClassElement[?Yield, ?Await]
classElementList
: classElement+
;
/*classElementList_Yield
: classElement_Yield+
;
classElementList_Await
: classElement_Await+
;
classElementList_Yield_Await
: classElement_Yield_Await+
;*/

// ClassElement[Yield, Await]:
//    MethodDefinition[?Yield, ?Await]
//    staticMethodDefinition[?Yield, ?Await]
//    ;
classElement
: methodDefinition
| Static methodDefinition
| SemiColon
;
/*classElement_Yield
: methodDefinition_Yield
| Static methodDefinition_Yield
| SemiColon
;
classElement_Await
: methodDefinition_Await
| Static methodDefinition_Await
| SemiColon
;
classElement_Yield_Await
: methodDefinition_Yield_Await
| Static methodDefinition_Yield_Await
| SemiColon
;*/
