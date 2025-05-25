/**
 * 簡化版世界名畫展示館 JavaScript
 */

// 畫作數據（簡化版）
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
    }
];

// 全局變量
let currentPage = 0;
let totalPages = paintings.length + 1; // +1 for cover page
let book, prevBtn, nextBtn, pageInfo;

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
    
    // 清除現有的畫作頁面（保留封面）
    const existingPaintingPages = book.querySelectorAll('.painting-page');
    existingPaintingPages.forEach(page => page.remove());
    
    // 生成新的畫作頁面
    paintings.forEach((painting, index) => {
        const page = createPaintingPage(painting, index);
        book.appendChild(page);
        console.log(`添加頁面 ${index + 1}: ${painting.title}`);
    });
    
    console.log(`生成完成！總共 ${paintings.length} 個畫作頁面`);
}

/**
 * 創建單個畫作頁面
 */
function createPaintingPage(painting, index) {
    const page = document.createElement('div');
    page.className = 'page painting-page';
    page.style.display = 'none';
    
    page.innerHTML = `
        <div class="page-content">
            <img src="${painting.image}" 
                 alt="${painting.title}" 
                 class="painting-image"
                 onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuWcluePh+eEoeazlei8ieWFpTwvdGV4dD48L3N2Zz4=';">
            <div class="painting-info">
                <h3>${painting.title}</h3>
                <p class="artist">${painting.artist}</p>
                <p class="year">${painting.year}</p>
                <p class="description">${painting.description}</p>
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

// 當頁面載入完成時初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM 載入完成，開始初始化簡化版...');
    setTimeout(initApp, 100);
});
