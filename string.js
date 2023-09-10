//Palindromo

//valores a mantener
const regex = /[^a-zA-ZñÑáéíóúÁÉÍÓÚüÜ0-9]/g;

//quita las tildes
function quitarTildes(text) {
  const tildes = {á: 'a',é: 'e',í: 'i',ó: 'o',ú: 'u',
    Á: 'A',É: 'E',Í: 'I',Ó: 'O',Ú: 'U',ü: 'u',Ü: 'U',
    ñ: 'n',Ñ: 'N'};
  return text.replace(/[áéíóúÁÉÍÓÚüÜñÑ]/g, function(match) {
                      return tildes[match];});
}

//evalua si es palindromo o no
function palindrom(text){
  org = text
  text = text.replace(regex, '');
  text = quitarTildes(text);
  text = text.toLowerCase();
  const invarr = text.split('');
  invarr.reverse()
  inv = invarr.join('');
  (text === inv) ? alert(`Su frase: "${org}" \nES Palindroma`) : alert(`Su frase: "${org}" \nNO es Palindroma`);
}

//Mostar en pantalla

alert("Hola, este programa le indica si su frase o palabra es palindroma");

// pregunta y valida datos
x=true;
while(x==true){
  let text = prompt("Digite el texto");
  (text != '' )
  ? (palindrom(text),x=false) 
  : alert("Porfavor digite un valor valido");
}