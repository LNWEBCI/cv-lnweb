/**
 * CV Professionnel — N'GUESSAN KOUADION PREVOSTE MAUREL
 * Logique épurée, sobre, lisible et performante
 */

const AppState = {
  currentProfile: null,
  isCustomProfile: false,
  savedCustomProfiles: []
};

document.addEventListener('DOMContentLoaded', () => {
  // Mise à jour de l'année courante
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initIcons();
  loadSavedProfiles();
  initEventListeners();
  initFormRepeaters();
  checkUrlParamsOrStorage();
});

function initIcons() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

function loadSavedProfiles() {
  try {
    const saved = localStorage.getItem('lnweb_custom_cv');
    if (saved) {
      AppState.savedCustomProfiles = JSON.parse(saved);
    }
  } catch (err) {
    console.warn('Impossible de lire le localStorage:', err);
  }
}

function checkUrlParamsOrStorage() {
  const urlParams = new URLSearchParams(window.location.search);
  const cvId = urlParams.get('cv');

  if (cvId === 'custom' && AppState.savedCustomProfiles.length > 0) {
    loadProfile(AppState.savedCustomProfiles[AppState.savedCustomProfiles.length - 1], true);
  } else {
    loadProfile(window.defaultProfile, false);
  }
}

/**
 * Charge et affiche un profil donné dans le CV
 */
function loadProfile(p, isCustom = false) {
  AppState.currentProfile = p;
  AppState.isCustomProfile = isCustom;

  // En-tête du CV
  const cvName = document.getElementById('cvName');
  const cvTitle = document.getElementById('cvTitle');
  const cvBio = document.getElementById('cvBio');
  const cvEmail = document.getElementById('cvEmail');
  const cvPhone = document.getElementById('cvPhone');
  const cvLocation = document.getElementById('cvLocation');
  const cvAvailability = document.getElementById('cvAvailability');
  const cvPhoto = document.getElementById('cvPhoto');
  const cvPhotoWrap = document.getElementById('cvPhotoWrap');

  if (cvPhoto && cvPhotoWrap) {
    if (p.photo) {
      cvPhoto.src = p.photo;
      cvPhotoWrap.style.display = 'block';
    } else {
      cvPhotoWrap.style.display = 'none';
    }
  }

  if (cvName) cvName.textContent = p.fullName;
  if (cvTitle) cvTitle.textContent = p.title;
  if (cvBio) cvBio.textContent = p.bio;

  if (cvEmail) {
    cvEmail.textContent = p.email;
    cvEmail.href = `mailto:${p.email}`;
  }
  if (cvPhone) {
    cvPhone.textContent = p.phone || "+225 07 58 95 12 26 / 05 95 35 69 28";
    cvPhone.href = `tel:+2250758951226`;
  }
  if (cvLocation) {
    cvLocation.textContent = p.location || "Abidjan, Côte d'Ivoire";
  }
  if (cvAvailability && p.availability) {
    cvAvailability.textContent = p.availability;
  }

  // Rendu des sections
  renderExperience(p);
  renderEducation(p);
  renderSkills(p);
  renderHobbies(p);
  renderSocials(p);
  updateCustomBanner(p, isCustom);

  document.title = `${p.fullName} | CV Professionnel — ${p.title}`;
  initIcons();
}

/**
 * Met à jour la bannière de profil personnalisé
 */
function updateCustomBanner(profile, isCustom) {
  const banner = document.getElementById('customCvBanner');
  const bannerText = document.getElementById('customCvBannerText');
  if (!banner) return;

  if (isCustom) {
    banner.classList.add('active');
    bannerText.innerHTML = `Affichage en cours : <strong>CV personnalisé de ${escapeHtml(profile.fullName)}</strong>`;
  } else {
    banner.classList.remove('active');
  }
}

/**
 * Rendu des Expériences Professionnelles
 */
