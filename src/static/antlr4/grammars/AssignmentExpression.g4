/* Source: ECMAScript® 2018 Language Specification - Annex A-2 */

grammar AssignmentExpression;

// Initializer[In, Yield, Await]:
//    = AssignmentExpression[?In, ?Yield, ?Await]
initializer
: Assign assignmentExpression
;
/*initializer_Yield
: Assign assignmentExpression_Yield
;
initializer_Await
: Assign assignmentExpression_Await
;
initializer_Yield_Await
: Assign assignmentExpression_Yield_Await
;*/
initializer_In
: Assign assignmentExpression_In
;
/*initializer_In_Yield
: Assign assignmentExpression_In_Yield
;
initializer_In_Await
: Assign assignmentExpression_In_Await
;
initializer_In_Yield_Await
: Assign assignmentExpression_In_Yield_Await
;*/

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
: assignmentExpression {!this.isLineTerminatorEquivalent()}?
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
/*| arrowParameters FatArrow conciseBody        # arrowFunction
| asyncArrowFunction*/
| leftHandSideExpression Assign assignmentExpression                # assignExpression
| leftHandSideExpression assignmentOperator assignmentExpression    # assignmentOperatorExpression
| leftHandSideExpression                                            # lhsExpression
;
/*assignmentExpression_Yield
: assignmentExpression_Yield QuestionMark assignmentExpression_Yield
  Colon assignmentExpression_Yield                                            # conditionalExpression_Yield
| Yield Multiply? assignmentExpression_Yield                                  # yieldExpression
| arrowParameters_Yield FatArrow conciseBody # arrowFunction_Yield
| asyncArrowFunction_Yield
| leftHandSideExpression_Yield Assign assignmentExpression_Yield              # assignExpression_Yield
| leftHandSideExpression_Yield assignmentOperator assignmentExpression_Yield  # assignmentOperatorExpression_Yield
| leftHandSideExpression_Yield                                                # lhsExpression_Yield
;
assignmentExpression_Await
: assignmentExpression_Await QuestionMark assignmentExpression_Await
  Colon assignmentExpression_Await                                            # conditionalExpression_Await
| arrowParameters_Await FatArrow conciseBody  # arrowFunction_Await
| asyncArrowFunction_Await
| leftHandSideExpression_Await Assign assignmentExpression_Await              # assignExpression_Await
| leftHandSideExpression_Await assignmentOperator assignmentExpression_Await  # assignmentOperatorExpression_Await
| leftHandSideExpression_Await                                                # lhsExpression_Await
;
assignmentExpression_Yield_Await
: assignmentExpression_Yield_Await QuestionMark assignmentExpression_Yield_Await
  Colon assignmentExpression_Yield_Await                                                  # conditionalExpression_Yield_Await
| Yield Multiply? assignmentExpression_Yield_Await                                        # yieldExpression_Await
| arrowParameters_Yield_Await FatArrow conciseBody  # arrowFunction_Yield_Await
| asyncArrowFunction_Yield_Await
| leftHandSideExpression_Yield_Await Assign assignmentExpression_Yield_Await              # assignExpression_Yield_Await
| leftHandSideExpression_Yield_Await assignmentOperator assignmentExpression_Yield_Await  # assignmentOperatorExpression_Yield_Await
| leftHandSideExpression_Yield_Await                                                      # lhsExpression_Yield_Await
;*/
assignmentExpression_In
: assignmentExpression_In  {!this.isLineTerminatorEquivalent()}?
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
/*| arrowParameters FatArrow conciseBody        # arrowFunction
| asyncArrowFunction*/
| leftHandSideExpression Assign assignmentExpression_In                   # assignExpression_In
| leftHandSideExpression assignmentOperator assignmentExpression_In       # assignmentOperatorExpression_In
| leftHandSideExpression                                                  # lhsExpression_In
;
/*assignmentExpression_In_Yield
: assignmentExpression_In_Yield QuestionMark assignmentExpression_In_Yield
  Colon assignmentExpression_In_Yield                                             # conditionalExpression_In_Yield
| Yield Multiply? assignmentExpression_In_Yield                                   # yieldExpression_In
| arrowParameters_Yield FatArrow conciseBody_In     # arrowFunction_In_Yield
| asyncArrowFunction_In_Yield
| leftHandSideExpression_Yield Assign assignmentExpression_In_Yield               # assignExpression_In_Yield
| leftHandSideExpression_Yield assignmentOperator assignmentExpression_In_Yield   # assignmentOperatorExpression_In_Yield
| leftHandSideExpression_Yield                                                    # lhsExpression_In_Yield
;
assignmentExpression_In_Await
: assignmentExpression_In_Await QuestionMark assignmentExpression_In_Await
  Colon assignmentExpression_In_Await                                             # conditionalExpression_In_Await
| arrowParameters_Await FatArrow conciseBody_In     # arrowFunction_In_Await
| asyncArrowFunction_In_Await
| leftHandSideExpression_Await Assign assignmentExpression_In_Await               # assignExpression_In_Await
| leftHandSideExpression_Await assignmentOperator assignmentExpression_In_Await   # assignmentOperatorExpression_In_Await
| leftHandSideExpression_Await                                                    # lhsExpression_In_Await
;
assignmentExpression_In_Yield_Await
: assignmentExpression_In_Yield_Await QuestionMark assignmentExpression_In_Yield_Await
  Colon assignmentExpression_In_Yield_Await                                                   # conditionalExpression_In_Yield_Await
| Yield Multiply? assignmentExpression_In_Yield_Await                                         # yieldExpression_In_Await
| arrowParameters_Yield_Await FatArrow conciseBody_In # arrowFunction_In_Yield_Await
| asyncArrowFunction_In_Yield_Await
| leftHandSideExpression_Yield_Await Assign assignmentExpression_In_Yield_Await               # assignExpression_In_Yield_Await
| leftHandSideExpression_Yield_Await assignmentOperator assignmentExpression_In_Yield_Await   # assignmentOperatorExpression_In_Yield_Await
| leftHandSideExpression_Yield_Await                                                          # lhsExpression_In_Yield_Await
;*/

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
