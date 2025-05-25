/**
 * 簡化版世界名畫展示館 JavaScript
 */

// 畫作數據（擴展版 - 35幅世界名畫）
const paintings = [
    {
        title: "星夜",
        artist: "文森特·梵高",
        year: "1889年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/400px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        description: "梵高最著名的作品之一，描繪了夜空中旋轉的星雲和明亮的星星。"
    },
    {
        title: "蒙娜麗莎",
        artist: "李奧納多·達文西",
        year: "1503-1519年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/400px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
        description: "世界上最著名的肖像畫，以其神秘的微笑而聞名。"
    },
    {
        title: "戴珍珠耳環的少女",
        artist: "約翰尼斯·維梅爾",
        year: "1665年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/400px-1665_Girl_with_a_Pearl_Earring.jpg",
        description: "維梅爾的傑作，被稱為'北方的蒙娜麗莎'。"
    },
    {
        title: "吶喊",
        artist: "愛德華·孟克",
        year: "1893年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/400px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
        description: "表現主義的代表作品，表達了現代人的焦慮和恐懼。"
    },
    {
        title: "最後的晚餐",
        artist: "李奧納多·達文西",
        year: "1495-1498年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/400px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg",
        description: "描繪耶穌與十二門徒最後晚餐的宗教題材傑作。"
    },
    {
        title: "創世紀",
        artist: "米開朗基羅",
        year: "1508-1512年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Creaci%C3%B3n_de_Ad%C3%A1n_%28Miguel_%C3%81ngel%29.jpg/400px-Creaci%C3%B3n_de_Ad%C3%A1n_%28Miguel_%C3%81ngel%29.jpg",
        description: "西斯廷教堂天花板上的壁畫，描繪上帝創造亞當的場景。"
    },
    {
        title: "維納斯的誕生",
        artist: "桑德羅·波提切利",
        year: "1484-1486年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/400px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
        description: "文藝復興時期的經典作品，描繪愛神維納斯從海中誕生。"
    },
    {
        title: "夜巡",
        artist: "林布蘭",
        year: "1642年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg/400px-La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg",
        description: "林布蘭最著名的群像畫，展現了巴洛克時期的光影技巧。"
    },
    {
        title: "自由引導人民",
        artist: "歐仁·德拉克洛瓦",
        year: "1830年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/400px-Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg",
        description: "浪漫主義的代表作，象徵自由與革命精神。"
    },
    {
        title: "睡蓮",
        artist: "克洛德·莫內",
        year: "1919年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1919%2C_Mus%C3%A9e_Marmottan_Monet%2C_Paris.jpg/400px-Claude_Monet_-_Water_Lilies_-_1919%2C_Mus%C3%A9e_Marmottan_Monet%2C_Paris.jpg",
        description: "印象派大師莫內的經典系列作品，捕捉光影變化。"
    },
    {
        title: "格爾尼卡",
        artist: "巴勃羅·畢卡索",
        year: "1937年",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/PicassoGuernica.jpg/400px-PicassoGuernica.jpg",
        description: "立體主義傑作，反映戰爭的殘酷與痛苦。"
    },
    {
        title: "美國哥德式",
        artist: "格蘭特·伍德",
        year: "1930年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/400px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
        description: "美國現實主義的代表作品，描繪農村生活。"
    },
    {
        title: "記憶的永恆",
        artist: "薩爾瓦多·達利",
        year: "1931年",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/The_Persistence_of_Memory.jpg/400px-The_Persistence_of_Memory.jpg",
        description: "超現實主義的經典作品，以融化的時鐘著稱。"
    },
    {
        title: "拾穗者",
        artist: "讓-弗朗索瓦·米勒",
        year: "1857年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Jean-Fran%C3%A7ois_Millet_%28II%29_-_Gleaners_-_Google_Art_Project.jpg/400px-Jean-Fran%C3%A7ois_Millet_%28II%29_-_Gleaners_-_Google_Art_Project.jpg",
        description: "現實主義作品，描繪農民辛勤勞作的場景。"
    },
    {
        title: "日出·印象",
        artist: "克洛德·莫內",
        year: "1872年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/400px-Monet_-_Impression%2C_Sunrise.jpg",
        description: "印象派運動的開端之作，給印象派命名的作品。"
    },
    {
        title: "大碗島的星期天下午",
        artist: "喬治·秀拉",
        year: "1884-1886年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/400px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg",
        description: "點彩派的代表作品，運用科學的色彩理論。"
    },
    {
        title: "亞維農的少女",
        artist: "巴勃羅·畢卡索",
        year: "1907年",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/400px-Les_Demoiselles_d%27Avignon.jpg",
        description: "立體主義的開創性作品，革命性地改變了藝術表現。"
    },
    {
        title: "舞蹈",
        artist: "亨利·馬蒂斯",
        year: "1910年",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Matissedance.jpg/400px-Matissedance.jpg",
        description: "野獸派的代表作品，以純色和簡化形式著稱。"
    },
    {
        title: "吻",
        artist: "古斯塔夫·克林姆",
        year: "1907-1908年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/400px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
        description: "新藝術運動的傑作，以金箔裝飾和象徵主義著稱。"
    },
    {
        title: "自畫像",
        artist: "文森特·梵高",
        year: "1889年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/400px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg",
        description: "梵高眾多自畫像中的一幅，展現其獨特的繪畫風格。"
    },
    {
        title: "向日葵",
        artist: "文森特·梵高",
        year: "1888年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/400px-Vincent_Willem_van_Gogh_127.jpg",
        description: "梵高最著名的靜物畫系列之一，充滿生命力的黃色向日葵。"
    },
    {
        title: "雅典學院",
        artist: "拉斐爾",
        year: "1509-1511年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/La_scuola_di_Atene.jpg/400px-La_scuola_di_Atene.jpg",
        description: "文藝復興盛期的傑作，描繪古希臘哲學家聚會的場景。"
    },
    {
        title: "西斯廷聖母",
        artist: "拉斐爾",
        year: "1512年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Raffael_-_Sixtinische_Madonna.jpg/400px-Raffael_-_Sixtinische_Madonna.jpg",
        description: "拉斐爾的宗教畫傑作，以其優美的構圖和神聖的氛圍著稱。"
    },
    {
        title: "倒牛奶的女僕",
        artist: "約翰尼斯·維梅爾",
        year: "1658-1661年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg/400px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg",
        description: "維梅爾的另一傑作，展現了日常生活中的寧靜美感。"
    },
    {
        title: "拿破崙翻越阿爾卑斯山",
        artist: "雅克-路易·大衛",
        year: "1801年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg/400px-David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg",
        description: "新古典主義的代表作，描繪拿破崙英勇的形象。"
    },
    {
        title: "瑪麗亞·特蕾莎皇后",
        artist: "迭戈·委拉斯奎茲",
        year: "1652-1653年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Diego_Vel%C3%A1zquez_-_Infanta_Margarita_Teresa_in_a_Blue_Dress_-_Google_Art_Project.jpg/400px-Diego_Vel%C3%A1zquez_-_Infanta_Margarita_Teresa_in_a_Blue_Dress_-_Google_Art_Project.jpg",
        description: "委拉斯奎茲的肖像畫傑作，展現了巴洛克時期的宮廷藝術。"
    },
    {
        title: "宮娥",
        artist: "迭戈·委拉斯奎茲",
        year: "1656年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Las_Meninas_01.jpg/400px-Las_Meninas_01.jpg",
        description: "被譽為繪畫史上最偉大的作品之一，複雜的構圖和透視技巧。"
    },
    {
        title: "草地上的午餐",
        artist: "愛德華·馬奈",
        year: "1863年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg/400px-Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg",
        description: "現代藝術的先驅作品，打破了傳統的繪畫規範。"
    },
    {
        title: "奧林匹亞",
        artist: "愛德華·馬奈",
        year: "1863年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Edouard_Manet_-_Olympia_-_Google_Art_Project_3.jpg/400px-Edouard_Manet_-_Olympia_-_Google_Art_Project_3.jpg",
        description: "馬奈的另一爭議性作品，挑戰了傳統的裸體畫表現方式。"
    },
    {
        title: "舞蹈教室",
        artist: "埃德加·德加",
        year: "1874年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Edgar_Degas_-_The_Dance_Class_-_Google_Art_Project.jpg/400px-Edgar_Degas_-_The_Dance_Class_-_Google_Art_Project.jpg",
        description: "德加的芭蕾舞系列作品，捕捉舞者練習的瞬間。"
    },
    {
        title: "煎餅磨坊的舞會",
        artist: "皮埃爾-奧古斯特·雷諾瓦",
        year: "1876年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Auguste_Renoir_-_Dance_at_le_moulin_de_la_Galette_-_Mus%C3%A9e_d%27Orsay_RF_2739_%28derivative_work_-_AutoContrast_edit_in_LCH_space%29.jpg/400px-Auguste_Renoir_-_Dance_at_le_moulin_de_la_Galette_-_Mus%C3%A9e_d%27Orsay_RF_2739_%28derivative_work_-_AutoContrast_edit_in_LCH_space%29.jpg",
        description: "雷諾瓦的印象派傑作，描繪巴黎蒙馬特的歡樂場景。"
    },
    {
        title: "船上的午宴",
        artist: "皮埃爾-奧古斯特·雷諾瓦",
        year: "1880-1881年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Renoir21.jpg/400px-Renoir21.jpg",
        description: "雷諾瓦晚期的重要作品，展現了印象派的成熟技法。"
    },
    {
        title: "咖啡館夜景",
        artist: "文森特·梵高",
        year: "1888年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg/400px-Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg",
        description: "梵高在阿爾勒時期的作品，展現了夜晚的溫暖色彩。"
    },
    {
        title: "臥室",
        artist: "文森特·梵高",
        year: "1888年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg/400px-Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg",
        description: "梵高描繪自己在阿爾勒臥室的作品，色彩鮮明而和諧。"
    },
    {
        title: "吃馬鈴薯的人",
        artist: "文森特·梵高",
        year: "1885年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg/400px-Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg",
        description: "梵高早期的重要作品，描繪農民家庭的樸實生活。"
    },
    {
        title: "聖維克多山",
        artist: "保羅·塞尚",
        year: "1904-1906年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Paul_C%C3%A9zanne_-_Mont_Sainte-Victoire_-_Google_Art_Project.jpg/400px-Paul_C%C3%A9zanne_-_Mont_Sainte-Victoire_-_Google_Art_Project.jpg",
        description: "塞尚晚期的代表作，展現了後印象派的幾何化風格。"
    },
    {
        title: "玩紙牌的人",
        artist: "保羅·塞尚",
        year: "1890-1895年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Paul_C%C3%A9zanne%2C_The_Card_Players%2C_Barnes_Foundation.jpg/400px-Paul_C%C3%A9zanne%2C_The_Card_Players%2C_Barnes_Foundation.jpg",
        description: "塞尚的經典系列作品，以簡潔的構圖和色彩著稱。"
    },
    {
        title: "大宮女",
        artist: "讓-奧古斯特-多米尼克·安格爾",
        year: "1814年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Jean_Auguste_Dominique_Ingres%2C_Grande_Odalisque%2C_1814.jpg/400px-Jean_Auguste_Dominique_Ingres%2C_Grande_Odalisque%2C_1814.jpg",
        description: "安格爾的東方主義傑作，展現了新古典主義的精緻技法。"
    },
    {
        title: "土耳其浴室",
        artist: "讓-奧古斯特-多米尼克·安格爾",
        year: "1862年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Ingres_-_The_Turkish_Bath_%281862%29.jpg/400px-Ingres_-_The_Turkish_Bath_%281862%29.jpg",
        description: "安格爾晚期的圓形構圖傑作，展現了東方異國情調。"
    },
    {
        title: "薩賓婦女",
        artist: "雅克-路易·大衛",
        year: "1799年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Jacques-Louis_David_-_The_Intervention_of_the_Sabine_Women_-_Google_Art_Project.jpg/400px-Jacques-Louis_David_-_The_Intervention_of_the_Sabine_Women_-_Google_Art_Project.jpg",
        description: "大衛的新古典主義歷史畫，描繪古羅馬的傳說故事。"
    },
    {
        title: "馬拉之死",
        artist: "雅克-路易·大衛",
        year: "1793年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Death_of_Marat_by_David.jpg/400px-Death_of_Marat_by_David.jpg",
        description: "法國大革命時期的政治宣傳畫，具有強烈的戲劇性效果。"
    },
    {
        title: "阿爾諾菲尼夫婦",
        artist: "揚·凡·艾克",
        year: "1434年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Van_Eyck_-_Arnolfini_Portrait.jpg/400px-Van_Eyck_-_Arnolfini_Portrait.jpg",
        description: "北方文藝復興的傑作，以其精細的細節和象徵意義著稱。"
    }
];

