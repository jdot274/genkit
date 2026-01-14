# Genkit Demo App - Comprehensive Feature Showcase

A complete, production-ready demonstration of Firebase Genkit capabilities with a modern web interface. Built with Next.js and TypeScript, designed to run perfectly in GitHub Codespaces.

## 🌟 Features Demonstrated

This app showcases **all major Genkit features** through an interactive web playground:

### Core AI Capabilities
1. **Text Generation** - Simple and advanced text generation with multiple models
2. **Image Generation & Analysis** - Generate images from text, analyze uploaded images
3. **Structured Output** - Type-safe data generation with Zod schemas
4. **Tool/Function Calling** - AI-powered tools that can fetch weather, calculate, search, etc.
5. **Streaming Responses** - Real-time token-by-token response streaming
6. **Multi-modal Input** - Process text, images, and combined inputs

### Advanced Features
7. **RAG (Retrieval-Augmented Generation)** - Vector store with semantic search over documents
8. **Prompt Templates** - Dotprompt system with reusable, testable prompts
9. **Flow Orchestration** - Complex multi-step AI workflows
10. **Chat Interface** - Persistent conversational AI with context management
11. **Model Comparison** - Side-by-side comparison of different AI models
12. **Evaluation & Testing** - Built-in evaluation framework

### Developer Features
- **Interactive Playground** - Test all features through a beautiful web UI
- **API Documentation** - Complete REST API for integration
- **Developer Tools** - Genkit Developer UI integration
- **Telemetry & Tracing** - Full observability of AI operations
- **Hot Reload** - Instant updates during development

## 🚀 Quick Start in Codespaces

**Perfect for GitHub Codespaces!** Just click the Codespaces button and follow these steps:

