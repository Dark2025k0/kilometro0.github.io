// Servicio de correo electrónico
document.getElementById('email-service-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Obtener datos del formulario
  const nombre = this.elements[0].value;
  const servicioId = this.elements[1].value;
  const enviarPrueba = this.elements[3].checked;
  
  // Validación básica
  if (!nombre || !servicioId) {
    alert('Por favor complete todos los campos obligatorios (*)');
    return;
  }
  
  // Mostrar mensaje de confirmación
  alert(`Configuración de correo guardada para ${nombre} (ID: ${servicioId}).\n${enviarPrueba ? 'Se enviará un correo de prueba.' : ''}`);
  
  // Aquí iría el código real para conectar con el servicio de correo
  // En producción, esto se conectaría a un backend seguro
  console.log('Datos para servicio de correo:', { nombre, servicioId, enviarPrueba });
  
  // Simular envío a backend
  setTimeout(() => {
    if (enviarPrueba) {
      console.log("Enviando correo de prueba...");
      // Aquí iría la llamada real al servicio de correo
    }
  }, 1000);
  
  this.reset();
});