// 全局變量
let currentPage = 0;
let totalPages = paintings.length + 1; // +1 for cover page
let book, prevBtn, nextBtn, pageInfo;
let userPaintings = JSON.parse(localStorage.getItem('userPaintings') || '[]'); // 用戶上傳的畫作
let allPaintings = [...paintings, ...userPaintings]; // 合併所有畫作

/**
 * 初始化 DOM 元素
 */
function initDOMElements() {
    book = document.getElementById('book');
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
    pageInfo = document.getElementById('pageInfo');

    console.log('DOM 元素初始化:', {
        book: !!book,
        prevBtn: !!prevBtn,
        nextBtn: !!nextBtn,
        pageInfo: !!pageInfo
    });
}

/**
 * 生成畫作頁面
 */
function generatePaintingPages() {
    console.log('開始生成畫作頁面...');

    if (!book) {
        console.error('book 元素不存在！');
        return;
    }

    // 更新合併的畫作列表
    allPaintings = [...paintings, ...userPaintings];

    // 清除現有的畫作頁面（保留封面）
    const existingPaintingPages = book.querySelectorAll('.painting-page');
    existingPaintingPages.forEach(page => page.remove());

    // 生成新的畫作頁面
    allPaintings.forEach((painting, index) => {
        const page = createPaintingPage(painting, index);
        book.appendChild(page);
        console.log(`添加頁面 ${index + 1}: ${painting.title}`);
    });

    // 更新總頁數
    totalPages = allPaintings.length + 1;

    console.log(`生成完成！總共 ${allPaintings.length} 個畫作頁面`);
}

