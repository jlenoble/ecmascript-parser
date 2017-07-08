/* Source: ECMAScript® 2018 Language Specification - Annex A-3 */

grammar LexicalDeclaration;

// LexicalDeclaration[In, Yield, Await]:
//    LetOrConst BindingList[?In, ?Yield, ?Await] ;
lexicalDeclaration
: letOrConst bindingList eos
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

// LexicalBinding[In, Yield, Await]:
//    BindingIdentifier[?Yield, ?Await] Initializer[?In, ?Yield, ?Await][opt]
//    BindingPattern[?Yield, ?Await] Initializer[?In, ?Yield, ?Await]
lexicalBinding
: bindingIdentifier initializer?
| bindingPattern initializer
;
