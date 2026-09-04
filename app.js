
const SERVICES_DATA = {
    maquillaje: [
        {
            name: "Boda",
            description: "El maquillaje de novia debe ser impecable, duradero y reflejar tu esencia en uno de los días más importantes de tu vida. Utilizo productos de alta calidad y técnicas avanzadas de blindaje para garantizar un acabado resistente a las lágrimas, el calor, saludos efusivos y el paso de las horas. Cada novia es única, por eso adaptamos el maquillaje según el estilo que deseas proyectar: Clásica y elegante: Un look atemporal con piel luminosa, ojos sutiles y labios en tonos neutros. Natural y fresca: Maquillaje ligero con acabados suaves que realzan tu belleza de manera delicada. Glam y sofisticada: Definición en los ojos, pestañas impactantes y labios en tonos intensos para un look deslumbrante. Artística y moderna: Estilos personalizados con detalles únicos para novias que buscan un toque diferente. Sea cual sea tu visión, nos aseguramos de que luzcas radiante, segura y fiel a tu estilo en este día especial." , 
            duration: "4h",
            price: "Consultar",
            images: [
                "img/dirgni_boda1.avif",
                "img/dirgni_boda2.avif",
                "img/dirgni_boda3.avif",
                "img/dirgni_boda4.avif",
                "img/dirgni_boda5.avif",
                "img/dirgni_boda6.avif",
                "img/dirgni_boda7.avif",
                "img/dirgni_boda8.avif",
                "img/dirgni_boda9.avif",
                "img/dirgni_boda10.avif",
            ]
        },
        {
            name: "Eventos Sociales",
            description: "Maquillaje para fiesta, graduaciones, quinceaños u otros. El maquillaje juega un papel fundamental en los momentos inolvidables, no solo realza la belleza, sino que también ayuda a crear recuerdos imborrables. Ya sea en las graduaciones, fiestas, quinceaños, revelaciones de sexo o aniversarios, creamos el look perfecto para ti. Además, ofrecemos servicio a domicilio para tu comodidad. En cada momento único, el maquillaje se convierte en un aliado para reflejar la alegría de tu momento. Luce impecable y segura.",
            duration: "2h",
            price: "Consultar",
            images: [
                "img/dirgni_eventos1.avif",
                "img/dirgni_eventos2.avif",
                "img/dirgni_eventos3.avif",
                "img/dirgni_eventos4.avif",
                "img/dirgni_eventos5.avif",
                "img/dirgni_eventos6.avif",
                "img/dirgni_eventos7.avif",
                "img/dirgni_eventos8.avif",
                "img/dirgni_eventos9.avif",
                "img/dirgni_eventos10.avif"
            ]
                
        },
        {
            name: "Maquillaje Sesiones Fotográficas",
            description: "El maquillaje para fotografía profesional tiene características y técnicas específicas que lo diferencian del maquillaje cotidiano o social. Comprender estas diferencias es crucial para lograr una apariencia perfecta en cámara y resaltar correctamente los rasgos faciales bajo diferentes tipos de iluminación y lentes. En fotografía, la cámara captura más detalles de la piel que el ojo humano. No todos los colores se ven igual en cámara que en persona. Diferencias según el tipo de foto: Fotografía en blanco y negro: Se enfatizan más los contrastes, por lo que el contorno y la estructura del rostro se trabaja distinto. Fotografía en HD o 4K: Captura detalles mínimos, por lo que el difuminado del maquillaje debe ser perfecto. Fotografía editorial o de moda: Permite mayor creatividad en colores y texturas, pero siempre cuidando la armonía con la iluminación y el concepto de la sesión. Saber adaptar el maquillaje a la fotografía profesional es esencial para garantizar resultados de alta calidad y evitar exceso de edición.",
            duration: "1h 30min",
            price: "Consultar",
            images: [
                "img/dirgni_maquillaje1.avif",
                "img/dirgni_maquillaje2.avif",
                "img/dirgni_maquillaje3.avif",
                "img/dirgni_maquillaje4.avif"
            ]
        },
        {
            name: "T.V, Fantasía y Special FX",
            description: "El maquillaje profesional para teatro, TV, efectos especiales y fantasía es una industria en constante evolución, impulsada por el cine, la moda, el entretenimiento y la publicidad. Estos sectores requieren productos altamente especializados que no se encuentran en el maquillaje social común. Estas técnicas tienen una gran demanda en el mercado, ya que su trabajo es esencial en la producción de contenido audiovisual, eventos y espectáculos.",
            duration: "3h",
            price: "Consultar",
            images: [
                "img/dirgni_fantasia1.avif",
                "img/dirgni_fantasia2.avif",
                "img/dirgni_fantasia3.avif",
                "img/dirgni_fantasia4.avif",
                "img/dirgni_fantasia5.avif",
                "img/dirgni_fantasia6.avif",
                "img/dirgni_fantasia7.avif",
                "img/dirgni_fantasia8.avif"
            ]
        }
    ],
    estilismo: [
        {
            name: "Color",
            description: "Nuestro servicio de peluquería incluye:​ Corte de cabello, diseñado para realzar tu estilo y personalidad, adaptándonos a tus facciones y preferencias. Desde cortes clásicos hasta tendencias modernas, te ayudamos a encontrar el look perfecto.​ Coloración profesional: Trabajamos con productos de alta calidad para lograr tonos vibrantes, naturales o fantasía, siempre cuidando la salud de tu cabello. Ofrecemos técnicas como balayage, babylights, iluminaciones, retoques de raíz y cambios de color completos. Nuestro objetivo es brindarte un resultado impecable, resaltando tu belleza con un cabello sano y radiante..",
            duration: "3h",
            price: "Consultar",
            image: "img/color.avif" 
        },
        {
            name: "Técnicas de iluminaciones",
            description: "Ofrecemos técnicas como balayage, babylights, iluminaciones, retoques de raíz y cambios de color completos. Nuestro objetivo es brindarte un resultado impecable, resaltando tu belleza con un cabello sano y radiante..",
            duration: "5h",
            price: "Consultar",
            image: "img/iluminacion.webp"
        },
        {
            name: "Alisados",
            description: "Nos especializamos en técnicas avanzadas que logran un cabello liso, manejable y sin frizz, sin comprometer su bienestar.Utilizamos productos veganos y libres de químicos agresivos, formulados con ingredientes naturales que hidratan, fortalecen y protegen la fibra capilar. Nuestro enfoque es mantener la belleza y salud de tu cabello, asegurando resultados duraderos sin dañarlo. Si buscas un alisado que respete la integridad de tu cabello y el medio ambiente, en Dirgni Studio encontrarás la combinación perfecta entre cuidado, sostenibilidad y belleza impecable.",
            duration: "4h",
            price: "Consultar",
            image: "img/alisados.avif"
        },
        {
            name: "Tratamientos",
            description: "Nos apasiona la salud y belleza de tu cabello, ofreciéndote cuidados especializados que lo fortalecen, restauran y revitalizan. Creemos en el poder de un cabello sano y radiante para ayudarte a proyectar tu mejor imagen al mundo..",
            duration: "2h",
            price: "Consultar",
            image: "img/tratamientos.avif"
        }
    ],
    // tratamientos: [
    //     {
    //         name: "################",
    //         description: "#################.",
    //         duration: "#",
    //         price: "Consultar",
    //         image: "#"
    //     },
    //     {
    //         name: "######",
    //         description: "#################.",
    //         duration: "#",
    //         price: "Consultar",
    //         image: "#"
    //     }
    // ],
    
    personal: [
        {
            name: "Marca Personal",
            description: "Te ayudo a proyectar una imagen auténtica y profesional a través de nuestro servicio de marca personal que incluye maquillaje, peinado y fotografía, proyectamos tu imagen con propósito con imágenes que reflejan tu personalidad y estilo, ideales para redes sociales, perfiles profesionales y material de branding. La imagen en lo profesional, es un diferenciador clave: una imagen estratégica y coherente abre puertas, genera confianza y deja una huella imborrable en cada interacción. Cada elección, desde el maquillaje y el peinado hasta la ropa y la postura, comunica algo sobre ti. La imagen no se trata de cumplir estándares, sino de expresar tu identidad con intención y propósito. Cuando te sientes bien con tu imagen, se nota. Y cuando proyectas seguridad, el mundo responde",
            duration: "4h",
            price: "Consultar",
            images: [
                "img/dirgni_asesoria0.avif"
            ]
        },
        {
            name: "Más que una imagen, una identidad",
            description: "Tu marca personal es el reflejo de quién eres, lo que representas y el mensaje que quieres comunicar. Una sesión de fotos no solo captura tu imagen, sino que te permite reconocerte, redescubrirte y empoderarte. En redes sociales y plataformas profesionales, las imágenes tienen un impacto inmediato. Un retrato bien hecho no solo te hace ver profesional, sino accesible, cercano y confiable, creando una conexión genuina con quienes te ven. Una sesión de marca personal bien planificada te ayuda a destacar en un mercado competitivo, transmitiendo credibilidad y diferenciándote de los demás. ​Más que un simple día de fotos, una sesión de marca personal es un paso hacia el crecimiento de tu imagen profesional y personal. Es un acto de confianza en ti mismo, en tu trayectoria y en lo que tienes para ofrecer al mundo.",
            duration: "4h",
            price: "Consultar",
            images: [
                "img/dirgni_asesoria1.avif",
                "img/dirgni_asesoria2.avif",
                "img/dirgni_asesoria3.avif",
                "img/dirgni_asesoria4.avif",
                "img/dirgni_asesoria5.avif",
                "img/dirgni_asesoria6.avif",
                "img/dirgni_asesoria7.avif",
                "img/dirgni_asesoria8.avif",
                "img/dirgni_asesoria9.avif",
                "img/dirgni_asesoria10.avif",
                "img/dirgni_asesoria11.avif",
                "img/dirgni_asesoria12.avif",
                "img/dirgni_asesoria13.avif",
                "img/dirgni_asesoria14.avif",
                "img/dirgni_asesoria15.avif",
                "img/dirgni_asesoria16.avif",
                "img/dirgni_asesoria17.avif"
            ]
        }
    ]
};


