/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar LexicalDeclaration;

// LexicalDeclaration[In, Yield, Await]:
//    LetOrConst BindingList[?In, ?Yield, ?Await] ;
lexicalDeclaration
: letOrConst bindingList eos
;
lexicalDeclaration_In
: letOrConst bindingList_In eos
;

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
bindingList_In
: lexicalBinding_In (Comma lexicalBinding_In)*
;

// LexicalBinding[In, Yield, Await]:
//    BindingIdentifier[?Yield, ?Await] Initializer[?In, ?Yield, ?Await][opt]
//    BindingPattern[?Yield, ?Await] Initializer[?In, ?Yield, ?Await]
lexicalBinding
: bindingIdentifier initializer?
| bindingPattern initializer
;
lexicalBinding_In
: bindingIdentifier initializer_In?
| bindingPattern initializer_In
;
