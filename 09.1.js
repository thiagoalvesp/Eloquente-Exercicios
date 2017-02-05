/* 

/abc/	Sequência de caracteres
/[abc]/	Qualquer caractere do conjunto
/[^abc]/	Qualquer caractere que não seja do conjunto
/[0-9]/	Qualquer caractere no intervalo de caracteres
/x+/	Uma ou mais ocorrências do padrão
/x+?/	Uma ou mais ocorrências do padrão, não obrigatório
/x* /	Zero ou mais ocorrências
/x?/	Zero ou uma ocorrência
/x{2,4}/	Entre duas e quatro ocorrências
/(abc)+/	Agrupamento
/a|b|c/	Padrões alternativos
/\d/	Caracteres dígitos
/\w/	Caracteres alfanuméricos ("caracteres palavra")
/\s/	caracteres espaço em branco
/./	Todos caracteres exceto quebras de linha
/\b/	Limite de palavra
/^/	Início da entrada
/$/	Final da Entrada

*/

// Fill in the regular expressions

//"car" e "cat"
verify(/(car)|(cat)/,
	   ["my car", "bad cats"],
	   ["camper", "high art"]);

//"pop" e "prop"
verify(/pr?op/,
	   ["pop culture", "mad props"],
	   ["plop"]);

//"ferret", "ferry", e "ferrari"
verify(/ferr([^u])/,
	   ["ferret", "ferry", "ferrari"],
	   ["ferrum", "transfer A"]);

//Qualquer palavra terminando em "ious"
verify(/\w+ious\b/,
	   ["how delicious", "spacious room"],
	   ["ruinous", "consciousness"]);

//Um espaço em branco seguido por um ponto, vírgula, dois-pontos, ou ponto-e-vírgula
verify(/\s(\.|,|:|;)/,
	   ["bad punctuation ."],
	   ["escape the dot"]);

//Uma palavra com mais de seis letras
verify(/\w{7,}/,
	   ["hottentottententen"],
	   ["no", "hotten totten tenten"]);

//Uma palavra sem a letra "e" |((\w+?e\w+?)\s+?(\w+?[^e]\w+?))
verify(/(\b[a-df-z]+?\b)/,
	   ["red platypus", "wobbling nest"],
	   ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
  // Ignore unfinished tests
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
	if (!regexp.test(s))
	  console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
	if (regexp.test(s))
	  console.log("Unexpected match for '" + s + "'");
  });
}