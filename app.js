/**
 * NIDHI MEDICAL STORE - CORE INTERACTIVE ENGINE
 * Features: Dark/Light Mode, Live Store Open/Closed Calculation,
 * WhatsApp Prescription Dispatcher, Dynamic Section Toggles,
 * Dynamic Services & Medicine Catalog Management, Flexible PIN authentication.
 */

// -----------------------------------------------------------------------------
// 1. DEFAULT CONFIGURATION & INVENTORIES
// -----------------------------------------------------------------------------
const DEFAULT_STORE_CONFIG = {
  shopName: "Nidhi Medical Store",
  phone: "9453133632",
  address: "Maghar, Sant Kabir Nagar, Uttar Pradesh",
  openTime: "08:30",
  closeTime: "20:30",
  noticeText: "Welcome to Nidhi Medical Store! Send your prescription via WhatsApp for express pickup & home delivery in Maghar.",
  pin: "113114", // Accepts 113114 or 1234
  mapQuery: "Nidhi Medical Store Maghar Sant Kabir Nagar",
  showServices: true,
  showMedicines: true,
  showPrescription: true,
  showNotice: true,
  showLocation: true
};

const DEFAULT_SERVICES = [
  {
    id: "srv_1",
    title: "Blood Pressure (BP) Monitoring",
    tag: "Instant Result",
    desc: "Digital & manual sphygmomanometer checks for accurate systolic & diastolic pressure readings. Keep hypertension in check.",
    icon: "fa-heart-circle-bolt"
  },
  {
    id: "srv_2",
    title: "Blood Glucose (Sugar) Test",
    tag: "Quick & Safe",
    desc: "Instant fasting and random blood sugar testing with sterile single-use lancets for diabetes tracking.",
    icon: "fa-droplet"
  },
  {
    id: "srv_3",
    title: "Nebulization Therapy",
    tag: "Respiratory Relief",
    desc: "Medical nebulizer facility for kids and adults suffering from acute asthma, wheezing, bronchitis, and chest congestion.",
    icon: "fa-lungs"
  },
  {
    id: "srv_4",
    title: "Pulse Oximetry & Vitals",
    tag: "Complimentary",
    desc: "Instant blood oxygen saturation (SpO2) and pulse rate check. Crucial for elderly patients and viral respiratory recovery.",
    icon: "fa-wave-square"
  },
  {
    id: "srv_5",
    title: "First Aid & Minor Dressing",
    tag: "Immediate Care",
    desc: "Antiseptic dressing, minor wound cleaning, burn care, and bandaging supplies for accidental home injuries.",
    icon: "fa-bandage"
  },
  {
    id: "srv_6",
    title: "Weight & Wellness Check",
    tag: "Free Service",
    desc: "Calibrated electronic weighing scale and friendly pharmacist consultation on vitamins, dosage, and healthy living.",
    icon: "fa-weight-scale"
  }
];

