

		function validarDatos()
		{

			if(document.frmPrueba.numerodefactura.value.length==0)
			{
				alert("No a Ingresado el Numero de Factura")
				document.frmPrueba.numerodefactura.focus();
				//Enfoque("numerodefactura");
				return false;
			}

			if(document.frmPrueba.montoconsumido.value.length==0)
			{
				alert("No a Ingresado el Monto Consumido")
				document.frmPrueba.montoconsumido.focus();
				//Enfoque("montoconsumido");
				return false;
			}	

		}

		function Enfoque(idElemento)
		{
		 	document.getElementById(idElemento).focus();
		}





