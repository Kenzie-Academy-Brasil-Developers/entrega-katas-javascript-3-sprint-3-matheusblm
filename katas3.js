const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
function showResults(r){
   let novo = document.createElement('div');
   let main = document.querySelector('main')
   novo.append(r)
   main.appendChild(novo)
}
function kata1() {
    resultado = []
    for(n=1; n <=25; n++)
    resultado.push(n)
    showResults(resultado)
    return resultado
    
}

function kata2() {
    resultado = []
    for(n=25;n >0; n--)
    resultado.push(n)
    showResults(resultado)
    return resultado
}

function kata3() {
    resultado = []
    for(n = -1; n >=-25; n--)
    resultado.push(n)
    showResults(resultado)
    return resultado
}

function kata4() {
    resultado = []
    for(n = -25; n <= -1; n++)
    resultado.push(n)
    showResults(resultado)
    return resultado
}

function kata5() {
    resultado = []
    for(n=-25; n< 25; n++)
    if((n % 2) != 0){
    resultado.push(n)
    }
    showResults(resultado)
    return resultado
}

function kata6() {
    resultado = []
    for(n = 3; n <= 100; n++)
    if((n%3) == 0){
    resultado.push(n)
    }
    showResults(resultado)
    return resultado
}

function kata7() {
    resultado = []
    for(n = 7; n <= 100; n++)
    if((n%7) == 0){
    resultado.push(n)
    }
    showResults(resultado)
    return resultado
}

function kata8() {
    resultado = []
    for(n = 100; n >= 1; n--)
    if((n%3) == 0 || (n%7) == 0){
    resultado.push(n)
    }
    showResults(resultado)
    return resultado
}

function kata9() {
    resultado = []
    for(n = 5; n <= 100; n++)
    if((n%5) == 0 && (n%2) != 0){
    resultado.push(n)
    }
    showResults(resultado)
    return resultado
}

function kata10() {
    showResults(sampleArray)
    return sampleArray
}

function kata11() {
    resultado = []
    for(n = 0; n <= sampleArray.length; n++)
    if(sampleArray[n] % 2 == 0 ){
    resultado.push(sampleArray[n])
    }
    showResults(resultado)
    return resultado
}

function kata12() {
    resultado = []
    for(n = 0; n < sampleArray.length; n++)
    if(sampleArray[n] % 2 !== 0 ){
    resultado.push(sampleArray[n])
    }
    showResults(resultado)
    return resultado
}

function kata13() {
    resultado = []
    for(n = 0; n < sampleArray.length; n++)
    if(sampleArray[n] %8 == 0 ){
    resultado.push(sampleArray[n])
    }
    showResults(resultado)
    return resultado
}

function kata14() {
    resultado = []
    for(n=0; n< sampleArray.length; n ++)
    resultado.push(sampleArray[n]**2)
    showResults(resultado)
    return resultado
}

function kata15() {
    resultado = 0
    for(n = 0; n <= 20; n++)
    resultado += n
    showResults(resultado)
    return resultado
}

function kata16() {
    resultado = 0
    for(n=0; n<sampleArray.length; n++)
    resultado += sampleArray[n]
    showResults(resultado)
    return resultado
}

function kata17() {
    resultado = sampleArray[0]
    for(n=0; n<sampleArray.length; n++)
    if(sampleArray[n] < resultado){
    resultado = sampleArray[n]
    }
    showResults(resultado)
    return resultado
}
 
function kata18() {
    resultado = sampleArray[0]
    for(n=0; n<sampleArray.length; n++)
    if(sampleArray[n] > resultado){
    resultado = sampleArray[n]
    }
    showResults(resultado)
    return resultado
}



function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
