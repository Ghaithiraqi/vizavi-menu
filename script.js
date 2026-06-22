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
    name: "Yalanji (Yaprak Sarma)",
    category: "Soğuk Mezeler Menü",
    price: "₺150,00",
    image: "./images/yalanji.jpg",
    shortDescription: "Zeytinyağı, pirinç ve baharatlarla sarılan asma yaprakları; nar taneleriyle ferah ve hafif bir meze.",
    ingredients: ["Asma yaprağı", "Pirinç", "Zeytinyağı", "Maydanoz", "Baharatlar", "Nar taneleri"],
    allergens: ["Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
  },
  {
    name: "Sezar Salatası",
    category: "Soğuk Mezeler Menü",
    price: "₺300,00",
    image: "./images/sezar-salatasi.jpg",
    shortDescription: "Marul, ızgara tavuk, kruton ekmek ve rendelenmiş peynirle hazırlanan, özel sezar sosuyla servis edilen klasik salata.",
    ingredients: ["Marul", "Izgara tavuk", "Kruton ekmek", "Rendelenmiş peynir", "Domates", "Sezar sos"],
    allergens: ["Gluten içerir", "Süt ürünleri içerir", "Yumurta içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["⭐ Popüler"],
  },
  {
    name: "Meze Tabağı",
    category: "Soğuk Mezeler Menü",
    price: "—",
    image: "./images/meze-tabagi.jpg",
    shortDescription: "Hummus, mütebbel, teboleh ve çıtır sarmalarla zenginleşen, paylaşmalık karışık soğuk meze tabağı.",
    ingredients: ["Hummus", "Mütebbel", "Teboleh", "Çıtır sarma", "Falafel", "Nar taneleri"],
    allergens: ["Gluten içerir", "Süt ürünleri içerir", "Susam içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["⭐ Popüler"],
  },
  {
    name: "Baba Ghanoush",
    category: "Soğuk Mezeler Menü",
    price: "—",
    sizes: [
      { label: "Küçük", price: "₺150,00" },
      { label: "Büyük", price: "₺250,00" },
    ],
    image: "./images/baba-ghanoush.jpg",
    shortDescription: "Közlenmiş patlıcan, domates, soğan ve maydanozla hazırlanan; isli aromalı, ferah bir patlıcan mezesi.",
    ingredients: ["Maydanoz", "Domates", "Soğan", "Patlıcan"],
    allergens: ["Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
  },
  {
    name: "Tavuk Maqluba",
    category: "Ana Yemekler",
    price: "₺575,00",
    image: "./images/tavuk-maqluba.jpg",
    shortDescription: "Baharatlı pirinç, tavuk ve közlenmiş sebzelerle katmanlı pişirilen, ters çevrilerek servis edilen geleneksel bir ana yemek.",
    ingredients: ["Pirinç", "Tavuk", "Patlıcan", "Baharatlar"],
    allergens: ["Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["⭐ Popüler"],
  },
  {
    name: "Peynirli Arap Usulü Şavarma (Kaşarlı)",
    category: "Ana Yemekler",
    price: "₺310,00",
    image: "./images/peynirli-arap-savarma.jpg",
    shortDescription: "Arap usulü baharatlı tavuk şavarma ve eriyen kaşar peyniri; çıtır patates ve özel soslarla servis edilir.",
    ingredients: ["Tavuk şavarma", "Kaşar peyniri", "Arap ekmeği", "Çıtır patates", "Özel soslar", "Turşu"],
    allergens: ["Gluten içerir", "Süt ürünleri içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["⭐ Popüler"],
  },
  {
    name: "Normal Şavarma Sandviçi",
    category: "Ana Yemekler",
    price: "₺65,00",
    image: "./images/normal-savarma-sandvici.jpg",
    shortDescription: "Baharatlı tavuk şavarma, taze malzemeler ve özel soslarla dürümde; çıtır patates ve turşuyla servis edilir.",
    ingredients: ["Tavuk şavarma", "Lavaş / dürüm ekmeği", "Çıtır patates", "Turşu", "Özel soslar"],
    allergens: ["Gluten içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: [],
  },
  {
    name: "Filistinli Musakhan",
    category: "Ana Yemekler",
    price: "—",
    image: "./images/filistinli-musakhan.jpg",
    shortDescription: "Sumaklı soğan ve baharatlı tavukla hazırlanan, ince ekmeğe sarılıp fırınlanan geleneksel Filistin lezzeti.",
    ingredients: ["Tavuk", "Sumaklı soğan", "İnce ekmek", "Zeytinyağı", "Baharatlar", "Yoğurt sos"],
    allergens: ["Gluten içerir", "Süt ürünleri içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["⭐ Popüler"],
  },
  {
    name: "Gaza Şavarması",
    category: "Ana Yemekler",
    price: "₺290,00",
    image: "./images/gaza-savarmasi.jpg",
    shortDescription: "Gazze usulü baharatlı tavuk şavarma; ince ekmeğe sarılıp dilimlenir, çıtır patates ve özel sosla servis edilir.",
    ingredients: ["Tavuk şavarma", "İnce ekmek (saç ekmeği)", "Çıtır patates", "Turşu", "Özel sos"],
    allergens: ["Gluten içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🔥 Sıcak"],
  },
  {
    name: "Double Arap Şavarması",
    category: "Ana Yemekler",
    price: "₺350,00",
    image: "./images/double-arap-savarmasi.jpg",
    shortDescription: "Çift porsiyon baharatlı tavuk şavarma; ince ekmeğe sarılıp dilimlenir, çıtır patates ve üç çeşit sosla servis edilir.",
    ingredients: ["Tavuk şavarma (çift)", "İnce ekmek", "Çıtır patates", "Turşu", "Üç çeşit özel sos"],
    allergens: ["Gluten içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["⭐ Popüler"],
  },
  {
    name: "Omlet",
    category: "Ana Yemekler",
    price: "—",
    image: "./images/omlet.jpg",
    shortDescription: "Çırpılmış yumurta, domates ve biberle hazırlanan, naneyle servis edilen sıcacık omlet.",
    ingredients: ["Yumurta", "Domates", "Biber", "Soğan", "Baharatlar"],
    allergens: ["Yumurta içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🔥 Sıcak"],
  },
  {
    name: "Sahanda Yumurta",
    category: "Ana Yemekler",
    price: "₺150,00",
    image: "./images/sahanda-yumurta.jpg",
    shortDescription: "Tabağında servis edilen, sarısı akışkan üç adet taze sahanda yumurta.",
    ingredients: ["Yumurta (3 adet)", "Tereyağı / zeytinyağı", "Tuz"],
    allergens: ["Yumurta içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: [],
  },
  {
    name: "Kıymalı Yumurta",
    category: "Ana Yemekler",
    price: "—",
    image: "./images/etli-yumurta.jpg",
    shortDescription: "Baharatlı kıyma, biber ve domatesle pişirilen, yumurtayla taçlandırılan sıcak tava yemeği.",
    ingredients: ["Kıyma", "Yumurta", "Domates", "Biber", "Baharatlar"],
    allergens: ["Yumurta içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🔥 Sıcak"],
  },
  {
    name: "Falafel İçi Sumaklı Soğan",
    category: "Falafel Menü",
    price: "₺35,00",
    image: "./images/falafel-ici-sumakli-sogan.jpg",
    shortDescription: "Çıtır falafel köftesi, sumaklı soğanın canlı ekşiliğiyle tek lokmalık bir lezzet sunar.",
    ingredients: ["1 adet çıtır falafel köftesi", "Sumaklı soğan"],
    allergens: ["Susam içerebilir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
  },
  {
    name: "Falafel İçi Acı Peynir",
    category: "Falafel Menü",
    price: "₺40,00",
    image: "./images/falafel-ici-aci-peynir.jpg",
    shortDescription: "Falafelin çıtır kabuğu, erimiş acı peynirle sıcak ve yoğun bir lezzete dönüşür.",
    ingredients: ["1 adet çıtır falafel köftesi", "Erimiş acı peynir"],
    allergens: ["Süt ürünleri içerir", "Susam içerebilir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🔥 Sıcak"],
  },
  {
    name: "Falafel Sandviç",
    category: "Falafel Menü",
    price: "₺160,00",
    image: "./images/falafel-sandvic.jpg",
    shortDescription: "Taze sebzeler ve özel sosla dengelenmiş, çıtır falafelli klasik sandviç.",
    ingredients: ["Çıtır falafel köfteleri", "Taze sebzeler", "Özel sos"],
    allergens: ["Gluten içerir", "Susam içerebilir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
  },
  {
    name: "Tavuk Şavarma ile Doldurulmuş Falafel",
    category: "Falafel Menü",
    price: "₺55,00",
    image: "./images/tavuk-savarma-falafel.jpg",
    shortDescription: "Çıtır falafelin içinde baharatlı tavuk şavarma; susamla kaplanmış, maydanozla servis edilen özel bir lezzet.",
    ingredients: ["Çıtır falafel", "Tavuk şavarma", "Susam", "Maydanoz"],
    allergens: ["Susam içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["⭐ Popüler"],
  },
  {
    name: "Falafel Tabağı (Servis)",
    category: "Falafel Menü",
    price: "₺300,00",
    image: "./images/falafel-serves.jpg",
    shortDescription: "Çıtır falafel, hummus, çıtır patates ve taze sebzelerle hazırlanan, turşuyla servis edilen doyurucu falafel tabağı.",
    ingredients: ["Çıtır falafel", "Hummus", "Çıtır patates", "Taze sebzeler", "Turşu"],
    allergens: ["Gluten içerir", "Susam içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["⭐ Popüler"],
  },
  {
    name: "Falafel Porsiyon",
    category: "Falafel Menü",
    price: "₺200,00",
    image: "./images/falafil-porsiyon.jpg",
    shortDescription: "Nohut ve özel baharatlarla hazırlanan, dışı çıtır içi yumuşak falafel köftelerinden oluşan porsiyon.",
    ingredients: ["Falafel", "Nohut", "Özel baharatlar", "Susam"],
    allergens: ["Susam içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
  },
  {
    name: "Diyet Izgara Falafel Dürüm",
    category: "Falafel Menü",
    price: "—",
    image: "./images/diyet-izgara-falafel.jpg",
    shortDescription: "Kızartmadan, ızgarada hazırlanan hafif falafel; taze sebzeler, turşu ve tahin sosuyla ince ekmeğe sarılır.",
    ingredients: ["Izgara falafel", "Taze sebzeler", "Turşu", "Mor lahana", "Tahin sos", "İnce ekmek"],
    allergens: ["Gluten içerir", "Susam içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["Diyet"],
  },
  {
    name: "Falafel (Adet)",
    category: "Falafel Menü",
    price: "₺16,00",
    image: "./images/falafel-adet.jpg",
    shortDescription: "Nohut, özel baharatlar ve otlarla hazırlanan, dışı çıtır içi yumuşak tek adet falafel.",
    ingredients: ["Falafel (1 adet)", "Nohut", "Özel baharatlar", "Ot"],
    allergens: ["Susam içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
  },
  {
    name: "Süper Falafel Sandviç",
    category: "Falafel Menü",
    price: "₺230,00",
    image: "./images/super-falafel-sandvic.jpg",
    shortDescription: "Bol falafel, patlıcan, çıtır patates ve özel soslarla zenginleştirilmiş doyurucu süper sandviç.",
    ingredients: ["Hummus", "Falafel", "Tahin sos", "Salata", "Kızarmış patlıcan", "Çıtır patates"],
    allergens: ["Gluten içerir", "Susam içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["⭐ Popüler"],
  },
  {
    name: "Falafel Burger",
    category: "Falafel Menü",
    price: "₺250,00",
    image: "./images/falafel-burger.jpg",
    shortDescription: "Çıtır falafel köfteleri, taze sebzeler ve özel sosla burger ekmeğinde.",
    ingredients: ["Çıtır falafel", "Burger ekmeği", "Marul", "Domates", "Turşu", "Özel sos"],
    allergens: ["Gluten içerir", "Susam içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: [],
  },
  {
    name: "Bademli Hummus Fatte",
    category: "Hummus Menü",
    price: "₺350,00",
    image: "./images/bademli-hummus-fatte.jpg",
    shortDescription: "Kavrulmuş badem, taze ekmek parçaları ve özel soslarla zenginleşen premium hummus.",
    ingredients: ["Hummus", "Kavrulmuş bademler", "Taze ekmek parçaları", "Özel soslar"],
    allergens: ["Gluten içerir", "Susam içerir", "Kuruyemiş içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["⭐ Popüler"],
  },
  {
    name: "Hummus Tabağı",
    category: "Hummus Menü",
    price: "—",
    sizes: [
      { label: "Orta", price: "₺150,00" },
      { label: "Büyük", price: "₺250,00" },
    ],
    image: "./images/hummus-tabagi.jpg",
    shortDescription: "Zeytinyağıyla parlatılmış, pürüzsüz ve sade hummus; taze özel ekmekle servis edilir.",
    ingredients: ["Hummus", "Zeytinyağı", "2 adet taze özel ekmek"],
    allergens: ["Gluten içerir", "Susam içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
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
    name: "Foul (Bakla Ezmesi)",
    category: "Hummus Menü",
    price: "₺250,00",
    image: "./images/foul-bakla-ezmesi.jpg",
    shortDescription: "Baklanın zeytinyağı, sarımsak ve limonla buluştuğu güçlü ve geleneksel bir tabak.",
    ingredients: ["Fava fasulyesi", "Zeytinyağı", "Sarımsak", "Limon", "Baharat", "2 adet ekmek"],
    allergens: ["Gluten içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
  },
  {
    name: "Hummus Sandviç",
    category: "Hummus Menü",
    price: "₺75,00",
    image: "./images/hummus-sandvic.jpg",
    shortDescription: "Humus, zeytinyağı ve baharatlarla hazırlanan, ince ekmekte pratik ve lezzetli bir sandviç.",
    ingredients: ["Humus", "Zeytinyağı", "Baharatlar", "İnce ekmek"],
    allergens: ["Gluten içerir", "Susam içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: [],
  },
  {
    name: "Kudsiye",
    category: "Hummus Menü",
    price: "₺260,00",
    image: "./images/kudsiye.jpg",
    shortDescription: "Hummus üzerine baharatlı fava, zeytinyağı ve taze otlarla katmanlı bir lezzet.",
    ingredients: ["Hummus", "Baharatlarla pişirilmiş fava fasulyesi", "Zeytinyağı", "Limon", "Taze otlar", "2 adet ekmek"],
    allergens: ["Gluten içerir", "Susam içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["⭐ Popüler"],
  },
  {
    name: "Musabaha",
    category: "Hummus Menü",
    price: "₺350,00",
    image: "./images/musabaha.jpg",
    shortDescription: "Nohut taneleri, baharatlar ve zeytinyağıyla sıcak karakterli bir hummus yorumu.",
    ingredients: ["Hummus", "Nohut taneleri", "Zeytinyağı", "Baharatlar", "2 adet ekmek"],
    allergens: ["Gluten içerir", "Susam içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
  },
  {
    name: "Peynirli Pide (Manakış)",
    category: "Taş Fırında Menü",
    price: "₺340,00",
    sizes: [
      { label: "Orta", price: "₺200,00" },
      { label: "Büyük", price: "₺270,00" },
    ],
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
    sizes: [
      { label: "Orta", price: "₺200,00" },
      { label: "Büyük", price: "₺270,00" },
    ],
    image: "./images/peynirli-muhammara-pide-manakis.jpg",
    shortDescription: "Muhammaranın baharatlı aroması, erimiş peynirle taş fırında birleşir.",
    ingredients: ["İncecik hamur", "Muhammara", "Erimiş peynir"],
    allergens: ["Gluten içerir", "Süt ürünleri içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🔥 Sıcak"],
  },
  {
    name: "Zahterli Peynirli Pide (Manakış)",
    category: "Taş Fırında Menü",
    price: "—",
    sizes: [
      { label: "Orta", price: "₺200,00" },
      { label: "Büyük", price: "₺270,00" },
    ],
    image: "./images/zahterli-peynirli-pide.jpg",
    shortDescription: "Aromatik zahter karışımı ve erimiş peynirle taş fırında pişen, sıcak ve doyurucu manakış.",
    ingredients: ["İncecik hamur", "Özel zahter karışımı", "Erimiş peynir"],
    allergens: ["Gluten içerir", "Süt ürünleri içerir", "Susam içerebilir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🔥 Sıcak"],
  },
  {
    name: "Zahterli Pide (Manakış)",
    category: "Taş Fırında Menü",
    price: "—",
    sizes: [
      { label: "Orta", price: "₺200,00" },
      { label: "Büyük", price: "₺270,00" },
    ],
    image: "./images/zahterli-pide.jpg",
    shortDescription: "Özel zahter karışımıyla hazırlanan ince hamurlu, kokusu güçlü klasik taş fırın manakışı.",
    ingredients: ["İncecik hamur", "Özel zahter karışımı"],
    allergens: ["Gluten içerir", "Susam içerebilir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🌱 Vejetaryen"],
  },
  {
    name: "Lahmacun",
    category: "Taş Fırında Menü",
    price: "—",
    image: "./images/lahmacun.jpg",
    shortDescription: "İncecik hamur üzerine baharatlı kıyma harcı; taş fırında pişen, maydanoz ve limonla servis edilen klasik lahmacun.",
    ingredients: ["İncecik hamur", "Kıyma", "Domates", "Biber", "Maydanoz", "Baharatlar"],
    allergens: ["Gluten içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["🔥 Sıcak"],
  },
  {
    name: "Peynir Maamoul",
    category: "Tatlı Menü",
    price: "—",
    image: "./images/peynir-maamoul.jpg",
    shortDescription: "İçi peynirle doldurulmuş, pudra şekeri ve antep fıstığıyla servis edilen geleneksel maamul tatlısı.",
    ingredients: ["İrmik / un hamuru", "Peynir", "Pudra şekeri", "Antep fıstığı"],
    allergens: ["Gluten içerir", "Süt ürünleri içerir", "Kuruyemiş içerir", "Alerjen bilgisi için lütfen personele danışınız"],
    tags: [],
  },
  {
    name: "Türk Çayı",
    category: "İçecek Menü",
    price: "—",
    image: "./images/turk-cayi.jpg",
    shortDescription: "İnce belli bardakta, tavşan kanı demlenmiş geleneksel Türk çayı; her yudumda sıcacık bir keyif.",
    ingredients: ["Demlenmiş siyah çay", "Sıcak servis"],
    allergens: ["Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["⭐ Popüler"],
  },
  {
    name: "Beypazarı Çilek Aromalı",
    category: "İçecek Menü",
    price: "—",
    image: "./images/beypazari-cilek.jpg",
    shortDescription: "Çilek aromasıyla tatlanmış, zengin mineralli ve canlı baloncuklu ferahlatıcı maden suyu.",
    ingredients: ["Doğal maden suyu", "Çilek aroması", "200 ml"],
    allergens: ["Alerjen bilgisi için lütfen personele danışınız"],
    tags: [],
  },
  {
    name: "Cola Turka",
    category: "İçecek Menü",
    price: "—",
    image: "./images/cola-turka.jpg",
    shortDescription: "Yemeklere eşlik eden, helal sertifikalı, soğuk ve gazlı klasik kola keyfi.",
    ingredients: ["Cola Turka", "330 ml"],
    allergens: ["Alerjen bilgisi için lütfen personele danışınız"],
    tags: [],
  },
  {
    name: "Fuse Tea Şeftali",
    category: "İçecek Menü",
    price: "—",
    image: "./images/fuse-tea-seftali.jpg",
    shortDescription: "Şeftali aromasıyla hazırlanan, koruyucu ve renklendirici içermeyen serinletici ice tea.",
    ingredients: ["Fuse Tea", "Şeftali aromalı", "330 ml"],
    allergens: ["Alerjen bilgisi için lütfen personele danışınız"],
    tags: ["⭐ Popüler"],
  },
  {
    name: "Beypazarı Limon Aromalı",
    category: "İçecek Menü",
    price: "—",
    image: "./images/beypazari-limon.jpg",
    shortDescription: "Limon aromasının canlı ekşiliğiyle buluşan, zengin mineralli ferahlatıcı maden suyu.",
    ingredients: ["Doğal maden suyu", "Limon aroması", "200 ml"],
    allergens: ["Alerjen bilgisi için lütfen personele danışınız"],
    tags: [],
  },
  {
    name: "Sarıyer Gazoz",
    category: "İçecek Menü",
    price: "—",
    image: "./images/sariyer-gazoz.jpg",
    shortDescription: "Nostaljik tadıyla, soğuk ve bol gazlı klasik sade gazoz keyfi.",
    ingredients: ["Sarıyer Gazoz", "Kutu"],
    allergens: ["Alerjen bilgisi için lütfen personele danışınız"],
    tags: [],
  },
  {
    name: "Sarıyer Portakal Aromalı Gazoz",
    category: "İçecek Menü",
    price: "—",
    image: "./images/sariyer-portakal-gazoz.jpg",
    shortDescription: "Portakal aromasıyla tatlanmış, ferahlatıcı ve gazlı meyveli gazoz.",
    ingredients: ["Sarıyer Gazoz", "Portakal aromalı", "Kutu"],
    allergens: ["Alerjen bilgisi için lütfen personele danışınız"],
    tags: [],
  },
  {
    name: "Sarıyer Kola (Şekersiz)",
    category: "İçecek Menü",
    price: "—",
    image: "./images/sariyer-kola.jpg",
    shortDescription: "Şekersiz (zero) formülüyle hazırlanan, hafif ve gazlı serinletici kola.",
    ingredients: ["Sarıyer Kola", "Şekersiz / Zero", "Kutu"],
    allergens: ["Alerjen bilgisi için lütfen personele danışınız"],
    tags: [],
  },
  {
    name: "Saka Su (0,5 L)",
    category: "İçecek Menü",
    price: "—",
    image: "./images/saka-su.jpg",
    shortDescription: "pH 8,22 değerinde, doğal kaynaktan gelen serin ve dengeli mineralli su.",
    ingredients: ["Doğal mineralli su", "0,5 L"],
    allergens: ["Alerjen bilgisi için lütfen personele danışınız"],
    tags: [],
  },
];

const heroSlides = [
  { image: "./images/hero-1.jpg", fallback: "V" },
  { image: "./images/hero-2.jpg", fallback: "Z" },
  { image: "./images/hero-3.jpg", fallback: "R" },
];

let categoryBar;
let categoryShell;
let menuSections;
let exploreMenu;
let splashScreen;
let splashLogo;
let brandLogo;
let heroSlidesElement;
let heroDots;
let modal;
let modalImageButton;
let modalImage;
let modalFallback;
let modalTitle;
let modalShortDescription;
let modalIngredients;
let modalAllergens;
let modalPrice;
let priceBlock;
let closeButton;
let imagePreview;
let previewFrame;
let previewImage;
let previewClose;

let lastFocusedElement = null;
let currentHeroSlide = 0;
let heroTimer = null;
let currentPreviewItem = null;

const categoryOrder = [...new Set(menuData.map((item) => item.category))];

function getCategoryDisplay(category) {
  if (category.includes("Soğuk")) return { icon: "🍃", label: "Soğuk Mezeler" };
  if (category.includes("Sıcak")) return { icon: "🔥", label: "Sıcak Mezeler" };
  if (category.includes("Ana Yemek")) return { icon: "🍗", label: "Ana Yemekler" };
  if (category.includes("Falafel")) return { icon: "🧆", label: "Falafel" };
  if (category.includes("Hummus")) return { icon: "🥣", label: "Hummus" };
  if (category.includes("Taş")) return { icon: "🫓", label: "Taş Fırında" };
  if (category.includes("Tatlı")) return { icon: "🍰", label: "Tatlı" };
  if (category.includes("İçecek")) return { icon: "🥤", label: "İçecek" };
  return { icon: "•", label: category.replace(" Menü", "") };
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
  return name.trim().charAt(0).toLocaleUpperCase("tr");
}

function setupImageLifecycle(image) {
  const frame = image.closest(".image-frame");
  image.addEventListener("load", () => {
    frame?.classList.remove("is-loading");
    image.classList.remove("image-missing");
  });
  image.addEventListener("error", () => {
    frame?.classList.remove("is-loading");
    frame?.classList.add("has-missing");
    image.classList.add("image-missing");
  });
}

function renderHeroSlider() {
  heroSlidesElement.innerHTML = "";
  heroDots.innerHTML = "";

  heroSlides.forEach((slide, index) => {
    const slideElement = document.createElement("div");
    slideElement.className = `hero-slide${index === 0 ? " is-active" : ""}`;
    slideElement.innerHTML = `
      <div class="hero-slide-image image-frame is-loading" data-fallback="${slide.fallback}">
        <img src="${slide.image}" alt="Vizavi lezzet görseli ${index + 1}">
      </div>
    `;
    setupImageLifecycle(slideElement.querySelector("img"));
    heroSlidesElement.append(slideElement);

    const dot = document.createElement("button");
    dot.className = `slider-dot${index === 0 ? " is-active" : ""}`;
    dot.type = "button";
    dot.setAttribute("aria-label", `${index + 1}. görsel`);
    dot.addEventListener("click", () => {
      setHeroSlide(index);
      restartHeroTimer();
    });
    heroDots.append(dot);
  });
}

function setHeroSlide(index) {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".slider-dot");
  currentHeroSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === currentHeroSlide);
  });
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === currentHeroSlide);
  });
}

function nextHeroSlide() {
  setHeroSlide(currentHeroSlide + 1);
}

function restartHeroTimer() {
  window.clearInterval(heroTimer);
  heroTimer = window.setInterval(nextHeroSlide, 4000);
}

function cleanTag(tag) {
  return tag.replace(/[🌱⭐🔥]/gu, "").trim();
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
  let cardIndex = 0;

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
      card.style.setProperty("--delay", `${Math.min(cardIndex * 35, 420)}ms`);
      card.setAttribute("aria-label", `${item.name} detayını aç`);

      const imageWrap = document.createElement("div");
      imageWrap.className = "dish-image image-frame is-loading";
      imageWrap.dataset.fallback = getInitials(item.name);

      const image = document.createElement("img");
      image.src = item.image;
      image.alt = item.name;
      image.loading = "lazy";
      setupImageLifecycle(image);
      imageWrap.append(image);

      if (item.tags.length > 0) {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = cleanTag(item.tags[0]);
        imageWrap.append(tag);
      }

      const name = document.createElement("p");
      name.className = "dish-name";
      name.textContent = item.name;

      card.append(imageWrap, name);
      card.addEventListener("click", () => openDishModal(item, card));
      grid.append(card);
      cardIndex += 1;
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

function renderPrice(item) {
  if (Array.isArray(item.sizes) && item.sizes.length) {
    priceBlock.classList.add("price-block-multi");
    priceBlock.innerHTML =
      '<span>Fiyat</span><div class="price-rows">' +
      item.sizes
        .map((s) => `<div class="price-row"><em>${s.label}</em><strong>${s.price}</strong></div>`)
        .join("") +
      "</div>";
  } else {
    priceBlock.classList.remove("price-block-multi");
    priceBlock.innerHTML = '<span>Fiyat</span><strong id="modalPrice"></strong>';
    priceBlock.querySelector("strong").textContent = item.price;
  }
}

function openDishModal(item, opener) {
  lastFocusedElement = opener;
  currentPreviewItem = item;
  modalImageButton.classList.add("is-loading");
  modalImageButton.classList.remove("has-missing");
  modalImage.src = item.image;
  modalImage.alt = item.name;
  modalImage.classList.remove("image-missing");
  modalFallback.textContent = getInitials(item.name);
  modalTitle.textContent = item.name;
  modalShortDescription.textContent = item.shortDescription;
  fillList(modalIngredients, item.ingredients);
  fillList(modalAllergens, item.allergens);
  renderPrice(item);

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-lock");
  closeButton.focus();
}

function closeDishModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-lock");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function openImagePreview() {
  if (!currentPreviewItem) return;

  previewFrame.classList.add("is-loading");
  previewFrame.classList.remove("has-missing");
  previewFrame.dataset.fallback = getInitials(currentPreviewItem.name);
  previewImage.src = currentPreviewItem.image;
  previewImage.alt = currentPreviewItem.name;
  previewImage.classList.remove("image-missing");
  imagePreview.classList.add("open");
  imagePreview.setAttribute("aria-hidden", "false");
  document.body.classList.add("preview-lock");
  previewClose.focus();
}

function closeImagePreview() {
  imagePreview.classList.remove("open");
  imagePreview.setAttribute("aria-hidden", "true");
  document.body.classList.remove("preview-lock");
  closeButton.focus();
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
    if (closeTarget && modal.contains(closeTarget)) closeDishModal();
  });

  modalImageButton.addEventListener("click", openImagePreview);
  setupImageLifecycle(modalImage);
  setupImageLifecycle(previewImage);

  imagePreview.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-preview]")) closeImagePreview();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (imagePreview.classList.contains("open")) {
      closeImagePreview();
      return;
    }
    if (modal.classList.contains("open")) closeDishModal();
  });

  [splashLogo, brandLogo].forEach((logo) => {
    logo.addEventListener("load", () => {
      logo.classList.remove("image-missing");
    });
    logo.addEventListener("error", () => {
      logo.classList.add("image-missing");
    });
  });
}

function observeSections() {
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry) setActiveCategory(visibleEntry.target.dataset.category);
    },
    {
      rootMargin: "-88px 0px -58% 0px",
      threshold: [0.18, 0.32, 0.5],
    },
  );

  document.querySelectorAll(".menu-category").forEach((section) => observer.observe(section));
}

function hideSplash() {
  window.setTimeout(() => {
    splashScreen.classList.add("is-hidden");
  }, 900);
}

function cacheElements() {
  categoryBar = document.querySelector("#categoryBar");
  categoryShell = document.querySelector("#categoryShell");
  menuSections = document.querySelector("#menuSections");
  exploreMenu = document.querySelector("#exploreMenu");
  splashScreen = document.querySelector("#splashScreen");
  splashLogo = document.querySelector("#splashLogo");
  brandLogo = document.querySelector("#brandLogo");
  heroSlidesElement = document.querySelector("#heroSlides");
  heroDots = document.querySelector("#heroDots");
  modal = document.querySelector("#dishModal");
  modalImageButton = document.querySelector("#modalImageButton");
  modalImage = document.querySelector("#modalImage");
  modalFallback = document.querySelector("#modalFallback");
  modalTitle = document.querySelector("#modalTitle");
  modalShortDescription = document.querySelector("#modalShortDescription");
  modalIngredients = document.querySelector("#modalIngredients");
  modalAllergens = document.querySelector("#modalAllergens");
  modalPrice = document.querySelector("#modalPrice");
  priceBlock = document.querySelector(".price-block");
  closeButton = document.querySelector(".close-button");
  imagePreview = document.querySelector("#imagePreview");
  previewFrame = document.querySelector("#previewFrame");
  previewImage = document.querySelector("#previewImage");
  previewClose = document.querySelector(".preview-close");
}

function initializeMenu() {
  cacheElements();
  renderHeroSlider();
  renderCategories();
  renderMenu();
  bindEvents();
  observeSections();
  restartHeroTimer();
  hideSplash();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeMenu);
} else {
  initializeMenu();
}
