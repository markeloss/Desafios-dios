let nome = "Erique"
let experiencia = 1.002

if ( experiencia < 1.000) {
    experiencia = "Ferro"
} else if ( experiencia > 1.001 && experiencia < 2.000){
    experiencia = "Bronze"
}else if ( experiencia > 2.001 && experiencia < 5.000){
    experiencia = "Prata"
}else if ( experiencia > 5.001 && experiencia < 7.000){
    experiencia = "Ouro"
}else if ( experiencia > 7.001 && experiencia < 8.000){
    experiencia = "Platina"
}else if ( experiencia > 8.001 && experiencia < 9.000){
    experiencia = "Ascendente"
}else if ( experiencia > 9.001 && experiencia < 10.000){
    experiencia = "Imortal"
}else if ( experiencia >= 10.001){
    experiencia = "Radiante"
}

console.log(`O Herói de nome ${nome} está no nível de ${experiencia}`);