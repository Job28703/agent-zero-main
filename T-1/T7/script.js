/**
 * 世界名畫展示館 - 主要JavaScript功能
 * 包含翻頁效果、放大鏡功能、圖像操作等
 */

// 世界名畫數據
const paintings = [
    {
        title: "星夜",
        artist: "文森特·梵高",
        year: "1889年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        description: "梵高最著名的作品之一，描繪了夜空中旋轉的星雲和明亮的星星。這幅畫展現了梵高獨特的後印象派風格，運用厚重的筆觸和鮮豔的色彩。",
        technique: "油畫",
        dimensions: "73.7 cm × 92.1 cm",
        location: "紐約現代藝術博物館",
        style: "後印象派",
        detailDescription: "這幅畫描繪了法國南部聖雷米精神病院窗外的夜景。梵高運用旋轉的筆觸創造出動態的天空，十一顆星星和月亮發出光芒，下方是寧靜的村莊和高聳的柏樹。"
    },
    {
        title: "蒙娜麗莎",
        artist: "李奧納多·達文西",
        year: "1503-1519年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
        description: "世界上最著名的肖像畫，以其神秘的微笑而聞名。達文西運用了革命性的暈塗法技巧，創造出柔和的光影效果。",
        technique: "油畫（白楊木板）",
        dimensions: "77 cm × 53 cm",
        location: "法國羅浮宮博物館",
        style: "文藝復興",
        detailDescription: "這幅肖像畫描繪的可能是佛羅倫斯商人弗朗切斯科·德爾·焦孔多的妻子麗莎·蓋拉爾迪尼。達文西花費了約四年時間完成這幅作品，運用了他發明的暈塗法，使輪廓線變得模糊，創造出夢幻般的效果。"
    },
    {
        title: "戴珍珠耳環的少女",
        artist: "約翰尼斯·維梅爾",
        year: "1665年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg",
        description: "維梅爾的傑作，被稱為'北方的蒙娜麗莎'。這幅畫以其精湛的光影處理和神秘的氛圍而著稱。",
        technique: "油畫（畫布）",
        dimensions: "44.5 cm × 39 cm",
        location: "荷蘭海牙莫瑞泰斯皇家美術館",
        style: "荷蘭黃金時代",
        detailDescription: "這幅畫描繪了一位回眸的少女，她戴著異國情調的服裝和一顆大珍珠耳環。維梅爾運用了他標誌性的光線技巧，讓珍珠和少女的眼睛都散發出迷人的光澤。背景的深色襯托出少女的輪廓，創造出強烈的視覺衝擊。"
    },
    {
        title: "吶喊",
        artist: "愛德華·孟克",
        year: "1893年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
        description: "表現主義的代表作品，表達了現代人的焦慮和恐懼。",
        technique: "油畫、蛋彩畫、粉彩",
        dimensions: "91 cm × 73.5 cm",
        location: "挪威國家美術館",
        style: "表現主義",
        detailDescription: "這幅畫描繪了一個在橋上的人物發出痛苦吶喊的場景。扭曲的線條和強烈的色彩表達了現代人內心的焦慮和存在主義的恐懼。背景中血紅色的天空和波浪狀的線條增強了畫面的戲劇性效果。"
    },
    {
        title: "最後的晚餐",
        artist: "李奧納多·達文西",
        year: "1495-1498年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/1280px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg",
        description: "描繪耶穌與十二門徒最後晚餐的宗教題材傑作。",
        technique: "蛋彩畫、油畫混合技法",
        dimensions: "460 cm × 880 cm",
        location: "義大利米蘭聖瑪利亞感恩修道院",
        style: "文藝復興盛期",
        detailDescription: "這幅壁畫描繪了《聖經》中耶穌預言十二門徒中有人將出賣他的戲劇性時刻。達文西運用線性透視法和精湛的人物表情刻畫，展現了每個門徒不同的反應和情感。作品構圖嚴謹，以耶穌為中心，門徒們分為四組，形成動態平衡。"
    },
    {
        title: "創世紀",
        artist: "米開朗基羅",
        year: "1508-1512年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Creaci%C3%B3n_de_Ad%C3%A1n_%28Miguel_%C3%81ngel%29.jpg/1280px-Creaci%C3%B3n_de_Ad%C3%A1n_%28Miguel_%C3%81ngel%29.jpg",
        description: "西斯廷教堂天花板上的壁畫，描繪上帝創造亞當的場景。",
        technique: "濕壁畫",
        dimensions: "280 cm × 570 cm（整個天頂畫約 40m × 13m）",
        location: "梵蒂岡西斯汀教堂",
        style: "文藝復興盛期",
        detailDescription: "這是西斯汀教堂天頂畫中最著名的場景，描繪了上帝伸出手指賦予亞當生命的瞬間。兩個手指幾乎觸碰的構圖成為藝術史上最具象徵意義的畫面之一。米開朗基羅以精湛的人體解剖學知識和雕塑般的造型能力，創造出這一永恆的傑作。"
    },
    {
        title: "維納斯的誕生",
        artist: "桑德羅·波提切利",
        year: "1484-1486年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1280px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
        description: "文藝復興時期的經典作品，描繪愛神維納斯從海中誕生。",
        technique: "蛋彩畫",
        dimensions: "172.5 cm × 278.9 cm",
        location: "義大利佛羅倫斯烏菲茲美術館",
        style: "文藝復興早期",
        detailDescription: "這幅畫描繪了維納斯從海中誕生，站在貝殼上被風神吹向岸邊的神話場景。波提切利運用優美的線條和柔和的色彩，創造出夢幻般的詩意氛圍。畫面構圖平衡，人物造型優雅，體現了文藝復興時期對古典美學的追求。"
    },
    {
        title: "夜巡",
        artist: "林布蘭",
        year: "1642年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg/1280px-La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg",
        description: "林布蘭最著名的群像畫，展現了巴洛克時期的光影技巧。"
    },
    {
        title: "自由引導人民",
        artist: "歐仁·德拉克洛瓦",
        year: "1830年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/1280px-Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg",
        description: "浪漫主義的代表作，象徵自由與革命精神。",
        technique: "油畫",
        dimensions: "260 cm × 325 cm",
        location: "法國巴黎羅浮宮",
        style: "浪漫主義",
        detailDescription: "這幅畫描繪了1830年法國七月革命期間，自由女神引導人民起義的壯烈場面。德拉克洛瓦運用強烈的色彩對比和動態的構圖，表現了革命的激情和民族精神。畫面中央的自由女神高舉三色旗，象徵著自由、平等、博愛的理想。"
    },
    {
        title: "睡蓮",
        artist: "克洛德·莫內",
        year: "1919年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1919%2C_Mus%C3%A9e_Marmottan_Monet%2C_Paris.jpg/1280px-Claude_Monet_-_Water_Lilies_-_1919%2C_Mus%C3%A9e_Marmottan_Monet%2C_Paris.jpg",
        description: "印象派大師莫內的經典系列作品，捕捉光影變化。"
    },
    {
        title: "格爾尼卡",
        artist: "巴勃羅·畢卡索",
        year: "1937年",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/PicassoGuernica.jpg/1280px-PicassoGuernica.jpg",
        description: "立體主義傑作，反映戰爭的殘酷與痛苦。",
        technique: "油畫",
        dimensions: "349.3 cm × 776.6 cm",
        location: "西班牙馬德里索菲亞王后國家藝術中心博物館",
        style: "立體主義",
        detailDescription: "這幅巨作是畢卡索對1937年格爾尼卡轟炸事件的藝術回應。畫面運用黑白灰的單色調，以立體主義的分解重組手法，表現戰爭的殘酷和人民的痛苦。破碎的形象、扭曲的人體和動物，構成了一幅震撼人心的反戰宣言。"
    },
    {
        title: "美國哥德式",
        artist: "格蘭特·伍德",
        year: "1930年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/800px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
        description: "美國現實主義的代表作品，描繪農村生活。"
    },
    {
        title: "記憶的永恆",
        artist: "薩爾瓦多·達利",
        year: "1931年",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/The_Persistence_of_Memory.jpg/1280px-The_Persistence_of_Memory.jpg",
        description: "超現實主義的經典作品，以融化的時鐘著稱。"
    },
    {
        title: "拾穗者",
        artist: "讓-弗朗索瓦·米勒",
        year: "1857年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Jean-Fran%C3%A7ois_Millet_%28II%29_-_Gleaners_-_Google_Art_Project.jpg/1280px-Jean-Fran%C3%A7ois_Millet_%28II%29_-_Gleaners_-_Google_Art_Project.jpg",
        description: "現實主義作品，描繪農民辛勤勞作的場景。"
    },
    {
        title: "日出·印象",
        artist: "克洛德·莫內",
        year: "1872年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/1280px-Monet_-_Impression%2C_Sunrise.jpg",
        description: "印象派運動的開端之作，給印象派命名的作品。"
    },
    {
        title: "大碗島的星期天下午",
        artist: "喬治·秀拉",
        year: "1884-1886年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/1280px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg",
        description: "點彩派的代表作品，運用科學的色彩理論。"
    },
    {
        title: "亞維農的少女",
        artist: "巴勃羅·畢卡索",
        year: "1907年",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/800px-Les_Demoiselles_d%27Avignon.jpg",
        description: "立體主義的開創性作品，革命性地改變了藝術表現。"
    },
    {
        title: "舞蹈",
        artist: "亨利·馬蒂斯",
        year: "1910年",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Matissedance.jpg/1280px-Matissedance.jpg",
        description: "野獸派的代表作品，以純色和簡化形式著稱。"
    },
    {
        title: "吻",
        artist: "古斯塔夫·克林姆",
        year: "1907-1908年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/800px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
        description: "新藝術運動的傑作，以金箔裝飾和象徵主義著稱。"
    },
    {
        title: "自畫像",
        artist: "文森特·梵高",
        year: "1889年",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg",
        description: "梵高眾多自畫像中的一幅，展現其獨特的繪畫風格。"
    }
];

