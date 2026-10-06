const BASE = "https://mariluzserrano-cmd.github.io/dibujaelcirculo/";
const STORAGE_KEY = "circuleños-ronda12-v1";

const days = [
  {
    day: 1,
    title: "Dios en su gloria",
    subtitle: "Levanta la mirada",
    readings: ["Isaías 6", "Apocalipsis 4"],
    reader: "Mariluz",
    question: "¿Qué ocupa hoy el trono de mi corazón: mis preocupaciones o la presencia de Jesús?",
    phrase: "Jesús, hoy decido levantar la mirada.",
    file: "dia1-12varonda.html"
  },
  {
    day: 2,
    title: "La adoración que responde",
    subtitle: "Devuelve la gloria",
    readings: ["Isaías 12", "Apocalipsis 5"],
    reader: "Mariluz",
    question: "¿Qué obra de Dios en mi vida necesita hoy convertirse nuevamente en gratitud, adoración y testimonio?",
    phrase: "Jesús, hoy te devuelvo la gloria.",
    file: "dia2-12cvaronda.html"
  },
  {
    day: 3,
    title: "El pecado rompe la comunión",
    subtitle: "Vuelve al centro",
    readings: ["Isaías 1:16–20", "Apocalipsis 2:4–5", "Apocalipsis 3:19–20"],
    reader: "Mariluz",
    question: "¿En qué área de mi vida necesito dejar de justificarme y dar hoy un paso concreto de regreso a Jesús?",
    phrase: "Jesús, hoy vuelvo al centro.",
    file: "dia3-12varonda.html"
  },
  {
    day: 4,
    title: "Luz en medio de las tinieblas",
    subtitle: "No temas a la oscuridad",
    readings: ["Isaías 8:11–14", "Apocalipsis 1:12–18"],
    reader: "Mariluz",
    question: "¿Qué voz está interpretando mi realidad: el miedo o la presencia de Dios?",
    phrase: "Jesús, la oscuridad no decidirá por mí.",
    file: "dia4-12varonda.html"
  },
  {
    day: 5,
    title: "El remanente fiel",
    subtitle: "Dios todavía guarda semilla",
    readings: ["Isaías 10", "Apocalipsis 7"],
    reader: "Mariluz",
    question: "¿Qué pequeña semilla de fidelidad necesito cuidar hoy, aunque todavía no vea el resultado completo?",
    phrase: "Jesús, cuidaré con fidelidad la semilla que todavía permanece.",
    file: "dia5-12varonda.html"
  },
  {
    day: 6,
    title: "Emanuel, Dios con nosotros",
    subtitle: "No estás sola",
    readings: ["Isaías 7:10–14 · NTV", "Apocalipsis 21:1–4 · NTV"],
    reader: "Mariluz",
    question: "¿En qué situación de mi vida necesito hoy reconocer conscientemente que Dios está conmigo?",
    phrase: "Jesús, hoy reconozco tu presencia conmigo.",
    file: "dia6-12varonda.html"
  },
  {
    day: 7,
    title: "El Rey sigue reinando",
    subtitle: "Descansa bajo su gobierno",
    readings: ["Isaías 33", "Apocalipsis 1"],
    reader: "Mariluz",
    question: "¿Qué necesito dejar de controlar hoy y confiar conscientemente al Rey?",
    phrase: "Jesús, hoy descanso bajo tu gobierno.",
    file: "dia7-12varonda.html"
  },
  {
    day: 8,
    title: "El Príncipe de Paz",
    subtitle: "La paz tiene nombre",
    readings: ["Isaías 9", "Apocalipsis 1"],
    reader: "Meriemil",
    question: "¿En qué situación concreta puedo elegir hoy una respuesta de paz que refleje el Reino de Jesús?",
    phrase: "Jesús, que mi respuesta refleje tu paz.",
    file: "dia8-12varonda.html"
  },
  {
    day: 9,
    title: "Dios es nuestra luz",
    subtitle: "Camina hacia la luz",
    readings: ["Isaías 60", "Apocalipsis 21"],
    reader: "Yamira",
    question: "¿Qué área de mi vida necesito llevar conscientemente a la luz de Jesús hoy?",
    phrase: "Jesús, hoy camino hacia tu luz.",
    file: "dia9-12varonda.html"
  },
  {
    day: 10,
    title: "Dios hace nuevas todas las cosas",
    subtitle: "No te quedes mirando atrás",
    readings: ["Isaías 43", "Apocalipsis 21"],
    reader: "Keishla",
    question: "¿Qué novedad de Dios puedo recibir si dejo de aferrarme a lo anterior?",
    phrase: "Jesús, ayúdame a reconocer lo nuevo que ya has comenzado.",
    file: "dia10-12varonda.html"
  },
  {
    day: 11,
    title: "El Primero y el Último",
    subtitle: "La historia no se le escapa",
    readings: ["Isaías 41 · NTV", "Apocalipsis 1:17–18 · NTV"],
    reader: "Mariluz",
    question: "¿Qué parte de mi historia estoy intentando controlar porque todavía no puedo ver cómo terminará?",
    phrase: "Jesús, mi historia no se te escapa.",
    file: "dia11-12varonda.html"
  },
  {
    day: 12,
    title: "Juicio sobre las naciones",
    subtitle: "Dios también ve lo colectivo",
    readings: ["Isaías 13–23", "Apocalipsis 8–9"],
    reader: "Yasmary",
    question: "¿En qué sistema, hábito o dinámica colectiva estoy participando que necesita ser transformada a la luz del Reino de Jesús?",
    phrase: "Jesús, hazme parte de lo que Tú quieres transformar.",
    file: "dia12-12varonda.html"
  },
  {
    day: 13,
    title: "El mundo tiembla, la esperanza permanece",
    subtitle: "La muerte no tiene la última palabra",
    readings: ["Isaías 24–27", "Apocalipsis 6"],
    reader: "Damaris",
    question: "Cuando todo parece inestable, ¿dónde estoy colocando mi esperanza?",
    phrase: "Jesús, aunque el mundo tiemble, mi esperanza permanece en Ti.",
    file: "dia13-12varonda.html"
  },
  {
    day: 14,
    title: "La raíz de Isaí",
    subtitle: "El León es Cordero",
    readings: ["Isaías 11", "Apocalipsis 5"],
    reader: "Richard",
    question: "¿Qué idea de poder necesito revisar a la luz de la manera de vencer de Jesús?",
    phrase: "Jesús, enséñame a vencer como Tú.",
    file: "dia14-12varonda.html"
  },
  {
    day: 15,
    title: "El Siervo escogido",
    subtitle: "La fuerza que no aplasta",
    readings: ["Isaías 42", "Apocalipsis 5"],
    reader: "Meriemil",
    question: "¿Hay alguien a quien necesito acompañar hoy con más cuidado para no aplastar lo que todavía está creciendo?",
    phrase: "Jesús, enséñame una fuerza que no aplasta.",
    file: "dia15-12varonda.html"
  },
  {
    day: 16,
    title: "Los ayes de la autosuficiencia",
    subtitle: "Cuando mis apoyos se vuelven ídolos",
    readings: ["Isaías 28–31", "Apocalipsis 15–16"],
    reader: "Medelin",
    question: "¿Qué apoyo legítimo de mi vida corre el riesgo de ocupar un lugar que solo le pertenece a Dios?",
    phrase: "Jesús, uso mis apoyos, pero mi confianza descansa en Ti.",
    file: "dia16-12varonda.html"
  },
  {
    day: 17,
    title: "El Cordero inmolado",
    subtitle: "Herido por amor",
    readings: ["Isaías 52–53", "Apocalipsis 5"],
    reader: "Yamira",
    question: "¿Dónde necesito recibir hoy el amor sacrificial de Jesús, y hacia quién puedo dejar que ese amor fluya después?",
    phrase: "Jesús, hoy recibo tu amor y permito que pase a través de mí.",
    file: "dia17-12varonda.html"
  },
  {
    day: 18,
    title: "Nuestro Buen Pastor",
    subtitle: "Él nos lleva en brazos",
    readings: ["Isaías 40", "Apocalipsis 7"],
    reader: "Nomara",
    question: "¿En qué área de mi vida necesito dejar de esforzarme sola y permitir que Jesús me cuide?",
    phrase: "Jesús, hoy también me dejo cuidar por Ti.",
    file: "dia18-12varonda.html"
  },
  {
    day: 19,
    title: "El Redentor",
    subtitle: "No te he olvidado",
    readings: ["Isaías 44", "Apocalipsis 22"],
    reader: "Odemaris",
    question: "¿Qué parte de mi pasado sigo usando para alejarme de Jesús cuando Él ya me está diciendo ‘ven’?",
    phrase: "Jesús, escucho tu invitación. Hoy vuelvo a Ti.",
    file: "dia19-12varonda.html"
  },
  {
    day: 20,
    title: "El Juez justo",
    subtitle: "La justicia también es amor",
    readings: ["Isaías 34", "Apocalipsis 19"],
    reader: "Lymari",
    question: "¿Hay alguna situación donde estoy llamando ‘justicia’ a algo que, en el fondo, es deseo de venganza?",
    phrase: "Jesús, enséñame a amar la justicia sin alimentar venganza.",
    file: "dia20-12varonda.html"
  },
  {
    day: 21,
    title: "Dios libra y sana",
    subtitle: "Lleva tu crisis al Rey",
    readings: ["Isaías 36–39", "Apocalipsis 10–11"],
    reader: "Richard",
    question: "¿Qué crisis necesito ‘desplegar delante del Señor’ antes de seguir intentando controlarla?",
    phrase: "Jesús, hoy llevo mi crisis al Rey.",
    file: "dia21-12varonda.html"
  },
  {
    day: 22,
    title: "Rey de reyes",
    subtitle: "Vive bajo otro Reino",
    readings: ["Isaías 32", "Apocalipsis 20"],
    reader: "Sandra",
    question: "¿Qué decisión concreta de hoy puede demostrar que mi lealtad principal pertenece al Reino de Jesús?",
    phrase: "Jesús, hoy quiero vivir bajo tu Reino.",
    file: "dia22-12varonda.html"
  },
  {
    day: 23,
    title: "Alfa y Omega",
    subtitle: "Confía en quien sostiene la historia",
    readings: ["Isaías 48", "Apocalipsis 1"],
    reader: "Keishla",
    question: "¿Qué estoy intentando controlar o entender a la fuerza, que hoy puedo confiarle al que sostiene toda la historia?",
    phrase: "Jesús, tú eres mi Alfa y mi Omega.",
    file: "dia23-12varonda.html"
  },
  {
    day: 24,
    title: "La fidelidad de Dios",
    subtitle: "Grabada en sus manos",
    readings: ["Isaías 49–50", "Apocalipsis 3"],
    reader: "Yasmary",
    question: "¿Qué evidencia de la fidelidad de Dios necesito recordar hoy para sostenerme en lo que estoy viviendo ahora?",
    phrase: "Jesús, aunque tenga poca fuerza, permaneceré sostenida por tu fidelidad.",
    file: "dia24-12varonda.html"
  },
  {
    day: 25,
    title: "La esperanza que permanece",
    subtitle: "El desierto florece",
    readings: ["Isaías 35", "Apocalipsis 21"],
    reader: "Meriemil",
    question: "¿Cuál es el desierto que hoy necesitas mirar con los ojos de la esperanza, no del miedo?",
    phrase: "Señor, confío en que mi desierto también va a florecer.",
    file: "dia25-12varonda.html"
  },
  {
    day: 26,
    title: "Consolados para consolar",
    subtitle: "Dios no desperdicia lágrimas",
    readings: ["Isaías 51", "Apocalipsis 7"],
    reader: "Damaris",
    question: "¿Qué lágrima necesitas hoy entregarle a Dios, confiando en que Él no la desperdicia?",
    phrase: "Señor, gracias porque ninguna de mis lágrimas se pierde contigo.",
    file: "dia26-12varonda.html"
  },
  {
    day: 27,
    title: "Perseverar hasta el final",
    subtitle: "Fiel en el tramo largo",
    readings: ["Isaías 26–27", "Apocalipsis 20"],
    reader: "Lymari",
    question: "¿Qué proceso largo necesitas seguir caminando hoy, confiando en la paz de Dios y no en tus propias fuerzas?",
    phrase: "Señor, guarda mi corazón en perfecta paz mientras persevero.",
    file: "dia27-12varonda.html"
  },
  {
    day: 28,
    title: "La invitación del agua",
    subtitle: "Recibe gratuitamente",
    readings: ["Isaías 55", "Apocalipsis 22"],
    reader: "Richard",
    question: "¿Qué estoy intentando comprar, merecer o controlar que Dios me invita hoy a recibir gratuitamente?",
    phrase: "Jesús, hoy vengo a recibir.",
    file: "dia28-12varonda.html"
  },
  {
    day: 29,
    title: "La justicia que restaura",
    subtitle: "La fe se ve",
    readings: ["Isaías 58", "Apocalipsis 20"],
    reader: "Lymari",
    question: "¿Qué parte de mi fe necesita convertirse hoy en una acción visible de amor, justicia o reparación?",
    phrase: "Jesús, que mi fe tenga manos.",
    file: "dia29-12varonda.html"
  },
  {
    day: 30,
    title: "El Espíritu y la batalla",
    subtitle: "Permanece revestido",
    readings: ["Isaías 59", "Apocalipsis 12–13"],
    reader: "Mariluz",
    question: "¿Qué voz, miedo o acusación está intentando ocupar hoy más espacio en mí que la verdad de Jesús?",
    phrase: "Jesús, permanezco revestida de tu verdad.",
    file: "dia30-12varonda.html"
  },
  {
    day: 31,
    title: "La caída de Babilonia",
    subtitle: "Ningún imperio es eterno",
    readings: ["Isaías 45–47", "Apocalipsis 17–18"],
    reader: "Por elegir",
    question: "¿Qué sistema, poder, hábito o seducción está ocupando demasiado espacio en mi vida?",
    phrase: "Jesús, mi lealtad pertenece a Ti.",
    file: "dia31-12varonda.html"
  },
  {
    day: 32,
    title: "No hay otro Dios",
    subtitle: "¿A quién pertenece mi adoración?",
    readings: ["Isaías 45", "Apocalipsis 4"],
    reader: "Mariluz",
    question: "¿Qué está recibiendo hoy tanto de mi tiempo, atención u obediencia que quizás está ocupando demasiado espacio en mi corazón?",
    phrase: "Jesús, hoy vuelvo a colocarte en el centro.",
    file: "dia32-12varonda.html"
  },
  {
    day: 33,
    title: "Todas las naciones adorarán",
    subtitle: "Haz espacio en el círculo",
    readings: ["Isaías 2", "Apocalipsis 7"],
    reader: "Medeline",
    question: "¿A quién podría hacerle espacio hoy en mi círculo?",
    phrase: "Jesús, ensancha mi círculo como el tuyo.",
    file: "dia33-12varonda.html"
  },
  {
    day: 34,
    title: "Justicia y descanso para todos",
    subtitle: "Una casa abierta",
    readings: ["Isaías 56–57", "Apocalipsis 7"],
    reader: "Meriemil",
    question: "¿Quién necesita encontrar hoy descanso, dignidad o pertenencia a través de mí?",
    phrase: "Jesús, haz de mí una casa abierta.",
    file: "dia34-12varonda.html"
  },
  {
    day: 35,
    title: "El pacto de paz eterno",
    subtitle: "Su amor no se mueve",
    readings: ["Isaías 54", "Apocalipsis 21"],
    reader: "Richard",
    question: "¿Qué está cambiando hoy en mi vida que necesito dejar de usar como medida del amor de Dios?",
    phrase: "Jesús, cuando todo se mueva, permaneceré en tu amor.",
    file: "dia35-12varonda.html"
  },
  {
    day: 36,
    title: "Vestidos de salvación",
    subtitle: "El año de gracia sigue hablando",
    readings: ["Isaías 61", "Apocalipsis 19"],
    reader: "Nomara",
    question: "¿Qué buena noticia puedo encarnar hoy para alguien herido, cansado o excluido?",
    phrase: "Jesús, que tu gracia siga hablando a través de mí.",
    file: "dia36-12varonda.html"
  },
  {
    day: 37,
    title: "La Novia preparada",
    subtitle: "Vive como quien se prepara para amar",
    readings: ["Isaías 62", "Apocalipsis 21"],
    reader: "Odemaris",
    question: "Si prepararme para Jesús significa aprender a amar, ¿qué necesita cambiar hoy en mi manera de amar?",
    phrase: "Jesús, quiero vivir preparada para amarte y amar.",
    file: "dia37-12varonda.html"
  },
  {
    day: 38,
    title: "El Día del Señor",
    subtitle: "El Dios que viene",
    readings: ["Isaías 63–64", "Apocalipsis 19"],
    reader: "Lymari",
    question: "Si Jesús estuviera hoy frente a mí, ¿hay algo de mi manera de vivir que intentaría esconder?",
    phrase: "Jesús, quiero vivir preparada para encontrarte.",
    file: "dia38-12varonda.html"
  },
  {
    day: 39,
    title: "La viña y la cosecha",
    subtitle: "¿Qué fruto estoy dando?",
    readings: ["Isaías 5", "Apocalipsis 14"],
    reader: "Keila",
    question: "Si alguien observara solamente el fruto de mis hábitos, palabras y relaciones, ¿qué descubriría que estoy cultivando?",
    phrase: "Jesús, que mi vida produzca fruto que se parezca a Ti.",
    file: "dia39-12varonda.html"
  },
  {
    day: 40,
    title: "El círculo se completa",
    subtitle: "Siempre el protagonista es Jesús",
    readings: ["Isaías 65–66", "Apocalipsis 21–22"],
    reader: "Mariluz",
    question: "¿Qué cambió en mi manera de mirar a Jesús y de vivir con Él?",
    phrase: "Siempre el protagonista es Jesús.",
    file: "dia40-12varonda.html"
  }
];

