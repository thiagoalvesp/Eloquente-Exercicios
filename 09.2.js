var text = "'I'm the cook,' he said, 'it's my job.'";
// Altere esta chamada
console.log(text.replace(/(\s|^)'|(\W|^)'(\W|$)/g, function(str){
            return str.replace("\'","\"");
}));
// → "I'm the cook," he said, "it's my job."


