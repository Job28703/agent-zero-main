"""
Gradio MCP 服務器中工具名稱包含點字符的解決方案

這個腳本演示了如何解決 Gradio MCP 服務器中工具名稱包含點（.）的問題。
解決方案是使用 Gradio 的 api_name 參數來指定不包含點的 API 名稱。

相關 issue: #11118
"""

import gradio as gr

def letter_counter(word, letter):
    """計算單詞中特定字母的出現次數
    
    Args:
        word: 要分析的單詞或短語
        letter: 要計數的字母
        
    Returns:
        字母在單詞中出現的次數
    """
    return word.lower().count(letter.lower())

# 創建 Gradio 界面
# 使用 api_name 參數指定不包含點的 API 名稱
demo = gr.Interface(
    fn=letter_counter,
    inputs=["text", "text"],
    outputs="number",
    title="字母計數器",
    description="計算字母在單詞中出現的次數",
    # 使用下劃線替換點
    api_name="letter_counter"  # 而不是 "letter.counter"
)

# 啟動 MCP 服務器
print("啟動 MCP 服務器...")
print("請檢查 MCP 服務器的 URL，通常為：http://127.0.0.1:7860/gradio_api/mcp/sse")
print("啟動後，請訪問：http://127.0.0.1:7860/gradio_api/mcp/schema 查看工具名稱")
print("工具名稱應該是 'letter_counter'，不包含點字符")

demo.launch(mcp_server=True)

"""
解決方案說明：

1. 問題：當 Gradio MCP 服務器中的工具名稱包含點（.）時，它們在 Claude Desktop 中不顯示，
   並且在其他客戶端中生成警告或無法工作。

2. 解決方案：使用 Gradio 的 api_name 參數來指定不包含點的 API 名稱。

3. 實現：
   - 在創建 Gradio 界面時，使用 api_name 參數指定不包含點的 API 名稱。
   - 將點替換為下劃線，例如 "letter.counter" -> "letter_counter"。

4. 驗證：
   - 啟動 Gradio 應用後，訪問 http://127.0.0.1:7860/gradio_api/mcp/schema
   - 確認工具名稱中不包含點字符

這種解決方案不需要修改 Gradio 的源代碼，也不需要使用猴子補丁，
只需要在創建 Gradio 界面時指定不包含點的 API 名稱即可。
"""