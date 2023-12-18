// funcion globales
const existeElementoid = (array, idReferencia) => {
    let existe = array.some (elemento => elemento.id === idReferencia);
    return existe;
}

// seccion usuarios

let userID = 1;

let usuarios = [];

class Usuario {

    constructor ( nombre, apellido, mail){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.id = userID;

    }
}



const agregarUsuario = (usuario) => {
    usuarios.push(usuario);
    userID++
};

const mostrarUsuario = () => {};
    let nombresUsuarios = usuarios.map ( usuario =>  `ID: ${usuario.id} - Nombre: ${usuario.nombre}` );
    if(nombresUsuarios.lenght >  0) {
        alert(nombresUsuarios.join("\n"))}
        
        else {
            alert( "no hay usuario registrado");
        };
const eliminarUsuario = ( id ) => {
    let existe = usuarios.some( usuario => usuario.id === id )
    
    if (existe){
        usuarios = usuarios.filter(usuario => usuario.id == id );
    }
    else {
        alert ("No existe usuario con ese id")
    }

};



// Sección herramientas

// Seccion de menus

const meuUusario = () => {
    let estado = true ;

    while (estado)  {
        let opcion = parseInt(
            prompt(
                `
        Registrese o Inicie su sesion.
        
        1- Mostrar usuarios.  
        2- Agregar Un usuario.
        3- Eliminar un usuario.
        4- Volver.
        `

            )
        );
        switch (opcion){

            case 1:
                mostrarUsuario();
                break;
            
             case 2:
                agregarUsuario();
                let nombre = prompt ("Ingrese nombre usuario");
                let apellido = prompt ("Ingrese apellido");
                let mail = prompt ("ingrese el email");
                let usuario = new Usuario(nombre, apellido, mail);
                agregarUsuario(usuario);
                meuUusario();
                  
                break;
                    
            case 3:
                let idUsuario = parseInt (promt("ingrese el ID del usuario a eliminar"));
                eliminarUsuario(idUsuario);
                 break;

            case 4:
                estado = false;
                menuPrincipal();
                break;

            default:
                alert ("ingrese una opcion valida")

                break;    
        }
    }



}


let encendido = true;

const menuPrincipal = () => {

while ( encendido ){
    let opcion = parseInt(
        prompt(
        `
        BIENVENIDOS!!!! Al hogar de la ferreteira
        
        1- Login 
        2- Opcion de herramientas
        3- Salir
        `
        
        )
    )
switch( opcion){

    case 1:
        meuUusario();
    break;
    
    case 2: 
    //Opcion de herramientas 
    break;
    
    case 3: 
    // salir
        encendido = false;
        break

default:
    alert ("ingrese una opcion valida")
    break;

}
    
}

}

menuPrincipal(); 