const els = {
  grid: document.querySelector("#days-grid"),
  empty: document.querySelector("#empty-state"),
  search: document.querySelector("#day-search"),
  filters: [...document.querySelectorAll(".filter")],
  clearSearch: document.querySelector("#clear-search"),
  continueButton: document.querySelector("#continue-button"),
  nextStep: document.querySelector("#next-step"),
  nextStepNumber: document.querySelector("#next-step-number"),
  nextStepTitle: document.querySelector("#next-step-title"),
  progressHalo: document.querySelector("#progress-halo"),
  progressPercent: document.querySelector("#progress-percent"),
  headerProgress: document.querySelector("#header-progress"),
  headerProgressText: document.querySelector("#header-progress-text"),
  notesCount: document.querySelector("#notes-count"),
  notes: document.querySelector("#saved-notes"),
  miniProgress: document.querySelector("#mini-progress-bar"),
  exportButton: document.querySelector("#export-button"),
  dialog: document.querySelector("#day-dialog"),
  dialogContent: document.querySelector("#dialog-content"),
  dialogClose: document.querySelector("#dialog-close"),
  toast: document.querySelector("#toast")
};

const availableDays = days.filter(day => !day.upcoming);
let activeFilter = "all";
let activeDay = null;
let toastTimer = null;

