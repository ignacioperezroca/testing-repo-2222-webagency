const walkers = [
  {
    id:'martina', name:'Martina R.', initials:'MR', zone:'Palermo Soho', distance:'1,2 km', price:8500, rating:'4,98', reviews:52, walks:126, clients:41, repeat:'78%', today:true, verified:true, solo:true,
    bio:'Paseo perros hace 4 años y trabajo principalmente con perros adultos y senior. Me gusta sostener rutinas estables y mandar una actualización clara al terminar cada paseo.',
    experience:'4 años', response:'12 min', tags:['Paseo individual','Perros senior','Medicación oral'],
    refs:['Documento oficial + selfie','Teléfono verificado','2 referencias contactadas','Email verificado'],
    reviewsData:[['María L.','5,0','Martina fue súper puntual. Lupe volvió tranquila y me mandó una foto al terminar.'],['Julián P.','5,0','La elegimos porque su perfil explicaba todo. Ya repetimos varias veces.']]
  },
  {
    id:'nicolas', name:'Nicolás A.', initials:'NA', zone:'Palermo Hollywood', distance:'1,8 km', price:7800, rating:'4,95', reviews:34, walks:89, clients:29, repeat:'72%', today:true, verified:true, solo:false,
    bio:'Paseador y estudiante de veterinaria. Trabajo con grupos chicos y también hago paseos individuales para perros que necesitan más atención.',
    experience:'3 años', response:'18 min', tags:['Grupos pequeños','Perros grandes','Est. veterinaria'],
    refs:['Documento oficial + selfie','Teléfono verificado','2 referencias contactadas','Email verificado'],
    reviewsData:[['Clara M.','5,0','Muy responsable y cuidadoso con el arnés.'],['Tomás V.','4,9','Se nota que entiende el comportamiento de los perros.']]
  },
  {
    id:'sofia', name:'Sofía G.', initials:'SG', zone:'Villa Crespo', distance:'2,4 km', price:9200, rating:'5,00', reviews:61, walks:173, clients:55, repeat:'81%', today:false, verified:true, solo:true,
    bio:'Me especializo en paseos tranquilos, uno a uno, con adaptación progresiva. Antes del primer paseo hago siempre un encuentro breve con el perro y su familia.',
    experience:'5 años', response:'9 min', tags:['Paseo individual','Perros ansiosos','Meet & Greet'],
    refs:['Documento oficial + selfie','Teléfono verificado','3 referencias contactadas','Email verificado'],
    reviewsData:[['Vale R.','5,0','La primera persona con la que mi perro se adaptó rápido.'],['Flor A.','5,0','Excelente comunicación y muchísima paciencia.']]
  }
];

const money = n => '$' + n.toLocaleString('es-AR');
const grid = document.querySelector('#walkerGrid');
let activeFilter='all';