const TESTIMONIALS = [
    {
        name: "Evelyn Rodríguez Vargas",
        // location: "#",
        service: "Blow dry, Make-up services",
        text: "Mi experiencia fue muy positiva, agende la cita sin conocer a Ingrid, ya que soy de Guanacaste y tenía mi graduación en el TEC de Cartago, mis expectativas fueron superadas ya que me peino como quería verme y el proceso de maquillaje es muy exclusivo a lo que en otros lugares me he maquillado, por lo que me duró mucho y mi piel se veía súper hidratada por lo que en la sesión de fotos se evidenció el gran trabajo realizado. Me encantó y súper recomendada, es una profesional dulce y servicial"
    },
    {
        name: "Carmen",
        // location: "#",
        service: "Hairstyling",
        text: "Ingrid es una estilista de 10 estrellas, el trato, amabilidad, empatía y amor con que te atiende y hace su trabajo es único. Ingrid se esmera desde un inicio por darte toda la asesoría necesaria, te aclara las dudas con todo el profesionalismo y paciencia del mundo, y siempre busca la satisfacción de sus clientas. Si usted está buscando un lugar donde la chineen, la traten bien y le cuiden su cabello, no dude en ir con Ingrid, porque va a estar en las mejores manos. Además va a recibir una atención 100% personalizada,  por lo que no va a tener que esperar por qué le atiendan."
    },
    {
        name: "Fiorella Ramírez",
        // location: "#",
        service: "Hairstyling",
        text: "Era la primera vez que iba donde Ingrid, y me encantó el corte de cabello que me realizó,el servicio al cliente es excelente, es super atenta, se toma el tiempo de explicarte que va de acuerdo a tu rostro, los cortes y te pregunta siempre respetando tus decisiones como clienta, y siempre se toma el tiempo para realizar bien su trabajo y respeta los horarios del tiempo del cliente y eso me encantó, verdaderamente recomiendo ir con Ingrid ella es excelente estilista, además que utiliza productos que cuidan tu cabello ❤️✨"
        
        // name: "Valeria Monge",
        // location: "Tres Ríos",
        // service: "Ritual de Reconstrucción Molecular",
        // text: "Buscaba un estilista profesional en Cartago que entendiera exactamente lo que necesitaba para el cuidado de mi cabello maltratado. El tratamiento molecular que me aplicaron hizo milagros desde la primera sesión. Un estándar de servicio internacional sin salir de la provincia."
    }
];