function cleanState(value) {
  const completed = Array.isArray(value?.completed)
    ? [...new Set(value.completed.map(Number).filter(day => day >= 1 && day <= 40))]
    : [];
  const notes = {};
  if (value?.notes && typeof value.notes === "object") {
    Object.entries(value.notes).forEach(([day, note]) => {
      const number = Number(day);
      if (number >= 1 && number <= 40 && typeof note === "string" && note.trim()) notes[number] = note.slice(0, 2500);
    });
  }
  const discussion = {};
  if (value?.discussion && typeof value.discussion === "object") {
    Object.entries(value.discussion).forEach(([meeting, note]) => {
      const number = Number(meeting);
      if (number >= 1 && number <= 5 && typeof note === "string" && note.trim()) discussion[number] = note.slice(0, 1800);
    });
  }
  return { completed, notes, discussion, lastOpened: Number(value?.lastOpened) || 1 };
}

function loadState() {
  try {
    return cleanState(JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"));
  } catch {
    return cleanState({});
  }
}

let state = loadState();

function persistState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    showToast("No pudimos guardar en este dispositivo.");
    return false;
  }
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(value) {
  return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function isCompleted(day) {
  return state.completed.includes(day);
}

function nextAvailableDay() {
  return availableDays.find(day => !isCompleted(day.day)) || availableDays[availableDays.length - 1];
}

function cardMarkup(day) {
  if (day.upcoming) {
    return `
      <article class="day-card is-upcoming" aria-label="Día ${day.day}, próximamente">
        <span class="day-number">${String(day.day).padStart(2, "0")}</span>
        <div class="day-body">
          <div class="day-status"><span>Próximamente</span><span class="status-mark" aria-hidden="true"></span></div>
          <h3>${escapeHTML(day.title)}</h3>
          <p class="day-subtitle">El eco todavía está por revelarse</p>
          <div class="upcoming-line" aria-hidden="true"></div>
        </div>
      </article>`;
  }

  const completed = isCompleted(day.day);
  const readings = day.readings.map(reading => `<span role="listitem">${escapeHTML(reading)}</span>`).join("");
  return `
    <button class="day-card${completed ? " is-completed" : ""}" type="button" data-day="${day.day}"
      aria-label="Abrir Día ${day.day}: ${escapeHTML(day.title)}${completed ? ", completado" : ""}">
      <span class="day-number">${completed ? "✓" : String(day.day).padStart(2, "0")}</span>
      <span class="day-body">
        <span class="day-status"><span>${completed ? "Recorrido" : `Facilita · ${escapeHTML(day.reader)}`}</span><span class="status-mark" aria-hidden="true"></span></span>
        <span class="day-card-title">${escapeHTML(day.title)}</span>
        <span class="day-subtitle">${escapeHTML(day.subtitle)}</span>
        <span class="day-readings" role="list">${readings}</span>
      </span>
      <span class="day-open" aria-hidden="true">↗</span>
    </button>`;
}

function renderDays() {
  const query = normalize(els.search.value.trim());
  const filtered = days.filter(day => {
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "upcoming" && day.upcoming) ||
      (activeFilter === "completed" && !day.upcoming && isCompleted(day.day)) ||
      (activeFilter === "pending" && !day.upcoming && !isCompleted(day.day));
    if (!matchesFilter) return false;
    if (!query) return true;
    const haystack = normalize([day.day, day.title, day.subtitle, day.reader, ...day.readings].join(" "));
    return haystack.includes(query);
  });

  els.grid.innerHTML = filtered.map(cardMarkup).join("");
  els.grid.hidden = filtered.length === 0;
  els.empty.hidden = filtered.length !== 0;
  els.grid.querySelectorAll("[data-day]").forEach(card => {
    card.addEventListener("click", () => openDay(Number(card.dataset.day)));
  });
}