function walkerCard(w){
  return `<article class="walker-card" data-profile="${w.id}" tabindex="0" role="button" aria-label="Ver perfil de ${w.name}">
    <div class="photo-block"><span class="availability-tag">${w.today?'DISPONIBLE HOY':'PRÓXIMO: MAÑANA'}</span>${w.verified?'<span class="verified-tag">✓ VERIFICADO</span>':''}<div class="photo-initials">${w.initials}</div></div>
    <div class="card-body"><div class="card-row"><h3>${w.name}</h3><div class="price"><b>${money(w.price)}</b><br><span>/ 60 min</span></div></div>
      <p class="subline">${w.zone} · ${w.distance} · ★ ${w.rating} (${w.reviews})</p>
      <div class="trust-mini">${w.tags.map(t=>`<span>${t}</span>`).join('')}</div>
      <div class="card-stats"><span><b>${w.walks}</b> paseos</span><span><b>${w.repeat}</b> repiten</span><span>${w.experience}</span></div>
    </div></article>`
}
function renderGrid(){
  const filtered=walkers.filter(w=>activeFilter==='all'||(activeFilter==='today'&&w.today)||(activeFilter==='verified'&&w.verified)||(activeFilter==='solo'&&w.solo));
  grid.innerHTML=filtered.map(walkerCard).join('');
  bindProfileTriggers();
}
function bindProfileTriggers(){
  document.querySelectorAll('[data-profile]').forEach(el=>{
    el.onclick=()=>openProfile(el.dataset.profile);
    el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openProfile(el.dataset.profile)}};
  });
}
function openProfile(id){
  const w=walkers.find(x=>x.id===id); if(!w)return;
  document.querySelector('#profileContent').innerHTML=`
    <div class="profile-hero">
      <div class="walker-head"><div class="avatar avatar-${w.id}">${w.initials}</div><div><h1>${w.name}</h1><p>${w.zone} · ${w.distance}</p></div><div class="rating"><b>${w.rating}</b><span>★</span></div></div>
      <div class="trust-badge"><span class="shield">✓</span><div><strong>Perfil Fiel verificado</strong><small>${w.refs.length} verificaciones completas · actualizado recientemente</small></div></div>
    </div>
    <div class="profile-sections">
      <section class="profile-section"><h3>Sobre ${w.name.split(' ')[0]}</h3><p>${w.bio}</p><div class="trust-mini">${w.tags.map(t=>`<span>${t}</span>`).join('')}</div></section>
      <section class="profile-section"><h3>Qué verificó Fiel</h3><div class="profile-badges">${w.refs.map(r=>`<div class="profile-badge"><span class="badge-check">✓</span><div><strong>${r}</strong><small>Verificado por la plataforma</small></div></div>`).join('')}</div><p class="privacy-note" style="text-align:left;margin-top:12px">El DNI, domicilio y material de verificación no se muestran al público. En este MVP no almacenamos ni mostramos antecedentes penales.</p></section>
      <section class="profile-section"><h3>Historial en Fiel</h3><div class="activity-row"><div><b>${w.walks}</b><span>paseos</span></div><div><b>${w.clients}</b><span>clientes</span></div><div><b>${w.repeat}</b><span>repiten</span></div></div></section>
      <section class="profile-section"><h3>Reviews verificadas · ${w.rating}</h3>${w.reviewsData.map(r=>`<div class="review"><div class="review-head"><b>${r[0]}</b><span>★ ${r[1]}</span></div><p>${r[2]}</p></div>`).join('')}</section>
      <section class="profile-section"><h3>Antes del primer paseo</h3><p>Recomendamos un Meet & Greet breve para presentarse, revisar el arnés, conversar sobre rutinas y acordar el acceso al edificio. La identidad verificada reduce riesgo, pero no reemplaza tu evaluación personal.</p></section>
    </div>
    <div class="sticky-book"><div class="price-large"><b>${money(w.price)}</b> <small>/ 60 min</small><br><small>Responde en ~${w.response}</small></div><button class="pill primary" id="bookFromProfile">Solicitar paseo</button></div>`;
  document.querySelector('#profileDialog').showModal();
  document.querySelector('#bookFromProfile').onclick=()=>openBooking(w);
}
function openBooking(w){
  document.querySelector('#profileDialog').close();
  document.querySelector('#bookingTitle').textContent=`Reservar con ${w.name}`;
  document.querySelector('#bookingDialog').dataset.walker=w.id;
  document.querySelector('#bookingDialog').showModal();
}

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');activeFilter=btn.dataset.filter;renderGrid()}));
document.querySelector('#toggleMap').onclick=()=>{const m=document.querySelector('#mapPanel');m.classList.toggle('hidden');document.querySelector('#toggleMap').textContent=m.classList.contains('hidden')?'Ver mapa':'Ocultar mapa';bindProfileTriggers()};
document.querySelector('#searchBtn').onclick=()=>document.querySelector('#explorar').scrollIntoView({behavior:'smooth'});
document.querySelectorAll('[data-scroll]').forEach(b=>b.onclick=()=>document.getElementById(b.dataset.scroll)?.scrollIntoView({behavior:'smooth'}));
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>document.querySelector('#'+b.dataset.close).close());

const today = new Date(); today.setDate(today.getDate()+1); document.querySelector('#bookingDate').value = today.toISOString().split('T')[0];
document.querySelector('#bookingForm').onsubmit=e=>{e.preventDefault();document.querySelector('#bookingDialog').close();document.querySelector('#successDialog h2').textContent='Solicitud enviada';document.querySelector('#successDialog p').textContent='En un producto real, el paseador tendría que aceptar antes de confirmar la reserva.';document.querySelector('#successDialog').showModal()};

function openLogin(){document.querySelector('#loginDialog').showModal()}
document.querySelector('#openLogin').onclick=openLogin;

