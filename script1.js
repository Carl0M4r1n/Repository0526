//validar nombre, debe contener solo letras y no ser vacio
//validar correo: Debe tener solo un @ y terminar en .cl

let cuentas = []
function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre")
    let eEmail = document.getElementById("email")
    let vEmail = eEmail.value
    let eErrorEmail = document.getElementById("errorEmail")
    let fNombre = LongitudNombre(eNombre,vNombre,eErrorNombre)
    let fEmail = validarE(eEmail,vEmail,eErrorEmail)
    if(fNombre == "exito" && fEmail == true){
        alert("Cuenta creada")
        let span = {
            nombre:vNombre,
            email:vEmail
        }
        cuentas.push(span)
        console.log(cuentas)
        eNombre.value = ""
        eEmail.value = ""
        cargarDatos()
    }
}

function LongitudNombre(elemento,valor,eError){
    if(valor.length < 1){
        console.log("Nombre no puede estar vacio")
        alert("debes de ingresar tu nombre")
        eError.innertext = "debes de ingresar tu nombre"
        elemento.style.color = "black"
        return "falla"
    }else{
        return "exito"
    }
}

function validarE() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();
    const errorEmail = document.getElementById("errorEmail");
    errorEmail.textContent = "";
    const regexCl = /^[^@\s]+@[^@\s]+\.(cl)$/i;
    if (!regexCl.test(email)) {
        errorEmail.textContent = "El correo debe de contener @ y terminar en .cl";
        emailInput.focus();
        return false;
    };
    return true;
}

function eliminar(indice){
    cuentas = cuentas.filter((span,index)=>{
        if (index != indice){
            return span
        }
    })
        if(confirm("¿Estás seguro de que deseas eliminar este elemento?"))
    cargarDatos();
    console.log(cuentas)
}

function cargarDatos(){
    console.log("cargando datos")
    let mapCuentas = cuentas.map((span,index)=>{
        return "<tr><td>"+span.nombre+
                "</td><td>"+span.email+
                "</td><td><button type='button' value='"+index+"' onclick='eliminar("+index+")'>Eliminar</button>"+
                "<button onclick='actualizarFormulario("+index+")'>Actualizar</button></td></tr>"
    })
    let cuerpoTabla = document.getElementById("cuerpoTabla")
    let strcuerpoTabla = mapCuentas.join("")
    cuerpoTabla.innerHTML = strcuerpoTabla 
    console.log(mapCuentas)
}
function actualizarFormulario(indice){
    let eNombre = document.getElementById("nombre1")
    let eEmail = document.getElementById("email1")
    let cuenta = cuentas.filter((span,index)=>{
        if(index == indice){
            return span
        }
    })
    console.log(cuenta)
    eNombre.value = cuentas[0].nombre
    eEmail.value = cuentas[0].email
    let btnActualizar = document.getElementById("btnActualizar")
    btnActualizar.value = indice
}
function actualizar(){
    let eNombre = document.getElementById("nombre1")
    let vNombre = eNombre.value
    let eEmail = document.getElementById("email1")
    let vEmail = eEmail.value
    let btnActualizar = document.getElementById("btnActualizar")
    let indice = btnActualizar.value
    cuentas = cuentas.map((span,index)=>{
        if(index == indice){
            return {
                nombre:vNombre,
                email:vEmail
            }
        }else{
            return span
        }
    })
    cargarDatos()
}