function updateDashboard() {
  const completedCount = state.completed.length;
  const percent = Math.round((completedCount / availableDays.length) * 100);
  const next = nextAvailableDay();
  els.progressHalo.style.setProperty("--progress", percent);
  els.progressPercent.textContent = `${percent}%`;
  els.headerProgressText.textContent = `${completedCount} de ${availableDays.length}`;
  els.miniProgress.style.width = `${percent}%`;
  els.nextStepNumber.textContent = String(next.day).padStart(2, "0");
  els.nextStepTitle.textContent = completedCount === availableDays.length ? "Vuelve al eco que necesites" : next.title;
}

function renderNotes() {
  const noteDays = Object.keys(state.notes).map(Number).sort((a, b) => b - a);
  els.notesCount.textContent = `${noteDays.length} ${noteDays.length === 1 ? "reflexión" : "reflexiones"}`;
  if (!noteDays.length) {
    els.notes.innerHTML = `
      <div class="journal-empty">
        <span aria-hidden="true">✎</span>
        <strong>Tu primera huella comienza aquí</strong>
        <p>Abre cualquier día y escribe lo que deseas guardar en tu círculo.</p>
      </div>`;
    return;
  }
  els.notes.innerHTML = noteDays.slice(0, 5).map(number => {
    const day = days.find(item => item.day === number);
    return `
      <button class="note-row" type="button" data-note-day="${number}">
        <span>${String(number).padStart(2, "0")}</span>
        <span><strong>${escapeHTML(day.title)}</strong><small>${escapeHTML(state.notes[number])}</small></span>
        <span aria-hidden="true">↗</span>
      </button>`;
  }).join("");
  els.notes.querySelectorAll("[data-note-day]").forEach(row => {
    row.addEventListener("click", () => openDay(Number(row.dataset.noteDay)));
  });
}

