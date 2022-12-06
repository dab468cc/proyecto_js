// variables
// heroe
let tipoDeHeroe=''
let dañoBaseHeroe=0
let vidaBaseHeroe=0

// monstruo
let tipoDeMonstruo=''
let dañoBaseMonstruo=0
let vidaBaseMonstruo=0

// a) Genere 1 prompt y pregúntele al usuario: "¡Desea crear un mago, guerrero o tanque?". En el caso de que elija mago, la vida que se le asignará a vidaBase será de 225, en el caso de que elija guerrero 300 y tanque 450. Para danioBase: mago --> 150, guerrero ---> 80 y tank ---> 50.
function escogerHeroe(){
    heroe=prompt('¡Desea crear un mago, guerrero o tanque?¡')
   if(heroe=='mago'){
        tipoDeHeroe='mago'
        dañoBaseHeroe='150'
        vidaBaseHeroe='225'
        return
    }else if(heroe==='guerrero'){
        tipoDeHeroe='guerrero'
        dañoBaseHeroe='80'
        vidaBaseHeroe='300'
    }else if(heroe==='tanque'){
        tipoDeHeroe='tanque'
        dañoBaseHeroe='50'
        vidaBaseHeroe='450'
    }else{
        console.log('Dicho heroe aun no se une a la aventura.')
    }

}
escogerHeroe()
// Escoger Monstruo
function escogerMonstruo(){
    monstruo=prompt('Desea crear un gobling, orco o demonio?¡')
   if(monstruo==='goblin'){
        tipoDeMonstruo='goblin'
        dañoBaseMonstruo='60'
        vidaBaseMonstruo='180'
        return
    }else if(monstruo==='orco'){
        tipoDeMonstruo='orco'
        dañoBaseMonstruo='80'
        vidaBaseMonstruo='300'
    }else if(monstruo==='demonio'){
        tipoDeMonstruo='demonio'
        dañoBaseMonstruo='60'
        vidaBaseMonstruo='450'

    }else{
        console.log('Ese mosntruo aun no ha sido invocado.')
    }

}
escogerMonstruo()

function combate(a,b,c,d){
    for(let i=0;i<10;i++){
        a=(a-b)
        console.log('El '+tipoDeHeroe+' ha hecho '+dañoBaseHeroe+' puntos de daño al '+tipoDeMonstruo)
        c=(c-d)
        console.log('El '+tipoDeMonstruo+' ha hecho '+dañoBaseMonstruo+' puntos de daño al '+tipoDeHeroe)
        console.log('Al '+tipoDeHeroe+' le quedan '+c+' puntos de vida')
        console.log('Al '+tipoDeMonstruo+' le quedan '+a+' puntos de vida.')
        
        if(a<=0){
            console.log('El '+tipoDeHeroe+' ha derrodado al '+tipoDeMonstruo)
        }else if(c<=0){
            console.log('El '+tipoDeMonstruo+' ha derrotado al'+tipoDeHeroe)
        }else if(a===c&&i===2){
            console.log('!HA SIDO UN EMPATE¡')
        }
        else if(i===2&&(a!=0||c!=0)){
            console.log('La battalla ha terminado.¡')}
        if(i===2){
            if(c>a){
            console.log('El '+tipoDeHeroe+' tiene mas vida.!GANADOR¡')
            }else if(a>c){
            console.log('El '+tipoDeMonstruo+' tiene mas vida.!GANADOR¡')}}
        
        
        
        if(i===2||a<=0||c<=0){break;}
        
         }
}
combate(vidaBaseMonstruo,dañoBaseHeroe,vidaBaseHeroe,dañoBaseMonstruo)