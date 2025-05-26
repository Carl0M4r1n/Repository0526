//validar nombre, debe contener solo letras y no ser vacio
//validar correo: Debe tener solo un @ y terminar en .cl

function validar(nombre,email){
    nombre = vNombre,
    vNombre = LongitudNombre,
    email = vEmail
    vEmail = ValidacionEmail


    if(vNombre == "exito")
        if (vEmail == "exito")
            push[nombre , email]
        else
            console.log ("correo no es correcto")
    else
        console.log("nombre no es correcto")
}

function LongitudNombre(){
    if (vNombre < 1)
        return "error"
        console.log("Nombre nesita letras")
    elif (vNombre >= 1)
        return "exito"
}

function ValidacionEmail(){
    if ("@" != 1)
        return "error"
        console.log("solo puede haber 1 @")
    elif (vNombre >= 1)
        return "exito"
}

function eliminar(nombre,index){
    if (index != indice)
        return nombre
    else
        return ""
}