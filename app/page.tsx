import ChatInterface from '@/components/chat-interface';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-8">
        <ChatInterface />
      </div>
    </div>
  );
}