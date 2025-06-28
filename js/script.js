// Servicio de correo electrónico
document.getElementById('email-service-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Obtener datos del formulario
  const nombre = this.elements[0].value;
  const servicioId = this.elements[1].value;
  const enviarPrueba = this.elements[2].checked;
  
  // Validación
  if (!nombre || !servicioId) {
    alert('Por favor complete todos los campos obligatorios (*)');
    return;
  }
  
  // Mostrar mensaje de confirmación
  const mensaje = `Configuración guardada para:\n\nNombre: ${nombre}\nID de Servicio: ${servicioId}`;
  alert(enviarPrueba ? `${mensaje}\n\nSe enviará un correo de prueba a kilometro0ec@gmail.com` : mensaje);
  
  // Simular envío de correo de prueba
  if (enviarPrueba) {
    setTimeout(() => {
      console.log("Correo de prueba enviado a kilometro0ec@gmail.com");
      // Aquí iría la conexión real con el servicio de correo
    }, 1500);
  }
  
  // Resetear formulario
  this.reset();
});

// Botón Cancelar
document.querySelector('#email-service-form .btn-outline').addEventListener('click', function() {
  if (confirm('¿Estás seguro de que deseas cancelar? Los cambios no guardados se perderán.')) {
    document.getElementById('email-service-form').reset();
  }
});

// Botón Desconectar
document.querySelector('#email-service-form button[type="button"]').addEventListener('click', function() {
  if (confirm('¿Estás seguro de que deseas desconectar la cuenta de Gmail?')) {
    alert('Cuenta desconectada correctamente');
    // Aquí iría el código para desconectar realmente la cuenta
  }
});