function renderMeetingNotes() {
  document.querySelectorAll("[data-meeting-note]").forEach(textarea => {
    const meeting = Number(textarea.dataset.meetingNote);
    textarea.value = state.discussion[meeting] || "";
  });
}

function saveMeetingNote(meeting) {
  const textarea = document.querySelector(`[data-meeting-note="${meeting}"]`);
  if (!textarea) return;
  const value = textarea.value.trim();
  if (value) state.discussion[meeting] = value;
  else delete state.discussion[meeting];
  persistState();
  showToast(value ? `Tu aporte para el Encuentro ${meeting} quedó guardado.` : "El aporte vacío fue retirado.");
}

function dialogMarkup(day) {
  const completed = isCompleted(day.day);
  const note = state.notes[day.day] || "";
  const meta = [...day.readings, `Facilita: ${day.reader}`].map(item => `<li>${escapeHTML(item)}</li>`).join("");
  return `
    <div class="dialog-accent" aria-hidden="true"></div>
    <div class="dialog-content">
      <p class="dialog-dayline">Día ${day.day} · El eco de hoy</p>
      <h2 id="dialog-title">${escapeHTML(day.title)}</h2>
      <p class="dialog-subtitle">${escapeHTML(day.subtitle)}</p>
      <ul class="dialog-meta">${meta}</ul>
      <div class="dialog-prompt"><small>Dibuja el círculo</small><p>${escapeHTML(day.question)}</p></div>
      <p class="dialog-phrase">“${escapeHTML(day.phrase)}”</p>
      <label class="note-label" for="day-note"><span>Lo que deseo guardar</span><small>Solo se guarda en este dispositivo</small></label>
      <textarea id="day-note" maxlength="2500" placeholder="Escribe aquí tu oración, respuesta o descubrimiento…">${escapeHTML(note)}</textarea>
      <div class="dialog-actions">
        <button class="button button-save" id="save-note" type="button">Guardar mi reflexión</button>
        <button class="button button-complete${completed ? " is-completed" : ""}" id="toggle-complete" type="button">
          ${completed ? "✓ Día completado" : "Marcar como completado"}
        </button>
      </div>
      <a class="devotional-link" href="${BASE}${day.file}" target="_blank" rel="noopener">
        Escuchar y leer el devocional completo <span aria-hidden="true">↗</span>
      </a>
      <p class="privacy-note">Tu progreso y tus notas no se envían a ningún servidor.</p>
    </div>`;
}