// 全局變量
let currentPage = 0;
let totalPages = paintings.length + 1; // +1 for cover page
let imageRotation = 0;
let imageScale = 1;
let magnifierZoomFactor = 3; // 放大鏡放大倍數
let magnifierLensSize = 80; // 放大鏡鏡頭大小

// 搜索和篩選相關變量（提前聲明）
let filteredPaintings = [...paintings];
let searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let userSettings = JSON.parse(localStorage.getItem('userSettings') || '{}');

// DOM 元素（延遲初始化）
let book, prevBtn, nextBtn, pageInfo, magnifierModal, magnifierImage, magnifierLens, magnifierResult;

/**
 * 初始化 DOM 元素引用
 */
function initDOMElements() {
    book = document.getElementById('book');
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
    pageInfo = document.getElementById('pageInfo');
    magnifierModal = document.getElementById('magnifierModal');
    magnifierImage = document.getElementById('magnifierImage');
    magnifierLens = document.querySelector('.magnifier-lens');
    magnifierResult = document.querySelector('.magnifier-result');

    console.log('DOM 元素初始化完成:', {
        book: !!book,
        prevBtn: !!prevBtn,
        nextBtn: !!nextBtn,
        pageInfo: !!pageInfo,
        magnifierModal: !!magnifierModal
    });
}

/**
 * 初始化應用程序
 */
function initApp() {
    console.log('initApp: 開始初始化...');

    // 首先初始化 DOM 元素
    initDOMElements();

    // 確保 filteredPaintings 已初始化
    if (!filteredPaintings || filteredPaintings.length === 0) {
        filteredPaintings = [...paintings];
    }

    console.log('initApp: 生成畫作頁面...');
    generatePaintingPages();

    console.log('initApp: 初始化顯示...');
    initializeDisplay();

    console.log('initApp: 更新頁面信息...');
    updatePageInfo();
    updateNavigationButtons();

    console.log('initApp: 設置事件監聽器...');
    setupEventListeners();

    console.log('initApp: 初始化完成！');
}

/**
 * 初始化顯示
 */
function initializeDisplay() {
    // 確保封面頁顯示
    const coverPage = document.querySelector('.cover-page');
    if (coverPage) {
        coverPage.style.display = 'block';
        coverPage.style.zIndex = '10';
        coverPage.classList.add('current-page', 'visible');
    }

    // 隱藏所有畫作頁面
    const paintingPages = document.querySelectorAll('.painting-page');
    paintingPages.forEach(page => {
        page.style.display = 'none';
        page.style.zIndex = '1';
    });

    console.log('初始化顯示完成，封面頁已顯示');
}

/**
 * 生成畫作頁面
 */
function generatePaintingPages() {
    console.log('generatePaintingPages: 開始生成頁面...');
    console.log('filteredPaintings 長度:', filteredPaintings.length);
    console.log('book 元素:', book);

    if (!book) {
        console.error('book 元素不存在！');
        return;
    }

    // 使用 filteredPaintings 而不是 paintings
    filteredPaintings.forEach((painting, index) => {
        console.log(`生成第 ${index + 1} 個畫作頁面: ${painting.title}`);
        const page = createPaintingPage(painting, index + 1);
        // 添加數據屬性以便調試
        page.setAttribute('data-painting-index', index);
        page.setAttribute('data-painting-title', painting.title);
        book.appendChild(page);
        console.log(`頁面已添加到 book 容器`);
    });

    // 更新總頁數
    totalPages = filteredPaintings.length + 1;
    console.log('generatePaintingPages: 完成！總頁數:', totalPages, '畫作數量:', filteredPaintings.length);
    console.log('book 容器中的頁面數量:', book.children.length);
}

