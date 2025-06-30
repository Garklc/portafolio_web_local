// Portafolio de Alejandro - JavaScript con jQuery
$(document).ready(function() {
    
    // Navegación suave mejorada con jQuery
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });
    
    // Efecto de aparición gradual para las tarjetas de habilidades
    function animateSkillCards() {
        $('.card').each(function(index) {
            var card = $(this);
            setTimeout(function() {
                card.addClass('fade-in');
            }, index * 200);
        });
    }
    
    // Detectar cuando la sección de habilidades está visible
    $(window).scroll(function() {
        var habilidadesSection = $('#habilidades');
        var windowTop = $(window).scrollTop();
        var windowBottom = windowTop + $(window).height();
        var sectionTop = habilidadesSection.offset().top;
        
        if (windowBottom > sectionTop + 100) {
            animateSkillCards();
        }
    });
    
    // Validación y manejo del formulario de contacto
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        var nombre = $('#nombre').val().trim();
        var email = $('#email').val().trim();
        var asunto = $('#asunto').val().trim();
        var mensaje = $('#mensaje').val().trim();
        
        // Validación básica
        if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
            showAlert('Por favor, completa todos los campos.', 'warning');
            return;
        }
        
        // Validación de email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showAlert('Por favor, ingresa un email válido.', 'warning');
            return;
        }
        
        // Simular envío del formulario
        var submitBtn = $(this).find('button[type="submit"]');
        var originalText = submitBtn.text();
        
        submitBtn.prop('disabled', true).text('Enviando...');
        
        // Simular delay de envío
        setTimeout(function() {
            showAlert('¡Mensaje enviado exitosamente! Te contactaré pronto.', 'success');
            $('#contactForm')[0].reset();
            submitBtn.prop('disabled', false).text(originalText);
        }, 2000);
    });
    
    // Función para mostrar alertas
    function showAlert(message, type) {
        var alertClass = type === 'success' ? 'alert-success' : 'alert-warning';
        var alertHtml = `
            <div class="alert ${alertClass} alert-dismissible fade show mt-3" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
        
        // Remover alertas existentes
        $('.alert').remove();
        
        // Agregar nueva alerta
        $('#contactForm').after(alertHtml);
        
        // Auto-remover después de 5 segundos
        setTimeout(function() {
            $('.alert').fadeOut();
        }, 5000);
    }
    
    // Efecto parallax simple para la sección de inicio
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        var parallax = $('#inicio');
        var speed = scrolled * 0.5;
        
        parallax.css('background-position', 'center ' + speed + 'px');
    });
    
    // Contador animado para las habilidades (simulado)
    function animateCounters() {
        $('.skill-progress').each(function() {
            var $this = $(this);
            var countTo = $this.attr('data-count');
            
            $({ countNum: 0 }).animate({
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum) + '%');
                },
                complete: function() {
                    $this.text(this.countNum + '%');
                }
            });
        });
    }
    
    // Efecto hover mejorado para las tarjetas
    $('.card').hover(
        function() {
            $(this).addClass('shadow-lg').removeClass('shadow');
        },
        function() {
            $(this).addClass('shadow').removeClass('shadow-lg');
        }
    );
    
    // Cambiar el color del navbar al hacer scroll
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var navbar = $('.navbar');
        
        if (scroll >= 50) {
            navbar.addClass('navbar-scrolled');
        } else {
            navbar.removeClass('navbar-scrolled');
        }
    });
    
    // Cerrar el menú móvil al hacer clic en un enlace
    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
    
    // Efecto de escritura para el título principal
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.text('');
        
        function type() {
            if (i < text.length) {
                element.text(element.text() + text.charAt(i));
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // Inicializar efecto de escritura después de un delay
    setTimeout(function() {
        typeWriter($('#inicio h1'), 'Hola, soy Alejandro.', 150);
    }, 1000);
    
    // Agregar clase de animación CSS
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            .fade-in {
                animation: fadeInUp 0.6s ease-out forwards;
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .navbar-scrolled {
                background-color: rgba(0, 31, 63, 0.95) !important;
                backdrop-filter: blur(10px);
            }
            
            .skill-progress {
                font-weight: bold;
                color: #001f3f;
            }
        `)
        .appendTo('head');
    
    console.log('Portafolio de Alejandro cargado correctamente con jQuery!');
});

