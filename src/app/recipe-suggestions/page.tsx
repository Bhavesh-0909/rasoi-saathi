'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaRobot } from 'react-icons/fa'; // Importing icons from react-icons

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

function RecipeSuggestions() {
  const [ingredients, setIngredients] = useState('');
  const [messages, setMessages] = useState<Message[]>([]); // Store the chat history
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!ingredients.trim()) return; // Prevent sending empty messages
    const newUserMessage: Message = { role: 'user', content: ingredients };
    
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setLoading(true);
    setError(null);
    setIngredients(''); // Clear input after sending message

    const prompt = `Suggest recipes based on these ingredients: ${ingredients.split(',').map((ing) => ing.trim()).join(', ')}`;

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: prompt },
          ],
          max_tokens: 150,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error?.message || 'An error occurred with OpenAI.');
        return;
      }

      const data = await response.json();
      const newAssistantMessage: Message = {
        role: 'assistant',
        content: data.choices[0]?.message?.content || 'No suggestions available.',
      };

      setMessages((prevMessages) => [...prevMessages, newAssistantMessage]);
    } catch (error: any) {
      console.error('Error fetching suggestions:', error);
      setError('Sorry, there was an issue with the request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-auto mx-auto min-h-screen bg-gray-800 p-4 pb-10">
      {/* Heading and Icon */}
      <div className="text-center mb-5">
        <h1 className="text-2xl font-bold flex items-center justify-center">
          <FaRobot className="text-3xl mr-2" />
          Your Recipe Suggestion Friend
        </h1>
      </div>

      {/* Chat Box */}
      {messages && <div
        className=" w-full overflow-y-auto p-4 border border-gray-300 rounded-lg"
        ref={chatContainerRef}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message flex ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'} mb-2`}
          >
            <div
              className={`message-bubble max-w-4/5 p-2 rounded-lg ${message.role === 'user' ? 'bg-green-500 text-white' : 'bg-gray-900 text-gray-100'}`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>}

      {/* Input Field and Send Button */}
      <div className="mt-5 grid grid-cols-8 gap-2 h-10">
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients, e.g., tomato, cheese"
          className="w-full h-full p-2 border text-black rounded mb-4 col-span-7"
        />
        <button
          onClick={handleSendMessage}
          className="w-full h-full bg-blue-500 text-white p-2 rounded col-span-1"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}

export default RecipeSuggestions;
