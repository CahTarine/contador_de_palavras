
let frase = prompt('Digite aqui sua frase: ');
if (isNaN(frase)){
    let remove_num = frase.replace(/\d+/g, " ");
    let remove_espaco = remove_num.trim()
    let array = remove_espaco.split(" ");
    let ver_array = array.length;

    if (ver_array > 1){
        alert(`A frase tem ${ver_array} palavras!`);
    } else {
        alert (`Voce inseriu apenas ${ver_array} palavra!`);
    }
    
} else {
    alert('Por favor, insira uma frase!');
}




