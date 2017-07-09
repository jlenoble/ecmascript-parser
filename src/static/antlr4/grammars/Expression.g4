grammar Expression;

// Initializer[In, Yield, Await]:
//    = AssignmentExpression[?In, ?Yield, ?Await]
initializer
: Assign expression
;

// Expression[In, Yield, Await]:
//    AssignmentExpression[?In, ?Yield, ?Await]
//    Expression[?In, ?Yield, ?Await] , AssignmentExpression[?In, ?Yield, ?Await]
expressionList
: expression (Comma expression)*
;

// UpdateExpression[Yield, Await]:
//    LeftHandSideExpression[?Yield, ?Await]
//    LeftHandSideExpression[?Yield, ?Await] [no LineTerminator here] ++
//    LeftHandSideExpression[?Yield, ?Await] [no LineTerminator here] --
//    ++ UnaryExpression[?Yield, ?Await]
//    -- UnaryExpression[?Yield, ?Await]
// UnaryExpression[Yield, Await]:
//    UpdateExpression[?Yield, ?Await]
//    deleteUnaryExpression[?Yield, ?Await]
//    voidUnaryExpression[?Yield, ?Await]
//    typeofUnaryExpression[?Yield, ?Await]
//    + UnaryExpression[?Yield, ?Await]
//    - UnaryExpression[?Yield, ?Await]
//    ~ UnaryExpression[?Yield, ?Await]
//    ! UnaryExpression[?Yield, ?Await]
//    [+Await] AwaitExpression[?Yield]
// ExponentiationExpression[Yield, Await]:
//    UnaryExpression[?Yield, ?Await]
//    UpdateExpression[?Yield, ?Await] **
//        ExponentiationExpression[?Yield, ?Await]
// MultiplicativeExpression[Yield, Await]:
//    ExponentiationExpression[?Yield, ?Await]
//    MultiplicativeExpression[?Yield, ?Await] MultiplicativeOperator
//        ExponentiationExpression[?Yield, ?Await]
// AdditiveExpression[Yield, Await]:
//    MultiplicativeExpression[?Yield, ?Await]
//    AdditiveExpression[?Yield, ?Await] +
//        MultiplicativeExpression[?Yield, ?Await]
//    AdditiveExpression[?Yield, ?Await] -
//        MultiplicativeExpression[?Yield, ?Await]
// ShiftExpression[Yield, Await]:
//    AdditiveExpression[?Yield, ?Await]
//    ShiftExpression[?Yield, ?Await] << AdditiveExpression[?Yield, ?Await]
//    ShiftExpression[?Yield, ?Await] >> AdditiveExpression[?Yield, ?Await]
//    ShiftExpression[?Yield, ?Await] >>> AdditiveExpression[?Yield, ?Await]
// RelationalExpression[In, Yield, Await]:
//    ShiftExpression[?Yield, ?Await]
//    RelationalExpression[?In, ?Yield, ?Await] <
//        ShiftExpression[?Yield, ?Await]
//    RelationalExpression[?In, ?Yield, ?Await] >
//        ShiftExpression[?Yield, ?Await]
//    RelationalExpression[?In, ?Yield, ?Await] <=
//        ShiftExpression[?Yield, ?Await]
//    RelationalExpression[?In, ?Yield, ?Await] >=
//        ShiftExpression[?Yield, ?Await]
//    RelationalExpression[?In, ?Yield, ?Await] instanceof
//        ShiftExpression[?Yield, ?Await]
//    [+In]RelationalExpression[+In, ?Yield, ?Await] in
//        ShiftExpression[?Yield, ?Await]
// EqualityExpression[In, Yield, Await]:
//    RelationalExpression[?In, ?Yield, ?Await]
//    EqualityExpression[?In, ?Yield, ?Await] ==
//        RelationalExpression[?In, ?Yield, ?Await]
//    EqualityExpression[?In, ?Yield, ?Await] !=
//        RelationalExpression[?In, ?Yield, ?Await]
//    EqualityExpression[?In, ?Yield, ?Await] ===
//        RelationalExpression[?In, ?Yield, ?Await]
//    EqualityExpression[?In, ?Yield, ?Await] !==
//        RelationalExpression[?In, ?Yield, ?Await]
// BitwiseANDExpression[In, Yield, Await]:
//    EqualityExpression[?In, ?Yield, ?Await]
//    BitwiseANDExpression[?In, ?Yield, ?Await] &
//        EqualityExpression[?In, ?Yield, ?Await]
// BitwiseXORExpression[In, Yield, Await]:
//    BitwiseANDExpression[?In, ?Yield, ?Await]
//    BitwiseXORExpression[?In, ?Yield, ?Await] ^
//        BitwiseANDExpression[?In, ?Yield, ?Await]
// BitwiseORExpression[In, Yield, Await]:
//    BitwiseXORExpression[?In, ?Yield, ?Await]
//    BitwiseORExpression[?In, ?Yield, ?Await] |
//        BitwiseXORExpression[?In, ?Yield, ?Await]
// LogicalANDExpression[In, Yield, Await]:
//    BitwiseORExpression[?In, ?Yield, ?Await]
//    LogicalANDExpression[?In, ?Yield, ?Await] &&
//        BitwiseORExpression[?In, ?Yield, ?Await]
// LogicalORExpression[In, Yield, Await]:
//    LogicalANDExpression[?In, ?Yield, ?Await]
//    LogicalORExpression[?In, ?Yield, ?Await] ||
//        LogicalANDExpression[?In, ?Yield, ?Await]
// ConditionalExpression[In, Yield, Await]:
//    LogicalORExpression[?In, ?Yield, ?Await]
//    LogicalORExpression[?In, ?Yield, ?Await] ?
//        AssignmentExpression[+In, ?Yield, ?Await] :
//        AssignmentExpression[?In, ?Yield, ?Await]
// AssignmentExpression[In, Yield, Await]:
//    ConditionalExpression[?In, ?Yield, ?Await]
//    [+Yield] YieldExpression[?In, ?Await]
//    ArrowFunction[?In, ?Yield, ?Await]
//    AsyncArrowFunction[?In, ?Yield, ?Await]
//    LeftHandSideExpression[?Yield, ?Await] =
//        AssignmentExpression[?In, ?Yield, ?Await]
//    LeftHandSideExpression[?Yield, ?Await] AssignmentOperator
//        AssignmentExpression[?In, ?Yield, ?Await]
// YieldExpression[In, Await]: From Annex B4 - Functions And Classes
//    yield
//    yield [no LineTerminator here] AssignmentExpression[?In, +Yield, ?Await]
//    yield [no LineTerminator here] * AssignmentExpression[?In, +Yield, ?Await]
// ArrowFunction[In, Yield, Await]: From Annex B4 - Functions And Classes
//    ArrowParameters[?Yield, ?Await] [no LineTerminator here] =>
//        ConciseBody[?In]
expression
: This
| identifierReference
| NullLiteral
| BooleanLiteral
| NumericLiteral
| StringLiteral
| arrayLiteral
| OpenBrace (propertyDefinitionList Comma?)? CloseBrace
| Function bindingIdentifier? OpenParen formalParameters CloseParen
  OpenBrace functionBody CloseBrace
