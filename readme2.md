 <!-- <select name="producto" id="producto">
    <option value="">Seleccione opcion</option>
    <option value="manzana">manzana</option>
    <option value="banana">banana</option>
    <option value="pera">pera</option>
  </select>
  <script>
    let productoElegido = ''
    document.getElementById('producto').addEventListener('change', function(event) {
      productoElegido = event.target.value
      console.log(productoElegido);
    })
  </script> -->


  1. Crear una nueva ruta donde me pueda subscribir a la pagina

2. Crear un formulario de subscripcion que contenga 

	2.1 Campo de mail, debe validar que sea un mail valido, de lo contrario mostrar la leyenda "Ingrese un mail valido"
	2.2 Campo de nombre, no debe contener caracteres especiales ni numeros, de lo contrario mostrar la leyenda "Ingrese un nombre sin caracteres especiales ni numeros"
	2.3 Campo de apellido/s, no debe contener caracteres especiales ni numeros "Ingrese un apellido sin caracteres especiales ni numeros"
	2.4 Checkbox para recibir o no mails en mi casilla
	2.5 Select con el tipo de interes que tengo en el sitio. Ej: 
		cultivador amateur
		biologo
		investigador
		docente
		estudiante

	los campos 1,2,3 son requeridos, si el usuario no ingresa nada debe mostrar el mensaje "Este campo esta requerido"
	todos los campos invalidos deben mostrar su borde en rojo
	
	2.6 Tener un boton de "Enviar" que solamente debe estar habilitado si el formulario es valido.
	2.7 Una vez que el formulario sea valido y el usuario haga click en "Enviar" debemos imprimir por consola un objeto con los campos y los valores. Ej:
		{
			nombre: 'Arturo',
			apellido: 'Garcia',
			mail: 'some@mail.com'
			notificar: false,
			interes: 'cultivador amateur'
		}