const DEFAULT_MEDICINES = [
  {
    id: "med_1",
    name: "Paracetamol 650mg / Dolo",
    category: "otc",
    categoryName: "Daily OTC",
    desc: "Fast relief for fever, headache, body ache, and mild flu symptoms.",
    badge: "Fast Relief"
  },
  {
    id: "med_2",
    name: "Telmisartan 40mg (BP Care)",
    category: "chronic",
    categoryName: "Chronic Care",
    desc: "Essential cardiovascular medicine for blood pressure maintenance.",
    badge: "Rx Required"
  },
  {
    id: "med_3",
    name: "Metformin 500mg SR (Glycomet)",
    category: "chronic",
    categoryName: "Chronic Care",
    desc: "Oral anti-diabetic tablet for blood sugar control.",
    badge: "Rx Required"
  },
  {
    id: "med_4",
    name: "Pampers & MamyPoko Baby Diapers",
    category: "baby",
    categoryName: "Baby Care",
    desc: "Ultra-absorbent soft diapers for all baby sizes (NB, S, M, L, XL).",
    badge: "Top Seller"
  },
  {
    id: "med_5",
    name: "Dabur Chyawanprash & Honey",
    category: "ayurvedic",
    categoryName: "Ayurvedic",
    desc: "Time-tested immunity booster with pure amla and 40+ herbal extracts.",
    badge: "Natural"
  },
  {
    id: "med_6",
    name: "Sterile Gauge, Bandages & Cotton",
    category: "surgical",
    categoryName: "Surgicals",
    desc: "Hospital-grade sterile dressing, roll bandages, micropore tape.",
    badge: "Sterile Pack"
  },
  {
    id: "med_7",
    name: "Betadine Antiseptic Ointment",
    category: "otc",
    categoryName: "Daily OTC",
    desc: "Povidone-iodine for minor cuts, wounds, burns, and infection prevention.",
    badge: "First Aid"
  },
  {
    id: "med_8",
    name: "Oral Rehydration Salts (ORS)",
    category: "otc",
    categoryName: "Daily OTC",
    desc: "WHO formula rehydration powder for dehydration and stamina recovery.",
    badge: "Instant Energy"
  },
  {
    id: "med_9",
    name: "Lactogen / Cerelac Baby Food",
    category: "baby",
    categoryName: "Baby Care",
    desc: "Infant milk formula and baby cereals for healthy toddler growth.",
    badge: "Nutritious"
  },
  {
    id: "med_10",
    name: "Himalaya Liv.52 & Herbal Syrups",
    category: "ayurvedic",
    categoryName: "Ayurvedic",
    desc: "Pure ayurvedic health tonics for liver health and digestive comfort.",
    badge: "Herbal"
  },
  {
    id: "med_11",
    name: "Digital Thermometer & Nebulizer Kit",
    category: "surgical",
    categoryName: "Surgicals",
    desc: "Rapid response digital thermometers and adult/child nebulizer kits.",
    badge: "Diagnostic"
  },
  {
    id: "med_12",
    name: "Calcium + Vitamin D3 Tablets",
    category: "chronic",
    categoryName: "Wellness",
    desc: "Daily nutritional supplements for joint strength and bone health.",
    badge: "Daily Vital"
  }
];

// Load Store Config
function getStoreConfig() {
  const saved = localStorage.getItem("nidhi_store_config");
  if (saved) {
    try {
      return { ...DEFAULT_STORE_CONFIG, ...JSON.parse(saved) };
    } catch (e) {
      console.error("Config parse error", e);
    }
  }
  return { ...DEFAULT_STORE_CONFIG };
}

function saveStoreConfig(cfg) {
  localStorage.setItem("nidhi_store_config", JSON.stringify(cfg));
}

// Load Services List
function getServicesList() {
  const saved = localStorage.getItem("nidhi_services_list");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Services parse error", e);
    }
  }
  return [...DEFAULT_SERVICES];
}

function saveServicesList(list) {
  localStorage.setItem("nidhi_services_list", JSON.stringify(list));
}

// Load Medicines Inventory
function getMedicinesList() {
  const saved = localStorage.getItem("nidhi_med_inventory");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Medicines parse error", e);
    }
  }
  return [...DEFAULT_MEDICINES];
}

function saveMedicinesList(list) {
  localStorage.setItem("nidhi_med_inventory", JSON.stringify(list));
}

// Global Active States
let currentConfig = getStoreConfig();
let currentServices = getServicesList();
let currentMedicines = getMedicinesList();

// -----------------------------------------------------------------------------
// 2. DOM INITIALIZATION
// -----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  applyStoreConfig(currentConfig);
  applySectionVisibility(currentConfig);
  initRealtimeStatus();
  initNoticeBar();
  initPrescriptionForm();
  renderServices(currentServices);
  initMedicineCatalog();
  initAdminDashboard();
  initHeroTilt();
  initScrollEffects();
  initMobileMenu();

  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// -----------------------------------------------------------------------------
// 3. THEME MANAGEMENT
// -----------------------------------------------------------------------------
function initTheme() {
  const savedTheme = localStorage.getItem("nidhi_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("nidhi_theme", next);

      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute("content", next === "dark" ? "#070d18" : "#f4f7fb");
      }

      showToast(`Switched to ${next === "dark" ? "Dark Cyber" : "Crisp Light"} Mode`, "success");
    });
  }
}

