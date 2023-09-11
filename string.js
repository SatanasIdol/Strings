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

// resetea todo el texto
function resetText(text){
  text = text.replace(regex, '');
  text = quitarTildes(text);
  return text.toLowerCase();
}

//evalua si es palindromo o no
function palindrom(text){
  let textR = resetText(text)
  const invarr = textR.split('');
  invarr.reverse();
  (textR === invarr.join('')) ? alert(`Su texto: "${text}" \nES Palindroma`) : alert(`Su texto: "${text}" \nNO es Palindroma`);
}

//Mostar en pantalla
alert("Hola, este programa le indica si su frase o palabra es palindroma");

// pregunta y valida datos
x=true;
while(x==true){
  let text = prompt("Digite el texto");
  (text != '')
  ? (palindrom(text),x=false) 
  : alert("Porfavor digite un valor valido");
}

//Anagrama

//Compara si dos textos son anagramas
function anagramWord(text1,text2){
  let text1R = resetText(text1);
  let text2R = resetText(text2);
  const arr1 = text1R.split('');
  const arr2 = text2R.split('');
  arr1.sort();
  arr2.sort();
  (arr1.join('') == arr2.join('')) ? alert(`Sus textos: "${text1}" y "${text2}" \nSON Anagramas`) : alert(`Sus textos: "${text1}" y "${text2}" \nNO SON Anagramas`);
}

//Evalua si en un texto hay anagramas
function encontrarAnagramas(texto) {
  function generarAnagramas(prefijo, restante) {
    if (restante.length === 0) {
      anagramas.push(prefijo);
      return;
    }

    for (let i = 0; i < restante.length; i++) {
      const caracter = restante[i];
      const nuevoRestante = restante.slice(0, i) + restante.slice(i + 1);
      generarAnagramas(prefijo + caracter, nuevoRestante);
    }
  }

  const anagramas = [];
  generarAnagramas('', texto);
  return anagramas;
}

// const texto = "abc";
// const anagramasEncontrados = encontrarAnagramas(texto);
// console.log(anagramasEncontrados)

// pregunta y valida datos
x=true;
while(x==true){
  let text1 = prompt("Digite el primer texto");
  let text2 = prompt("Digite el segundo texto");
  (text1 != '' && text2 != '')
  ? (anagramWord(text1,text2),x=false)
  : alert("Porfavor digite un valor valido");
}

x=true;
while(x==true){
  let text = prompt("Digite el texto para encontrar todos sus posibles anagramas");
  (text != '')
  ? ("Todos los anagramas posibles son: ",console.log(encontrarAnagramas(text)),x=false)
  : alert("Porfavor digite un valor valido");
}
