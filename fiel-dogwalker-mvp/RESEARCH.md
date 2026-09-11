# Research notes — Fiel

Investigación realizada el 11 Sep 2026. Prioridad: fuentes oficiales de producto y normativa argentina.

## Hallazgos

### 1. Los líderes verifican detrás y resumen delante
- Airbnb verifica identidad con datos personales, documento y en algunos casos selfie, pero no comparte el documento con anfitriones/huéspedes.
- Uber muestra badges y datos acotados; la información usada en verificación se mantiene privada.
- TrustedHousesitters muestra niveles/badges de verificación en el perfil, mientras un tercero procesa el documento.

**Implicación:** Fiel no debe convertir el DNI en contenido de perfil. Debe convertir una comprobación privada en una señal pública comprensible.

### 2. La verificación inicial no alcanza
- Uber aplica re-verificación mediante selfies periódicas para reducir account sharing.
- Rover combina background check, reviews y Meet & Greet.
- Wag! suma soporte de emergencia y seguimiento del servicio.

**Implicación:** la confianza debe ser un sistema continuo: identidad + reputación + señales durante el paseo.

### 3. Las reviews valen más cuando están ligadas a transacciones
- Gudog indica que sus reviews provienen de reservas completadas.
- Rover obliga a reservar/pagar dentro de plataforma para mantener protecciones.

**Implicación:** Fiel debería evitar reviews abiertas y vincularlas a paseos completados.

### 4. El hogar cambia el estándar de riesgo
Care.com es una referencia particularmente relevante porque sus cuidadores ingresan al ámbito doméstico. Su patrón es ejecutar controles privados y mostrar al usuario que el check fue realizado, sin compartir el reporte.

**Implicación:** el producto debe parecer más un marketplace de confianza doméstica que un simple marketplace pet-friendly.

## Consideraciones legales Argentina

- AAIP: DNI, domicilio, teléfono e imagen califican como datos personales.
- Ley 25.326, art. 4: datos adecuados, pertinentes y no excesivos para la finalidad.
- Ley 25.326, arts. 9–10: seguridad y confidencialidad.
- Ley 25.326, art. 7.4: los datos relativos a antecedentes penales o contravencionales solo pueden ser tratados por autoridades públicas competentes dentro del marco legal aplicable.

**Decisión MVP:** no almacenar, puntuar ni publicar antecedentes penales. Someter cualquier propuesta futura de screening a revisión legal especializada antes de construirla.

## Fuentes oficiales consultadas

- Rover — background checks, evaluation, Rover Cards y pagos: rover.com / support.rover.com
- Wag! — Trust & Safety y GPS walks: wagwalking.com / wag.co
- Gudog — cuidadores verificados, reviews y pagos: gudog.com
- TrustedHousesitters — Trust & Safety e ID checks: trustedhousesitters.com
- PetBacker — badges y trust points: petbacker.com
- Care.com — background checks y safety center: care.com
- Taskrabbit — identity verification: taskrabbit.com
- Airbnb — identity verification y perfiles: airbnb.com
- Uber — driver screening, real-time ID checks y rider verification: uber.com
- Argentina / AAIP — Ley 25.326 y derechos de datos personales: argentina.gob.ar