/**
 * 創建單個畫作頁面
 */
function createPaintingPage(painting, index) {
    const page = document.createElement('div');
    page.className = 'page painting-page';
    page.style.display = 'none';

    // 為用戶上傳的畫作添加標識
    const userUploadedBadge = painting.isUserUploaded ?
        '<div class="user-uploaded-badge">用戶上傳</div>' : '';

    page.innerHTML = `
        <div class="page-content">
            ${userUploadedBadge}
            <img src="${painting.image}"
                 alt="${painting.title}"
                 class="painting-image"
                 onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuWcluePh+eEoeazlei8ieWFpTwvdGV4dD48L3N2Zz4=';">
            <div class="painting-info">
                <h3>${painting.title}</h3>
                <p class="artist">${painting.artist}</p>
                <p class="year">${painting.year}</p>
                <p class="description">${painting.description}</p>
                ${painting.style ? `<p class="style">風格：${painting.style}</p>` : ''}
                ${painting.isUserUploaded ? `<p class="upload-date">上傳時間：${new Date(painting.uploadDate).toLocaleDateString('zh-TW')}</p>` : ''}
            </div>
        </div>
    `;

    return page;
}

/**
 * 更新顯示
 */
function updateDisplay() {
    console.log(`更新顯示: 當前頁 ${currentPage + 1}/${totalPages}`);

    // 隱藏所有頁面
    const allPages = book.querySelectorAll('.page');
    allPages.forEach((page, index) => {
        page.style.display = 'none';
        page.classList.remove('current-page');
    });

    // 顯示當前頁面
    const currentPageElement = allPages[currentPage];
    if (currentPageElement) {
        currentPageElement.style.display = 'block';
        currentPageElement.classList.add('current-page');
        console.log(`顯示頁面 ${currentPage}: ${currentPageElement.className}`);
    }

    // 更新頁面信息
    updatePageInfo();
    updateNavigationButtons();
}

