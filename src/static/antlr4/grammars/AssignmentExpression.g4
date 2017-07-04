/* Source: ECMAScript® 2018 Language Specification - Annex A-2 */

grammar AssignmentExpression;

// Initializer[In, Yield, Await]:
//    = AssignmentExpression[?In, ?Yield, ?Await]
initializer
: Assign assignmentExpression
;
initializer_In
: Assign assignmentExpression_In
;


// GeneratorExpression: From Annex B4 - Functions And Classes
//    function * BindingIdentifier[+Yield, ~Await][opt] ( FormalParameters[+Yield, ~Await] ) { GeneratorBody }
// FunctionExpression: From Annex B4 - Functions And Classes
//    function BindingIdentifier[~Yield, ~Await][opt] ( FormalParameters[~Yield, ~Await] ) { FunctionBody[~Yield, ~Await] }
// ClassExpression[Yield, Await]: From Annex B4 - Functions And Classes
//    class BindingIdentifier[?Yield, ?Await][opt] ClassTail[?Yield, ?Await]
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
//    UpdateExpression[?Yield, ?Await] ** ExponentiationExpression[?Yield, ?Await]
// MultiplicativeExpression[Yield, Await]:
//    ExponentiationExpression[?Yield, ?Await]
//    MultiplicativeExpression[?Yield, ?Await] MultiplicativeOperator ExponentiationExpression[?Yield, ?Await]
// AdditiveExpression[Yield, Await]:
//    MultiplicativeExpression[?Yield, ?Await]
//    AdditiveExpression[?Yield, ?Await] + MultiplicativeExpression[?Yield, ?Await]
//    AdditiveExpression[?Yield, ?Await] - MultiplicativeExpression[?Yield, ?Await]
// ShiftExpression[Yield, Await]:
//    AdditiveExpression[?Yield, ?Await]
//    ShiftExpression[?Yield, ?Await] << AdditiveExpression[?Yield, ?Await]
//    ShiftExpression[?Yield, ?Await] >> AdditiveExpression[?Yield, ?Await]
//    ShiftExpression[?Yield, ?Await] >>> AdditiveExpression[?Yield, ?Await]
// RelationalExpression[In, Yield, Await]:
//    ShiftExpression[?Yield, ?Await]
//    RelationalExpression[?In, ?Yield, ?Await] < ShiftExpression[?Yield, ?Await]
//    RelationalExpression[?In, ?Yield, ?Await] > ShiftExpression[?Yield, ?Await]
//    RelationalExpression[?In, ?Yield, ?Await] <= ShiftExpression[?Yield, ?Await]
//    RelationalExpression[?In, ?Yield, ?Await] >= ShiftExpression[?Yield, ?Await]
//    RelationalExpression[?In, ?Yield, ?Await] instanceof ShiftExpression[?Yield, ?Await]
//    [+In]RelationalExpression[+In, ?Yield, ?Await] in ShiftExpression[?Yield, ?Await]
// EqualityExpression[In, Yield, Await]:
//    RelationalExpression[?In, ?Yield, ?Await]
//    EqualityExpression[?In, ?Yield, ?Await] == RelationalExpression[?In, ?Yield, ?Await]
//    EqualityExpression[?In, ?Yield, ?Await] != RelationalExpression[?In, ?Yield, ?Await]
//    EqualityExpression[?In, ?Yield, ?Await] === RelationalExpression[?In, ?Yield, ?Await]
//    EqualityExpression[?In, ?Yield, ?Await] !== RelationalExpression[?In, ?Yield, ?Await]
// BitwiseANDExpression[In, Yield, Await]:
//    EqualityExpression[?In, ?Yield, ?Await]
//    BitwiseANDExpression[?In, ?Yield, ?Await] & EqualityExpression[?In, ?Yield, ?Await]
// BitwiseXORExpression[In, Yield, Await]:
//    BitwiseANDExpression[?In, ?Yield, ?Await]
//    BitwiseXORExpression[?In, ?Yield, ?Await] ^ BitwiseANDExpression[?In, ?Yield, ?Await]
// BitwiseORExpression[In, Yield, Await]:
//    BitwiseXORExpression[?In, ?Yield, ?Await]
//    BitwiseORExpression[?In, ?Yield, ?Await] | BitwiseXORExpression[?In, ?Yield, ?Await]
// LogicalANDExpression[In, Yield, Await]:
//    BitwiseORExpression[?In, ?Yield, ?Await]
//    LogicalANDExpression[?In, ?Yield, ?Await] && BitwiseORExpression[?In, ?Yield, ?Await]
// LogicalORExpression[In, Yield, Await]:
//    LogicalANDExpression[?In, ?Yield, ?Await]
//    LogicalORExpression[?In, ?Yield, ?Await] || LogicalANDExpression[?In, ?Yield, ?Await]
// ConditionalExpression[In, Yield, Await]:
//    LogicalORExpression[?In, ?Yield, ?Await]
//    LogicalORExpression[?In, ?Yield, ?Await] ? AssignmentExpression[+In, ?Yield, ?Await] : AssignmentExpression[?In, ?Yield, ?Await]
// YieldExpression[In, Await]: From Annex B4 - Functions And Classes
//    yield
//    yield [no LineTerminator here] AssignmentExpression[?In, +Yield, ?Await]
//    yield [no LineTerminator here] * AssignmentExpression[?In, +Yield, ?Await]
// ArrowFunction[In, Yield, Await]: From Annex B4 - Functions And Classes
//    ArrowParameters[?Yield, ?Await] [no LineTerminator here] => ConciseBody[?In]
// AssignmentExpression[In, Yield, Await]:
//    ConditionalExpression[?In, ?Yield, ?Await]
//    [+Yield] YieldExpression[?In, ?Await]
//    ArrowFunction[?In, ?Yield, ?Await]
//    AsyncArrowFunction[?In, ?Yield, ?Await]
//    LeftHandSideExpression[?Yield, ?Await] = AssignmentExpression[?In, ?Yield, ?Await]
//    LeftHandSideExpression[?Yield, ?Await] AssignmentOperator AssignmentExpression[?In, ?Yield, ?Await]
assignmentExpression
: Function Multiply bindingIdentifier? OpenParen formalParameters
  CloseParen OpenBrace generatorBody CloseBrace                     # generatorExpression