function renderExperience(p) {
  const container = document.getElementById('cvExpList');
  if (!container) return;

  const exps = p.experience || [];
  if (exps.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem;">Aucune expérience renseignée.</p>`;
    return;
  }

  container.innerHTML = exps.map(exp => `
    <div class="exp-item">
      <div class="exp-header-row">
        <h3 class="exp-role">${escapeHtml(exp.role)}</h3>
        <span class="exp-period">${escapeHtml(exp.period)}</span>
      </div>
      <div class="exp-company-sub">
        <i data-lucide="briefcase"></i>
        <span>${escapeHtml(exp.company)}</span>
        ${exp.location ? `<span style="color:var(--text-muted); font-size:0.8rem; font-weight:normal;">(${escapeHtml(exp.location)})</span>` : ''}
      </div>
      ${exp.description ? `<p class="exp-description">${escapeHtml(exp.description)}</p>` : ''}
      ${exp.tasks && exp.tasks.length > 0 ? `
        <ul class="exp-tasks-list">
          ${exp.tasks.map(t => `<li class="exp-task-item">${escapeHtml(t)}</li>`).join('')}
        </ul>
      ` : ''}
    </div>
  `).join('');
}

/**
 * Rendu des Formations Académiques
 */
function renderEducation(p) {
  const container = document.getElementById('cvEduList');
  if (!container) return;

  const edus = p.education || [];
  if (edus.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem;">Aucune formation renseignée.</p>`;
    return;
  }

  container.innerHTML = edus.map(edu => `
    <div class="edu-item">
      <div class="edu-header-row">
        <h3 class="edu-degree">${escapeHtml(edu.degree)}</h3>
        <span class="edu-period">${escapeHtml(edu.period)}</span>
      </div>
      <div class="edu-school">
        <i data-lucide="landmark" style="width:14px; height:14px; display:inline-block; vertical-align:middle; margin-right:4px;"></i>
        ${escapeHtml(edu.school)} ${edu.location ? `<span style="color:var(--text-muted); font-size:0.8rem; font-weight:normal;">• ${escapeHtml(edu.location)}</span>` : ''}
      </div>
      ${edu.highlight ? `<div class="edu-highlight">${escapeHtml(edu.highlight)}</div>` : ''}
    </div>
  `).join('');
}

/**
 * Rendu des Compétences
 */
function renderSkills(p) {
  const container = document.getElementById('cvSkillsList');
  if (!container) return;

  const badges = p.badges || [];
  if (badges.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); font-size:0.85rem;">Aucune compétence listée.</p>`;
    return;
  }

  container.innerHTML = badges.map((badge, idx) => `
    <span class="skill-tag ${idx < 3 ? 'featured' : ''}">
      <span class="skill-tag-dot"></span>
      ${escapeHtml(badge)}
    </span>
  `).join('');
}

/**
 * Rendu des Loisirs / Centres d'Intérêt
 */
function renderHobbies(p) {
  const container = document.getElementById('cvHobbiesList');
  if (!container) return;

  const hobbies = p.hobbies || [
    { name: "Lecture", description: "Veille technologique & livres de développement.", icon: "book-open" },
    { name: "Musique", description: "Inspiration créative et écoute attentive.", icon: "music" }
  ];

  container.innerHTML = hobbies.map(h => `
    <div class="hobby-clean-item">
      <i data-lucide="${escapeHtml(h.icon || 'heart')}"></i>
      <div>
        <h4>${escapeHtml(h.name)}</h4>
        <p>${escapeHtml(h.description)}</p>
      </div>
    </div>
  `).join('');
}

/**
 * Dictionnaire d'icônes SVG officielles pour les réseaux sociaux
 */
const SOCIAL_ICONS = {
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z"/></svg>`,
  whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34 1 2.5c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28s-1.44-.71-1.66-.79c-.22-.08-.38-.12-.54.12s-.63.79-.77.95c-.14.16-.28.18-.53.06s-1.05-.39-2-1.23c-.74-.66-1.24-1.47-1.38-1.72s-.02-.38.11-.5c.11-.11.25-.29.37-.43.12-.14.16-.24.25-.4.08-.16.04-.31-.02-.43-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.55-.42l-.47-.01Z"/></svg>`,
  facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>`,
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`
};