// -----------------------------------------------------------------------------
// 4. APPLY STORE CONFIGURATION
// -----------------------------------------------------------------------------
function applyStoreConfig(cfg) {
  // Shop Name targets
  const nameTargets = ["displayShopName", "heroShopName", "mapShopName", "footerShopName", "footerCopyName"];
  nameTargets.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = cfg.shopName;
  });

  // Address targets
  const addrTargets = ["displayShopLocation", "heroAddress", "mapAddressDisplay", "footerAddressText"];
  addrTargets.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === "footerAddressText") {
        el.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${cfg.address}`;
      } else {
        el.textContent = cfg.address;
      }
    }
  });

  // Time formatting
  const formatTime = (timeStr) => {
    const [h, m] = timeStr.split(":").map(Number);
    const ampm = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 || 12;
    const minFormatted = m < 10 ? `0${m}` : m;
    return `${hour12}:${minFormatted} ${ampm}`;
  };

  const formattedHours = `${formatTime(cfg.openTime)} – ${formatTime(cfg.closeTime)}`;
  const heroTimings = document.getElementById("heroTimings");
  if (heroTimings) heroTimings.textContent = `${formattedHours} Everyday`;

  const mapTimings = document.getElementById("mapTimingsDisplay");
  if (mapTimings) mapTimings.textContent = `${formattedHours} (Open 7 Days a Week)`;

  const scheduleTimings = document.getElementById("scheduleTimings");
  if (scheduleTimings) scheduleTimings.textContent = formattedHours;

  const footerHours = document.getElementById("footerHoursText");
  if (footerHours) footerHours.innerHTML = `<i class="fa-solid fa-clock"></i> ${formattedHours}`;

  // Phone numbers & WhatsApp Links
  const cleanPhone = cfg.phone.replace(/[^0-9]/g, "");
  const formattedPhone = `+91 ${cleanPhone.slice(-10).replace(/(\d{5})(\d{5})/, "$1 $2")}`;

  const callTargets = ["heroCallBtn", "calloutPhoneLink", "mapQuickCall", "contactCallBtn", "footerPhoneLink", "floatCallBtn"];
  callTargets.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = `tel:+91${cleanPhone}`;
  });

  const callDisplayTargets = ["calloutPhoneDisplay", "mapPhoneDisplay"];
  callDisplayTargets.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = formattedPhone;
  });

  const waUrl = `https://wa.me/91${cleanPhone}?text=Hello%20${encodeURIComponent(cfg.shopName)},%20I%20have%20an%20enquiry`;
  const waTargets = ["floatWaBtn", "contactWaBtn", "footerWaLink", "askAvailBtn"];
  waTargets.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = waUrl;
  });

  // Notice Text
  const noticeEl = document.getElementById("noticeText");
  if (noticeEl) noticeEl.textContent = cfg.noticeText;

  // Google Maps Direction Link & Query
  const mapLink = document.getElementById("googleMapsLink");
  if (mapLink) {
    const query = encodeURIComponent(cfg.mapQuery || `${cfg.shopName} ${cfg.address}`);
    mapLink.href = `https://www.google.com/maps/search/?api=1&query=${query}`;
  }

  // Google Maps Iframe Query
  const mapFrame = document.getElementById("googleMapFrame");
  if (mapFrame) {
    const query = encodeURIComponent(cfg.mapQuery || `${cfg.shopName} Maghar Sant Kabir Nagar`);
    mapFrame.src = `https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  }
}

// -----------------------------------------------------------------------------
// 5. SECTION VISIBILITY CONTROLLER
// -----------------------------------------------------------------------------
function applySectionVisibility(cfg) {
  // Services Section
  const servicesSec = document.getElementById("services");
  const navLinkServices = document.getElementById("navLinkServices");
  if (servicesSec) servicesSec.style.display = cfg.showServices !== false ? "block" : "none";
  if (navLinkServices) navLinkServices.style.display = cfg.showServices !== false ? "inline-flex" : "none";

  // Medicines Section
  const medSec = document.getElementById("medicines");
  const navLinkProducts = document.getElementById("navLinkProducts");
  if (medSec) medSec.style.display = cfg.showMedicines !== false ? "block" : "none";
  if (navLinkProducts) navLinkProducts.style.display = cfg.showMedicines !== false ? "inline-flex" : "none";

  // Prescription Order Section
  const rxSec = document.getElementById("prescription");
  const navLinkRx = document.getElementById("navLinkRx");
  const navCtaBtn = document.getElementById("navCtaBtn");
  if (rxSec) rxSec.style.display = cfg.showPrescription !== false ? "block" : "none";
  if (navLinkRx) navLinkRx.style.display = cfg.showPrescription !== false ? "inline-flex" : "none";
  if (navCtaBtn) navCtaBtn.style.display = cfg.showPrescription !== false ? "inline-flex" : "none";

  // Notice Bar
  const noticeBar = document.getElementById("noticeBar");
  if (noticeBar) {
    if (cfg.showNotice === false || sessionStorage.getItem("nidhi_notice_closed") === "true") {
      noticeBar.style.display = "none";
    } else {
      noticeBar.style.display = "flex";
    }
  }

  // Location Section
  const locSec = document.getElementById("location");
  const navLinkMap = document.getElementById("navLinkMap");
  if (locSec) locSec.style.display = cfg.showLocation !== false ? "block" : "none";
  if (navLinkMap) navLinkMap.style.display = cfg.showLocation !== false ? "inline-flex" : "none";
}

// -----------------------------------------------------------------------------
// 6. REAL-TIME STORE OPEN / CLOSED CALCULATION
// -----------------------------------------------------------------------------
function initRealtimeStatus() {
  function checkStatus() {
    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentTimeVal = currentHours * 60 + currentMinutes;

    const [openH, openM] = currentConfig.openTime.split(":").map(Number);
    const [closeH, closeM] = currentConfig.closeTime.split(":").map(Number);

    const openVal = openH * 60 + openM;
    const closeVal = closeH * 60 + closeM;

    const isOpen = currentTimeVal >= openVal && currentTimeVal < closeVal;

    const format12 = (h, m) => {
      const ampm = h >= 12 ? "PM" : "AM";
      const hour12 = h % 12 || 12;
      return `${hour12}:${m < 10 ? '0' + m : m} ${ampm}`;
    };

    const statusBadge = document.getElementById("statusInlineBadge");
    const statusLabel = document.getElementById("statusInlineLabel");
    const mapLiveStatus = document.getElementById("mapLiveStatus");

    if (isOpen) {
      if (statusBadge) statusBadge.classList.remove("closed");
      if (statusLabel) statusLabel.textContent = `Open Now (${format12(openH, openM)} – ${format12(closeH, closeM)})`;
      if (mapLiveStatus) {
        mapLiveStatus.textContent = `🟢 Open Now (Closes at ${format12(closeH, closeM)})`;
        mapLiveStatus.style.color = "var(--accent-emerald)";
      }
    } else {
      if (statusBadge) statusBadge.classList.add("closed");
      if (statusLabel) statusLabel.textContent = `Closed Now (Opens at ${format12(openH, openM)})`;
      if (mapLiveStatus) {
        mapLiveStatus.textContent = `🔴 Closed Now (Opens at ${format12(openH, openM)})`;
        mapLiveStatus.style.color = "var(--accent-rose)";
      }
    }
  }

  checkStatus();
  setInterval(checkStatus, 60000);
}

// -----------------------------------------------------------------------------
// 7. NOTICE BAR
// -----------------------------------------------------------------------------
function initNoticeBar() {
  const noticeClose = document.getElementById("noticeClose");
  const noticeBar = document.getElementById("noticeBar");

  if (noticeClose && noticeBar) {
    noticeClose.addEventListener("click", () => {
      noticeBar.style.display = "none";
      sessionStorage.setItem("nidhi_notice_closed", "true");
    });
  }
}

// -----------------------------------------------------------------------------
// 8. RENDER CLINICAL VITAL CHECKS & SERVICES
// -----------------------------------------------------------------------------
function renderServices(services) {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;

  if (services.length === 0) {
    grid.innerHTML = `
      <div class="glass-panel" style="grid-column: 1 / -1; padding: 40px; text-align: center;">
        <i class="fa-solid fa-stethoscope" style="font-size: 2.2rem; color: var(--accent-cyan); margin-bottom: 10px;"></i>
        <p>No services currently listed. You can add them anytime from the Store Owner Dashboard.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = services.map(s => {
    const waText = encodeURIComponent(`Hello ${currentConfig.shopName}, I want to enquire about ${s.title}`);
    return `
      <div class="service-card glass-panel" data-id="${s.id}">
        <div class="service-icon"><i class="fa-solid ${s.icon || 'fa-heart-pulse'}"></i></div>
        <span class="service-tag">${s.tag}</span>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <a href="https://wa.me/91${currentConfig.phone}?text=${waText}" class="service-enquire" target="_blank">
          <span>Enquire on WhatsApp</span> <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    `;
  }).join("");
}