/**
 * 創建單個畫作頁面
 * @param {Object} painting - 畫作數據
 * @param {number} pageNumber - 頁面編號
 * @returns {HTMLElement} 頁面元素
 */
function createPaintingPage(painting, pageNumber) {
    const page = document.createElement('div');
    // 簡化頁面分類邏輯：所有畫作頁面都使用相同的基本樣式
    page.className = `page painting-page`;

    // 設置頁面的 z-index 和位置
    page.style.zIndex = pageNumber;
    page.style.left = '0px';
    page.style.right = 'auto';

    // 添加調試信息
    console.log(`創建頁面 ${pageNumber}: ${painting.title} - ${painting.artist}`);

    page.innerHTML = `
        <div class="page-content">
            <img src="${painting.image}"
                 alt="${painting.title}"
                 class="painting-image"
                 data-painting-index="${pageNumber - 1}"
                 data-painting-title="${painting.title}"
                 onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuWcluePh+eEoeazlei8ieWFpTwvdGV4dD48L3N2Zz4=';">
            <div class="painting-info">
                <h3>${painting.title}</h3>
                <p class="artist">${painting.artist}</p>
                <p class="year">${painting.year}</p>
            </div>
        </div>
    `;

    return page;
}

/**
 * 設置事件監聽器
 */
function setupEventListeners() {
    // 導航按鈕
    prevBtn.addEventListener('click', previousPage);
    nextBtn.addEventListener('click', nextPage);

    // 畫作圖片點擊事件
    book.addEventListener('click', (e) => {
        if (e.target.classList.contains('painting-image')) {
            const paintingIndex = parseInt(e.target.dataset.paintingIndex);
            // 使用 filteredPaintings 而不是 paintings
            if (filteredPaintings[paintingIndex]) {
                openMagnifier(filteredPaintings[paintingIndex]);
            }
        }
    });

    // 放大鏡模態框事件
    setupMagnifierEvents();

    // 鍵盤導航
    document.addEventListener('keydown', handleKeyNavigation);
}

/**
 * 設置放大鏡相關事件
 */
function setupMagnifierEvents() {
    const closeBtn = document.querySelector('.close-btn');
    const rotateBtn = document.getElementById('rotateBtn');
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const resetBtn = document.getElementById('resetBtn');

    closeBtn.addEventListener('click', closeMagnifier);
    rotateBtn.addEventListener('click', rotateImage);
    zoomInBtn.addEventListener('click', zoomIn);
    zoomOutBtn.addEventListener('click', zoomOut);
    resetBtn.addEventListener('click', resetImage);

    // 點擊模態框背景關閉
    magnifierModal.addEventListener('click', (e) => {
        if (e.target === magnifierModal) {
            closeMagnifier();
        }
    });

    // 鼠標移動放大鏡效果
    magnifierImage.addEventListener('mousemove', updateMagnifier);
    magnifierImage.addEventListener('mouseenter', showMagnifier);
    magnifierImage.addEventListener('mouseleave', hideMagnifier);
}

/**
 * 上一頁
 */
function previousPage() {
    if (currentPage > 0) {
        stopPageViewTimer(); // 停止當前的暫停計時器
        currentPage--;
        console.log(`翻到上一頁: 第 ${currentPage + 1} 頁`);
        updateBookDisplay();
        updatePageInfo();
        updateNavigationButtons();

        // 開始新的暫停計時器（如果不是封面頁）
        if (currentPage > 0) {
            startPageViewTimer();
        }
    }
}

/**
 * 下一頁
 */
function nextPage() {
    if (currentPage < totalPages - 1 && !isPageViewPaused) {
        stopPageViewTimer(); // 停止當前的暫停計時器
        currentPage++;
        console.log(`翻到下一頁: 第 ${currentPage + 1} 頁`);
        updateBookDisplay();
        updatePageInfo();
        updateNavigationButtons();

        // 開始新的暫停計時器
        startPageViewTimer();
    }
}

/**
 * 更新書本顯示
 */
function updateBookDisplay() {
    const pages = book.querySelectorAll('.page');
    console.log(`更新書本顯示: 當前頁 ${currentPage + 1}, 總頁數 ${pages.length}`);

    // 添加當前頁面內容的調試信息
    if (currentPage > 0 && currentPage <= filteredPaintings.length) {
        const currentPainting = filteredPaintings[currentPage - 1];
        console.log(`當前顯示畫作: ${currentPainting.title} by ${currentPainting.artist}`);
    }

    pages.forEach((page, index) => {
        // 重置所有頁面樣式
        page.classList.remove('flipped', 'current-page', 'visible');
        page.style.display = 'none';
        page.style.zIndex = '1';

        // 顯示當前頁面
        if (index === currentPage) {
            page.style.display = 'block';
            page.style.zIndex = '10';
            page.classList.add('current-page', 'visible');
            console.log(`顯示頁面 ${index + 1}: ${page.getAttribute('data-painting-title') || '封面'}`);
        }
    });

    // 強制瀏覽器重新計算佈局
    book.offsetHeight;
}

/**
 * 更新頁面信息
 */
function updatePageInfo() {
    pageInfo.textContent = `第 ${currentPage + 1} 頁，共 ${totalPages} 頁`;
}

/**
 * 更新導航按鈕狀態
 */
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === totalPages - 1;

    // 如果正在暫停中，禁用下一頁按鈕
    if (isPageViewPaused && currentPage > 0) {
        nextBtn.disabled = true;
        nextBtn.textContent = '請稍候... ⏳';
    } else {
        nextBtn.textContent = '下一頁 ➡️';
    }
}

/**
 * 鍵盤導航處理
 * @param {KeyboardEvent} e - 鍵盤事件
 */
function handleKeyNavigation(e) {
    switch(e.key) {
        case 'ArrowLeft':
            previousPage();
            break;
        case 'ArrowRight':
            nextPage();
            break;
        case 'Escape':
            if (magnifierModal.style.display === 'block') {
                closeMagnifier();
            }
            break;
    }
}

/**
 * 打開放大鏡
 * @param {Object} painting - 畫作數據
 */
