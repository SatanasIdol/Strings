//Palindromo
const regex = /[^a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]/g;

function quitarTildes(text) {
  const tildes = {á: 'a',é: 'e',í: 'i',ó: 'o',ú: 'u',
    Á: 'A',É: 'E',Í: 'I',Ó: 'O',Ú: 'U',ü: 'u',Ü: 'U',
    ñ: 'n',Ñ: 'N'};
  return text.replace(/[áéíóúÁÉÍÓÚüÜñÑ]/g, function(match) {
    return tildes[match];
  });
}

function palindrom(text){
  text = text.replace(regex, '');
  text = quitarTildes(text);
  text = text.toLowerCase();
  const invarr = text.split('');
  invarr.reverse()
  inv = invarr.join('');
  (text == inv) ? alert("Su frase es Palindroma") : alert("Su frase NO es Palindroma");
}

//Mostar en pantalla

alert("Hola, este programa le indica si su frase o palabra es palindroma");

x=true;
while(x==true){
  let text = prompt("Digite el texto");
  (text != null) 
  ? (palindrom(text),x=false) 
  : alert("Porfavor digite un valor valido");
}
