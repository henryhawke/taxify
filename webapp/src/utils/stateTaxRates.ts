export interface StateTaxBracket {
    rate: number
    minIncome: number
    maxIncome?: number
}

export interface StateTaxInfo {
    name: string
    shortName: string
    capitalGainsType: 'income' | 'separate'
    brackets: StateTaxBracket[]
    specialRules?: string[]
}

// State tax rates for 2024
export const STATE_TAX_RATES: Record<string, StateTaxInfo> = {
    CA: {
        name: 'California',
        shortName: 'CA',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0.01, minIncome: 0, maxIncome: 10099 },
            { rate: 0.02, minIncome: 10100, maxIncome: 23942 },
            { rate: 0.04, minIncome: 23943, maxIncome: 37788 },
            { rate: 0.06, minIncome: 37789, maxIncome: 52455 },
            { rate: 0.08, minIncome: 52456, maxIncome: 66295 },
            { rate: 0.093, minIncome: 66296, maxIncome: 338639 },
            { rate: 0.103, minIncome: 338640, maxIncome: 406364 },
            { rate: 0.113, minIncome: 406365, maxIncome: 677275 },
            { rate: 0.123, minIncome: 677276 },
        ],
        specialRules: ['No special treatment for long-term capital gains']
    },
    NY: {
        name: 'New York',
        shortName: 'NY',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0.04, minIncome: 0, maxIncome: 8500 },
            { rate: 0.045, minIncome: 8501, maxIncome: 11700 },
            { rate: 0.0525, minIncome: 11701, maxIncome: 13900 },
            { rate: 0.059, minIncome: 13901, maxIncome: 80650 },
            { rate: 0.0597, minIncome: 80651, maxIncome: 215400 },
            { rate: 0.0633, minIncome: 215401, maxIncome: 1077550 },
            { rate: 0.0685, minIncome: 1077551, maxIncome: 5000000 },
            { rate: 0.0965, minIncome: 5000001, maxIncome: 25000000 },
            { rate: 0.103, minIncome: 25000001 },
        ],
        specialRules: ['No special treatment for long-term capital gains']
    },
    TX: {
        name: 'Texas',
        shortName: 'TX',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0, minIncome: 0 }
        ],
        specialRules: ['No state income tax', 'No capital gains tax']
    },
    // Add more states as needed
}

export function calculateStateTax(income: number, state: string): number {
    const stateInfo = STATE_TAX_RATES[state.toUpperCase()]
    if (!stateInfo) {
        throw new Error('Invalid state code')
    }

    if (stateInfo.brackets[0].rate === 0) {
        return 0 // No state tax
    }

    let tax = 0
    for (let i = 0; i < stateInfo.brackets.length; i++) {
        const bracket = stateInfo.brackets[i]
        const nextBracket = stateInfo.brackets[i + 1]

        const bracketMin = bracket.minIncome
        const bracketMax = bracket.maxIncome || Infinity
        const bracketRate = bracket.rate

        if (income > bracketMin) {
            const taxableAmount = Math.min(income - bracketMin, bracketMax - bracketMin)
            tax += taxableAmount * bracketRate
        }

        if (!nextBracket || income <= bracketMax) {
            break
        }
    }

    return tax
} 