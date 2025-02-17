export type EventType =
  | 'LlmCompletion'
  | 'LlmChatCompletionSummary'
  | 'LlmChatCompletionMessage';

export type EventAttributes = Record<string, string | number | boolean>;

export type OpenAICompletionAttributes = Record<string, string | number>;

export interface ChatCompletionMessageAttributes {
  id: string;
  applicationName: string;
  content: string;
  role: string;
  completion_id: string;
  sequence: string;
  model: string;
  vendor: 'openAI';
}

export interface ChatCompletionSummaryAttributes {
  id: string;
  applicationName: string;
  response_time: number;
  timestamp: number;
  total_tokens?: number;
  prompt_tokens?: number;
  usage_completion_tokens?: number;
  api_version?: any;
  organization?: any;
  api_key_last_four_digits?: string;
  finish_reason?: string;
  user_id?: string;
  api_type?: 'azure' | 'openai';
  vendor: 'openAI';
  number_of_messages: number;
  ratelimit_limit_requests?: any;
  ratelimit_limit_tokens?: any;
  ratelimit_reset_tokens?: any;
  ratelimit_reset_requests?: any;
  ratelimit_remaining_tokens?: any;
  ratelimit_remaining_requests?: any;
}

export type EventData = { eventType: EventType; attributes: EventAttributes };
