import { Configuration, OpenAIApi } from 'openai'
import { TransactionData } from '@/services/solana/TransactionCollectionService'

export enum TaxEventType {
  INCOME,
  CAPITAL_GAIN_SHORT,
  CAPITAL_GAIN_LONG,
  MINING_REWARD,
  NFT_SALE,
  AIRDROP,
  STAKING_REWARD,
  DEFI_YIELD
}

interface ClassificationResult {
  type: TaxEventType
  confidence: number
  reasoning: string
}

export class TransactionClassifier {
  private openai: OpenAIApi

  constructor() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    })
    this.openai = new OpenAIApi(configuration)
  }

  async classifyTransaction(transaction: TransactionData): Promise<ClassificationResult> {
    const prompt = this.buildClassificationPrompt(transaction)
    
    const response = await this.openai.createChatCompletion({
      model: "gpt-4",
      messages: [{
        role: "system",
        content: "You are a tax classification expert for cryptocurrency transactions."
      }, {
        role: "user",
        content: prompt
      }]
    })

    return this.parseAIResponse(response.data.choices[0].message?.content || '')
  }

  private buildClassificationPrompt(tx: TransactionData): string {
    return `
      Classify this Solana transaction for tax purposes:
      - Type: ${tx.type}
      - Amount: ${tx.amount || 'N/A'}
      - From: ${tx.fromAddress}
      - To: ${tx.toAddress}
      - Token: ${tx.tokenAddress || 'SOL'}
      
      Respond in JSON format with:
      {
        "type": "INCOME|CAPITAL_GAIN_SHORT|CAPITAL_GAIN_LONG|MINING_REWARD|NFT_SALE|AIRDROP|STAKING_REWARD|DEFI_YIELD",
        "confidence": 0-1,
        "reasoning": "explanation"
      }
    `
  }

  private parseAIResponse(response: string): ClassificationResult {
    try {
      const parsed = JSON.parse(response)
      return {
        type: TaxEventType[parsed.type as keyof typeof TaxEventType],
        confidence: parsed.confidence,
        reasoning: parsed.reasoning
      }
    } catch (e) {
      console.error('Failed to parse AI response:', e)
      return {
        type: TaxEventType.INCOME,
        confidence: 0,
        reasoning: 'Failed to classify transaction'
      }
    }
  }
} 