/**
 * 更新頁面信息
 */
function updatePageInfo() {
    if (pageInfo) {
        pageInfo.textContent = `第 ${currentPage + 1} 頁，共 ${totalPages} 頁`;
    }
}

/**
 * 更新導航按鈕
 */
function updateNavigationButtons() {
    if (prevBtn) {
        prevBtn.disabled = currentPage === 0;
    }
    if (nextBtn) {
        nextBtn.disabled = currentPage === totalPages - 1;
    }
}

/**
 * 上一頁
 */
function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        updateDisplay();
    }
}

/**
 * 下一頁
 */
function nextPage() {
    if (currentPage < totalPages - 1) {
        currentPage++;
        updateDisplay();
    }
}

/**
 * 設置事件監聽器
 */
function setupEventListeners() {
    if (prevBtn) {
        prevBtn.addEventListener('click', previousPage);
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', nextPage);
    }

    // 鍵盤導航
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            previousPage();
        } else if (e.key === 'ArrowRight') {
            nextPage();
        }
    });

    console.log('事件監聽器設置完成');
}

/**
 * 初始化應用程序
 */
function initApp() {
    console.log('開始初始化簡化版應用程序...');

    try {
        // 初始化 DOM 元素
        initDOMElements();

        // 生成畫作頁面
        generatePaintingPages();

        // 設置事件監聽器
        setupEventListeners();

        // 初始化顯示
        updateDisplay();

        console.log('簡化版應用程序初始化完成！');

    } catch (error) {
        console.error('初始化錯誤:', error);
    }
}