function openDay(dayNumber) {
  const day = availableDays.find(item => item.day === dayNumber);
  if (!day) return;
  activeDay = day;
  state.lastOpened = dayNumber;
  persistState();
  els.dialogContent.innerHTML = dialogMarkup(day);
  document.body.classList.add("dialog-open");
  if (typeof els.dialog.showModal === "function") els.dialog.showModal();
  else els.dialog.setAttribute("open", "");

  document.querySelector("#save-note").addEventListener("click", saveActiveNote);
  document.querySelector("#toggle-complete").addEventListener("click", toggleActiveDay);
}

function closeDialog() {
  document.body.classList.remove("dialog-open");
  if (typeof els.dialog.close === "function") els.dialog.close();
  else els.dialog.removeAttribute("open");
  activeDay = null;
}

function saveActiveNote() {
  if (!activeDay) return;
  const value = document.querySelector("#day-note").value.trim();
  if (value) state.notes[activeDay.day] = value;
  else delete state.notes[activeDay.day];
  persistState();
  renderNotes();
  showToast(value ? "Tu reflexión quedó guardada." : "La reflexión vacía fue retirada.");
}

function toggleActiveDay() {
  if (!activeDay) return;
  const number = activeDay.day;
  const draft = document.querySelector("#day-note")?.value.trim();
  if (draft) state.notes[number] = draft;
  else delete state.notes[number];
  if (isCompleted(number)) state.completed = state.completed.filter(day => day !== number);
  else state.completed = [...state.completed, number].sort((a, b) => a - b);
  persistState();
  updateDashboard();
  renderDays();
  renderNotes();
  els.dialogContent.innerHTML = dialogMarkup(activeDay);
  document.querySelector("#save-note").addEventListener("click", saveActiveNote);
  document.querySelector("#toggle-complete").addEventListener("click", toggleActiveDay);
  showToast(isCompleted(number) ? `Día ${number} marcado como completado.` : `Día ${number} volvió a tu recorrido.`);
}

