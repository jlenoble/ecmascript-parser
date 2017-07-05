/* Source: ECMAScript® 2018 Language Specification - Annex A-5 */

grammar Module;


// Module:
//    ModuleBody[opt]
module
: moduleBody? EOF
;

// ModuleBody:
//    ModuleItemList
moduleBody
: moduleItemList
;

// ModuleItemList:
//    ModuleItem
//    ModuleItemList ModuleItem
moduleItemList
: moduleItem+
;

// ModuleItem:
//    ImportDeclaration
//    ExportDeclaration
//    StatementListItem[~Yield, ~Await, ~Return]
moduleItem
: importDeclaration
| exportDeclaration
| statementListItem
;

// ImportDeclaration:
//    import ImportClause FromClause ;
//    import ModuleSpecifier ;
importDeclaration
: Import importClause fromClause eos
| Import moduleSpecifier eos
;

// ImportClause:
//    ImportedDefaultBinding
//    NameSpaceImport
//    NamedImports
//    ImportedDefaultBinding , NameSpaceImport
//    ImportedDefaultBinding , NamedImports
importClause
: importedDefaultBinding
| nameSpaceImport
| namedImports
| importedDefaultBinding Comma nameSpaceImport
| importedDefaultBinding Comma namedImports
;

// ImportedDefaultBinding:
//    ImportedBinding
importedDefaultBinding
: importedBinding
;

// NameSpaceImport:
//    * as ImportedBinding
nameSpaceImport
: Multiply As importedBinding
;

// NamedImports:
//    { }
//    { ImportsList }
//    { ImportsList , }
namedImports
: OpenBrace CloseBrace
| OpenBrace importsList Comma? CloseBrace
;

// FromClause:
//    fromModuleSpecifier
fromClause
: From moduleSpecifier
;

// ImportsList:
// ImportSpecifier
// ImportsList , ImportSpecifier
importsList
: importSpecifier (Comma importSpecifier)*
;

// ImportSpecifier:
//    ImportedBinding
//    IdentifierName as ImportedBinding
importSpecifier
: importedBinding
| identifierName As importedBinding
;

// ModuleSpecifier:
//    StringLiteral
moduleSpecifier
: StringLiteral
;

// ImportedBinding:
//    BindingIdentifier[~Yield, ~Await]
importedBinding
: bindingIdentifier
;

// ExportDeclaration:
//    export * FromClause ;
//    export ExportClause FromClause ;
//    export ExportClause ;
//    export VariableStatement[~Yield, ~Await]
//    export Declaration[~Yield, ~Await]
//    export default HoistableDeclaration[~Yield, ~Await, +Default]
//    export default ClassDeclaration[~Yield, ~Await, +Default]
//    export default[lookahead ∉ { function, async [no LineTerminator here] function, class }] AssignmentExpression[+In, ~Yield, ~Await] ;
exportDeclaration
: Export Multiply fromClause eos
| Export exportClause fromClause eos
| Export exportClause eos
| Export variableStatement
| Export declaration
| Export Default hoistableDeclaration_Default
| Export Default classDeclaration
| Export Default assignmentExpression_In eos
;

// ExportClause:
//    { }
//    { ExportsList }
//    { ExportsList , }
exportClause
: OpenBrace CloseBrace
| OpenBrace exportsList Comma? CloseBrace
;

// ExportsList:
//    ExportSpecifier
//    ExportsList , ExportSpecifier
exportsList
: exportSpecifier (Comma exportSpecifier)*
;

// ExportSpecifier:
//    IdentifierName
//    IdentifierName as IdentifierName
exportSpecifier
: identifierName
| identifierName As identifierName
;