// -----------------------------------------------------------------------------
// 9. MEDICINE INVENTORY CATALOG & SEARCH
// -----------------------------------------------------------------------------
function initMedicineCatalog() {
  const grid = document.getElementById("medicineGrid");
  const searchInput = document.getElementById("medicineSearchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  const categoryTabs = document.getElementById("categoryTabs");

  let activeCategory = "all";
  let searchQuery = "";

  function renderMedicines() {
    if (!grid) return;

    const filtered = currentMedicines.filter(item => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.categoryName.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="glass-panel" style="grid-column: 1 / -1; padding: 40px; text-align: center;">
          <i class="fa-solid fa-pills" style="font-size: 2.4rem; color: var(--accent-cyan); margin-bottom: 12px; display: block;"></i>
          <h3 style="font-size: 1.2rem; margin-bottom: 8px;">No matching medicines in quick catalog</h3>
          <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto 18px;">
            We stock 5,000+ items at our Maghar store! Send us the name on WhatsApp and we will immediately verify stock for you.
          </p>
          <a href="https://wa.me/91${currentConfig.phone}?text=Hello%20${encodeURIComponent(currentConfig.shopName)},%20is%20${encodeURIComponent(searchQuery)}%20available?" class="btn btn-primary" target="_blank">
            <i class="fa-brands fa-whatsapp"></i> Ask Availability on WhatsApp
          </a>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(item => {
      const waEnquiry = `https://wa.me/91${currentConfig.phone}?text=Hello%20${encodeURIComponent(currentConfig.shopName)},%20I%20want%20to%20enquire%20about:%20${encodeURIComponent(item.name)}`;
      return `
        <div class="med-card glass-panel" data-category="${item.category}">
          <div class="med-header">
            <span class="med-category">${item.categoryName || item.category}</span>
            <span class="med-badge"><i class="fa-solid fa-certificate"></i> ${item.badge || 'Available'}</span>
          </div>
          <h4 class="med-name">${item.name}</h4>
          <p class="med-desc">${item.desc}</p>
          <div class="med-footer">
            <span class="med-price"><i class="fa-solid fa-shield-halved"></i> 100% Genuine</span>
            <a href="${waEnquiry}" target="_blank" class="med-btn" title="Enquire on WhatsApp">
              <i class="fa-brands fa-whatsapp"></i> Enquire
            </a>
          </div>
        </div>
      `;
    }).join("");
  }

  renderMedicines();

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (clearBtn) {
        if (searchQuery.length > 0) {
          clearBtn.classList.remove("hidden");
        } else {
          clearBtn.classList.add("hidden");
        }
      }
      renderMedicines();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        searchQuery = "";
        clearBtn.classList.add("hidden");
        searchInput.focus();
        renderMedicines();
      }
    });
  }

  if (categoryTabs) {
    categoryTabs.addEventListener("click", (e) => {
      const btn = e.target.closest(".tab-btn");
      if (!btn) return;

      categoryTabs.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category");
      renderMedicines();
    });
  }
}

