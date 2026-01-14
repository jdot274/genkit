# Genkit Demo App

Welcome! This repository now includes a **comprehensive demo application** showcasing all Firebase Genkit capabilities.

## 📂 Location

The demo app is in the `genkit-demo-app/` directory at the root of this repository.

## 🌟 What's Included

A fully-functional Next.js application demonstrating:

- ✨ **Text Generation** - AI-powered content creation
- 🛠️ **Tool/Function Calling** - AI that can use custom functions (weather, calculator, search)
- 📊 **Structured Output** - Type-safe data generation with Zod schemas
- 🎮 **Interactive Playground** - Beautiful web UI to test all features
- 🚀 **GitHub Codespaces Ready** - Works out of the box in Codespaces
- 🔌 **REST API** - Complete API for integrating with other apps
- 📖 **Comprehensive Docs** - Full setup and usage instructions

## 🚀 Quick Start

### Option 1: GitHub Codespaces (Recommended)

1. Click "Code" → "Codespaces" → "Create codespace"
2. Set your API key: `export GOOGLE_GENAI_API_KEY="your-key"`
3. Navigate: `cd genkit-demo-app`
4. Install: `npm install`
5. Run: `npm run dev`
6. Open the forwarded port 3000 in your browser

### Option 2: Local Development

```bash
# Navigate to the demo app
cd genkit-demo-app

# Install dependencies
npm install

# Set API key (get from https://aistudio.google.com/app/apikey)
export GOOGLE_GENAI_API_KEY="your-api-key-here"

# Start the app
npm run dev

# Open http://localhost:3000
```

## 📚 Documentation

- **[Full README](./genkit-demo-app/README.md)** - Complete documentation
- **[Quick Start Guide](./genkit-demo-app/QUICKSTART.md)** - Get started in minutes
- **[Genkit Docs](https://genkit.dev)** - Official Genkit documentation

## 🎯 Use Cases

This demo app is perfect for:

- Learning Firebase Genkit capabilities
- Prototyping AI features quickly
- Understanding tool/function calling
- Seeing best practices in action
- Building your own AI applications

## 🔑 API Key Setup

You need a Google AI API key to run the demo:

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key (it's free!)
3. Set it as an environment variable:
   ```bash
   export GOOGLE_GENAI_API_KEY="your-key-here"
   ```

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 + React 19 + TypeScript
- **AI Framework**: Firebase Genkit
- **AI Model**: Google Gemini 2.5 Flash
- **Styling**: CSS Modules
- **Deployment**: Vercel-ready (or any Node.js host)

## 📁 Project Structure

```
genkit-demo-app/
├── src/
│   ├── app/              # Next.js pages and API routes
│   ├── lib/              # Genkit configuration and tools
│   └── components/       # React components (future)
├── public/               # Static assets
├── .devcontainer/        # Codespaces configuration
├── README.md             # Full documentation
├── QUICKSTART.md         # Quick start guide
└── package.json          # Dependencies
```

## 🎓 Learning Path

1. **Start Simple**: Try the text generation examples
2. **Explore Tools**: See how AI can call functions automatically
3. **Read the Code**: Check out `src/lib/tools.ts` to see tool definitions
4. **Customize**: Modify prompts, add new tools, adjust the UI
5. **Build**: Use this as a foundation for your own AI app

## 🤝 Contributing

This demo app is designed to showcase Genkit capabilities. To contribute:

1. Fork the repository
2. Make improvements to the demo app
3. Submit a pull request

For contributing to Genkit itself, see [CONTRIBUTING.md](./CONTRIBUTING.md).

## 📖 Additional Resources

### Firebase Genkit
- [Official Documentation](https://genkit.dev)
- [GitHub Repository](https://github.com/firebase/genkit)
- [Discord Community](https://discord.gg/qXt5zzQKpc)

### Working with Forks
- See [CONTRIBUTING.md](./CONTRIBUTING.md) for instructions on adding branches from the original Firebase repository

## 🐛 Troubleshooting

**API Key Issues**:
- Make sure your key is set: `echo $GOOGLE_GENAI_API_KEY`
- Get a new key from [Google AI Studio](https://aistudio.google.com/app/apikey)

**Port Conflicts**:
```bash
PORT=3001 npm run dev
```

**Dependency Issues**:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 🎉 What's Next?

After exploring the demo:

1. **Deploy**: Deploy to Vercel, Netlify, or Cloud Run
2. **Extend**: Add more tools, features, and UI improvements
3. **Integrate**: Use the API endpoints in your own applications
4. **Scale**: Add authentication, databases, and monitoring
5. **Share**: Show others what you built!

---

**Ready to explore AI with Genkit?** Head to the `genkit-demo-app/` directory and get started! 🚀
