// 等待 HTML 文件完全載入後執行
document.addEventListener('DOMContentLoaded', () => {

    // 1. 各專案的詳細介紹文字資料庫 (可自由擴充修改)
    const projectDetails = {
        "1": {
            title: "專案一：Enchanted Brew Café 魔法咖啡廳",
            desc: "這是一個具備奇幻魔法風格的咖啡廳形象網站。專案重點在於精緻的視覺設計與 CSS 互動動畫，包含滑鼠懸停時菜單卡片的翻轉特效、自適應各種行動裝置的響應式選單。未來預計加入購物車功能與線上預約系統。"
        },
        "2": {
            title: "專案二：Happy Restaurant 快樂餐廳",
            desc: "快樂餐廳是一個功能導向的網頁範例。採用了更清晰的區塊式結構，展示了精緻的菜單分類與動態點餐預覽。核心在於利用乾淨的 HTML 語意化標籤配合彈性的排版，提供顧客流暢的訂位引導介面。"
        },
        "3": {
            title: "專案三：輕量級工具類 Web App",
            desc: "此專案運用原生 JavaScript (JS) 進行邏輯開發，例如動態資料陣列的處理、迴圈產生欄位以及基本的計算公式。並整合瀏覽器的 LocalStorage 功能，讓使用者在重新整理網頁後，資料依然能夠被妥善保存，是一項著重於前端邏輯實現的作品。"
        }
    };

    // 2. 獲取彈出式視窗相關 DOM 節點
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const closeBtn = document.querySelector('.close-btn');
    const cards = document.querySelectorAll('.portfolio-card');

    // 3. 為每一個作品卡片綁定點擊事件
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const data = projectDetails[projectId];

            if (data) {
                // 將資料寫入 Modal 並顯示出來
                modalTitle.textContent = data.title;
                modalDesc.textContent = data.desc;
                modal.style.display = 'flex';
            }
        });
    });

    // 4. 點擊 X 按鈕關閉視窗
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 5. 點擊視窗外部（黑色背景處）也能關閉視窗
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});