window.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
    initNavbarScroll();
    initMobileMenu();
    initServiceTabs();
    initTestimonials();
    
    // Ejecutar animaciones e intervalos cuando el hilo principal esté libre
    if ("requestIdleCallback" in window) {
        requestIdleCallback(() => initScrollAnimations());
    } else {
        setTimeout(initScrollAnimations, 200);
    }
});

function initNavbarScroll() {
    const header = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    });
}


// Manejo del menú móvil previniendo el desplazamiento del cuerpo
function initMobileMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    const menuBtn = document.getElementById("mobile-menu-btn");
    const closeBtn = document.getElementById("close-menu-btn");
    const navLinks = mobileMenu.querySelectorAll("nav a");

    const openMenu = () => {
        mobileMenu.classList.remove("translate-x-full");
        document.body.classList.add("overflow-hidden");
    };

    const closeMenu = () => {
        mobileMenu.classList.add("translate-x-full");
        document.body.classList.remove("overflow-hidden");
    };

    menuBtn?.addEventListener("click", openMenu);
    closeBtn?.addEventListener("click", closeMenu);
    navLinks.forEach(link => link.addEventListener("click", closeMenu));
}


function initServiceTabs() {
    const categories = [
        { id: "maquillaje", label: "Maquillaje Profesional" },
        { id: "estilismo", label: "Estilismo" },
        { id: "personal", label: "Asesoría de Marca" }
    ];

    const tabsContainer = document.getElementById("tabs-container");
    const servicesGrid = document.getElementById("services-grid");


    tabsContainer.innerHTML = categories.map((cat, idx) => `
        <button data-cat="${cat.id}" class="px-6 py-4 border-b-2 border-transparent text-base uppercase tracking-[0.2em] text-luxuryBlack/60 hover:text-luxuryGold hover:border-luxuryGold transition-all duration-300 ${idx === 0 ? 'service-tab-active' : ''}">
            ${cat.label}
        </button>
    `).join('');


    const tabButtons = tabsContainer.querySelectorAll("button");
    tabButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            tabButtons.forEach(b => b.classList.remove("service-tab-active"));
            e.currentTarget.classList.add("service-tab-active");
            renderServices(e.currentTarget.dataset.cat);
        });
    });

    // Estado para controlar el índice activo e intervalos de autoplay
