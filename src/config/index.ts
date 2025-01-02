export const config = {
    ai: {
        openai: {
            apiKey: process.env.OPENAI_API_KEY,
            model: 'gpt-4',
            maxTokens: 2000,
            temperature: 0.3
        }
    },
    tax: {
        optimization: {
            minLossThreshold: -1000,
            maxRiskLevel: 'MEDIUM',
            defaultTaxRate: 0.37
        }
    }
} 