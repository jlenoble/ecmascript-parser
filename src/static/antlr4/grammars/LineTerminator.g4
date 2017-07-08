/* Source: ECMAScript® 2018 Language Specification - Annex A-1 */

lexer grammar LineTerminator;

// LineTerminator::
//     <LF>     U+000A    LINE FEED             &NewLine;
//     <CR>     U+000D    CARRIAGE RETURN
//     <LS>     U+2028    LINE SEPARATOR
//     <PS>     U+2029    PARAGRAPH SEPARATOR
LineTerminator
: [\n\r\u2028\u2029]
;

// LineTerminatorSequence::
//     <LF>
//     <CR>[lookahead ≠ <LF>]
//     <LS>
//     <PS>
//     <CR><LF>
fragment
LineTerminatorSequence
: ('\r\n'|[\n\r\u2028\u2029])
;

