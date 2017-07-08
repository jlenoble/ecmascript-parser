/* Source: ECMAScript® 2018 Language Specification - Annex A-4 */

grammar Class;

// ClassDeclaration[Yield, Await, Default]:
//    class BindingIdentifier[?Yield, ?Await] ClassTail[?Yield, ?Await]
//    [+Default] class ClassTail[?Yield, ?Await]
classDeclaration
: Class bindingIdentifier classTail
;

// ClassExpression[Yield, Await]:
//    class BindingIdentifier[?Yield, ?Await][opt]
//        ClassTail[?Yield, ?Await]
/* classExpression
: Class bindingIdentifier? classTail
;*/

// ClassTail[Yield, Await]:
//    ClassHeritage[?Yield, ?Await][opt] {
//        ClassBody[?Yield, ?Await][opt] }
classTail
: classHeritage? OpenBrace classBody? CloseBrace
;

// ClassHeritage[Yield, Await]:
//    extends LeftHandSideExpression[?Yield, ?Await]
classHeritage
: Extends expression
;

// ClassBody[Yield, Await]:
//    ClassElementList[?Yield, ?Await]
classBody
: classElementList
;

// ClassElementList[Yield, Await]:
//    ClassElement[?Yield, ?Await]
//    ClassElementList[?Yield, ?Await] ClassElement[?Yield, ?Await]
classElementList
: classElement+
;

// ClassElement[Yield, Await]:
//    MethodDefinition[?Yield, ?Await]
//    staticMethodDefinition[?Yield, ?Await]
//    ;
classElement
: Static methodDefinition
| methodDefinition
| SemiColon
;