/**
 * Rendu des Réseaux Sociaux (sans Twitter ni GitHub, avec icône nette devant chaque lien)
 */
function renderSocials(p) {
  const container = document.getElementById('cvSocialsList');
  if (!container) return;

  const rawSocials = p.socials || [
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "WhatsApp", url: "https://wa.me/2250758951226", icon: "whatsapp" },
    { name: "Facebook", url: "https://facebook.com", icon: "facebook" },
    { name: "Instagram", url: "https://instagram.com", icon: "instagram" }
  ];

  // Filtrer pour éliminer Twitter / X et GitHub
  const filtered = rawSocials.filter(s => {
    const key = ((s.name || '') + ' ' + (s.icon || '')).toLowerCase();
    return !key.includes('twitter') && !key.includes('github');
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); font-size:0.85rem;">Aucun réseau configuré.</p>`;
    return;
  }

  container.innerHTML = filtered.map(s => {
    const key = ((s.icon || '') + ' ' + (s.name || '')).toLowerCase();
    let svgIcon = '';

    if (key.includes('linkedin')) {
      svgIcon = SOCIAL_ICONS.linkedin;
    } else if (key.includes('whatsapp')) {
      svgIcon = SOCIAL_ICONS.whatsapp;
    } else if (key.includes('facebook')) {
      svgIcon = SOCIAL_ICONS.facebook;
    } else if (key.includes('instagram')) {
      svgIcon = SOCIAL_ICONS.instagram;
    } else {
      svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`;
    }

    return `
      <a href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer" class="social-clean-link" title="${escapeHtml(s.label || s.name)}">
        <span class="social-icon-box">${svgIcon}</span>
        <span class="social-name-text">${escapeHtml(s.name)}</span>
      </a>
    `;
  }).join('');
}

/**
 * Initialisation des gestionnaires d'événements
 */
function initEventListeners() {
  // Modale Devis
  const quoteModal = document.getElementById('quoteModal');
  const openQuoteBtns = document.querySelectorAll('.btn-open-quote');
  const closeQuoteBtn = document.getElementById('closeQuoteBtn');

  openQuoteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(quoteModal);
    });
  });

  if (closeQuoteBtn) {
    closeQuoteBtn.addEventListener('click', () => closeModal(quoteModal));
  }

  // Modale Créateur de CV
  const cvBuilderModal = document.getElementById('cvBuilderModal');
  const openBuilderBtns = document.querySelectorAll('.btn-open-builder');
  const closeBuilderBtn = document.getElementById('closeBuilderBtn');

  openBuilderBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(cvBuilderModal);
    });
  });

  if (closeBuilderBtn) {
    closeBuilderBtn.addEventListener('click', () => closeModal(cvBuilderModal));
  }

  // Fermeture modale backdrop & Escape
  [quoteModal, cvBuilderModal].forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(quoteModal);
      closeModal(cvBuilderModal);
    }
  });

  // Actions de la bannière profil personnalisé
  const btnResetToOfficial = document.getElementById('btnResetToOfficial');
  const btnEditCustomCv = document.getElementById('btnEditCustomCv');
  const btnPrintPdf = document.querySelectorAll('.btn-print-pdf');

  if (btnResetToOfficial) {
    btnResetToOfficial.addEventListener('click', () => {
      loadProfile(window.defaultProfile, false);
      showToast('CV officiel de Maurel rétabli !', 'info');
    });
  }

  if (btnEditCustomCv) {
    btnEditCustomCv.addEventListener('click', () => {
      openModal(cvBuilderModal);
    });
  }

  btnPrintPdf.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      triggerPdfPrint();
    });
  });

  initQuoteForm();
  initCvBuilderForm();
}

function openModal(modal) {
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  initIcons();
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

/**
 * Formulaire de devis (vers serviceslnweb@gmail.com)
 */
function initQuoteForm() {
  const btnSendEmail = document.getElementById('btnSendQuoteEmail');
  const btnSendWhatsapp = document.getElementById('btnSendQuoteWhatsapp');
  const btnCopyQuote = document.getElementById('btnCopyQuote');

  function buildQuoteData() {
    const clientName = document.getElementById('quoteClientName').value.trim();
    const clientEmail = document.getElementById('quoteClientEmail').value.trim();
    const clientPhone = document.getElementById('quoteClientPhone').value.trim();
    const projectType = document.querySelector('input[name="quoteService"]:checked')?.value || "Création de site web";
    const budget = document.getElementById('quoteBudget').value;
    const deadline = document.getElementById('quoteDeadline').value;
    const details = document.getElementById('quoteDetails').value.trim();

    if (!clientName || !clientEmail || !details) {
      showToast('Veuillez renseigner votre nom, email et les détails du projet.', 'warning');
      return null;
    }

    const emailSubject = `[DEMANDE DE DEVIS CV] ${projectType} — ${clientName}`;
    const emailBody = 
`Bonjour N'GUESSAN KOUADION PREVOSTE MAUREL,

Je souhaite solliciter vos services. Voici les détails de ma demande :

- Nom du client : ${clientName}
- Email : ${clientEmail}
- Téléphone / WhatsApp : ${clientPhone || "Non renseigné"}
- Prestation souhaitée : ${projectType}
- Budget estimé : ${budget}
- Délai souhaité : ${deadline}

Détails du besoin :
${details}

Cordialement,
${clientName}`;

    return { clientName, clientEmail, clientPhone, projectType, budget, deadline, details, emailSubject, emailBody };
  }

  if (btnSendEmail) {
    btnSendEmail.addEventListener('click', (e) => {
      e.preventDefault();
      const quote = buildQuoteData();
      if (!quote) return;

      const recipient = "serviceslnweb@gmail.com";
      const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(quote.emailSubject)}&body=${encodeURIComponent(quote.emailBody)}`;

      window.location.href = mailtoUrl;
      showToast('Ouverture de votre boîte mail pour envoi à serviceslnweb@gmail.com !', 'success');
      setTimeout(() => closeModal(document.getElementById('quoteModal')), 1200);
    });
  }

  if (btnSendWhatsapp) {
    btnSendWhatsapp.addEventListener('click', (e) => {
      e.preventDefault();
      const quote = buildQuoteData();
      if (!quote) return;

      const whatsappText = `*DEMANDE DE DEVIS*%0A*Nom:* ${encodeURIComponent(quote.clientName)}%0A*Email:* ${encodeURIComponent(quote.clientEmail)}%0A*Projet:* ${encodeURIComponent(quote.projectType)}%0A*Détails:* ${encodeURIComponent(quote.details)}`;
      window.open(`https://wa.me/2250758951226?text=${whatsappText}`, '_blank');
      showToast('Ouverture de WhatsApp !', 'success');
    });
  }

  if (btnCopyQuote) {
    btnCopyQuote.addEventListener('click', (e) => {
      e.preventDefault();
      const quote = buildQuoteData();
      if (!quote) return;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(quote.emailBody).then(() => {
          showToast('Devis copié dans le presse-papier !', 'success');
        });
      }
    });
  }
}