1. **Set your API key** (get it from [Google AI Studio](https://aistudio.google.com/app/apikey)):
   ```bash
   export GOOGLE_GENAI_API_KEY="your-api-key-here"
   ```

2. **Navigate to the demo app**:
   ```bash
   cd genkit-demo-app
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the app**:
   ```bash
   npm run dev
   ```

5. **Open the app**: Codespaces will automatically forward port 3000. Click the "Open in Browser" popup or go to the Ports tab.

6. **Access Genkit Developer UI**: Open port 4000 to access the built-in Genkit developer tools.

That's it! 🎉

## 📋 Prerequisites

- Node.js 20 or later
- npm or pnpm
- Google AI API key (or other supported model provider)

## 🛠️ Local Development Setup

### Installation

```bash
# Navigate to the demo app
cd genkit-demo-app

# Install dependencies
npm install

# Set your API key
export GOOGLE_GENAI_API_KEY="your-api-key-here"

# Start development server
npm run dev
```

The app will be available at:
- **Main App**: http://localhost:3000
- **Genkit Dev UI**: http://localhost:4000 (when using `genkit start`)

### Alternative: Using Genkit CLI

For the full developer experience with tracing and the Genkit UI:

```bash
# Install Genkit CLI globally if not already installed
npm install -g genkit-cli

# Start with Genkit dev tools
genkit start -- npm run dev
```

## 📁 Project Structure

```
genkit-demo-app/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx            # Main playground UI
│   │   ├── layout.tsx          # Root layout
│   │   └── api/                # API routes
│   │       ├── generate/       # Text generation endpoint
│   │       ├── image/          # Image generation/analysis
│   │       ├── structured/     # Structured output
│   │       ├── tools/          # Tool calling demo
│   │       ├── rag/            # RAG endpoints
│   │       └── chat/           # Chat interface
│   ├── lib/
│   │   ├── genkit.ts           # Genkit initialization
│   │   ├── flows/              # AI workflow definitions
│   │   │   ├── text-gen.ts     # Text generation flows
│   │   │   ├── image-gen.ts    # Image flows
│   │   │   ├── rag.ts          # RAG flows
│   │   │   └── tools.ts        # Tool definitions
│   │   └── prompts/            # Dotprompt templates
│   │       ├── greeting.prompt
│   │       ├── summarize.prompt
│   │       └── analyze.prompt
│   ├── components/             # React components
│   │   ├── Playground.tsx      # Main playground UI
│   │   ├── ChatInterface.tsx   # Chat component
│   │   ├── ModelSelector.tsx   # Model picker
│   │   └── ResponseViewer.tsx  # Response display
│   └── styles/                 # CSS modules
├── public/                     # Static assets
├── data/                       # Sample data for RAG
│   └── sample-docs/            # Demo documents
├── .env.example                # Environment template
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── next.config.js              # Next.js config
├── .devcontainer/              # Codespaces configuration
│   └── devcontainer.json
└── README.md                   # This file
```

## 🎮 Features Guide

### 1️⃣ Text Generation Playground

Try different models, temperatures, and prompts:
- **Models**: Gemini 2.5 Flash, GPT-4, Claude, Ollama, and more
- **Parameters**: Temperature, max tokens, top-p, top-k
- **System Instructions**: Set AI personality and behavior
- **Few-shot Examples**: Provide examples for better results
- **Streaming**: See responses as they're generated

### 2️⃣ Image Generation & Analysis

Visual AI capabilities:
- **Generate**: Create images from text descriptions (Gemini Imagen)
- **Analyze**: Upload images and get detailed descriptions
- **Vision**: Ask questions about images
- **Multi-modal**: Combine text and images in conversations

### 3️⃣ Structured Output

Generate validated, type-safe data:
```typescript
// Define a schema with Zod
const recipeSchema = z.object({
  name: z.string(),
  ingredients: z.array(z.string()),
  steps: z.array(z.string()),
  cookingTime: z.number(),
});

// Get structured output
const recipe = await ai.generate({
  prompt: 'Create a recipe for chocolate cake',
  output: { schema: recipeSchema }
});
```

Examples included:
- Product data extraction
- Resume parsing
- Meeting notes summarization
- Data validation

### 4️⃣ Tool/Function Calling

AI can call your functions automatically:

**Built-in Tools**:
- 🌤️ **Weather**: Get current weather for any location
- 🧮 **Calculator**: Perform mathematical calculations
- 🔍 **Web Search**: Search the internet for information
- 📊 **Data Lookup**: Query databases and APIs
- 📅 **Calendar**: Check availability and schedule events

The AI decides when and how to use these tools based on user queries!

### 5️⃣ RAG (Retrieval-Augmented Generation)

Semantic search over your documents:
1. **Upload Documents**: Add PDFs, text files, or markdown
2. **Automatic Indexing**: Documents are chunked and embedded
3. **Semantic Search**: Ask questions in natural language
4. **Contextual Answers**: AI answers using your documents
5. **Source Citations**: See which documents were used

### 6️⃣ Chat Interface

Conversational AI with memory:
- Multi-turn conversations
- Context preservation
- Message history
- Streaming responses
- Tool use in chat
- Export conversations

### 7️⃣ Prompt Templates (Dotprompt)

Reusable, testable prompt templates:
```
---
model: gemini-2.5-flash
input:
  schema:
    user: string
    topic: string
---

Hello {{user}}! Let's discuss {{topic}}.
```

Benefits:
- Version control for prompts
- Input validation
- Easy testing
- Template inheritance

### 8️⃣ Flow Orchestration

Multi-step AI workflows:
- Sequential operations
- Conditional logic
- Error handling
- State management
- Composable flows

### 9️⃣ Model Comparison

Compare responses from different models side-by-side:
- Same prompt to multiple models
- Performance metrics (latency, tokens)
- Quality comparison
- Cost analysis

### 🔟 Developer Tools Integration

Access to Genkit Developer UI:
- Execute flows manually
- Inspect traces
- View telemetry
- Debug issues
- Test prompts

## 🔌 API Endpoints

Complete REST API for integration:

### Text Generation
```bash
POST /api/generate
Content-Type: application/json

{
  "prompt": "Write a haiku about coding",
  "model": "gemini-2.5-flash",
  "temperature": 0.7
}
```

### Image Generation
```bash
POST /api/image/generate
Content-Type: application/json

{
  "prompt": "A futuristic city at sunset",
  "model": "gemini-2.5-flash-image"
}
```

### Structured Output
```bash
POST /api/structured
Content-Type: application/json

{
  "prompt": "Extract contact info from: John Doe, john@example.com, 555-0123",
  "schema": "contact"
}
```

### Tool Calling
```bash
POST /api/tools
Content-Type: application/json

{
  "prompt": "What's the weather in New York?",
  "tools": ["weather", "search"]
}
```

### RAG Query
```bash
POST /api/rag/query
Content-Type: application/json

{
  "query": "What are the main features?",
  "collection": "my-docs"
}
```

See the full API documentation at `/api/docs` when running the app.

## 🌍 Environment Variables

Create a `.env.local` file:

```bash
# Required: Your AI API key
GOOGLE_GENAI_API_KEY=your-key-here

# Optional: Other providers
OPENAI_API_KEY=your-openai-key
ANTHROPIC_API_KEY=your-anthropic-key

# Optional: Configuration
PORT=3000
NODE_ENV=development
```

### Supported Model Providers

- ✅ **Google AI** (Gemini) - Default, easiest to set up
- ✅ **OpenAI** (GPT-4, GPT-3.5)
- ✅ **Anthropic** (Claude)
- ✅ **Ollama** (Local models)
- ✅ **Vertex AI** (Google Cloud)
- ✅ **Custom Models** (Compatible with OpenAI API)

## 🐛 Troubleshooting

### API Key Issues
```bash
# Check if key is set
echo $GOOGLE_GENAI_API_KEY

# Set it if missing
export GOOGLE_GENAI_API_KEY="your-key-here"

# Or add to .env.local file
```

### Port Already in Use
```bash
# Use a different port
PORT=3001 npm run dev
```

### Dependencies Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## 📚 Learning Resources

- **[Genkit Documentation](https://genkit.dev)** - Official docs
- **[JavaScript SDK Guide](https://genkit.dev/docs/get-started)** - Getting started
- **[API Reference](https://genkit.dev/docs/api)** - Complete API docs
- **[Examples](https://github.com/firebase/genkit/tree/main/samples)** - More samples
- **[Discord Community](https://discord.gg/qXt5zzQKpc)** - Get help and share

## 🎯 Use Cases

This demo app template can be adapted for:

- 💬 **Chatbots** - Customer service, support, Q&A
- 📝 **Content Generation** - Blog posts, social media, emails
- 🔍 **Document Q&A** - RAG over company docs, manuals, research
- 🎨 **Creative Tools** - Image generation, story writing, design
- 📊 **Data Extraction** - Parse documents, extract structured data
- 🤖 **AI Agents** - Multi-step workflows, autonomous tasks
- 📚 **Educational Tools** - Tutoring, learning assistants
- 🏢 **Enterprise Apps** - Internal tools, automation, analytics

## 📜 License

Apache-2.0 License - See LICENSE file for details

## 🤝 Contributing

This is a demo application showcasing Genkit capabilities. To contribute to Genkit itself, see the main [CONTRIBUTING.md](../CONTRIBUTING.md).

For improvements to this demo app:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 🌟 What's Next?

After exploring this demo:

1. **Customize**: Adapt it for your use case
2. **Deploy**: Deploy to Vercel, Netlify, or Cloud Run
3. **Scale**: Add authentication, databases, monitoring
4. **Integrate**: Connect to your existing systems
5. **Learn**: Deep dive into Genkit documentation

---

**Ready to build amazing AI applications?** Start exploring the playground! 🚀
