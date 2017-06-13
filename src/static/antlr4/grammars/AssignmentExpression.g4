/* Source: ECMAScript® 2018 Language Specification - Annex A-2 */

grammar AssignmentExpression;

// Initializer[In, Yield, Await]:
//    = AssignmentExpression[?In, ?Yield, ?Await]
initializer
: Assign assignmentExpression
;
initializer_Yield
: Assign assignmentExpression_Yield
;
initializer_Await
: Assign assignmentExpression_Await
;
initializer_Yield_Await
: Assign assignmentExpression_Yield_Await
;
initializer_In
: Assign assignmentExpression_In
;
initializer_In_Yield
: Assign assignmentExpression_In_Yield
;
initializer_In_Await
: Assign assignmentExpression_In_Await
;
initializer_In_Yield_Await
: Assign assignmentExpression_In_Yield_Await
;

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
: assignmentExpression QuestionMark assignmentExpression
  Colon assignmentExpression                  # conditionalExpression
/*| arrowParameters FatArrow conciseBody        # arrowFunction
| asyncArrowFunction
| leftHandSideExpression Assign assignmentExpression
| leftHandSideExpression assignmentOperator assignmentExpression*/
;
assignmentExpression_Yield
: assignmentExpression_Yield QuestionMark assignmentExpression_Yield
  Colon assignmentExpression_Yield            # conditionalExpression_Yield
| Yield Multiply? assignmentExpression_Yield  # yieldExpression
/*| arrowParameters_Yield FatArrow conciseBody  # arrowFunction_Yield
| asyncArrowFunction_Yield
| leftHandSideExpression_Yield Assign assignmentExpression_Yield
| leftHandSideExpression_Yield assignmentOperator assignmentExpression_Yield*/
;
assignmentExpression_Await
: assignmentExpression_Await QuestionMark assignmentExpression_Await
  Colon assignmentExpression_Await            # conditionalExpression_Await
/*| arrowParameters_Await FatArrow conciseBody  # arrowFunction_Await
| asyncArrowFunction_Await
| leftHandSideExpression_Await Assign assignmentExpression_Await
| leftHandSideExpression_Await assignmentOperator assignmentExpression_Await*/
;
assignmentExpression_Yield_Await
: assignmentExpression_Yield_Await QuestionMark assignmentExpression_Yield_Await
  Colon assignmentExpression_Yield_Await            # conditionalExpression_Yield_Await
| Yield Multiply? assignmentExpression_Yield_Await  # yieldExpression_Await
/*| arrowParameters_Yield_Await FatArrow conciseBody  # arrowFunction_Yield_Await
| asyncArrowFunction_Yield_Await
| leftHandSideExpression_Yield_Await Assign assignmentExpression_Yield_Await
| leftHandSideExpression_Yield_Await assignmentOperator assignmentExpression_Yield_Await*/
;
assignmentExpression_In
: assignmentExpression_In QuestionMark assignmentExpression_In
  Colon assignmentExpression_In                     # conditionalExpression_In
/*| arrowParameters FatArrow conciseBody_In           # arrowFunction_In
| asyncArrowFunction_In
| leftHandSideExpression Assign assignmentExpression_In
| leftHandSideExpression assignmentOperator assignmentExpression_In*/
;
assignmentExpression_In_Yield
: assignmentExpression_In_Yield QuestionMark assignmentExpression_In_Yield
  Colon assignmentExpression_In_Yield               # conditionalExpression_In_Yield
| Yield Multiply? assignmentExpression_In_Yield     # yieldExpression_In
/*| arrowParameters_Yield FatArrow conciseBody_In     # arrowFunction_In_Yield
| asyncArrowFunction_In_Yield
| leftHandSideExpression_Yield Assign assignmentExpression_In_Yield
| leftHandSideExpression_Yield assignmentOperator assignmentExpression_In_Yield*/
;
assignmentExpression_In_Await
: assignmentExpression_In_Await QuestionMark assignmentExpression_In_Await
  Colon assignmentExpression_In_Await               # conditionalExpression_In_Await
/*| arrowParameters_Await FatArrow conciseBody_In     # arrowFunction_In_Await
| asyncArrowFunction_In_Await
| leftHandSideExpression_Await Assign assignmentExpression_In_Await
| leftHandSideExpression_Await assignmentOperator assignmentExpression_In_Await*/
;
assignmentExpression_In_Yield_Await
: assignmentExpression_In_Yield_Await QuestionMark assignmentExpression_In_Yield_Await
  Colon assignmentExpression_In_Yield_Await           # conditionalExpression_In_Yield_Await
| Yield Multiply? assignmentExpression_In_Yield_Await # yieldExpression_In_Await
/*| arrowParameters_Yield_Await FatArrow conciseBody_In # arrowFunction_In_Yield_Await
| asyncArrowFunction_In_Yield_Await
| leftHandSideExpression_Yield_Await Assign assignmentExpression_In_Yield_Await
| leftHandSideExpression_Yield_Await assignmentOperator assignmentExpression_In_Yield_Await*/
;

// AssignmentOperator:one of
//    *= /= %= += -= <<= >>= >>>= &= ^= |= **=
assignmentOperator
: (PlusAssign|MinusAssign|MultiplyAssign|DivideAssign|ModuloAssign|PowerAssign
  |LeftShiftArithmeticAssign| RightShiftArithmeticAssign|RightShiftLogicalAssign
  |BitAndAssign|BitOrAssign|BitXorAssign)
;