window.carouselIndices = window.carouselIndices || {};
window.carouselIntervals = window.carouselIntervals || {};

// Carrusel seguro y accesible para dispositivos táctiles
window.moveCarousel = function(serviceKey, direction) {
    const slidesContainer = document.getElementById(`carousel-slides-${serviceKey}`);
    if (!slidesContainer) return;

    const totalSlides = slidesContainer.children.length;
    if (totalSlides <= 1) return;

    if (!(serviceKey in window.carouselIndices)) {
        window.carouselIndices[serviceKey] = 0;
    }

    window.carouselIndices[serviceKey] = (window.carouselIndices[serviceKey] + direction + totalSlides) % totalSlides;
    const currentIndex = window.carouselIndices[serviceKey];

    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.getElementById(`dot-${serviceKey}-${i}`);
        if (dot) {
            dot.className = `w-2 h-2 rounded-full transition-colors ${i === currentIndex ? 'bg-luxuryNude' : 'bg-luxuryNude/40'}`;
        }
    }
};

// Funciones para controlar la reproducción automática (Autoplay)
window.startCarouselAutoplay = function(serviceKey) {
    window.stopCarouselAutoplay(serviceKey); // Limpia cualquier intervalo previo
    window.carouselIntervals[serviceKey] = setInterval(() => {
        window.moveCarousel(serviceKey, 1);
    }, 2500); // Cambia la imagen cada 3.5 segundos
};

