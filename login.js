function mostrarMenu() {
    var opcion = prompt("Selecciona una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir");
  
    opcion = parseInt(opcion);
  
    switch (opcion) {
      case 1:
        sumar();
        break;
      case 2:
        restar();
        break;
      case 3:
        multiplicar();
        break;
      case 4:
        dividir();
        break;
      case 5:
        alert("¡Hasta luego!");
        break;
      default:
        alert("Opción no válida. Inténtalo de nuevo.");
        mostrarMenu(); 
    }
  }
  
  function sumar() {
    var num1 = prompt("Ingresa el primer número:");
    var num2 = prompt("Ingresa el segundo número:");
  
    var resultado = parseInt(num1) + parseInt(num2);
  
    alert("La suma es: " + resultado);
  
    mostrarMenu(); 
  }
  
  function restar() {
    var num1 = prompt("Ingresa el primer número:");
    var num2 = prompt("Ingresa el segundo número:");
  
    var resultado = parseInt(num1) - parseInt(num2);
  
    alert("La resta es: " + resultado);
  
    mostrarMenu();
  }
  
  function multiplicar() {
    var num1 = prompt("Ingresa el primer número:");
    var num2 = prompt("Ingresa el segundo número:");
  
    var resultado = parseInt(num1) * parseInt(num2);
  
    alert("La multiplicación es: " + resultado);
  
    mostrarMenu();
  }
  
  function dividir() {
    var num1 = prompt("Ingresa el numerador:");
    var num2 = prompt("Ingresa el denominador:");
  
    if (parseInt(num2) !== 0) {
      var resultado = parseInt(num1) / parseInt(num2);
      alert("La división es: " + resultado);
    } else {
      alert("Error: No puedes dividir por cero.");
    }
  
    mostrarMenu();
  }
  
  mostrarMenu();
  