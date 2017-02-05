// Preencha esta expressão regular
var number = /^((-|\+){0,1}\d+\.?\d*(e|e(-|\+)){0,1}\d*)$|^\.\d+$/i;

// Tests:
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
 "1e+12"].forEach(function(s) {
  if (!number.test(s))
	console.log("Falhou em achar '" + s + "'");
});
["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
 "."].forEach(function(s) {
  if (number.test(s))
	console.log("Aceitou erroneamente '" + s + "'");
});