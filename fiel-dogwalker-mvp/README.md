# Fiel — Paseadores verificados

MVP mobile-first para descubrir y solicitar paseos con paseadores cuya identidad, referencias y reputación pueden entenderse antes de permitirles acceder al hogar.

> Estado: demo funcional con datos ficticios. No procesa pagos, no autentica usuarios y no realiza verificaciones reales.

## Decisión de producto

**Modelo recomendado: marketplace curado / verified marketplace.**

No conviene empezar como un directorio puro porque la propuesta de confianza se debilita si Fiel no participa en la verificación y en la trazabilidad de la relación. Tampoco conviene arrancar como un marketplace abierto: agrava el cold-start y agrega oferta sin elevar la confianza.

Fiel combina:

- descubrimiento de paseadores locales;
- verificación previa de identidad y referencias;
- reputación basada en servicios realizados;
- Meet & Greet antes del primer paseo;
- solicitud/reserva dentro de la plataforma;
- evolución futura hacia check-in y seguimiento del paseo.

## Principio de privacidad

**Verificar en privado. Explicar en público.**

El MVP NO publica DNI, domicilio particular ni documentos de identidad. El perfil muestra únicamente el resultado de verificaciones relevantes. Esto sigue el patrón de plataformas de confianza como Airbnb, Rover, Uber, Care.com, Taskrabbit y TrustedHousesitters.

En Argentina, DNI y domicilio son datos personales. La Ley 25.326 exige que los datos recolectados sean adecuados, pertinentes y no excesivos, y establece obligaciones de seguridad y confidencialidad. Los datos relativos a antecedentes penales requieren revisión legal específica; por ese motivo no forman parte de este MVP.

## Benchmark

| Producto | Modelo | Trust signals clave | Insight para Fiel |
|---|---|---|---|
| Rover | Marketplace pet care | Background checks, reviews, Meet & Greet, garantía | Verificación + reputación + encuentro previo |
| Wag! | Managed/on-demand marketplace | Background check, GPS, soporte, garantía | Seguridad durante el servicio |
| Gudog | Marketplace pet care | Cuidadores revisados, reviews verificadas, pagos, cobertura | Reviews solo de reservas reales |
| Pawshake | Marketplace pet care | Perfiles, garantía, soporte | Confianza integrada a la reserva |
| TrustedHousesitters | Membership marketplace | ID check, referencias, reviews, badges | No mostrar documento; mostrar estados |
| PetBacker | Marketplace | ID/phone/email/certification badges | Desagregar verificación en señales visibles |
| Care.com | Care marketplace | Background check obligatorio + badge | El reporte privado no se comparte |
| Taskrabbit | Services marketplace | ID verification con proveedor tercero | Verificación fuerte antes de activar oferta |
| Airbnb | Two-sided marketplace | Identity verification, reviews, perfil | Identidad verificada como señal, no como exposición documental |
| Uber | Managed marketplace | ID, selfie periódica, ratings | Re-verificación reduce sustitución de identidad |

## Decision matrix

Escala 1–5. Ponderación: confianza 25%, cold-start 15%, diferenciación 15%, complejidad 10%, monetización 10%, escalabilidad 10%, adquisición 10%, riesgo 5%.

| Modelo | Score ponderado | Lectura |
|---|---:|---|
| Directorio de verificados | 3.65 | Fácil, pero pierde trazabilidad y monetización |
| Identidad/reputación standalone | 3.50 | Diferenciado, pero difícil de explicar y distribuir |
| Marketplace abierto | 3.10 | Liquidez potencial, baja diferenciación inicial |
| **Marketplace curado/verified** | **4.25** | Mejor balance entre confianza, UX y monetización |
| Híbrido abierto + verified tier | 3.85 | Potente más adelante; demasiado complejo para MVP |

## MVP

### Must
- Landing y propuesta de valor
- Discovery con filtros
- Perfiles detallados
- Documento/selfie/teléfono/referencias como estados de verificación
- Reviews vinculadas a servicios ficticios del demo
- Historial: paseos, clientes, repetición
- Solicitud de paseo
- Meet & Greet recomendado
- Onboarding del paseador
- Diseño mobile-first

### Should
- Pagos in-app
- Chat
- Calendario real
- Check-in / check-out
- Geolocalización durante el paseo

### Later
- Seguro/garantía
- Re-verificación aleatoria de identidad
- Detección de account sharing
- Background screening, solo después de revisión legal específica en Argentina
- Soporte de incidentes 24/7

## North-star y métricas

**North-star:** paseos completados con repetición dentro de 30 días.

Métricas iniciales:
- Search → perfil visto
- Perfil → solicitud
- Solicitud → aceptación
- Primer paseo → segundo paseo en 30 días
- % perfiles con verificación completa
- % primeros paseos con Meet & Greet
- incidentes por 1.000 paseos
- tiempo de respuesta del paseador

## Arquitectura futura

- Frontend: Next.js / TypeScript cuando el MVP evolucione de prototipo estático a producto con backend.
- Auth: proveedor con passkeys/OTP.
- DB: PostgreSQL.
- Identity: proveedor externo; almacenar únicamente estado de verificación y metadatos mínimos cuando sea posible.
- Payments: PSP local compatible con split/marketplace.
- Location: opt-in y solo durante una reserva activa.
- Reviews: solo tras servicio completado.

La versión actual se implementa sin dependencias externas para que sea portable, rápida y desplegable como sitio estático.

## Ejecutar localmente

```bash
python3 -m http.server 8080
```

Abrir `http://localhost:8080`.

## Estructura

- `index.html` — producto completo
- `styles.css` — sistema visual responsive
- `app.js` — discovery, perfiles, filtros, reserva y onboarding
- `vercel.json` — headers de seguridad
- `RESEARCH.md` — fuentes y rationale

## Próximo experimento recomendado

Test moderado con 8–12 dueños de perros que vivan en departamentos. Comparar dos proposiciones:

A. “Encontrá un paseador cerca tuyo.”
B. “Sabé quién entra a tu casa y cuida a tu perro.”

Medir comprensión, preferencia y qué evidencia necesitan para contratar. La hipótesis a validar no es si quieren un marketplace de perros: es si **trust verification** cambia realmente la decisión de contratación y la disposición a reservar dentro de la plataforma.
