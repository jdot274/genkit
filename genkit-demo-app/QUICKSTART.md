# Genkit Demo App - Quick Start Guide

## 🚀 Running in GitHub Codespaces

1. **Open in Codespaces**: Click the "Code" button → "Codespaces" → "Create codespace on main"

2. **Set API Key**: 
   ```bash
   export GOOGLE_GENAI_API_KEY="your-key-from-aistudio.google.com"
   ```

3. **Navigate to demo**:
   ```bash
   cd genkit-demo-app
   ```

4. **Install & Run**:
   ```bash
   npm install
   npm run dev
   ```

5. **Open the app**: Codespaces will auto-forward port 3000 - click "Open in Browser"

## 🎯 What You'll See

- **Interactive Playground**: Test text generation, tool calling, and structured output
- **Example Prompts**: Pre-loaded examples to get you started
- **Real-time Responses**: See AI responses as they're generated
- **Multiple Features**: Tabs for different Genkit capabilities

## 🛠️ Features Demonstrated

✅ Text Generation with Gemini  
✅ Tool/Function Calling (weather, calculator, search)  
✅ Structured Output (coming soon)  
✅ Interactive Web UI  
✅ API Endpoints for integration  

## 📚 Next Steps

- Try the example prompts
- Create your own prompts
- Check the README.md for full documentation
- Explore the source code in `src/`

## ❓ Troubleshooting

**No API Key**: Get one free at https://aistudio.google.com/app/apikey  
**Port Issues**: Change port with `PORT=3001 npm run dev`  
**Dependencies**: Run `rm -rf node_modules && npm install`

---

**Need help?** Check the main [README.md](./README.md) or visit [genkit.dev](https://genkit.dev)