function exportJournal() {
  const noteDays = Object.keys(state.notes).map(Number).sort((a, b) => a - b);
  const meetingNotes = Object.keys(state.discussion).map(Number).sort((a, b) => a - b);
  if (!noteDays.length && !meetingNotes.length && !state.completed.length) {
    showToast("Aún no hay huellas para descargar.");
    return;
  }
  const lines = [
    "MI CÍRCULO · RONDA 12",
    "Siempre el protagonista es Jesús",
    "Desde el Profeta hasta la Revelación",
    "",
    `Días completados: ${state.completed.length} de ${availableDays.length}`,
    ""
  ];
  noteDays.forEach(number => {
    const day = availableDays.find(item => item.day === number);
    lines.push(`DÍA ${number} · ${day.title}`);
    lines.push(day.question);
    lines.push("");
    lines.push(state.notes[number]);
    lines.push("", "────────────────────────", "");
  });
  if (meetingNotes.length) {
    lines.push("APORTES PARA LOS ENCUENTROS", "");
    meetingNotes.forEach(number => {
      lines.push(`ENCUENTRO ${number}`);
      lines.push(state.discussion[number]);
      lines.push("", "────────────────────────", "");
    });
  }
  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Mi_Circulo_Ronda12.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Tu diario comenzó a descargarse.");
}

function showToast(message) {
  clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  toastTimer = setTimeout(() => els.toast.classList.remove("is-visible"), 2600);
}