/**
 * Initialisation des onglets et listes dynamiques du créateur de CV
 */
function initFormRepeaters() {
  const tabs = document.querySelectorAll('.builder-tab-btn');
  const panes = document.querySelectorAll('.builder-tab-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPane = document.getElementById(tab.dataset.target);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  const btnAddExp = document.getElementById('btnAddExpItem');
  const expListContainer = document.getElementById('builderExpList');
  if (btnAddExp && expListContainer) {
    btnAddExp.addEventListener('click', () => addExperienceItem(expListContainer));
  }

  const btnAddEdu = document.getElementById('btnAddEduItem');
  const eduListContainer = document.getElementById('builderEduList');
  if (btnAddEdu && eduListContainer) {
    btnAddEdu.addEventListener('click', () => addEducationItem(eduListContainer));
  }

  const btnFillPreset = document.getElementById('btnFillPreset');
  if (btnFillPreset) {
    btnFillPreset.addEventListener('click', () => {
      fillBuilderWithProfile(window.samplePresetProfile);
      showToast('Modèle pré-rempli !', 'info');
    });
  }
}

function addExperienceItem(container, data = null) {
  const item = document.createElement('div');
  item.className = 'dynamic-card-item exp-item-row';
  item.innerHTML = `
    <button type="button" class="btn-delete-item" title="Supprimer">&times;</button>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Poste occupé <span class="req">*</span></label>
        <input type="text" class="form-input exp-role" placeholder="Ex: Développeur Web" value="${data ? escapeHtml(data.role) : ''}" required>
      </div>
      <div class="form-group">
        <label class="form-label">Entreprise <span class="req">*</span></label>
        <input type="text" class="form-input exp-company" placeholder="Ex: Entreprise Tech" value="${data ? escapeHtml(data.company) : ''}" required>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Période <span class="req">*</span></label>
        <input type="text" class="form-input exp-period" placeholder="Ex: 2023 — 2025" value="${data ? escapeHtml(data.period) : ''}" required>
      </div>
      <div class="form-group">
        <label class="form-label">Lieu</label>
        <input type="text" class="form-input exp-location" placeholder="Ex: Abidjan" value="${data ? escapeHtml(data.location || '') : ''}">
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Missions principales (1 par ligne)</label>
      <textarea class="form-textarea exp-tasks" rows="3" placeholder="Ex: Conception du site web&#10;Maintenance technique">${data && data.tasks ? data.tasks.join('\n') : (data?.description || '')}</textarea>
    </div>
  `;

  item.querySelector('.btn-delete-item').addEventListener('click', () => item.remove());
  container.appendChild(item);
}

function addEducationItem(container, data = null) {
  const item = document.createElement('div');
  item.className = 'dynamic-card-item edu-item-row';
  item.innerHTML = `
    <button type="button" class="btn-delete-item" title="Supprimer">&times;</button>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Diplôme <span class="req">*</span></label>
        <input type="text" class="form-input edu-degree-val" placeholder="Ex: BTS Informatique" value="${data ? escapeHtml(data.degree) : ''}" required>
      </div>
      <div class="form-group">
        <label class="form-label">Établissement <span class="req">*</span></label>
        <input type="text" class="form-input edu-school-val" placeholder="Ex: Université" value="${data ? escapeHtml(data.school) : ''}" required>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Année ou Période <span class="req">*</span></label>
        <input type="text" class="form-input edu-period-val" placeholder="Ex: 2020" value="${data ? escapeHtml(data.period) : ''}" required>
      </div>
      <div class="form-group">
        <label class="form-label">Lieu</label>
        <input type="text" class="form-input edu-location-val" placeholder="Ex: Abidjan" value="${data ? escapeHtml(data.location || '') : ''}">
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Précisions</label>
      <input type="text" class="form-input edu-highlight-val" placeholder="Ex: Mention Bien" value="${data ? escapeHtml(data.highlight || '') : ''}">
    </div>
  `;

  item.querySelector('.btn-delete-item').addEventListener('click', () => item.remove());
  container.appendChild(item);
}

function fillBuilderWithProfile(p) {
  document.getElementById('bldFullName').value = p.fullName || '';
  document.getElementById('bldTitle').value = p.title || '';
  document.getElementById('bldEmail').value = p.email || '';
  document.getElementById('bldPhone').value = p.phone || '';
  document.getElementById('bldLocation').value = p.location || '';
  document.getElementById('bldBio').value = p.bio || '';
  document.getElementById('bldSkills').value = (p.badges || []).join(', ');

  const expContainer = document.getElementById('builderExpList');
  expContainer.innerHTML = '';
  (p.experience || []).forEach(exp => addExperienceItem(expContainer, exp));

  const eduContainer = document.getElementById('builderEduList');
  eduContainer.innerHTML = '';
  (p.education || []).forEach(edu => addEducationItem(eduContainer, edu));

  if (p.hobbies && p.hobbies.length > 0) {
    document.getElementById('bldHobbies').value = p.hobbies.map(h => h.name).join(', ');
  }
}

function initCvBuilderForm() {
  const form = document.getElementById('cvBuilderForm');
  if (!form) return;

  const expContainer = document.getElementById('builderExpList');
  const eduContainer = document.getElementById('builderEduList');
  if (expContainer && expContainer.children.length === 0) addExperienceItem(expContainer);
  if (eduContainer && eduContainer.children.length === 0) addEducationItem(eduContainer);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('bldFullName').value.trim();
    const title = document.getElementById('bldTitle').value.trim();
    const email = document.getElementById('bldEmail').value.trim();
    const phone = document.getElementById('bldPhone').value.trim();
    const location = document.getElementById('bldLocation').value.trim();
    const bio = document.getElementById('bldBio').value.trim();

    if (!fullName || !title || !email) {
      showToast('Veuillez renseigner votre nom, titre et email.', 'warning');
      return;
    }

    const rawSkills = document.getElementById('bldSkills').value.split(',').map(s => s.trim()).filter(Boolean);
    const badges = rawSkills.length > 0 ? rawSkills : ["Développeur Web", "Vibe Coding", "Gestion de projet"];

    const expRows = document.querySelectorAll('.exp-item-row');
    const experience = [];
    expRows.forEach(row => {
      const role = row.querySelector('.exp-role').value.trim();
      const company = row.querySelector('.exp-company').value.trim();
      const period = row.querySelector('.exp-period').value.trim();
      const loc = row.querySelector('.exp-location').value.trim();
      const rawTasks = row.querySelector('.exp-tasks').value.trim();

      if (role && company) {
        const tasks = rawTasks ? rawTasks.split('\n').map(t => t.trim()).filter(Boolean) : [];
        experience.push({
          role,
          company,
          period: period || "Période",
          location: loc,
          description: tasks.length > 0 ? tasks[0] : "",
          tasks: tasks.length > 1 ? tasks.slice(1) : tasks
        });
      }
    });

    const eduRows = document.querySelectorAll('.edu-item-row');
    const education = [];
    eduRows.forEach(row => {
      const degree = row.querySelector('.edu-degree-val').value.trim();
      const school = row.querySelector('.edu-school-val').value.trim();
      const period = row.querySelector('.edu-period-val').value.trim();
      const loc = row.querySelector('.edu-location-val').value.trim();
      const highlight = row.querySelector('.edu-highlight-val').value.trim();

      if (degree && school) {
        education.push({ degree, school, period: period || "Année", location: loc, highlight });
      }
    });

    const rawHobbies = document.getElementById('bldHobbies').value.split(',').map(h => h.trim()).filter(Boolean);
    const hobbies = rawHobbies.length > 0 ? rawHobbies.map(name => ({
      name,
      description: `Activité personnelle et passion.`,
      icon: "heart"
    })) : [
      { name: "Lecture", description: "Veille technologique et apprentissage continu.", icon: "book-open" },
      { name: "Musique", description: "Inspiration créative.", icon: "music" }
    ];

    const newProfile = {
      fullName,
      title,
      email,
      phone,
      location: location || "Côte d'Ivoire",
      availability: "Disponible",
      bio: bio || `Professionnel motivé en ${title}.`,
      badges,
      experience: experience.length > 0 ? experience : window.defaultProfile.experience,
      education: education.length > 0 ? education : window.defaultProfile.education,
      hobbies,
      socials: [
        { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
        { name: "Email", url: `mailto:${email}`, icon: "mail" }
      ]
    };

    AppState.savedCustomProfiles.push(newProfile);
    try {
      localStorage.setItem('lnweb_custom_cv', JSON.stringify(AppState.savedCustomProfiles));
    } catch (err) {}

    loadProfile(newProfile, true);
    closeModal(document.getElementById('cvBuilderModal'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(`Votre CV a été créé avec succès !`, 'success');
  });
}

function triggerPdfPrint() {
  showToast('Préparation de l\'impression PDF...', 'info');
  setTimeout(() => window.print(), 250);
}

function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 350);
  }, 3500);
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
