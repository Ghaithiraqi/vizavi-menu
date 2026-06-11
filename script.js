// Görselleri değiştirmek için her ürünün image değerini ./images klasöründeki gerçek dosya adıyla güncelleyin.
const menuData = [
  {
    name: "Fetuş",
    category: "Soğuk Mezeler Menü",
    price: "₺250,00",
    image: "./images/fetus.jpg",
    shortDescription: "Nar ekşili ferahlığı ve çıtır dokusuyla sofraya canlı bir başlangıç katar.",
    ingredients: ["Nar ekşisi", "Taze sebzeler", "Çıtır ekmek parçaları"],
    allergens: ["Gluten içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
  },
  {
    name: "Teboleh",
    category: "Soğuk Mezeler Menü",
    price: "₺280,00",
    image: "./images/teboleh.jpg",
    shortDescription: "Maydanozun tazeliği, limonun parlak aroması ve ince bulgurla hafif bir mezze klasiği.",
    ingredients: ["İnce bulgur", "Taze maydanoz", "Domates", "Limon suyu"],
    allergens: ["Gluten içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
  },
  {
    name: "Cacık",
    category: "Soğuk Mezeler Menü",
    price: "₺100,00",
    image: "./images/cacik.jpg",
    shortDescription: "Yoğurt, salatalık ve nane ile serin, dengeli ve sade bir eşlikçi.",
    ingredients: ["Yoğurt", "Salatalık", "Sarımsak", "Nane"],
    allergens: ["Süt ürünleri içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
  },
  {
    name: "Mütebbel",
    category: "Soğuk Mezeler Menü",
    price: "₺250,00",
    image: "./images/mutebbel.jpg",
    shortDescription: "Köz patlıcanın isli aroması, tahin ve limonla kadifemsi bir mezeye dönüşür.",
    ingredients: ["Pita ekmeği", "Közlenmiş patlıcan", "Tahin", "Limon suyu"],
    allergens: ["Gluten içerir", "Susam içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
  },
  {
    name: "Patates Kızartması",
    category: "Sıcak Mezeler Menü",
    price: "₺170,00",
    image: "./images/patates-kizartmasi.jpg",
    shortDescription: "Dışı çıtır, içi yumuşak sıcak patatesler; klasik soslarla servis edilir.",
    ingredients: ["Patates", "Ketçap", "Mayonez"],
    allergens: ["Yumurta içerebilir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🔥 Sıcak"],
  },
  {
    name: "Falafel İçi Sumaklı Soğan",
    category: "Falafel Menü",
    price: "₺50,00",
    image: "./images/falafel-ici-sumakli-sogan.jpg",
    shortDescription: "Çıtır falafel köftesi, sumaklı soğanın canlı ekşiliğiyle tek lokmalık bir lezzet sunar.",
    ingredients: ["1 adet çıtır falafel köftesi", "Sumaklı soğan"],
    allergens: ["Susam içerebilir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
  },
  {
    name: "Falafel İçi Acı Peynir",
    category: "Falafel Menü",
    price: "₺57,78",
    image: "./images/falafel-ici-aci-peynir.jpg",
    shortDescription: "Falafelin çıtır kabuğu, erimiş acı peynirle sıcak ve yoğun bir lezzete dönüşür.",
    ingredients: ["1 adet çıtır falafel köftesi", "Erimiş acı peynir"],
    allergens: ["Süt ürünleri içerir", "Susam içerebilir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🔥 Sıcak"],
  },
  {
    name: "Falafel (Adet)",
    category: "Falafel Menü",
    price: "₺22,78",
    image: "./images/falafel-adet.jpg",
    shortDescription: "Nohut, özel baharatlar ve otlarla hazırlanan çıtır dış yüzeyli klasik falafel.",
    ingredients: ["Falafel", "Nohut", "Özel baharatlar", "Ot"],
    allergens: ["Susam içerebilir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
  },
  {
    name: "Süper Falafel Sandviç",
    category: "Falafel Menü",
    price: "₺244,44",
    image: "./images/super-falafel-sandvic.jpg",
    shortDescription: "Falafel, patlıcan, çıtır patates ve özel sosla doyurucu bir sokak lezzeti.",
    ingredients: ["Çıtır falafel köfteleri", "Patlıcan", "Çıtır patates kızartması", "Özel sos"],
    allergens: ["Gluten içerir", "Susam içerebilir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["⭐ Popüler"],
  },
  {
    name: "Falafel Sandviç",
    category: "Falafel Menü",
    price: "₺220,00",
    image: "./images/falafel-sandvic.jpg",
    shortDescription: "Taze sebzeler ve özel sosla dengelenmiş, çıtır falafelli klasik sandviç.",
    ingredients: ["Çıtır falafel köfteleri", "Taze sebzeler", "Özel sos"],
    allergens: ["Gluten içerir", "Susam içerebilir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
  },
  {
    name: "Falafel Menü (Porsiyon)",
    category: "Falafel Menü",
    price: "₺325,00",
    image: "./images/falafel-menu-porsiyon.jpg",
    shortDescription: "Falafel, hummus ve çıtır patateslerle tabakta zengin ve dengeli bir porsiyon.",
    ingredients: ["Falafel", "Hummus", "Çıtır patatesler", "Taze sebzeler veya yeşillikler"],
    allergens: ["Susam içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["⭐ Popüler"],
  },
  {
    name: "Foul (Bakla Ezmesi)",
    category: "Hummus Menü",
    price: "₺283,33",
    image: "./images/foul-bakla-ezmesi.jpg",
    shortDescription: "Baklanın zeytinyağı, sarımsak ve limonla buluştuğu güçlü ve geleneksel bir tabak.",
    ingredients: ["Fava fasulyesi", "Zeytinyağı", "Sarımsak", "Limon", "Baharat", "2 adet ekmek"],
    allergens: ["Gluten içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
  },
  {
    name: "Kudsiye",
    category: "Hummus Menü",
    price: "₺376,67",
    image: "./images/kudsiye.jpg",
    shortDescription: "Hummus üzerine baharatlı fava, zeytinyağı ve taze otlarla katmanlı bir lezzet.",
    ingredients: ["Hummus", "Baharatlarla pişirilmiş fava fasulyesi", "Zeytinyağı", "Limon", "Taze otlar", "2 adet ekmek"],
    allergens: ["Gluten içerir", "Susam içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["⭐ Popüler"],
  },
  {
    name: "Musabaha",
    category: "Hummus Menü",
    price: "₺340,00",
    image: "./images/musabaha.jpg",
    shortDescription: "Nohut taneleri, baharatlar ve zeytinyağıyla sıcak karakterli bir hummus yorumu.",
    ingredients: ["Hummus", "Nohut taneleri", "Zeytinyağı", "Baharatlar", "2 adet ekmek"],
    allergens: ["Gluten içerir", "Susam içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
  },
  {
    name: "Bademli Hummus Fatte",
    category: "Hummus Menü",
    price: "₺472,22",
    image: "./images/bademli-hummus-fatte.jpg",
    shortDescription: "Kavrulmuş badem, taze ekmek parçaları ve özel soslarla zenginleşen premium hummus.",
    ingredients: ["Hummus", "Kavrulmuş bademler", "Taze ekmek parçaları", "Özel soslar"],
    allergens: ["Gluten içerir", "Susam içerir", "Kuruyemiş içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["⭐ Popüler"],
  },
  {
    name: "Kıymalı Hummus",
    category: "Hummus Menü",
    price: "₺400,00",
    image: "./images/kiymali-hummus.jpg",
    shortDescription: "Klasik hummusun üzerine baharatlı et dokunuşuyla daha yoğun ve doyurucu bir tabak.",
    ingredients: ["Klasik hummus", "Pişirilmiş et", "Baharatlar", "2 adet ekmek"],
    allergens: ["Gluten içerir", "Susam içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🔥 Sıcak"],
  },
  {
    name: "Hummus Tabağı",
    category: "Hummus Menü",
    price: "₺300,00",
    image: "./images/hummus-tabagi.jpg",
    shortDescription: "Zeytinyağıyla parlatılmış, pürüzsüz ve sade hummus; taze özel ekmekle servis edilir.",
    ingredients: ["Hummus", "Zeytinyağı", "2 adet taze özel ekmek"],
    allergens: ["Gluten içerir", "Susam içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
  },
  {
    name: "Büyük Peynirli Pide (Manakış)",
    category: "Taş Fırında Menü",
    price: "₺340,00",
    image: "./images/buyuk-peynirli-pide-manakis.jpg",
    shortDescription: "Taş fırında pişen ince hamurun üzerinde eriyen peynirle sıcak ve sade bir lezzet.",
    ingredients: ["İncecik hamur", "Erimiş peynir"],
    allergens: ["Gluten içerir", "Süt ürünleri içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🔥 Sıcak"],
  },
  {
    name: "Peynirli Muhammara Pide (Manakış)",
    category: "Taş Fırında Menü",
    price: "₺378,89",
    image: "./images/peynirli-muhammara-pide-manakis.jpg",
    shortDescription: "Muhammaranın baharatlı aroması, erimiş peynirle taş fırında birleşir.",
    ingredients: ["İncecik hamur", "Muhammara", "Erimiş peynir"],
    allergens: ["Gluten içerir", "Süt ürünleri içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🔥 Sıcak"],
  },
  {
    name: "Büyük Zahterli Peynirli Pide (Manakış)",
    category: "Taş Fırında Menü",
    price: "₺378,89",
    image: "./images/buyuk-zahterli-peynirli-pide-manakis.jpg",
    shortDescription: "Zahterin aromatik dokusu ve erimiş peynirle taş fırından sıcak çıkar.",
    ingredients: ["Özel zahter karışımı", "Erimiş peynir"],
    allergens: ["Gluten içerir", "Süt ürünleri içerir", "Susam içerebilir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🔥 Sıcak"],
  },
  {
    name: "Büyük Zahterli Pide (Manakış)",
    category: "Taş Fırında Menü",
    price: "₺300,00",
    image: "./images/buyuk-zahterli-pide-manakis.jpg",
    shortDescription: "Özel zahter karışımıyla hazırlanan ince hamurlu, kokusu güçlü taş fırın lezzeti.",
    ingredients: ["İncecik hamur", "Özel zahter karışımı"],
    allergens: ["Gluten içerir", "Susam içerebilir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
  },
  {
    name: "Lübnan Geceleri",
    category: "Tatlı Menü",
    price: "₺248,33",
    image: "./images/lubnan-geceleri.jpg",
    shortDescription: "Gül suyu aroması, özel krema ve antep fıstığıyla zarif bir Lübnan tatlısı.",
    ingredients: ["Semolina", "Özel krema", "Gül suyu", "Antep fıstığı"],
    allergens: ["Gluten içerir", "Süt ürünleri içerir", "Kuruyemiş içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["⭐ Popüler"],
  },
  {
    name: "Cola Turka (330 ml)",
    category: "İçecek Menü",
    price: "₺65,00",
    image: "./images/cola-turka-330-ml.jpg",
    shortDescription: "Yemeklere eşlik eden soğuk ve ferahlatıcı gazlı içecek.",
    ingredients: ["Cola Turka", "330 ml"],
    allergens: ["Alerjen bilgisi için lütfen personele danışınız"],
    tags: [],
  },
  {
    name: "Ayran (170 ml)",
    category: "İçecek Menü",
    price: "₺40,00",
    image: "./images/ayran-170-ml.jpg",
    shortDescription: "Geleneksel, serin ve hafif ayran.",
    ingredients: ["Ayran", "170 ml"],
    allergens: ["Süt ürünleri içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: [],
  },
  {
    name: "Ayran (270 ml)",
    category: "İçecek Menü",
    price: "₺55,00",
    image: "./images/ayran-270-ml.jpg",
    shortDescription: "Daha büyük porsiyonda geleneksel ayran.",
    ingredients: ["Ayran", "270 ml"],
    allergens: ["Süt ürünleri içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: [],
  },
  {
    name: "Sıkma Portakal Suyu (330 ml)",
    category: "İçecek Menü",
    price: "₺180,00",
    image: "./images/sikma-portakal-suyu-330-ml.jpg",
    shortDescription: "Taze sıkılmış portakalın canlı ve doğal ferahlığı.",
    ingredients: ["Taze sıkılmış portakal suyu", "330 ml"],
    allergens: ["Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["⭐ Popüler"],
  },
  {
    name: "Sıkma Limonata (300 ml)",
    category: "İçecek Menü",
    price: "₺160,00",
    image: "./images/sikma-limonata-300-ml.jpg",
    shortDescription: "Taze limon aromasıyla dengeli, serinletici limonata.",
    ingredients: ["Taze limonata", "300 ml"],
    allergens: ["Alerjen bilgisi için lütfen personele danışınız"],
    tags: [],
  },
  {
    name: "Limonlu Soda (200 ml)",
    category: "İçecek Menü",
    price: "₺45,00",
    image: "./images/limonlu-soda-200-ml.jpg",
    shortDescription: "Limon aromalı, hafif ve ferah soda.",
    ingredients: ["Limon aromalı soda", "200 ml"],
    allergens: ["Alerjen bilgisi için lütfen personele danışınız"],
    tags: [],
  },
  {
    name: "Sade Soda (200 ml)",
    category: "İçecek Menü",
    price: "₺40,00",
    image: "./images/sade-soda-200-ml.jpg",
    shortDescription: "Yemek yanında sade ve ferah bir içecek.",
    ingredients: ["Sade soda", "200 ml"],
    allergens: ["Alerjen bilgisi için lütfen personele danışınız"],
    tags: [],
  },
  {
    name: "Su (500 ml)",
    category: "İçecek Menü",
    price: "₺30,00",
    image: "./images/su-500-ml.jpg",
    shortDescription: "Serin ve sade içme suyu.",
    ingredients: ["Su", "500 ml"],
    allergens: ["Alerjen bilgisi için lütfen personele danışınız"],
    tags: [],
  },
];

let categoryBar;
let categoryShell;
let menuSections;
let exploreMenu;
let splashScreen;
let brandLogo;
let modal;
let modalImage;
let modalFallback;
let modalTitle;
let modalShortDescription;
let modalIngredients;
let modalAllergens;
let modalPrice;
let closeButton;

let lastFocusedElement = null;

const categoryOrder = [...new Set(menuData.map((item) => item.category))];

function getCategoryDisplay(category) {
  switch (category) {
    case "Soğuk Mezeler Menü":
      return { icon: "🍃", label: "Soğuk Mezeler" };
    case "Sıcak Mezeler Menü":
      return { icon: "🔥", label: "Sıcak Mezeler" };
    case "Falafel Menü":
      return { icon: "🧆", label: "Falafel" };
    case "Hummus Menü":
      return { icon: "🥣", label: "Hummus" };
    case "Taş Fırında Menü":
      return { icon: "🫓", label: "Taş Fırında" };
    case "Tatlı Menü":
      return { icon: "🍰", label: "Tatlı" };
    case "İçecek Menü":
      return { icon: "🥤", label: "İçecek" };
    default:
      return { icon: "•", label: category.replace(" Menü", "") };
  }
}

const slugify = (text) =>
  text
    .toLocaleLowerCase("tr")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toLocaleUpperCase("tr");
}

function markMissingImage(event) {
  const image = event.currentTarget;
  image.classList.add("image-missing");
  image.closest(".dish-image")?.classList.add("has-missing");
}

function renderCategories() {
  categoryBar.innerHTML = "";

  categoryOrder.forEach((category, index) => {
    const display = getCategoryDisplay(category);
    const button = document.createElement("button");
    button.className = `category-tab${index === 0 ? " active" : ""}`;
    button.type = "button";
    button.dataset.target = slugify(category);
    button.innerHTML = `<span class="category-icon" aria-hidden="true">${display.icon}</span><span>${display.label}</span>`;
    categoryBar.append(button);
  });
}

function fillList(list, items) {
  list.innerHTML = "";

  items.forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    list.append(item);
  });
}

function renderMenu() {
  menuSections.innerHTML = "";

  categoryOrder.forEach((category) => {
    const sectionItems = menuData.filter((item) => item.category === category);
    const display = getCategoryDisplay(category);
    const section = document.createElement("section");
    section.className = "menu-category";
    section.id = slugify(category);
    section.dataset.category = section.id;

    const heading = document.createElement("div");
    heading.className = "section-heading";
    heading.innerHTML = `<h2>${display.icon} ${display.label}</h2><span>${sectionItems.length} çeşit</span>`;

    const grid = document.createElement("div");
    grid.className = "dish-grid";

    sectionItems.forEach((item) => {
      const card = document.createElement("button");
      card.className = "dish-card";
      card.type = "button";
      card.setAttribute("aria-label", `${item.name} detayını aç`);

      const imageWrap = document.createElement("div");
      imageWrap.className = "dish-image";
      imageWrap.dataset.fallback = getInitials(item.name);

      const image = document.createElement("img");
      image.src = item.image;
      image.alt = item.name;
      image.loading = "lazy";
      image.addEventListener("error", markMissingImage);
      imageWrap.append(image);

      if (item.tags.length > 0) {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = item.tags[0];
        imageWrap.append(tag);
      }

      const name = document.createElement("p");
      name.className = "dish-name";
      name.textContent = item.name;

      card.append(imageWrap, name);
      card.addEventListener("click", () => openDishModal(item, card));
      grid.append(card);
    });

    section.append(heading, grid);
    menuSections.append(section);
  });
}

function setActiveCategory(id) {
  document.querySelectorAll(".category-tab").forEach((tab) => {
    const isActive = tab.dataset.target === id;
    tab.classList.toggle("active", isActive);

    if (isActive) {
      tab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  });
}

function openDishModal(item, opener) {
  lastFocusedElement = opener;
  modalImage.src = item.image;
  modalImage.alt = item.name;
  modalImage.classList.remove("image-missing");
  modalFallback.textContent = getInitials(item.name);
  modalTitle.textContent = item.name;
  modalShortDescription.textContent = item.shortDescription;
  fillList(modalIngredients, item.ingredients);
  fillList(modalAllergens, item.allergens);
  modalPrice.textContent = item.price;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-lock");
  document.querySelector(".close-button").focus();
}

function closeDishModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-lock");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function bindEvents() {
  exploreMenu.addEventListener("click", () => {
    categoryShell.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  categoryBar.addEventListener("click", (event) => {
    const tab = event.target.closest(".category-tab");
    if (!tab) return;

    document.getElementById(tab.dataset.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveCategory(tab.dataset.target);
  });

  closeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    closeDishModal();
  });

  modal.addEventListener("click", (event) => {
    const closeTarget = event.target.closest("[data-close-modal]");

    if (closeTarget && modal.contains(closeTarget)) {
      closeDishModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeDishModal();
    }
  });

  modalImage.addEventListener("error", (event) => {
    event.currentTarget.classList.add("image-missing");
  });

  brandLogo.addEventListener("error", (event) => {
    event.currentTarget.classList.add("image-missing");
  });
}

function observeSections() {
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry) {
        setActiveCategory(visibleEntry.target.dataset.category);
      }
    },
    {
      rootMargin: "-92px 0px -56% 0px",
      threshold: [0.18, 0.32, 0.5],
    },
  );

  document.querySelectorAll(".menu-category").forEach((section) => observer.observe(section));
}

function hideSplash() {
  window.setTimeout(() => {
    splashScreen.classList.add("is-hidden");
  }, 1000);
}

function cacheElements() {
  categoryBar = document.querySelector("#categoryBar");
  categoryShell = document.querySelector("#categoryShell");
  menuSections = document.querySelector("#menuSections");
  exploreMenu = document.querySelector("#exploreMenu");
  splashScreen = document.querySelector("#splashScreen");
  brandLogo = document.querySelector("#brandLogo");
  modal = document.querySelector("#dishModal");
  modalImage = document.querySelector("#modalImage");
  modalFallback = document.querySelector("#modalFallback");
  modalTitle = document.querySelector("#modalTitle");
  modalShortDescription = document.querySelector("#modalShortDescription");
  modalIngredients = document.querySelector("#modalIngredients");
  modalAllergens = document.querySelector("#modalAllergens");
  modalPrice = document.querySelector("#modalPrice");
  closeButton = document.querySelector(".close-button");
}

function initializeMenu() {
  cacheElements();
  renderCategories();
  renderMenu();
  bindEvents();
  observeSections();
  hideSplash();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeMenu);
} else {
  initializeMenu();
}