function openMagnifier(painting) {
    magnifierImage.src = painting.image;
    document.getElementById('paintingTitle').textContent = painting.title;
    document.getElementById('paintingArtist').textContent = `藝術家：${painting.artist}`;
    document.getElementById('paintingYear').textContent = `創作年份：${painting.year}`;

    // 更新詳細信息
    const paintingInfo = document.querySelector('.painting-info');
    paintingInfo.innerHTML = `
        <h3>${painting.title}</h3>
        <p><strong>藝術家：</strong>${painting.artist}</p>
        <p><strong>創作年份：</strong>${painting.year}</p>
        ${painting.technique ? `<p><strong>技法：</strong>${painting.technique}</p>` : ''}
        ${painting.dimensions ? `<p><strong>尺寸：</strong>${painting.dimensions}</p>` : ''}
        ${painting.location ? `<p><strong>收藏地：</strong>${painting.location}</p>` : ''}
        ${painting.style ? `<p><strong>藝術風格：</strong>${painting.style}</p>` : ''}
        <p><strong>作品描述：</strong>${painting.description}</p>
        ${painting.detailDescription ? `<p><strong>詳細介紹：</strong>${painting.detailDescription}</p>` : ''}
    `;

    magnifierModal.style.display = 'block';
    resetImage();

    // 設置放大鏡結果背景
    magnifierResult.style.backgroundImage = `url('${painting.image}')`;

    // 添加圖片加載完成後的處理
    magnifierImage.onload = function() {
        updateMagnifierSettings();
    };
}

/**
 * 關閉放大鏡
 */
function closeMagnifier() {
    magnifierModal.style.display = 'none';
    hideMagnifier();
}

/**
 * 顯示放大鏡
 */
function showMagnifier() {
    magnifierLens.style.display = 'block';
    magnifierResult.style.display = 'block';
}

/**
 * 隱藏放大鏡
 */
function hideMagnifier() {
    magnifierLens.style.display = 'none';
    magnifierResult.style.display = 'none';
}

/**
 * 更新放大鏡位置和效果
 * @param {MouseEvent} e - 鼠標事件
 */
function updateMagnifier(e) {
    const rect = magnifierImage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 限制放大鏡在圖片範圍內
    const halfLensSize = magnifierLensSize / 2;
    const lensX = Math.max(halfLensSize, Math.min(x, rect.width - halfLensSize));
    const lensY = Math.max(halfLensSize, Math.min(y, rect.height - halfLensSize));

    // 設置放大鏡位置
    magnifierLens.style.left = (lensX - halfLensSize) + 'px';
    magnifierLens.style.top = (lensY - halfLensSize) + 'px';
    magnifierLens.style.width = magnifierLensSize + 'px';
    magnifierLens.style.height = magnifierLensSize + 'px';

    // 計算放大區域
    const bgX = -(lensX * magnifierZoomFactor - magnifierResult.offsetWidth / 2);
    const bgY = -(lensY * magnifierZoomFactor - magnifierResult.offsetHeight / 2);

    magnifierResult.style.backgroundPosition = `${bgX}px ${bgY}px`;
    magnifierResult.style.backgroundSize = `${rect.width * magnifierZoomFactor}px ${rect.height * magnifierZoomFactor}px`;

    // 添加放大倍數顯示
    updateZoomInfo();
}

/**
 * 更新放大鏡設置
 */
function updateMagnifierSettings() {
    // 根據圖片大小調整放大鏡參數
    const rect = magnifierImage.getBoundingClientRect();
    if (rect.width < 300) {
        magnifierLensSize = 60;
        magnifierZoomFactor = 2.5;
    } else {
        magnifierLensSize = 80;
        magnifierZoomFactor = 3;
    }
}

/**
 * 更新縮放信息顯示
 */