| Function bindingIdentifier? OpenParen formalParameters CloseParen
  OpenBrace functionBody CloseBrace                                 # functionExpression
| Class bindingIdentifier? classTail                                # classExpression
| assignmentExpression {!this.isLineTerminatorEquivalent()}?
  (PlusPlus|MinusMinus)                                             # updateExpression
| unaryOperator assignmentExpression                                # unaryExpression
| assignmentExpression Power assignmentExpression                   # exponentiationExpression
| assignmentExpression multiplicativeOperator assignmentExpression  # multiplicativeExpression
| assignmentExpression additiveOperator assignmentExpression        # additiveExpression
| assignmentExpression shiftOperator assignmentExpression           # shiftExpression
| assignmentExpression relationalOperator assignmentExpression      # relationalExpression
| assignmentExpression Instanceof assignmentExpression              # instanceOfExpression
| assignmentExpression equalityOperator assignmentExpression        # equalityExpression
| assignmentExpression BitAnd assignmentExpression                  # bitwiseANDExpression
| assignmentExpression BitXor assignmentExpression                  # bitwiseXORExpression
| assignmentExpression BitOr assignmentExpression                   # bitwiseORExpression
| assignmentExpression And assignmentExpression                     # logicalANDExpression
| assignmentExpression Or assignmentExpression                      # logicalORExpression
| assignmentExpression QuestionMark assignmentExpression
  Colon assignmentExpression                                        # conditionalExpression
| arrowParameters FatArrow conciseBody                              # arrowFunction
/*| asyncArrowFunction*/
| assignmentExpression Assign assignmentExpression                  # assignExpression
| assignmentExpression assignmentOperator assignmentExpression      # assignmentOperatorExpression
| {this.canYield()} Yield assignmentExpression                      # yieldExpression
| leftHandSideExpression                                            # lhsExpression
;
assignmentExpression_In
: Function Multiply bindingIdentifier? OpenParen formalParameters
  CloseParen OpenBrace generatorBody CloseBrace                           # generatorExpression_In
| Function bindingIdentifier? OpenParen formalParameters CloseParen
  OpenBrace functionBody CloseBrace                                       # functionExpression_In
| Class bindingIdentifier? classTail                                      # classExpression_In
| assignmentExpression_In  {!this.isLineTerminatorEquivalent()}?
  (PlusPlus|MinusMinus)                                                   # updateExpression_In
| unaryOperator assignmentExpression_In                                   # unaryExpression_In
| assignmentExpression_In Power assignmentExpression_In                   # exponentiationExpression_In
| assignmentExpression_In multiplicativeOperator assignmentExpression_In  # multiplicativeExpression_In
| assignmentExpression_In additiveOperator assignmentExpression_In        # additiveExpression_In
| assignmentExpression_In shiftOperator assignmentExpression_In           # shiftExpression_In
| assignmentExpression_In relationalOperator assignmentExpression_In      # relationalExpression_In
| assignmentExpression_In In assignmentExpression_In                      # inExpression_In
| assignmentExpression_In Instanceof assignmentExpression_In              # instanceOfExpression_In
| assignmentExpression_In equalityOperator assignmentExpression_In        # equalityExpression_In
| assignmentExpression_In BitAnd assignmentExpression_In                  # bitwiseANDExpression_In
| assignmentExpression_In BitXor assignmentExpression_In                  # bitwiseXORExpression_In
| assignmentExpression_In BitOr assignmentExpression_In                   # bitwiseORExpression_In
| assignmentExpression_In And assignmentExpression_In                     # logicalANDExpression_In
| assignmentExpression_In Or assignmentExpression_In                      # logicalORExpression_In
| assignmentExpression_In QuestionMark assignmentExpression_In
  Colon assignmentExpression_In                                           # conditionalExpression_In
| arrowParameters FatArrow conciseBody_In                                 # arrowFunction_In
/*| asyncArrowFunction*/
| assignmentExpression_In Assign assignmentExpression_In                  # assignExpression_In
| assignmentExpression_In assignmentOperator assignmentExpression_In      # assignmentOperatorExpression_In
| {this.canYield()} Yield assignmentExpression_In                         # yieldExpression_In
| leftHandSideExpression                                                  # lhsExpression_In
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