/**
 * 上傳功能相關
 */

/**
 * 初始化上傳功能
 */
function initUploadFeature() {
    const uploadBtn = document.getElementById('uploadBtn');
    const uploadModal = document.getElementById('uploadModal');
    const fileUploadArea = document.getElementById('fileUploadArea');
    const imageUpload = document.getElementById('imageUpload');
    const imagePreview = document.getElementById('imagePreview');
    const previewImage = document.getElementById('previewImage');
    const removeImageBtn = document.getElementById('removeImageBtn');
    const confirmUploadBtn = document.getElementById('confirmUploadBtn');
    const cancelUploadBtn = document.getElementById('cancelUploadBtn');

    // 表單元素
    const paintingTitle = document.getElementById('paintingTitle');
    const paintingArtist = document.getElementById('paintingArtist');
    const paintingYear = document.getElementById('paintingYear');
    const paintingDescription = document.getElementById('paintingDescription');
    const paintingStyle = document.getElementById('paintingStyle');

    let selectedFile = null;

    // 打開上傳模態框
    if (uploadBtn) {
        uploadBtn.addEventListener('click', () => {
            uploadModal.style.display = 'block';
            resetUploadForm();
        });
    }

    // 關閉模態框
    if (cancelUploadBtn) {
        cancelUploadBtn.addEventListener('click', () => {
            uploadModal.style.display = 'none';
            resetUploadForm();
        });
    }

    // 點擊模態框外部關閉
    if (uploadModal) {
        uploadModal.addEventListener('click', (e) => {
            if (e.target === uploadModal) {
                uploadModal.style.display = 'none';
                resetUploadForm();
            }
        });
    }

    // 關閉按鈕
    const closeBtn = uploadModal.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            uploadModal.style.display = 'none';
            resetUploadForm();
        });
    }

    // 文件上傳區域點擊
    if (fileUploadArea) {
        fileUploadArea.addEventListener('click', () => {
            imageUpload.click();
        });
    }

    // 文件選擇
    if (imageUpload) {
        imageUpload.addEventListener('change', handleFileSelect);
    }

    // 拖拽上傳
    if (fileUploadArea) {
        fileUploadArea.addEventListener('dragover', handleDragOver);
        fileUploadArea.addEventListener('dragleave', handleDragLeave);
        fileUploadArea.addEventListener('drop', handleFileDrop);
    }

    // 移除圖片
    if (removeImageBtn) {
        removeImageBtn.addEventListener('click', removeSelectedImage);
    }

    // 表單驗證
    [paintingTitle, paintingArtist].forEach(input => {
        if (input) {
            input.addEventListener('input', validateForm);
        }
    });

    // 確認上傳
    if (confirmUploadBtn) {
        confirmUploadBtn.addEventListener('click', handleUploadConfirm);
    }

    /**
     * 處理文件選擇
     */
    function handleFileSelect(e) {
        const file = e.target.files[0];
        if (file) {
            processSelectedFile(file);
        }
    }

    /**
     * 處理拖拽懸停
     */
    function handleDragOver(e) {
        e.preventDefault();
        fileUploadArea.classList.add('dragover');
    }

    /**
     * 處理拖拽離開
     */
    function handleDragLeave(e) {
        e.preventDefault();
        fileUploadArea.classList.remove('dragover');
    }

    /**
     * 處理文件拖拽
     */
    function handleFileDrop(e) {
        e.preventDefault();
        fileUploadArea.classList.remove('dragover');

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            processSelectedFile(files[0]);
        }
    }

    /**
     * 處理選中的文件
     */
    function processSelectedFile(file) {
        // 驗證文件類型
        if (!file.type.startsWith('image/')) {
            showNotification('請選擇圖片文件！', 'error');
            return;
        }

        // 驗證文件大小（10MB）
        if (file.size > 10 * 1024 * 1024) {
            showNotification('圖片大小不能超過 10MB！', 'error');
            return;
        }

        selectedFile = file;

        // 顯示預覽
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            fileUploadArea.style.display = 'none';
            imagePreview.style.display = 'block';
            validateForm();
        };
        reader.readAsDataURL(file);
    }

    /**
     * 移除選中的圖片
     */
    function removeSelectedImage() {
        selectedFile = null;
        previewImage.src = '';
        fileUploadArea.style.display = 'block';
        imagePreview.style.display = 'none';
        imageUpload.value = '';
        validateForm();
    }

    /**
     * 驗證表單
     */
    function validateForm() {
        const isValid = selectedFile &&
                       paintingTitle.value.trim() &&
                       paintingArtist.value.trim();

        confirmUploadBtn.disabled = !isValid;
    }

    /**
     * 處理上傳確認
     */
    function handleUploadConfirm() {
        if (!selectedFile || !paintingTitle.value.trim() || !paintingArtist.value.trim()) {
            showNotification('請填寫必要信息並選擇圖片！', 'error');
            return;
        }

        // 創建新的畫作對象
        const reader = new FileReader();
        reader.onload = function(e) {
            const newPainting = {
                title: paintingTitle.value.trim(),
                artist: paintingArtist.value.trim(),
                year: paintingYear.value.trim() || '未知年份',
                image: e.target.result, // Base64 圖片數據
                description: paintingDescription.value.trim() || '用戶上傳的畫作',
                style: paintingStyle.value || '其他',
                isUserUploaded: true,
                uploadDate: new Date().toISOString()
            };

            // 添加到用戶畫作列表
            userPaintings.push(newPainting);

            // 保存到本地存儲
            localStorage.setItem('userPaintings', JSON.stringify(userPaintings));

            // 重新生成頁面
            generatePaintingPages();
            updatePageInfo();
            updateNavigationButtons();

            // 關閉模態框
            uploadModal.style.display = 'none';
            resetUploadForm();

            // 顯示成功消息
            showNotification(`成功上傳畫作《${newPainting.title}》！`, 'success');

            console.log('新畫作已添加:', newPainting.title);
        };
        reader.readAsDataURL(selectedFile);
    }

    /**
     * 重置上傳表單
     */
    function resetUploadForm() {
        selectedFile = null;
        imageUpload.value = '';
        paintingTitle.value = '';
        paintingArtist.value = '';
        paintingYear.value = '';
        paintingDescription.value = '';
        paintingStyle.value = '';
        previewImage.src = '';
        fileUploadArea.style.display = 'block';
        imagePreview.style.display = 'none';
        confirmUploadBtn.disabled = true;
    }

    /**
     * 顯示通知
     */
    function showNotification(message, type = 'info') {
        // 創建通知元素
        const notification = document.createElement('div');
        notification.className = `upload-notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);

        // 3秒後自動移除
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    console.log('上傳功能初始化完成');
}

// 當頁面載入完成時初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM 載入完成，開始初始化簡化版...');
    setTimeout(() => {
        initApp();
        initUploadFeature();
    }, 100);
});