function updateZoomInfo() {
    let zoomInfo = document.getElementById('zoomInfo');
    if (!zoomInfo) {
        zoomInfo = document.createElement('div');
        zoomInfo.id = 'zoomInfo';
        zoomInfo.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.7);
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 12px;
            pointer-events: none;
        `;
        document.querySelector('.magnifier-container').appendChild(zoomInfo);
    }
    zoomInfo.textContent = `放大倍數: ${magnifierZoomFactor}x`;
}

/**
 * 旋轉圖片
 */
function rotateImage() {
    imageRotation += 90;
    updateImageTransform();
}

/**
 * 放大圖片
 */
function zoomIn() {
    imageScale = Math.min(imageScale * 1.2, 3);
    updateImageTransform();
}

/**
 * 縮小圖片
 */
function zoomOut() {
    imageScale = Math.max(imageScale / 1.2, 0.5);
    updateImageTransform();
}

/**
 * 重置圖片
 */
function resetImage() {
    imageRotation = 0;
    imageScale = 1;
    updateImageTransform();
}

/**
 * 更新圖片變換
 */
function updateImageTransform() {
    magnifierImage.style.transform = `rotate(${imageRotation}deg) scale(${imageScale})`;
}

/**
 * 新增功能：搜索與篩選系統
 */

// 默認設定
const defaultSettings = {
    highContrast: false,
    fontSize: 'medium',
    animations: true,
    pageTurnSound: true,
    backgroundMusic: false,
    autoPlay: false,
    autoPlayInterval: 5,
    pageViewDuration: 20,
    pageViewPauseEnabled: true
};

// 合併用戶設定與默認設定
userSettings = { ...defaultSettings, ...userSettings };

/**
 * 初始化搜索與篩選功能
 */
function initSearchAndFilter() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const artistFilter = document.getElementById('artistFilter');
    const styleFilter = document.getElementById('styleFilter');
    const eraFilter = document.getElementById('eraFilter');

    // 填充篩選選項
    populateFilterOptions();

    // 搜索事件
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('focus', showSearchSuggestions);
    searchInput.addEventListener('blur', hideSearchSuggestions);
    searchBtn.addEventListener('click', performSearch);

    // 篩選事件
    artistFilter.addEventListener('change', applyFilters);
    styleFilter.addEventListener('change', applyFilters);
    eraFilter.addEventListener('change', applyFilters);
}

/**
 * 填充篩選選項
 */
function populateFilterOptions() {
    const artists = [...new Set(paintings.map(p => p.artist))].sort();
    const styles = [...new Set(paintings.map(p => p.style).filter(Boolean))].sort();
    const eras = [...new Set(paintings.map(p => extractEra(p.year)))].sort();

    populateSelect('artistFilter', artists);
    populateSelect('styleFilter', styles);
    populateSelect('eraFilter', eras);
}

/**
 * 填充選擇框選項
 */
function populateSelect(selectId, options) {
    const select = document.getElementById(selectId);
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });
}

/**
 * 提取年代
 */
function extractEra(yearString) {
    const year = parseInt(yearString);
    if (year < 1400) return '中世紀';
    if (year < 1600) return '文藝復興';
    if (year < 1750) return '巴洛克';
    if (year < 1850) return '新古典主義';
    if (year < 1900) return '印象派';
    if (year < 1950) return '現代主義';
    return '當代';
}

/**
 * 處理搜索
 */
function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    if (query.length > 0) {
        showSearchSuggestions();
        updateSearchSuggestions(query);
    } else {
        hideSearchSuggestions();
    }
}

/**
 * 顯示搜索建議
 */
function showSearchSuggestions() {
    document.getElementById('searchSuggestions').style.display = 'block';
}

/**
 * 隱藏搜索建議
 */
function hideSearchSuggestions() {
    setTimeout(() => {
        document.getElementById('searchSuggestions').style.display = 'none';
    }, 200);
}

/**
 * 更新搜索建議
 */
function updateSearchSuggestions(query) {
    const suggestions = document.getElementById('searchSuggestions');
    const matches = paintings.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.artist.toLowerCase().includes(query) ||
        (p.style && p.style.toLowerCase().includes(query))
    ).slice(0, 5);

    suggestions.innerHTML = '';
    matches.forEach(painting => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.textContent = `${painting.title} - ${painting.artist}`;
        item.addEventListener('click', () => {
            document.getElementById('searchInput').value = painting.title;
            performSearch();
            hideSearchSuggestions();
        });
        suggestions.appendChild(item);
    });
}

/**
 * 執行搜索
 */
function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (query) {
        addToSearchHistory(query);
        applyFilters();
    }
}

/**
 * 添加到搜索歷史
 */
function addToSearchHistory(query) {
    if (!searchHistory.includes(query)) {
        searchHistory.unshift(query);
        searchHistory = searchHistory.slice(0, 10); // 保留最近10次搜索
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }
}

/**
 * 應用篩選
 */
function applyFilters() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const artistFilter = document.getElementById('artistFilter').value;
    const styleFilter = document.getElementById('styleFilter').value;
    const eraFilter = document.getElementById('eraFilter').value;

    filteredPaintings = paintings.filter(painting => {
        const matchesSearch = !searchQuery ||
            painting.title.toLowerCase().includes(searchQuery) ||
            painting.artist.toLowerCase().includes(searchQuery) ||
            (painting.style && painting.style.toLowerCase().includes(searchQuery));

        const matchesArtist = !artistFilter || painting.artist === artistFilter;
        const matchesStyle = !styleFilter || painting.style === styleFilter;
        const matchesEra = !eraFilter || extractEra(painting.year) === eraFilter;

        return matchesSearch && matchesArtist && matchesStyle && matchesEra;
    });

    regenerateBook();
    showNotification(`找到 ${filteredPaintings.length} 幅畫作`);
}

/**
 * 重新生成書本內容
 */
function regenerateBook() {
    console.log('開始重新生成書本，篩選後畫作數量:', filteredPaintings.length);

    // 清除現有頁面（除了封面）
    const pages = book.querySelectorAll('.painting-page');
    pages.forEach(page => page.remove());

    // 重新生成篩選後的頁面，確保每個頁面都有唯一的標識
    filteredPaintings.forEach((painting, index) => {
        const page = createPaintingPage(painting, index + 1);
        // 添加唯一的數據屬性
        page.setAttribute('data-painting-index', index);
        page.setAttribute('data-painting-title', painting.title);
        book.appendChild(page);
        console.log(`添加頁面 ${index + 1}: ${painting.title}`);
    });

    // 更新總頁數和當前頁面
    totalPages = filteredPaintings.length + 1;
    currentPage = 0;

    // 強制重新渲染
    requestAnimationFrame(() => {
        updatePageInfo();
        updateNavigationButtons();
        updateBookDisplay();
        updateCurrentPaintingControls();
    });

    console.log('書本重新生成完成，總頁數:', totalPages);
}

/**
 * 收藏功能
 */

/**
 * 初始化收藏功能
 */
function initFavorites() {
    updateFavoriteCount();

    // 收藏按鈕事件
    document.getElementById('favoritesBtn').addEventListener('click', showFavoritesModal);
    document.getElementById('favoriteCurrentBtn').addEventListener('click', toggleCurrentFavorite);
}

/**
 * 切換當前畫作收藏狀態
 */
function toggleCurrentFavorite() {
    if (currentPage === 0) return; // 封面頁不能收藏

    const paintingIndex = currentPage - 1;
    const painting = filteredPaintings[paintingIndex];

    if (isFavorited(painting.title)) {
        removeFavorite(painting.title);
        showNotification('已取消收藏', 'warning');
    } else {
        addFavorite(painting);
        showNotification('已加入收藏');
    }

    updateFavoriteButton();
    updateFavoriteCount();
}

/**
 * 添加收藏
 */
function addFavorite(painting) {
    if (!isFavorited(painting.title)) {
        favorites.push({
            title: painting.title,
            artist: painting.artist,
            year: painting.year,
            image: painting.image,
            addedDate: new Date().toISOString()
        });
        saveFavorites();
    }
}

/**
 * 移除收藏
 */
function removeFavorite(title) {
    favorites = favorites.filter(fav => fav.title !== title);
    saveFavorites();
}

/**
 * 檢查是否已收藏
 */
function isFavorited(title) {
    return favorites.some(fav => fav.title === title);
}

/**
 * 保存收藏到本地存儲
 */
function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

/**
 * 更新收藏計數
 */
function updateFavoriteCount() {
    document.getElementById('favCount').textContent = favorites.length;
}

/**
 * 更新收藏按鈕狀態
 */
function updateFavoriteButton() {
    const btn = document.getElementById('favoriteCurrentBtn');
    if (currentPage === 0) {
        btn.style.display = 'none';
        return;
    }

    const painting = filteredPaintings[currentPage - 1];
    if (isFavorited(painting.title)) {
        btn.classList.add('favorited');
        btn.textContent = '💖';
    } else {
        btn.classList.remove('favorited');
        btn.textContent = '❤️';
    }
}

/**
 * 顯示收藏模態框
 */
function showFavoritesModal() {
    const modal = document.getElementById('favoritesModal');
    const content = document.getElementById('favoritesContent');

    if (favorites.length === 0) {
        content.innerHTML = '<p class="empty-favorites">尚未收藏任何畫作</p>';
    } else {
        content.innerHTML = favorites.map(fav => `
            <div class="favorite-item" onclick="goToPainting('${fav.title}')">
                <img src="${fav.image}" alt="${fav.title}">
                <div class="favorite-info">
                    <h4>${fav.title}</h4>
                    <p>${fav.artist} - ${fav.year}</p>
                    <p>收藏於：${new Date(fav.addedDate).toLocaleDateString()}</p>
                </div>
            </div>
        `).join('');
    }

    modal.style.display = 'block';
}

/**
 * 跳轉到指定畫作
 */
function goToPainting(title) {
    const index = filteredPaintings.findIndex(p => p.title === title);
    if (index !== -1) {
        currentPage = index + 1; // +1 因為封面佔第一頁
        updateBookDisplay();
        updatePageInfo();
        updateNavigationButtons();
        updateCurrentPaintingControls();
        closeModal('favoritesModal');
        showNotification(`已跳轉到《${title}》`);
    }
}

/**
 * 分享功能
 */

/**
 * 初始化分享功能
 */
function initShare() {
    document.getElementById('shareCurrentBtn').addEventListener('click', shareCurrentPainting);
    document.getElementById('copyLinkBtn').addEventListener('click', copyShareLink);
    document.getElementById('downloadImageBtn').addEventListener('click', downloadCurrentImage);

    // 社交媒體分享
    document.querySelectorAll('.share-btn[data-platform]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const platform = e.target.dataset.platform;
            shareToSocialMedia(platform);
        });
    });
}

/**
 * 分享當前畫作
 */
function shareCurrentPainting() {
    if (currentPage === 0) return;

    const painting = filteredPaintings[currentPage - 1];
    const modal = document.getElementById('shareModal');

    document.getElementById('sharePreviewImage').src = painting.image;
    document.getElementById('shareTitle').textContent = painting.title;
    document.getElementById('shareArtist').textContent = `${painting.artist} - ${painting.year}`;

    modal.style.display = 'block';
}

/**
 * 分享到社交媒體
 */
function shareToSocialMedia(platform) {
    const painting = filteredPaintings[currentPage - 1];
    const text = `欣賞世界名畫：《${painting.title}》by ${painting.artist}`;
    const url = window.location.href;

    let shareUrl = '';

    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
            break;
        case 'line':
            shareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            break;
    }

    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

/**
 * 複製分享連結
 */
async function copyShareLink() {
    try {
        await navigator.clipboard.writeText(window.location.href);
        showNotification('連結已複製到剪貼板');
    } catch (err) {
        showNotification('複製失敗，請手動複製', 'error');
    }
}

/**
 * 下載當前圖片
 */
function downloadCurrentImage() {
    const painting = filteredPaintings[currentPage - 1];
    const link = document.createElement('a');
    link.href = painting.image;
    link.download = `${painting.title}_${painting.artist}.jpg`;
    link.click();
    showNotification('圖片下載已開始');
}

/**
 * 設定功能
 */

/**
 * 初始化設定功能
 */
function initSettings() {
    document.getElementById('settingsBtn').addEventListener('click', showSettingsModal);

    // 載入用戶設定
    loadUserSettings();

    // 設定變更事件
    document.getElementById('highContrastMode').addEventListener('change', toggleHighContrast);
    document.getElementById('fontSizeSelect').addEventListener('change', changeFontSize);
    document.getElementById('animationsEnabled').addEventListener('change', toggleAnimations);
    document.getElementById('pageTurnSound').addEventListener('change', togglePageTurnSound);
    document.getElementById('backgroundMusic').addEventListener('change', toggleBackgroundMusic);
    document.getElementById('autoPlayMode').addEventListener('change', toggleAutoPlay);
    document.getElementById('autoPlayInterval').addEventListener('input', updateAutoPlayInterval);
    document.getElementById('pageViewDuration').addEventListener('input', updatePageViewDuration);
    document.getElementById('pageViewPauseEnabled').addEventListener('change', togglePageViewPause);
}

/**
 * 載入用戶設定
 */
function loadUserSettings() {
    document.getElementById('highContrastMode').checked = userSettings.highContrast;
    document.getElementById('fontSizeSelect').value = userSettings.fontSize;
    document.getElementById('animationsEnabled').checked = userSettings.animations;
    document.getElementById('pageTurnSound').checked = userSettings.pageTurnSound;
    document.getElementById('backgroundMusic').checked = userSettings.backgroundMusic;
    document.getElementById('autoPlayMode').checked = userSettings.autoPlay;
    document.getElementById('autoPlayInterval').value = userSettings.autoPlayInterval;
    document.getElementById('intervalValue').textContent = userSettings.autoPlayInterval;
    document.getElementById('pageViewDuration').value = userSettings.pageViewDuration;
    document.getElementById('durationValue').textContent = userSettings.pageViewDuration;
    document.getElementById('pageViewPauseEnabled').checked = userSettings.pageViewPauseEnabled;

    // 應用設定
    applySettings();
}

/**
 * 應用設定
 */
function applySettings() {
    // 高對比度
    document.body.classList.toggle('high-contrast', userSettings.highContrast);

    // 字體大小
    document.body.classList.remove('font-small', 'font-large');
    if (userSettings.fontSize !== 'medium') {
        document.body.classList.add(`font-${userSettings.fontSize}`);
    }

    // 動畫
    document.body.classList.toggle('no-animations', !userSettings.animations);
}

/**
 * 保存用戶設定
 */
function saveUserSettings() {
    localStorage.setItem('userSettings', JSON.stringify(userSettings));
}

/**
 * 切換高對比度模式
 */
function toggleHighContrast(e) {
    userSettings.highContrast = e.target.checked;
    applySettings();
    saveUserSettings();
}

/**
 * 改變字體大小
 */
function changeFontSize(e) {
    userSettings.fontSize = e.target.value;
    applySettings();
    saveUserSettings();
}

/**
 * 切換動畫效果
 */
function toggleAnimations(e) {
    userSettings.animations = e.target.checked;
    applySettings();
    saveUserSettings();
}

/**
 * 切換翻頁音效
 */
function togglePageTurnSound(e) {
    userSettings.pageTurnSound = e.target.checked;
    saveUserSettings();
}

/**
 * 切換背景音樂
 */
function toggleBackgroundMusic(e) {
    userSettings.backgroundMusic = e.target.checked;
    saveUserSettings();
    // TODO: 實現背景音樂播放
}

/**
 * 切換自動播放
 */
function toggleAutoPlay(e) {
    userSettings.autoPlay = e.target.checked;
    saveUserSettings();
    if (userSettings.autoPlay) {
        startAutoPlay();
    } else {
        stopAutoPlay();
    }
}

/**
 * 更新自動播放間隔
 */
function updateAutoPlayInterval(e) {
    userSettings.autoPlayInterval = parseInt(e.target.value);
    document.getElementById('intervalValue').textContent = userSettings.autoPlayInterval;
    saveUserSettings();

    if (userSettings.autoPlay) {
        stopAutoPlay();
        startAutoPlay();
    }
}

/**
 * 更新頁面瀏覽暫停時間
 */
function updatePageViewDuration(e) {
    userSettings.pageViewDuration = parseInt(e.target.value);
    document.getElementById('durationValue').textContent = userSettings.pageViewDuration;
    saveUserSettings();

    // 如果當前正在暫停中，重新開始計時器
    if (isPageViewPaused) {
        startPageViewTimer();
    }
}

/**
 * 切換頁面瀏覽暫停功能
 */
function togglePageViewPause(e) {
    userSettings.pageViewPauseEnabled = e.target.checked;
    saveUserSettings();

    if (!userSettings.pageViewPauseEnabled && isPageViewPaused) {
        stopPageViewTimer();
        updateNavigationButtons();
    }

    showNotification(userSettings.pageViewPauseEnabled ? '已啟用翻頁暫停' : '已禁用翻頁暫停');
}

/**
 * 自動播放和翻頁暫停相關
 */
let autoPlayTimer = null;
let pageViewTimer = null;
let isPageViewPaused = false;

/**
 * 開始自動播放
 */
function startAutoPlay() {
    if (autoPlayTimer) stopAutoPlay();

    autoPlayTimer = setInterval(() => {
        if (currentPage < totalPages - 1) {
            nextPage();
        } else {
            currentPage = 0;
            updateBookDisplay();
            updatePageInfo();
            updateNavigationButtons();
        }
    }, userSettings.autoPlayInterval * 1000);
}

/**
 * 停止自動播放
 */
function stopAutoPlay() {
    if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
    }
    stopPageViewTimer();
}

/**
 * 開始頁面瀏覽計時器
 */
function startPageViewTimer() {
    stopPageViewTimer(); // 清除現有計時器

    if (currentPage === 0 || !userSettings.pageViewPauseEnabled) return; // 封面頁或已禁用暫停功能

    isPageViewPaused = true;
    updateNavigationButtonsWithTimer();
    showPageViewNotification();

    const duration = userSettings.pageViewDuration * 1000; // 轉換為毫秒

    pageViewTimer = setTimeout(() => {
        isPageViewPaused = false;
        updateNavigationButtons();
        hidePageViewNotification();

        // 如果開啟自動播放，繼續下一頁
        if (userSettings.autoPlay && currentPage < totalPages - 1) {
            nextPage();
        }
    }, duration);
}

/**
 * 停止頁面瀏覽計時器
 */
function stopPageViewTimer() {
    if (pageViewTimer) {
        clearTimeout(pageViewTimer);
        pageViewTimer = null;
    }
    isPageViewPaused = false;
    hidePageViewNotification();
}

/**
 * 更新導航按鈕狀態（包含計時器狀態）
 */
function updateNavigationButtonsWithTimer() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // 基本狀態
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === totalPages - 1;

    // 如果正在暫停中，禁用下一頁按鈕
    if (isPageViewPaused && currentPage > 0) {
        nextBtn.disabled = true;
        nextBtn.textContent = '請稍候... ⏳';
    } else {
        nextBtn.textContent = '下一頁 ➡️';
    }
}

/**
 * 顯示頁面瀏覽通知
 */
function showPageViewNotification() {
    const notification = document.getElementById('pageViewNotification');
    if (!notification) {
        createPageViewNotification();
    }

    const notificationEl = document.getElementById('pageViewNotification');
    notificationEl.style.display = 'block';

    // 開始倒數計時
    startCountdown();
}

/**
 * 隱藏頁面瀏覽通知
 */
function hidePageViewNotification() {
    const notification = document.getElementById('pageViewNotification');
    if (notification) {
        notification.style.display = 'none';
    }
}

/**
 * 創建頁面瀏覽通知元素
 */
function createPageViewNotification() {
    const notification = document.createElement('div');
    notification.id = 'pageViewNotification';
    notification.className = 'page-view-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">🎨</div>
            <div class="notification-text">
                <h4>正在欣賞畫作</h4>
                <p>請花點時間細細品味這幅傑作</p>
                <div class="countdown-container">
                    <div class="countdown-circle">
                        <span id="countdownText">${userSettings.pageViewDuration}</span>
                    </div>
                    <p class="countdown-label">秒後可繼續</p>
                </div>
            </div>
            <button id="skipWaitBtn" class="skip-btn">⏭️ 跳過等待</button>
        </div>
    `;

    document.body.appendChild(notification);

    // 添加跳過按鈕事件
    document.getElementById('skipWaitBtn').addEventListener('click', skipPageViewWait);
}

