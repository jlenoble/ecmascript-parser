/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar LexicalDeclaration;

// LexicalDeclaration[In, Yield, Await]:
//    LetOrConst BindingList[?In, ?Yield, ?Await] ;
lexicalDeclaration
: letOrConst bindingList SemiColon
;
/*lexicalDeclaration_In
: letOrConst bindingList_In SemiColon
;
lexicalDeclaration_Yield
: letOrConst bindingList_Yield SemiColon
;
lexicalDeclaration_Await
: letOrConst bindingList_Await SemiColon
;
lexicalDeclaration_Yield_Await
: letOrConst bindingList_Yield_Await SemiColon
;
lexicalDeclaration_In_Yield
: letOrConst bindingList_In_Yield SemiColon
;
lexicalDeclaration_In_Await
: letOrConst bindingList_In_Await SemiColon
;
lexicalDeclaration_In_Yield_Await
: letOrConst bindingList_In_Yield_Await SemiColon
;*/

// LetOrConst:
//    let
//    const
letOrConst
: Let
| Const
;

// BindingList[In, Yield, Await]:
//    LexicalBinding[?In, ?Yield, ?Await]
//    BindingList[?In, ?Yield, ?Await] , LexicalBinding[?In, ?Yield, ?Await]
bindingList
: lexicalBinding (Comma lexicalBinding)*
;
/*bindingList_In
: lexicalBinding_In (Comma lexicalBinding_In)*
;
bindingList_Yield
: lexicalBinding_Yield (Comma lexicalBinding_Yield)*
;
bindingList_Await
: lexicalBinding_Await (Comma lexicalBinding_Await)*
;
bindingList_Yield_Await
: lexicalBinding_Yield_Await (Comma lexicalBinding_Yield_Await)*
;
bindingList_In_Yield
: lexicalBinding_In_Yield (Comma lexicalBinding_In_Yield)*
;
bindingList_In_Await
: lexicalBinding_In_Await (Comma lexicalBinding_In_Await)*
;
bindingList_In_Yield_Await
: lexicalBinding_In_Yield_Await (Comma lexicalBinding_In_Yield_Await)*
;*/

// LexicalBinding[In, Yield, Await]:
//    BindingIdentifier[?Yield, ?Await] Initializer[?In, ?Yield, ?Await][opt]
//    BindingPattern[?Yield, ?Await] Initializer[?In, ?Yield, ?Await]
lexicalBinding
: bindingIdentifier // initializer?
/*| bindingPattern initializer*/
;
/*lexicalBinding_In
: bindingIdentifier initializer_In?
| bindingPattern initializer_In
;
lexicalBinding_Yield
: bindingIdentifier_Yield initializer_Yield?
| bindingPattern_Yield initializer_Yield
;
lexicalBinding_Await
: bindingIdentifier_Await initializer_Await?
| bindingPattern_Await initializer_Await
;
lexicalBinding_Yield_Await
: bindingIdentifier_Yield_Await initializer_Yield_Await?
| bindingPattern_Yield_Await initializer_Yield_Await
;
lexicalBinding_In_Yield
: bindingIdentifier_Yield initializer_In_Yield?
| bindingPattern_Yield initializer_In_Yield
;
lexicalBinding_In_Await
: bindingIdentifier_Await initializer_In_Await?
| bindingPattern_Await initializer_In_Await
;
lexicalBinding_In_Yield_Await
: bindingIdentifier_Yield_Await initializer_In_Yield_Await?
| bindingPattern_Yield_Await initializer_In_Yield_Await
;*/
