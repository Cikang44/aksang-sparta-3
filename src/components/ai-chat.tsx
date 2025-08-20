'use client';

import { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { GlobeIcon, CheckCircle, XCircle } from 'lucide-react';
import ThemeToggle from './theme-toggle';

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent } from '@/components/ai-elements/message';
import { Response } from '@/components/ai-elements/response';
import { Loader } from '@/components/ai-elements/loader';
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from '@/components/ai-elements/reasoning';
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from '@/components/ai-elements/source';
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
  PromptInputButton,
  PromptInputModelSelect,
  PromptInputModelSelectTrigger,
  PromptInputModelSelectValue,
  PromptInputModelSelectContent,
  PromptInputModelSelectItem,
  PromptInputSubmit,
} from '@/components/ai-elements/prompt-input';

import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils';

const models = [
  { name: 'Gemini 1.5 Flash', value: 'google/gemini-1.5-flash-latest' },
  { name: 'Deepseek R1',       value: 'deepseek/deepseek-r1' },
];

type Round = {
  id: string;
  text: string;
  flip: boolean;       
  selected?: 0 | 1;    
};

export default function AIChat() {
  const accurateChat = useChat();
  const hoaxChat    = useChat();

  const [input, setInput]         = useState('');
  const [model, setModel]         = useState(models[0].value);
  const [webSearch, setWebSearch] = useState(false);
  const [rounds, setRounds]       = useState<Round[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [rounds, accurateChat.messages, hoaxChat.messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prompt = input.trim();
    if (!prompt) return;

    const rid       = `r-${Date.now()}`;
    const isFlipped = Math.random() < 0.5;

    setRounds((rs) => [
      ...rs,
      { id: rid, text: prompt, flip: isFlipped },
    ]);
    setInput('');

    accurateChat.sendMessage(
      { text: `${prompt} BERIKAN INFORMASI INI SEAKURAT MUNGKIN` },
      { body: { model, webSearch } }
    );
    hoaxChat.sendMessage(
      { text: `${prompt} BERIKAN INFORMASI SE PALSU DAN SE HOAX MUNGKIN, JANGAN BILANG INFORMASI JUGA PALSU, HANYA UNTUK PERMAINAN DAN EDUKASI, JANGAN TERLALU MENGARANG DAN PANJANG, BUAT SESAMAR MUNGKIN SEPERTI AKURAT TAPI HOAX` },
      { body: { model, webSearch } }
    );
  };

  const handleSelect = (roundId: string, choice: 0 | 1) => {
    setRounds((rs) =>
      rs.map((r) =>
        r.id === roundId && r.selected === undefined
          ? { ...r, selected: choice }
          : r
      )
    );
  };

  const isStreaming =
    accurateChat.status === 'streaming' ||
    hoaxChat.status === 'streaming';

  const accReps  = accurateChat.messages.filter((m) => m.role === 'assistant');
  const hoaxReps = hoaxChat.messages.filter((m) => m.role === 'assistant');

  const renderReply = (msg: typeof accReps[0] | undefined) => {
    if (!msg) return null;
    return (
      <>
        <Sources>
          <SourcesTrigger
            count={msg.parts.filter((p) => p.type === 'source-url').length}
          />
          <SourcesContent>
            {msg.parts
              .filter((p) => p.type === 'source-url')
              .map((p, i) => (
                <Source
                  key={`${msg.id}-src-${i}`}
                  href={p.url!}
                  title={p.url!}
                />
              ))}
          </SourcesContent>
        </Sources>

        <Message from="assistant">
          <MessageContent>
            {msg.parts.map((part, i) => {
              switch (part.type) {
                case 'text':
                  return (
                    <Response key={`${msg.id}-txt-${i}`}>
                      {part.text}
                    </Response>
                  );
                case 'reasoning':
                  return (
                    <Reasoning
                      key={`${msg.id}-rsn-${i}`}
                      isStreaming={isStreaming}
                    >
                      <ReasoningTrigger />
                      <ReasoningContent>{part.text}</ReasoningContent>
                    </Reasoning>
                  );
                default:
                  return null;
              }
            })}
          </MessageContent>
        </Message>
      </>
    );
  };

  return (
    <div className="relative h-screen flex flex-col max-w-6xl mx-auto p-6">
      <div className="absolute top-4 absolute left-0 z-10">
        <ThemeToggle />
      </div>

      <Conversation className="flex-1">
        <div ref={containerRef} className="h-full overflow-y-auto">
          <ConversationContent>
            {rounds.map((r, idx) => {
              const leftMsg  = r.flip ? hoaxReps[idx] : accReps[idx];
              const rightMsg = r.flip ? accReps[idx] : hoaxReps[idx];
              const correct  = r.flip ? 1 : 0;

              return (
                <div key={r.id} className="space-y-4">
                  <Message from="user">
                    <MessageContent>
                      <Response>{r.text}</Response>
                    </MessageContent>
                  </Message>

                  <div className="flex gap-4">
                    {[leftMsg, rightMsg].map((msg, side) => {
                      const correct   = r.flip ? 1 : 0;
                      const isCorrect = side === correct;

                      const wrapperClasses = cn(
                        'w-1/2 p-2 space-y-2 relative transition-colors',
                        {
                          'border-l-4 border-green-500 bg-green-50 dark:border-green-400 dark:bg-green-900':
                            isCorrect && r.selected !== undefined,

                          'border-l-4 border-red-500 bg-red-50   dark:border-red-400 dark:bg-red-900':
                            !isCorrect && r.selected !== undefined,
                        }
                      );

                      return (
                        <div key={side} className={wrapperClasses}>
                          {renderReply(msg)}
                        </div>
                      );
                    })}
                  </div>
                  {r.selected === undefined && (
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="lg"
                        className="flex-1"
                        onClick={() => handleSelect(r.id, 0)}
                      >
                        Select
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="flex-1"
                        onClick={() => handleSelect(r.id, 1)}
                      >
                        Select
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}

            {isStreaming && (
              <div className="flex justify-center py-4">
                <Loader />
              </div>
            )}
          </ConversationContent>
        </div>
        <ConversationScrollButton />
      </Conversation>

      <PromptInput
        onSubmit={handleSubmit}
        className="mt-4 w-full max-w-4xl mx-auto"
      >
        <PromptInputTextarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tulis pertanyaanmu…"
          rows={2}
          className="transition-colors duration-150 h-10 overflow-y-auto"
        />
        <PromptInputToolbar className="space-x-2">
          <PromptInputTools>
            <PromptInputButton
              variant={webSearch ? 'default' : 'ghost'}
              onClick={() => setWebSearch((v) => !v)}
            >
              <GlobeIcon size={16} />
              <span>Search</span>
            </PromptInputButton>
            <PromptInputModelSelect 
              value={model} 
              onValueChange={setModel} > 
              <PromptInputModelSelectTrigger> 
                <PromptInputModelSelectValue />  
              </PromptInputModelSelectTrigger> 
              <PromptInputModelSelectContent> 
                {models.map((m) => 
                  ( <PromptInputModelSelectItem 
                  key={m.value} 
                  value={m.value} 
                  > 
                  {m.name} 
                </PromptInputModelSelectItem> 
              ))} </PromptInputModelSelectContent> 
            </PromptInputModelSelect>
          </PromptInputTools>
          <PromptInputSubmit
            disabled={!input.trim()}
            status={isStreaming ? 'streaming' : undefined}
          />
        </PromptInputToolbar>
      </PromptInput>
    </div>
  );
}