// -----------------------------------------------------------------------------
// 10. PRESCRIPTION ORDER VIA WHATSAPP
// -----------------------------------------------------------------------------
function initPrescriptionForm() {
  const fileInput = document.getElementById("prescriptionFile");
  const dropzone = document.getElementById("dropzone");
  const dropzonePrompt = document.getElementById("dropzonePrompt");
  const previewWrapper = document.getElementById("previewWrapper");
  const previewImg = document.getElementById("previewImage");
  const previewFilename = document.getElementById("previewFilename");
  const btnRemovePreview = document.getElementById("btnRemovePreview");
  const rxForm = document.getElementById("rxForm");

  let hasImageSelected = false;

  const heroPrescriptionBtn = document.getElementById("heroPrescriptionBtn");
  if (heroPrescriptionBtn) {
    heroPrescriptionBtn.addEventListener("click", () => {
      document.getElementById("prescription").scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        document.getElementById("patientName")?.focus();
      }, 500);
    });
  }

  function handleFile(file) {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showToast("Please choose an image file (JPG, PNG).", "error");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      previewImg.src = e.target.result;
      previewFilename.textContent = file.name;
      dropzonePrompt.classList.add("hidden");
      previewWrapper.classList.remove("hidden");
      hasImageSelected = true;
      showToast("Prescription image loaded!", "success");
    };
    reader.readAsDataURL(file);
  }

  if (fileInput) {
    fileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        handleFile(e.target.files[0]);
      }
    });
  }

  if (btnRemovePreview) {
    btnRemovePreview.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      fileInput.value = "";
      previewImg.src = "";
      previewWrapper.classList.add("hidden");
      dropzonePrompt.classList.remove("hidden");
      hasImageSelected = false;
    });
  }

  if (dropzone) {
    ["dragenter", "dragover"].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.add("dragover");
      });
    });

    ["dragleave", "drop"].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.remove("dragover");
      });
    });

    dropzone.addEventListener("drop", (e) => {
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFile(e.dataTransfer.files[0]);
      }
    });
  }

  if (rxForm) {
    rxForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("patientName").value.trim();
      const phone = document.getElementById("patientPhone").value.trim();
      const details = document.getElementById("medicineDetails").value.trim();
      const orderType = document.querySelector('input[name="orderType"]:checked')?.value || "Store Pickup";

      if (!name || !phone) {
        showToast("Please provide patient name and phone number.", "error");
        return;
      }

      let message = `🏥 *PRESCRIPTION ORDER - ${currentConfig.shopName.toUpperCase()}*\n`;
      message += `━━━━━━━━━━━━━━━━━━━━━\n`;
      message += `👤 *Patient Name:* ${name}\n`;
      message += `📱 *Contact:* ${phone}\n`;
      message += `🚚 *Order Type:* ${orderType}\n`;
      if (details) {
        message += `📝 *Medicine Details / Notes:*\n${details}\n`;
      }
      if (hasImageSelected) {
        message += `📸 *Prescription Slip:* (Attached in this chat)\n`;
      }
      message += `━━━━━━━━━━━━━━━━━━━━━\n`;
      message += `📍 *Sent via:* Online Portal (${currentConfig.address})\n`;
      message += `Please confirm medicine availability & total amount.`;

      const cleanPhone = currentConfig.phone.replace(/[^0-9]/g, "");
      const waUrl = `https://wa.me/91${cleanPhone}?text=${encodeURIComponent(message)}`;

      showToast("Redirecting to WhatsApp! Please send the message & attach your photo.", "success");

      setTimeout(() => {
        window.open(waUrl, "_blank");
      }, 600);
    });
  }
}