let step=0;
const steps=[
  {title:'Primero, verifiquemos que sos vos',copy:'La identidad es la base del perfil. Tus documentos se usan para verificarte, no para publicarlos.',body:`<div class="onboarding-card"><label>Nombre legal<input value="Camila Fernández" /></label><div class="form-row" style="margin-top:10px"><label>DNI<input value="••.•••.•••" disabled /></label><label>Teléfono<input value="+54 9 11 •••• ••••" /></label></div></div><div class="onboarding-card"><b>Documento + selfie de presencia</b><p class="muted">En producción esto se conectaría a un proveedor de identidad. El usuario final solo verá el badge “Identidad verificada”.</p></div>`},
  {title:'Contanos tu experiencia',copy:'Mostramos contexto concreto, no claims vagos.',body:`<div class="onboarding-card"><label>Años paseando perros<select><option>Menos de 1</option><option>1–2</option><option selected>3–5</option><option>Más de 5</option></select></label><label style="margin-top:10px">Experiencia<textarea>Trabajo con perros medianos y grandes. Hago adaptación progresiva para perros ansiosos y siempre coordino un encuentro previo.</textarea></label></div>`},
  {title:'Sumá referencias reales',copy:'Al menos dos personas que puedan confirmar tu responsabilidad y experiencia.',body:`<div class="onboarding-card"><div class="profile-badge"><span class="badge-check">✓</span><div><strong>Lucía M.</strong><small>Referencia validada · cliente anterior</small></div></div><div class="profile-badge" style="margin-top:8px"><span class="badge-check">✓</span><div><strong>Fernando P.</strong><small>Referencia validada · vecino</small></div></div></div><button class="pill secondary">+ Agregar referencia</button>`},
  {title:'Definí tu servicio',copy:'Precio, zona y modalidad para que el match sea claro desde el inicio.',body:`<div class="onboarding-card"><div class="form-row"><label>Precio 60 min<input value="$ 8.500" /></label><label>Radio de trabajo<select><option>1 km</option><option selected>3 km</option><option>5 km</option></select></label></div><label style="margin-top:10px">Zona base<input value="Palermo, CABA" /></label><label style="margin-top:10px">Modalidad<select><option selected>Paseos individuales</option><option>Grupos pequeños</option><option>Ambos</option></select></label></div>`},
  {title:'Así se va a ver tu perfil',copy:'El objetivo es que la confianza se entienda en segundos.',body:`<div class="walker-card preview-card"><div class="photo-block"><span class="availability-tag">NUEVO PERFIL</span><span class="verified-tag">✓ VERIFICADO</span><div class="photo-initials">CF</div></div><div class="card-body"><div class="card-row"><h3>Camila F.</h3><div class="price"><b>$8.500</b><br><span>/ 60 min</span></div></div><p class="subline">Palermo · Identidad verificada</p><div class="trust-mini"><span>Documento ✓</span><span>2 referencias ✓</span></div></div></div>`}
];
function renderStep(){
  const s=steps[step];
  document.querySelector('#onboardingMain').innerHTML=`<div class="eyebrow">PASO ${step+1} DE ${steps.length}</div><h2>${s.title}</h2><p class="muted">${s.copy}</p>${s.body}<div class="onboarding-actions"><button class="pill secondary" id="prevStep" ${step===0?'disabled':''}>Atrás</button><span class="step-indicator">${step+1}/${steps.length}</span><button class="pill primary" id="nextStep">${step===steps.length-1?'Publicar demo':'Continuar'}</button></div>`;
  [...document.querySelectorAll('#stepList li')].forEach((li,i)=>li.classList.toggle('active',i===step));
  document.querySelector('#prevStep').onclick=()=>{if(step>0){step--;renderStep()}};
  document.querySelector('#nextStep').onclick=()=>{if(step<steps.length-1){step++;renderStep()}else{document.querySelector('#walkerDialog').close();document.querySelector('#successDialog h2').textContent='Perfil demo publicado';document.querySelector('#successDialog p').textContent='En producción, el perfil quedaría pendiente hasta completar la verificación real de identidad y referencias.';document.querySelector('#successDialog').showModal()}};
}
function openOnboarding(){step=0;renderStep();document.querySelector('#walkerDialog').showModal()}
['openWalkerOnboarding','openWalkerOnboarding2','openWalkerOnboardingMobile'].forEach(id=>document.querySelector('#'+id).onclick=openOnboarding);

renderGrid();bindProfileTriggers();
