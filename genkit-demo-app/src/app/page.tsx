'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('text');
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, temperature: 0.7 }),
      });

      if (!res.ok) throw new Error('Generation failed');
      
      const data = await res.json();
      setResponse(data.text);
    } catch (error) {
      setResponse('Error: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleToolCall = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/tools', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) throw new Error('Tool call failed');
      
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setResponse('Error: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const examplePrompts = {
    text: [
      'Write a haiku about artificial intelligence',
      'Explain quantum computing in simple terms',
      'Create a short story about a time-traveling cat',
    ],
    tools: [
      'What\'s the weather in San Francisco?',
      'Calculate 15% tip on $82.50',
      'What time is it right now?',
    ],
    structured: [
      'Extract contact info: John Doe, john@example.com, 555-0123',
      'Create a recipe for chocolate chip cookies',
      'Generate a product listing for a blue t-shirt',
    ],
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>🚀 Genkit Demo Playground</h1>
          <p>Explore Firebase Genkit's powerful AI capabilities</p>
        </header>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'text' ? styles.active : ''}`}
            onClick={() => setActiveTab('text')}
          >
            📝 Text Generation
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'tools' ? styles.active : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            🛠️ Tool Calling
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'structured' ? styles.active : ''}`}
            onClick={() => setActiveTab('structured')}
          >
            📊 Structured Output
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'about' ? styles.active : ''}`}
            onClick={() => setActiveTab('about')}
          >
            ℹ️ About
          </button>
        </div>

        <div className={styles.content}>
          {activeTab === 'about' ? (
            <div className={styles.about}>
              <h2>Welcome to the Genkit Demo App!</h2>
              <p>
                This application demonstrates all major features of Firebase Genkit, Google's
                open-source AI framework for building production-ready AI applications.
              </p>
              
              <h3>🌟 Features Demonstrated:</h3>
              <ul>
                <li><strong>Text Generation:</strong> Generate creative and informative text with various AI models</li>
                <li><strong>Tool/Function Calling:</strong> AI that can automatically call functions like weather, calculator, search</li>
                <li><strong>Structured Output:</strong> Generate type-safe, validated data structures</li>
                <li><strong>Streaming:</strong> Real-time token-by-token response generation</li>
                <li><strong>Multiple Models:</strong> Support for Gemini, GPT-4, Claude, Ollama, and more</li>
              </ul>

              <h3>🚀 Quick Start:</h3>
              <ol>
                <li>Select a tab above to explore different features</li>
                <li>Try the example prompts or enter your own</li>
                <li>Click "Generate" to see Genkit in action</li>
                <li>Check out the README.md for complete documentation</li>
              </ol>

              <h3>🔑 API Key Setup:</h3>
              <p>
                To use this app, you need a Google AI API key. Get yours from:
                <br />
                <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer">
                  https://aistudio.google.com/app/apikey
                </a>
              </p>
              <p>
                Then set it as an environment variable:
                <code>export GOOGLE_GENAI_API_KEY="your-key-here"</code>
              </p>

              <h3>📚 Learn More:</h3>
              <ul>
                <li><a href="https://genkit.dev" target="_blank" rel="noopener noreferrer">Genkit Documentation</a></li>
                <li><a href="https://github.com/firebase/genkit" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
                <li><a href="https://discord.gg/qXt5zzQKpc" target="_blank" rel="noopener noreferrer">Discord Community</a></li>
              </ul>
            </div>
          ) : (
            <>
              <div className={styles.promptSection}>
                <label htmlFor="prompt">Your Prompt:</label>
                <textarea
                  id="prompt"
                  className={styles.textarea}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={`Enter your ${activeTab} prompt here...`}
                  rows={4}
                />
                
                <div className={styles.examples}>
                  <strong>Try these examples:</strong>
                  {examplePrompts[activeTab as keyof typeof examplePrompts]?.map((example, i) => (
                    <button
                      key={i}
                      className={styles.exampleBtn}
                      onClick={() => setPrompt(example)}
                    >
                      {example}
                    </button>
                  ))}
                </div>

                <button
                  className={styles.generateBtn}
                  onClick={activeTab === 'tools' ? handleToolCall : handleGenerate}
                  disabled={loading || !prompt.trim()}
                >
                  {loading ? '⏳ Generating...' : '✨ Generate'}
                </button>
              </div>

              <div className={styles.responseSection}>
                <label>Response:</label>
                <div className={styles.response}>
                  {response || (loading ? 'Generating response...' : 'Response will appear here')}
                </div>
              </div>
            </>
          )}
        </div>

        <footer className={styles.footer}>
          <p>
            Built with ❤️ using <strong>Firebase Genkit</strong> • 
            <a href="https://genkit.dev" target="_blank" rel="noopener noreferrer"> Documentation</a> • 
            <a href="https://github.com/firebase/genkit" target="_blank" rel="noopener noreferrer"> GitHub</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