/**
 * 開始倒數計時
 */
function startCountdown() {
    let remainingTime = userSettings.pageViewDuration;
    const totalTime = userSettings.pageViewDuration;
    const countdownText = document.getElementById('countdownText');
    const countdownCircle = document.querySelector('.countdown-circle');

    const countdownInterval = setInterval(() => {
        remainingTime--;
        if (countdownText) {
            countdownText.textContent = remainingTime;
        }

        // 更新圓形進度
        if (countdownCircle) {
            const progress = (totalTime - remainingTime) / totalTime * 360;
            countdownCircle.style.background = `conic-gradient(#667eea ${progress}deg, rgba(255,255,255,0.2) ${progress}deg)`;
        }

        if (remainingTime <= 0 || !isPageViewPaused) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

/**
 * 跳過頁面瀏覽等待
 */
function skipPageViewWait() {
    stopPageViewTimer();
    updateNavigationButtons();
    showNotification('已跳過等待時間');
}

/**
 * 通用功能
 */

/**
 * 顯示設定模態框
 */
function showSettingsModal() {
    document.getElementById('settingsModal').style.display = 'block';
}

/**
 * 顯示通知
 */
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

/**
 * 關閉模態框
 */
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

/**
 * 初始化模態框事件
 */
function initModals() {
    // 關閉按鈕事件
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modalId = e.target.dataset.modal;
            if (modalId) {
                closeModal(modalId);
            } else {
                // 查找父級模態框
                const modal = e.target.closest('.modal');
                if (modal) {
                    modal.style.display = 'none';
                }
            }
        });
    });

    // 點擊背景關閉模態框
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}