els.search.addEventListener("input", renderDays);
els.clearSearch.addEventListener("click", () => {
  els.search.value = "";
  activeFilter = "all";
  els.filters.forEach(button => {
    const active = button.dataset.filter === "all";
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderDays();
  els.search.focus();
});
els.filters.forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    els.filters.forEach(item => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderDays();
  });
});
els.continueButton.addEventListener("click", () => openDay(nextAvailableDay().day));
els.nextStep.addEventListener("click", () => openDay(nextAvailableDay().day));
els.headerProgress.addEventListener("click", () => document.querySelector("#mi-circulo").scrollIntoView());
els.exportButton.addEventListener("click", exportJournal);
document.querySelectorAll("[data-save-meeting]").forEach(button => {
  button.addEventListener("click", () => saveMeetingNote(Number(button.dataset.saveMeeting)));
});
els.dialogClose.addEventListener("click", closeDialog);
els.dialog.addEventListener("click", event => { if (event.target === els.dialog) closeDialog(); });
els.dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  activeDay = null;
});

renderDays();
renderNotes();
renderMeetingNotes();
updateDashboard();

function registerWebMCP() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const register = tool => {
    try { void Promise.resolve(context.registerTool(tool)).catch(() => {}); } catch { /* Unsupported browser. */ }
  };
  const requireDay = input => {
    const day = Number(input?.day);
    if (!Number.isInteger(day) || day < 1 || day > 39) throw new Error("El día debe ser un número entre 1 y 39.");
    return day;
  };

  register({
    name: "open_devotional_day",
    title: "Abrir día devocional",
    description: "Abre en pantalla uno de los días publicados de la 12.ª ronda para leer su pregunta y escribir una reflexión.",
    inputSchema: {
      type: "object",
      properties: { day: { type: "integer", minimum: 1, maximum: 39 } },
      required: ["day"],
      additionalProperties: false
    },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute(input) {
      const day = requireDay(input);
      openDay(day);
      return { day, opened: true };
    }
  });

  register({
    name: "save_circle_reflection",
    title: "Guardar reflexión",
    description: "Guarda una reflexión personal para un día publicado y actualiza el espacio visible Mi círculo en este dispositivo.",
    inputSchema: {
      type: "object",
      properties: {
        day: { type: "integer", minimum: 1, maximum: 39 },
        reflection: { type: "string", minLength: 1, maxLength: 2500 }
      },
      required: ["day", "reflection"],
      additionalProperties: false
    },
    annotations: { readOnlyHint: false, untrustedContentHint: true },
    execute(input) {
      const day = requireDay(input);
      const reflection = typeof input?.reflection === "string" ? input.reflection.trim() : "";
      if (!reflection || reflection.length > 2500) throw new Error("La reflexión debe contener entre 1 y 2500 caracteres.");
      state.notes[day] = reflection;
      persistState();
      renderNotes();
      return { day, saved: true };
    }
  });

  register({
    name: "set_devotional_completion",
    title: "Actualizar progreso",
    description: "Marca o desmarca un día publicado como completado y actualiza el progreso visible de la ronda.",
    inputSchema: {
      type: "object",
      properties: {
        day: { type: "integer", minimum: 1, maximum: 39 },
        completed: { type: "boolean" }
      },
      required: ["day", "completed"],
      additionalProperties: false
    },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute(input) {
      const day = requireDay(input);
      if (typeof input?.completed !== "boolean") throw new Error("completed debe ser verdadero o falso.");
      state.completed = input.completed
        ? [...new Set([...state.completed, day])].sort((a, b) => a - b)
        : state.completed.filter(number => number !== day);
      persistState();
      updateDashboard();
      renderDays();
      return { day, completed: input.completed, completedCount: state.completed.length };
    }
  });

  register({
    name: "save_meeting_discussion_note",
    title: "Preparar aporte para un encuentro",
    description: "Guarda en este dispositivo una idea o pregunta para la conversación de uno de los cinco encuentros grupales.",
    inputSchema: {
      type: "object",
      properties: {
        meeting: { type: "integer", minimum: 1, maximum: 5 },
        contribution: { type: "string", minLength: 1, maxLength: 1800 }
      },
      required: ["meeting", "contribution"],
      additionalProperties: false
    },
    annotations: { readOnlyHint: false, untrustedContentHint: true },
    execute(input) {
      const meeting = Number(input?.meeting);
      const contribution = typeof input?.contribution === "string" ? input.contribution.trim() : "";
      if (!Number.isInteger(meeting) || meeting < 1 || meeting > 5) throw new Error("El encuentro debe ser un número entre 1 y 5.");
      if (!contribution || contribution.length > 1800) throw new Error("El aporte debe contener entre 1 y 1800 caracteres.");
      state.discussion[meeting] = contribution;
      persistState();
      renderMeetingNotes();
      return { meeting, saved: true };
    }
  });
}

registerWebMCP();
