

//se crea valor de precio a nivel global.
let precio = 0 
let cantidad = 0
let disco = 0
let envio = 0
let iva = 1.21
let precioTotal = 0

//Se crea la clase y su elemento constructor. 
class Carteles{
        constructor(disco, precio, cantidad) {
                this.disco = disco,
                this.precio = precio,
                this.cantidad = cantidad
    }
}
//DECLARACION DE FUNCIONES MEDIANTE FUNCIONES TIPO ARROW
const generarIva = () => {
         precio = precio * iva;
}

    const sumarTotal = () => {    //CALCULAR LA SUMA TOTAL ENTRE IVA, ENVIO Y CANTIDAD DE discoS.
        precio = precio * cantidad;
}

    const costoEnvio = () => {       //CALCULAR DATOS DE ENVIO
        console.log(precio, "es el precio");
        if(precio < 30000) {
            console.log("ingresamos para agregar el valor de envio de $750");
            console.log(precio, "es el precio de disco despues del envio");
            envio = envio + 4000

            precio = envio + precio
            console.log(envio, "es el precio del disco despues del envio");
            console.log(envio, "es el precio del envio");
        }
}
    const pedido = () => {  //INGRESO DE DISCOS ENUMERANDO CADA UNO E INGRESANDOLO MEDIANTE PARSEO.

        while (disco <= 0 || disco < 4) {
                    disco = parseInt(prompt('BIENVENIDO A SODA STEREO SHOP\n Seleccione el número del disco que desea comprar: \n 1: Soda Stereo 1984 - $47600 \n 2: Nada Personal 1985 - $22000 \n 3: Signos 1986 - $85220 \n 4: Ruido Blanco 1987 - $55500 \n 5: Doble Vida 1988 - $74000 \n 6: Languis 1989 - $35600 \n 7: Cancion Animal 1990 - $53320 \n 8: Rex Mix 1991 - $62000 \n 9: Dynamo 1992 - $85220 \n 10: Zona de Promesas 1993 - $55400\n 11:Sueño Stereo 1995 - $73000 \n 12: Confort y Musica Para Volar 1996 - $75600 \n 13:El ultimo Concierto lado A 1997 - $72000 \n 14: El ultimo Concierto lado B 1997 - $72000 \n 16: Me Veras Volver #1 2008 - $85520 \n 17: Me Veras Volver #2 2008 - $85520 \n 17: Sep7imo Dia 2017 - $74000 \n PRECIOS SIN IVA INCLUIDO \n COSTO DE ENVIO $4000, COMPRA MAYOR A $30000, ENVIO GRATUITO '))
            switch (disco) {
                case 1:
                        disco = "Soda Stereo 1984"; 
                        precio = 47600;
                    break;
                case 2:
                        disco = "Nada Personal 1985" ;
                        precio = 22000 ;
                    break;
                case 3:
                        disco = "Signos 1986" ;
                        precio = 85220 ;
                    break;
                case 4:
                        disco = "Ruido Blanco 1987" ;
                        precio = 55500 ;
                    break;
                case 5:
                        disco = "Doble Vida 1988" ;
                        precio = 74000 ;
                    break;
                case 6:
                        disco = "Languis 1989" ;
                        precio = 35600 ;
                    break;
                case 7:
                        disco = "Cancion Animal 1990"; 
                        precio = 55320;
                    break;
                case 8:
                        disco = "Rex Mix 1991" ;
                        precio = 62000 ;
                    break;
                case 9:
                        disco = "Dynamo 1992" ;
                        precio = 85220 ;
                    break;
                case 10:
                        disco = "Zona de Promesas 1993" ;
                        precio = 55400 ;
                    break;
                case 11:
                        disco = "Sueño Stereo 1995" ;
                        precio = 74000 ;
                    break;
                case 12:
                        disco = "Confort y Musica Para Volar 1996" ;
                        precio = 75600 ;
                    break;
                    case 13:
                        disco = "El ultimo Concierto lado A 1997"; 
                        precio = 72000;
                    break;
                case 14:
                        disco = "El ultimo Concierto lado B 1997" ;
                        precio = 72000 ;
                    break;
                case 15:
                        disco = "Me Veras Volver #1 2008" ;
                        precio = 82520 ;
                    break;
                case 16:
                        disco = "Me Veras Volver #2 2008" ;
                        precio = 82520 ;
                    break;
                case 17:
                        disco = "Sep7imo Dia 2017" ;
                        precio = 74000 ;
                    break;
        }
            while (cantidad <= 0) {
                cantidad = parseInt(prompt(`¿Cuantas unidades de ${disco} desea llevar?`))  //CANTIDAD DE PROD ELEGIDOS POR EL USUARIO
            }
            return new Carteles (disco, precio, cantidad)
        }
    }

console.log(precio, "precio antes e llamar a funciones");

const  pedir = pedido();


//LLAMADO DE FUNCIONES CREADAS.
sumarTotal();
costoEnvio();
generarIva();

console.log(precio, "precio luego de llamar a funciones");

//TICKET AL USUARIO.
alert(`Detalle de su compra:\n${disco}\nCantidad: ${cantidad}\nCosto de envio: $${envio}\nTotal: $${precio}`)

//Se crean nuevas nuevos elementos, en base a eso, se crea una variable ventas en donde decimos que venta1 y 2 van a ser el array de ventas y luego mediante el metodo map le modificamos el valor de precio, el cual nos lo muestra al final mediante 2 console.log. 
const venta1 = new Carteles(disco, precio, cantidad)
const venta2 = new Carteles(disco, precio, cantidad)

let ventas = [venta1, venta2]
console.log(ventas.map(ventaAModificar => ventaAModificar.precio))

//Recorrido del array. 
for(let ventaDisco of ventas){
    console.log(ventaDisco)
}

console.log(`Precio final : ${venta1.precio}`)
console.log(`Precio final : ${venta2.precio}`)