/**
 * 初始化幫助功能
 */
function initHelp() {
    document.getElementById('helpBtn').addEventListener('click', () => {
        document.getElementById('helpModal').style.display = 'block';
    });
}

/**
 * 初始化全螢幕功能
 */
function initFullscreen() {
    document.getElementById('fullscreenBtn').addEventListener('click', toggleFullscreen);
}

/**
 * 切換全螢幕模式
 */
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            showNotification('無法進入全螢幕模式', 'error');
        });
    } else {
        document.exitFullscreen();
    }
}

/**
 * 更新當前畫作控制按鈕
 */
function updateCurrentPaintingControls() {
    const controls = document.getElementById('currentPaintingControls');
    if (currentPage === 0) {
        controls.style.display = 'none';
    } else {
        controls.style.display = 'flex';
        updateFavoriteButton();
    }
}

/**
 * 增強的鍵盤導航
 */
function enhancedKeyNavigation(e) {
    switch(e.key.toLowerCase()) {
        case 'f':
            if (currentPage > 0) {
                toggleCurrentFavorite();
            }
            break;
        case 's':
            if (currentPage > 0) {
                shareCurrentPainting();
            }
            break;
        case 'h':
            document.getElementById('helpModal').style.display = 'block';
            break;
        case 'escape':
            // 關閉所有模態框
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
            break;
    }
}

/**
 * 調試函數
 */
