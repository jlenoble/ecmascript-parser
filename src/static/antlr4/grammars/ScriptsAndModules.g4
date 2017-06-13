/* Source: ECMAScript® 2018 Language Specification - Annex A-5 */

// A.5 Scripts and Modules
grammar ScriptsAndModules;

// Script:
//    ScriptBody[opt]
script
: scriptBody?
;

// ScriptBody:
//    StatementList[~Yield, ~Await, ~Return]
scriptBody
: statementList
;
