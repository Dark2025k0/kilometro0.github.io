document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const messageDiv = document.getElementById('form-message');
    
    // Simular envío (reemplazar con AJAX/Fetch si hay backend)
    setTimeout(() => {
        messageDiv.textContent = '✔️ Mensaje enviado. ¡Gracias por contactarnos!';
        messageDiv.className = 'form-message success';
        form.reset();
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }, 1000);
    
    // Validación adicional (opcional)
    const email = formData.get('email');
    if (!email.includes('@')) {
        messageDiv.textContent = '❌ Por favor, ingresa un email válido.';
        messageDiv.className = 'form-message error';
        return;
    }
});