function debugCurrentState() {
    console.log('=== 當前狀態調試 ===');
    console.log('當前頁面:', currentPage);
    console.log('總頁數:', totalPages);
    console.log('filteredPaintings 長度:', filteredPaintings.length);

    if (currentPage > 0 && currentPage <= filteredPaintings.length) {
        const currentPainting = filteredPaintings[currentPage - 1];
        console.log('當前畫作:', currentPainting.title, 'by', currentPainting.artist);
        console.log('當前畫作圖片:', currentPainting.image);
    }

    const pages = book.querySelectorAll('.page');
    console.log('DOM 中的頁面數量:', pages.length);

    pages.forEach((page, index) => {
        const title = page.getAttribute('data-painting-title');
        const isFlipped = page.classList.contains('flipped');
        const isCurrent = page.classList.contains('current-page');
        console.log(`頁面 ${index}: ${title || '封面'}, 翻轉: ${isFlipped}, 當前: ${isCurrent}`);
    });
    console.log('=== 調試結束 ===');
}

/**
 * 重寫原有的更新函數以支援新功能
 */

// 重寫 updatePageInfo 函數
const originalUpdatePageInfo = updatePageInfo;
updatePageInfo = function() {
    originalUpdatePageInfo();
    updateCurrentPaintingControls();

    // 添加調試信息
    if (window.location.search.includes('debug=true')) {
        debugCurrentState();
    }
};

// 重寫 handleKeyNavigation 函數
const originalHandleKeyNavigation = handleKeyNavigation;
handleKeyNavigation = function(e) {
    originalHandleKeyNavigation(e);
    enhancedKeyNavigation(e);
};

/**
 * 科技感動畫效果
 */
function initTechEffects() {
    // 創建粒子背景
    createParticleBackground();

    // 添加打字機效果
    addTypewriterEffect();

    // 添加掃描線效果
    addScanlineEffect();

    // 添加全息投影效果
    addHologramEffect();
}

/**
 * 創建粒子背景
 */
function createParticleBackground() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;

    // 創建50個粒子
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--neon-blue);
            border-radius: 50%;
            opacity: 0.6;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            box-shadow: 0 0 6px var(--neon-blue);
        `;
        particleContainer.appendChild(particle);
    }

    document.body.appendChild(particleContainer);

    // 添加粒子動畫 CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

/**
 * 添加打字機效果
 */
function addTypewriterEffect() {
    const subtitle = document.querySelector('.header p');
    if (subtitle) {
        const text = subtitle.textContent;
        subtitle.textContent = '';
        subtitle.style.borderRight = '2px solid var(--neon-blue)';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // 閃爍游標效果
                setInterval(() => {
                    subtitle.style.borderRight = subtitle.style.borderRight === 'none' ?
                        '2px solid var(--neon-blue)' : 'none';
                }, 500);
            }
        };

        setTimeout(typeWriter, 1000);
    }
}

/**
 * 添加掃描線效果
 */
function addScanlineEffect() {
    const scanlines = document.createElement('div');
    scanlines.className = 'scanlines';
    scanlines.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1000;
        background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 212, 255, 0.03) 2px,
            rgba(0, 212, 255, 0.03) 4px
        );
        animation: scanlines 0.1s linear infinite;
    `;

    document.body.appendChild(scanlines);

    // 添加掃描線動畫 CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes scanlines {
            0% { transform: translateY(0); }
            100% { transform: translateY(4px); }
        }
    `;
    document.head.appendChild(style);
}

/**
 * 添加全息投影效果
 */
function addHologramEffect() {
    const book = document.querySelector('.book');
    if (book) {
        book.addEventListener('mouseenter', () => {
            book.style.filter = `
                drop-shadow(0 0 30px rgba(0, 212, 255, 0.5))
                hue-rotate(10deg)
                contrast(1.1)
            `;
        });

        book.addEventListener('mouseleave', () => {
            book.style.filter = 'drop-shadow(0 0 30px rgba(0, 212, 255, 0.3))';
        });
    }
}

/**
 * 數據流動畫
 */
function createDataStream() {
    const dataStream = document.createElement('div');
    dataStream.className = 'data-stream';
    dataStream.style.cssText = `
        position: fixed;
        top: 0;
        right: 20px;
        width: 2px;
        height: 100%;
        background: linear-gradient(to bottom,
            transparent,
            var(--neon-green),
            transparent);
        opacity: 0.7;
        animation: dataFlow 2s linear infinite;
        z-index: -1;
    `;

    document.body.appendChild(dataStream);

    // 添加數據流動畫 CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes dataFlow {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100vh); }
        }
    `;
    document.head.appendChild(style);
}

/**
 * 初始化所有新功能
 */
function initEnhancedFeatures() {
    initSearchAndFilter();
    initFavorites();
    initShare();
    initSettings();
    initModals();
    initHelp();
    initFullscreen();
    initTechEffects();

    // 顯示科技感歡迎通知
    setTimeout(() => {
        showNotification('>>> 系統初始化完成 - 歡迎進入數位藝術空間 <<<');
    }, 2000);

    // 創建數據流效果
    setTimeout(createDataStream, 3000);
}

// 重寫初始化函數
const originalInitApp = initApp;
initApp = function() {
    console.log('開始初始化應用程序...');

    // 首先初始化 DOM 元素
    initDOMElements();

    // 確保 DOM 元素存在
    if (!book) {
        console.error('書本容器未找到！');
        return;
    }

    // 清空書本容器（保留封面）
    const coverPage = book.querySelector('.cover-page');
    book.innerHTML = '';
    if (coverPage) {
        book.appendChild(coverPage);
        console.log('封面頁已保留');
    }

    console.log('調用原始初始化函數...');
    // 確保 filteredPaintings 已初始化
    if (!filteredPaintings || filteredPaintings.length === 0) {
        filteredPaintings = [...paintings];
    }

    generatePaintingPages();
    updatePageInfo();
    updateNavigationButtons();
    setupEventListeners();

    console.log('初始化增強功能...');
    initEnhancedFeatures();

    console.log('應用程序初始化完成！');
};

// 初始化應用程序
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM 載入完成，開始初始化...');

    // 簡化的初始化過程
    setTimeout(() => {
        try {
            // 基本初始化
            initDOMElements();

            // 確保數據已準備
            if (!filteredPaintings || filteredPaintings.length === 0) {
                filteredPaintings = [...paintings];
            }

            // 生成頁面
            generatePaintingPages();

            // 初始化顯示
            initializeDisplay();

            // 更新界面
            updatePageInfo();
            updateNavigationButtons();

            // 設置事件
            setupEventListeners();

            console.log('基本初始化完成！');
            console.log('當前狀態:', {
                currentPage,
                totalPages,
                paintingsCount: filteredPaintings.length,
                pagesInDOM: document.querySelectorAll('.page').length
            });

        } catch (error) {
            console.error('初始化錯誤:', error);
        }
    }, 200);
});