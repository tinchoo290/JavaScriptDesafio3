// ENCUENTRA SATISFACCION EN UN AULA DE UNA UNIVERSIDAD CON 5 ALUMNOS // 
let votoA = 0;
let votoB = 0;
let votoC = 0;

for ( let i = 1; i <= 5 ; i = i + 1 ){
    let voto = prompt ("INGRESE SU GRADO DE SATISFACCION DEL 1 AL 5");


    if ( voto >= 4){
        votoA = votoA +1;
        console.log(`LOS VOTOS BUENOS`);
        
    }
    else if( voto == 3){
        votoB = votoB +1;
        console.log(`LOS VOTOS REGULARES`);

    }
    else{
        votoC = votoC +1;
        console.log(`LOS VOTOS MALOS`);
    }
}

if ( votoA >= votoB && votoA > votoC) {
    console.log( "ESTADO BUENO DE ANIMO CON " + votoA + " votos");
}
else if ( votoB > votoC && votoB > votoA){
    console.log( "ESTADO REGULAR DE ANIMO CON " + votoB + " votos");
}
else {
    console.log("ESTADO MALO DE ANIMO CON " + votoC + " votos");
}