| Class bindingIdentifier? (Extends expression)?
  OpenBrace classBody? CloseBrace
| Function Multiply bindingIdentifier? OpenParen formalParameters
  CloseParen OpenBrace generatorBody CloseBrace
// | asyncFunctionExpression
| RegularExpressionLiteral
| templateLiteral
| expression OpenBracket expressionList CloseBracket
| expression Dot identifierName
| expression templateLiteral
| Super (OpenBracket expressionList CloseBracket|Dot identifierName)
| New Dot Target
| New expression arguments?
| Super arguments
| expression arguments
| expression {this.noLineTerminatorHere()}? (PlusPlus|MinusMinus)
| unaryOperator expression
| expression multiplicativeOperator expression
| expression additiveOperator expression
| expression shiftOperator expression
| expression relationalOperator expression
| expression In expression
| expression Instanceof expression
| expression equalityOperator expression
| expression BitAnd expression
| expression BitXor expression
| expression BitOr expression
| expression And expression
| expression Or expression
| expression QuestionMark expression Colon expression
| bindingIdentifier {this.noLineTerminatorHere()}? FatArrow conciseBody
| OpenParen expressionList? (Comma|Comma Spread
  (bindingIdentifier|bindingPattern))? CloseParen
  ({this.noLineTerminatorHere()}? FatArrow conciseBody)?
| OpenParen Spread (bindingIdentifier|bindingPattern) CloseParen
  {this.noLineTerminatorHere()}? FatArrow conciseBody
| {this.canYield()} Yield ({this.noLineTerminatorHere()}?
  Multiply? expression)?
| expression Assign expression
| expression assignmentOperator expression
;

unaryOperator
: (Delete|Void|Typeof|PlusPlus|MinusMinus|Plus|Minus|BitNot|Not)
;

// MultiplicativeOperator:one of
//    * / %
multiplicativeOperator
: (Multiply|Divide|Modulo)
;

additiveOperator
: (Plus|Minus)
;

shiftOperator
: (LeftShiftArithmetic|RightShiftArithmetic|RightShiftLogical)
;

relationalOperator
: (LessThan|GreaterThan|LessThanEquals|GreaterThanEquals)
;

equalityOperator
: (Equals|NotEquals|IdentityEquals|IdentityNotEquals)
;

// AssignmentOperator:one of
//    *= /= %= += -= <<= >>= >>>= &= ^= |= **=
assignmentOperator
: (PlusAssign|MinusAssign|MultiplyAssign|DivideAssign|ModuloAssign|PowerAssign
  |LeftShiftArithmeticAssign|RightShiftArithmeticAssign|RightShiftLogicalAssign
  |BitAndAssign|BitOrAssign|BitXorAssign)
;