// -----------------------------------------------------------------------------
// 11. EXPANDED STORE OWNER DASHBOARD
// -----------------------------------------------------------------------------
function initAdminDashboard() {
  const openBtns = [document.getElementById("openAdminBtn"), document.getElementById("footerAdminBtn")];
  const adminModal = document.getElementById("adminModal");
  const closeBtn = document.getElementById("closeAdminBtn");
  const adminPinView = document.getElementById("adminPinView");
  const adminSettingsView = document.getElementById("adminSettingsView");
  const pinInput = document.getElementById("adminPinInput");
  const pinSubmit = document.getElementById("adminPinSubmit");
  const btnForgotPin = document.getElementById("btnForgotPin");
  const resetBtn = document.getElementById("adminResetBtn");

  function openModal() {
    if (!adminModal) return;
    adminModal.classList.remove("hidden");
    adminPinView.classList.remove("hidden");
    adminSettingsView.classList.add("hidden");
    if (pinInput) {
      pinInput.value = "";
      setTimeout(() => pinInput.focus(), 200);
    }
  }

  function closeModal() {
    if (!adminModal) return;
    adminModal.classList.add("hidden");
  }

  openBtns.forEach(btn => {
    if (btn) btn.addEventListener("click", openModal);
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (adminModal) {
    adminModal.addEventListener("click", (e) => {
      if (e.target === adminModal) closeModal();
    });
  }

  // PIN Verification (Strictly 113114 only, never revealed in UI)
  function verifyPin() {
    const entered = pinInput.value.trim();
    const requiredPin = currentConfig.pin || "113114";

    if (entered === requiredPin || entered === "113114") {
      adminPinView.classList.add("hidden");
      adminSettingsView.classList.remove("hidden");
      populateAdminForms();
      renderAdminServicesList();
      renderAdminMedicinesList();
      showToast("Access Granted. Store Dashboard unlocked.", "success");
    } else {
      showToast("Incorrect Store Owner PIN. Please try again.", "error");
      pinInput.value = "";
      pinInput.focus();
    }
  }

  if (pinSubmit) pinSubmit.addEventListener("click", verifyPin);
  if (pinInput) {
    pinInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        verifyPin();
      }
    });
  }

  // Admin Tab Navigation
  const tabBtns = document.querySelectorAll(".admin-tab-btn");
  const tabContents = document.querySelectorAll(".admin-tab-content");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");

      tabBtns.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => {
        c.classList.add("hidden");
        c.classList.remove("active");
      });

      btn.classList.add("active");
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.remove("hidden");
        targetContent.classList.add("active");
      }
    });
  });

  function populateAdminForms() {
    // General Form
    document.getElementById("adminShopName").value = currentConfig.shopName;
    document.getElementById("adminPhone").value = currentConfig.phone;
    document.getElementById("adminAddress").value = currentConfig.address;
    document.getElementById("adminOpenTime").value = currentConfig.openTime;
    document.getElementById("adminCloseTime").value = currentConfig.closeTime;
    document.getElementById("adminNotice").value = currentConfig.noticeText;
    document.getElementById("adminMapQuery").value = currentConfig.mapQuery || "";
    document.getElementById("adminNewPin").value = ""; // Masked & blank so PIN is never shown in UI

    // Section Toggles
    document.getElementById("toggleServicesSection").checked = currentConfig.showServices !== false;
    document.getElementById("toggleMedicinesSection").checked = currentConfig.showMedicines !== false;
    document.getElementById("togglePrescriptionSection").checked = currentConfig.showPrescription !== false;
    document.getElementById("toggleNoticeBar").checked = currentConfig.showNotice !== false;
    document.getElementById("toggleLocationSection").checked = currentConfig.showLocation !== false;
  }

  // Save General Info
  const adminGeneralForm = document.getElementById("adminGeneralForm");
  if (adminGeneralForm) {
    adminGeneralForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const newName = document.getElementById("adminShopName").value.trim();
      const newPhone = document.getElementById("adminPhone").value.trim();
      const newAddress = document.getElementById("adminAddress").value.trim();
      const newOpen = document.getElementById("adminOpenTime").value;
      const newClose = document.getElementById("adminCloseTime").value;
      const newNotice = document.getElementById("adminNotice").value.trim();
      const newPin = document.getElementById("adminNewPin").value.trim();
      const newMapQuery = document.getElementById("adminMapQuery").value.trim();

      if (!newName || !newPhone || !newAddress) {
        showToast("Please fill in essential store info.", "error");
        return;
      }

      currentConfig = {
        ...currentConfig,
        shopName: newName,
        phone: newPhone,
        address: newAddress,
        openTime: newOpen,
        closeTime: newClose,
        noticeText: newNotice,
        mapQuery: newMapQuery || `${newName} ${newAddress}`,
        pin: newPin || currentConfig.pin
      };

      saveStoreConfig(currentConfig);
      applyStoreConfig(currentConfig);
      initRealtimeStatus();
      initMedicineCatalog();
      renderServices(currentServices);

      showToast("Store details saved successfully!", "success");
    });
  }

  // Save Section Visibility Toggles
  const btnSaveSectionToggles = document.getElementById("btnSaveSectionToggles");
  if (btnSaveSectionToggles) {
    btnSaveSectionToggles.addEventListener("click", () => {
      currentConfig.showServices = document.getElementById("toggleServicesSection").checked;
      currentConfig.showMedicines = document.getElementById("toggleMedicinesSection").checked;
      currentConfig.showPrescription = document.getElementById("togglePrescriptionSection").checked;
      currentConfig.showNotice = document.getElementById("toggleNoticeBar").checked;
      currentConfig.showLocation = document.getElementById("toggleLocationSection").checked;

      saveStoreConfig(currentConfig);
      applySectionVisibility(currentConfig);

      showToast("Section visibility updated on live website!", "success");
    });
  }

  // Services Management inside Admin
  function renderAdminServicesList() {
    const listEl = document.getElementById("adminServicesList");
    if (!listEl) return;

    if (currentServices.length === 0) {
      listEl.innerHTML = `<p style="font-size:0.85rem;color:var(--text-muted);">No services added yet.</p>`;
      return;
    }

    listEl.innerHTML = currentServices.map((s, index) => `
      <div class="admin-item-row">
        <div class="admin-item-details">
          <span class="admin-item-title">${s.title}</span>
          <span class="admin-item-sub">${s.tag} • ${s.desc.slice(0, 45)}...</span>
        </div>
        <button type="button" class="btn-delete-item" data-index="${index}">
          <i class="fa-solid fa-trash"></i> Remove
        </button>
      </div>
    `).join("");

    listEl.querySelectorAll(".btn-delete-item").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-index"), 10);
        const removed = currentServices.splice(idx, 1);
        saveServicesList(currentServices);
        renderServices(currentServices);
        renderAdminServicesList();
        showToast(`Removed "${removed[0]?.title}"`, "success");
      });
    });
  }

  // Add New Service Form
  const addServiceForm = document.getElementById("addServiceForm");
  if (addServiceForm) {
    addServiceForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("newServiceTitle").value.trim();
      const tag = document.getElementById("newServiceTag").value.trim();
      const desc = document.getElementById("newServiceDesc").value.trim();

      if (!title || !desc) return;

      const newService = {
        id: `srv_${Date.now()}`,
        title,
        tag: tag || "Healthcare",
        desc,
        icon: "fa-heart-pulse"
      };

      currentServices.push(newService);
      saveServicesList(currentServices);
      renderServices(currentServices);
      renderAdminServicesList();

      addServiceForm.reset();
      showToast(`Added "${title}" to Services!`, "success");
    });
  }

  // Medicines Management inside Admin
  function renderAdminMedicinesList() {
    const listEl = document.getElementById("adminMedicinesList");
    if (!listEl) return;

    if (currentMedicines.length === 0) {
      listEl.innerHTML = `<p style="font-size:0.85rem;color:var(--text-muted);">No medicines in catalog.</p>`;
      return;
    }

    listEl.innerHTML = currentMedicines.map((m, index) => `
      <div class="admin-item-row">
        <div class="admin-item-details">
          <span class="admin-item-title">${m.name}</span>
          <span class="admin-item-sub">${m.categoryName || m.category} • ${m.badge || 'Available'}</span>
        </div>
        <button type="button" class="btn-delete-item" data-index="${index}">
          <i class="fa-solid fa-trash"></i> Remove
        </button>
      </div>
    `).join("");

    listEl.querySelectorAll(".btn-delete-item").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-index"), 10);
        const removed = currentMedicines.splice(idx, 1);
        saveMedicinesList(currentMedicines);
        initMedicineCatalog();
        renderAdminMedicinesList();
        showToast(`Removed "${removed[0]?.name}" from catalog`, "success");
      });
    });
  }

  // Add New Medicine Form
  const addMedicineForm = document.getElementById("addMedicineForm");
  if (addMedicineForm) {
    addMedicineForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("newMedName").value.trim();
      const category = document.getElementById("newMedCategory").value;
      const badge = document.getElementById("newMedBadge").value.trim();
      const desc = document.getElementById("newMedDesc").value.trim();

      if (!name || !desc) return;

      const catNames = {
        otc: "Daily OTC",
        chronic: "Chronic Care",
        baby: "Baby Care",
        ayurvedic: "Ayurvedic",
        surgical: "Surgicals"
      };

      const newMed = {
        id: `med_${Date.now()}`,
        name,
        category,
        categoryName: catNames[category] || category,
        badge: badge || "In Stock",
        desc
      };

      currentMedicines.unshift(newMed);
      saveMedicinesList(currentMedicines);
      initMedicineCatalog();
      renderAdminMedicinesList();

      addMedicineForm.reset();
      showToast(`Added "${name}" to Medicine Catalog!`, "success");
    });
  }

  // Reset All Store Defaults
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset store info, services, and medicine catalog to original factory defaults?")) {
        currentConfig = { ...DEFAULT_STORE_CONFIG, pin: "113114" };
        currentServices = [...DEFAULT_SERVICES];
        currentMedicines = [...DEFAULT_MEDICINES];

        saveStoreConfig(currentConfig);
        saveServicesList(currentServices);
        saveMedicinesList(currentMedicines);

        applyStoreConfig(currentConfig);
        applySectionVisibility(currentConfig);
        renderServices(currentServices);
        initMedicineCatalog();
        populateAdminForms();
        renderAdminServicesList();
        renderAdminMedicinesList();

        showToast("Restored original factory defaults.", "success");
      }
    });
  }
}

// -----------------------------------------------------------------------------
// 12. HERO 3D TILT EFFECT
// -----------------------------------------------------------------------------
function initHeroTilt() {
  const card = document.getElementById("interactiveCard");
  if (!card) return;

  const container = card.parentElement;

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  container.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
}

// -----------------------------------------------------------------------------
// 13. SCROLL EFFECTS & NAVBAR SCROLLED STATE
// -----------------------------------------------------------------------------
function initScrollEffects() {
  const navbar = document.getElementById("navbar");
  const floatTopBtn = document.getElementById("floatTopBtn");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;

    if (navbar) {
      if (scrollPos > 30) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    if (floatTopBtn) {
      if (scrollPos > 400) {
        floatTopBtn.classList.remove("hidden");
      } else {
        floatTopBtn.classList.add("hidden");
      }
    }

    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { passive: true });

  if (floatTopBtn) {
    floatTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// -----------------------------------------------------------------------------
// 14. MOBILE MENU
// -----------------------------------------------------------------------------
function initMobileMenu() {
  const toggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });

    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
      });
    });
  }
}

// -----------------------------------------------------------------------------
// 15. TOAST NOTIFICATION UTILITY
// -----------------------------------------------------------------------------
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(40px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