window.stopCarouselAutoplay = function(serviceKey) {
    if (window.carouselIntervals[serviceKey]) {
        clearInterval(window.carouselIntervals[serviceKey]);
        delete window.carouselIntervals[serviceKey];
    }
};

    const renderServices = (categoryId) => {
    // Limpiar intervalos de autoplay anteriores al cambiar de categoría
    Object.keys(window.carouselIntervals || {}).forEach(key => window.stopCarouselAutoplay(key));

    // Mapeo de nombres legibles para SEO en atributos alt
    const categoryNames = {
        maquillaje: "Maquillaje Profesional",
        estilismo: "Estilismo Capilar",
        personal: "Asesoría de Marca Personal"
    };

    const currentCatName = categoryNames[categoryId] || "Servicio de Belleza";
    const items = SERVICES_DATA[categoryId] || [];

    servicesGrid.innerHTML = items.map((service, idx) => {
        const serviceKey = `${categoryId}-${idx}`;
        const imageList = service.images || [service.image];

        return `
            <div class="bg-white border border-luxuryNude/20 group hover:shadow-xl transition-all duration-500 flex flex-col justify-between opacity-0 translate-y-4 animate-fade-in" style="animation-delay: ${idx * 0.15}s">
                
                <!-- CARRUSEL AUTOMÁTICO -->
                <div class="relative overflow-hidden aspect-[3/4] group/carousel"
                     onmouseenter="stopCarouselAutoplay('${serviceKey}')"
                     onmouseleave="${imageList.length > 1 ? `startCarouselAutoplay('${serviceKey}')` : ''}">
                    
                    <!-- Contenedor deslizable -->
                    <div id="carousel-slides-${serviceKey}" class="flex h-full w-full transition-transform duration-700 ease-out">
                        ${imageList.map((imgUrl, imgIdx) => `
                            <img src="${imgUrl}" 
                                alt="${currentCatName} - ${service.name} en Dirgni Studio Cartago (Muestra ${imgIdx + 1})" 
                                loading="${imgIdx === 0 && idx < 2 ? 'eager' : 'lazy'}"
                                class="w-full h-full object-cover flex-shrink-0">
                        `).join('')}
                    </div>

                    <!-- Badge de Duración -->
                    <span class="absolute top-4 right-4 bg-luxuryBlack/90 text-luxuryNude text-[10px] tracking-widest uppercase px-3 py-1 font-semibold z-10 pointer-events-none">
                        ${service.duration}
                    </span>

                    ${imageList.length > 1 ? `
                        <!-- Flechas de navegación -->
                        <button type="button" aria-label="Imagen anterior" onclick="moveCarousel('${serviceKey}', -1)" class="absolute left-2 top-1/2 -translate-y-1/2 bg-luxuryBlack/60 text-luxuryNude p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10 hover:bg-luxuryBlack">
                            &#10094;
                        </button>
                        <button type="button" aria-label="Siguiente imagen" onclick="moveCarousel('${serviceKey}', 1)" class="absolute right-2 top-1/2 -translate-y-1/2 bg-luxuryBlack/60 text-luxuryNude p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10 hover:bg-luxuryBlack">
                            &#10095;
                        </button>

                        <!-- Puntos indicadores -->
                        <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
                            ${imageList.map((_, imgIdx) => `
                                <span id="dot-${serviceKey}-${imgIdx}" class="w-2 h-2 rounded-full transition-colors ${imgIdx === 0 ? 'bg-luxuryNude' : 'bg-luxuryNude/40'}"></span>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>

                <!-- Detalle del Servicio -->
                <div class="p-8 flex-grow flex flex-col justify-between">
                    <div>
                        <h3 class="font-serif text-xl text-luxuryBlack tracking-wide mb-3">${service.name}</h3>
                        <p class="text-luxuryBlack/60 text-xs leading-relaxed font-light mb-6">${service.description}</p>
                    </div>
                    <div class="flex items-center justify-between border-t border-luxurySoftIvory pt-6">
                        <div>
                            <span class="text-[10px] text-luxuryBlack/45 uppercase tracking-widest block">Inversión</span>
                            <span class="text-sm font-semibold tracking-wider text-luxuryGold">${service.price}</span>
                        </div>
                        <a href="https://wa.me/50688274552?text=Hola%20Dirgni%20Studio,%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20para%20reservar%20el%20servicio%20de%20${encodeURIComponent(service.name)}" target="_blank" rel="noopener noreferrer" class="text-[11px] uppercase tracking-[0.15em] font-medium text-luxuryBlack hover:text-luxuryGold border-b border-luxuryBlack hover:border-luxuryGold pb-1 transition-all">
                            Consultar
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Iniciar autoplay para tarjetas con más de 1 imagen
    items.forEach((service, idx) => {
        const imageList = service.images || [service.image];
        if (imageList.length > 1) {
            window.startCarouselAutoplay(`${categoryId}-${idx}`);
        }
    });
};

    renderServices("maquillaje");
}


let currentLightboxIdx = 0;


function initTestimonials() {
    const container = document.getElementById("testimonials-container");
    container.innerHTML = TESTIMONIALS.map((t, idx) => `
        <div class="bg-white p-8 lg:p-10 border border-luxuryNude/20 flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-500">
            <div>
                <div class="flex text-luxuryGold mb-6">
                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                </div>
                <p class="text-luxuryBlack/85 text-xs lg:text-sm font-light leading-relaxed italic mb-8">
                    "${t.text}"
                </p>
            </div>
            <div class="border-t border-luxurySoftIvory pt-6">
                <span class="font-serif tracking-wide block text-sm text-luxuryBlack">${t.name}</span>
                <span class="text-[10px] uppercase tracking-widest text-luxuryBlack/45 mt-1 block">${t.service}</span>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}


function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(".scroll-animated");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "translate-y-10");
                entry.target.classList.add("opacity-100", "translate-y-0");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    animatedElements.forEach(el => observer.observe(el));
}
