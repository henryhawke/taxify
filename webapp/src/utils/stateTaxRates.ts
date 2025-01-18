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
    'California': {
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
    'New York': {
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
    'Texas': {
        name: 'Texas',
        shortName: 'TX',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0, minIncome: 0 }
        ],
        specialRules: ['No state income tax', 'No capital gains tax']
    },
    'Alabama': {
        name: 'Alabama',
        shortName: 'AL',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0.02, minIncome: 0, maxIncome: 500 },
            { rate: 0.04, minIncome: 501, maxIncome: 3000 },
            { rate: 0.05, minIncome: 3001 }
        ]
    },
    'Alaska': {
        name: 'Alaska',
        shortName: 'AK',
        capitalGainsType: 'income',
        brackets: [{ rate: 0, minIncome: 0 }],
        specialRules: ['No state income tax']
    },
    'Arizona': {
        name: 'Arizona',
        shortName: 'AZ',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.025, minIncome: 0 }]
    },
    'Arkansas': {
        name: 'Arkansas',
        shortName: 'AR',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0.02, minIncome: 0, maxIncome: 4999 },
            { rate: 0.04, minIncome: 5000, maxIncome: 9999 },
            { rate: 0.055, minIncome: 10000 }
        ]
    },
    'Colorado': {
        name: 'Colorado',
        shortName: 'CO',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.0455, minIncome: 0 }]
    },
    'Connecticut': {
        name: 'Connecticut',
        shortName: 'CT',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0.03, minIncome: 0, maxIncome: 10000 },
            { rate: 0.05, minIncome: 10001, maxIncome: 50000 },
            { rate: 0.055, minIncome: 50001, maxIncome: 100000 },
            { rate: 0.06, minIncome: 100001, maxIncome: 200000 },
            { rate: 0.065, minIncome: 200001, maxIncome: 250000 },
            { rate: 0.069, minIncome: 250001, maxIncome: 500000 },
            { rate: 0.0699, minIncome: 500001 }
        ]
    },
    'Delaware': {
        name: 'Delaware',
        shortName: 'DE',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0.022, minIncome: 0, maxIncome: 5000 },
            { rate: 0.039, minIncome: 5001, maxIncome: 10000 },
            { rate: 0.048, minIncome: 10001, maxIncome: 20000 },
            { rate: 0.052, minIncome: 20001, maxIncome: 25000 },
            { rate: 0.0555, minIncome: 25001, maxIncome: 60000 },
            { rate: 0.066, minIncome: 60001 }
        ]
    },
    'Florida': {
        name: 'Florida',
        shortName: 'FL',
        capitalGainsType: 'income',
        brackets: [{ rate: 0, minIncome: 0 }],
        specialRules: ['No state income tax']
    },
    'Georgia': {
        name: 'Georgia',
        shortName: 'GA',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.0575, minIncome: 0 }]
    },
    'Hawaii': {
        name: 'Hawaii',
        shortName: 'HI',
        capitalGainsType: 'separate',
        brackets: [
            { rate: 0.014, minIncome: 0, maxIncome: 2400 },
            { rate: 0.032, minIncome: 2401, maxIncome: 4800 },
            { rate: 0.055, minIncome: 4801, maxIncome: 9600 },
            { rate: 0.064, minIncome: 9601, maxIncome: 14400 },
            { rate: 0.068, minIncome: 14401, maxIncome: 19200 },
            { rate: 0.072, minIncome: 19201, maxIncome: 24000 },
            { rate: 0.076, minIncome: 24001, maxIncome: 36000 },
            { rate: 0.079, minIncome: 36001, maxIncome: 48000 },
            { rate: 0.0825, minIncome: 48001 }
        ]
    },
    // Adding remaining states with flat tax or no tax for brevity
    'Idaho': {
        name: 'Idaho',
        shortName: 'ID',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.058, minIncome: 0 }]
    },
    'Illinois': {
        name: 'Illinois',
        shortName: 'IL',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.0495, minIncome: 0 }]
    },
    'Indiana': {
        name: 'Indiana',
        shortName: 'IN',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.0323, minIncome: 0 }]
    },
    'Iowa': {
        name: 'Iowa',
        shortName: 'IA',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.0575, minIncome: 0 }]
    },
    'Kansas': {
        name: 'Kansas',
        shortName: 'KS',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0.031, minIncome: 0, maxIncome: 15000 },
            { rate: 0.0525, minIncome: 15001, maxIncome: 30000 },
            { rate: 0.057, minIncome: 30001 }
        ]
    },
    'Kentucky': {
        name: 'Kentucky',
        shortName: 'KY',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.045, minIncome: 0 }]
    },
    'Louisiana': {
        name: 'Louisiana',
        shortName: 'LA',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0.0185, minIncome: 0, maxIncome: 12500 },
            { rate: 0.035, minIncome: 12501, maxIncome: 50000 },
            { rate: 0.0425, minIncome: 50001 }
        ]
    },
    'Maine': {
        name: 'Maine',
        shortName: 'ME',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0.058, minIncome: 0, maxIncome: 24500 },
            { rate: 0.0675, minIncome: 24501, maxIncome: 58050 },
            { rate: 0.0715, minIncome: 58051 }
        ]
    },
    'Maryland': {
        name: 'Maryland',
        shortName: 'MD',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.0575, minIncome: 0 }]
    },
    'Massachusetts': {
        name: 'Massachusetts',
        shortName: 'MA',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.05, minIncome: 0 }]
    },
    'Michigan': {
        name: 'Michigan',
        shortName: 'MI',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.0425, minIncome: 0 }]
    },
    'Minnesota': {
        name: 'Minnesota',
        shortName: 'MN',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0.0535, minIncome: 0, maxIncome: 30070 },
            { rate: 0.068, minIncome: 30071, maxIncome: 98760 },
            { rate: 0.0785, minIncome: 98761, maxIncome: 183340 },
            { rate: 0.0985, minIncome: 183341 }
        ]
    },
    'Mississippi': {
        name: 'Mississippi',
        shortName: 'MS',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.05, minIncome: 0 }]
    },
    'Missouri': {
        name: 'Missouri',
        shortName: 'MO',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.0495, minIncome: 0 }]
    },
    'Montana': {
        name: 'Montana',
        shortName: 'MT',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.0675, minIncome: 0 }]
    },
    'Nebraska': {
        name: 'Nebraska',
        shortName: 'NE',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0.0351, minIncome: 0, maxIncome: 3700 },
            { rate: 0.0513, minIncome: 3701, maxIncome: 22170 },
            { rate: 0.0684, minIncome: 22171 }
        ]
    },
    'Nevada': {
        name: 'Nevada',
        shortName: 'NV',
        capitalGainsType: 'income',
        brackets: [{ rate: 0, minIncome: 0 }],
        specialRules: ['No state income tax']
    },
    'New Hampshire': {
        name: 'New Hampshire',
        shortName: 'NH',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.05, minIncome: 0 }],
        specialRules: ['Only taxes dividend and interest income']
    },
    'New Jersey': {
        name: 'New Jersey',
        shortName: 'NJ',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0.014, minIncome: 0, maxIncome: 20000 },
            { rate: 0.0175, minIncome: 20001, maxIncome: 35000 },
            { rate: 0.035, minIncome: 35001, maxIncome: 40000 },
            { rate: 0.0553, minIncome: 40001, maxIncome: 75000 },
            { rate: 0.0637, minIncome: 75001, maxIncome: 500000 },
            { rate: 0.0897, minIncome: 500001, maxIncome: 1000000 },
            { rate: 0.1075, minIncome: 1000001 }
        ]
    },
    'New Mexico': {
        name: 'New Mexico',
        shortName: 'NM',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0.017, minIncome: 0, maxIncome: 5500 },
            { rate: 0.032, minIncome: 5501, maxIncome: 11000 },
            { rate: 0.047, minIncome: 11001, maxIncome: 16000 },
            { rate: 0.049, minIncome: 16001 }
        ]
    },
    'North Carolina': {
        name: 'North Carolina',
        shortName: 'NC',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.0475, minIncome: 0 }]
    },
    'North Dakota': {
        name: 'North Dakota',
        shortName: 'ND',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0.011, minIncome: 0, maxIncome: 41775 },
            { rate: 0.0204, minIncome: 41776, maxIncome: 101050 },
            { rate: 0.0227, minIncome: 101051, maxIncome: 210825 },
            { rate: 0.0264, minIncome: 210826 }
        ]
    },
    'Ohio': {
        name: 'Ohio',
        shortName: 'OH',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.0399, minIncome: 0 }]
    },
    'Oklahoma': {
        name: 'Oklahoma',
        shortName: 'OK',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.0475, minIncome: 0 }]
    },
    'Oregon': {
        name: 'Oregon',
        shortName: 'OR',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0.0475, minIncome: 0, maxIncome: 3750 },
            { rate: 0.0675, minIncome: 3751, maxIncome: 9450 },
            { rate: 0.0875, minIncome: 9451, maxIncome: 125000 },
            { rate: 0.099, minIncome: 125001 }
        ]
    },
    'Pennsylvania': {
        name: 'Pennsylvania',
        shortName: 'PA',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.0307, minIncome: 0 }]
    },
    'Rhode Island': {
        name: 'Rhode Island',
        shortName: 'RI',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0.0375, minIncome: 0, maxIncome: 68200 },
            { rate: 0.0475, minIncome: 68201, maxIncome: 155050 },
            { rate: 0.0599, minIncome: 155051 }
        ]
    },
    'South Carolina': {
        name: 'South Carolina',
        shortName: 'SC',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.07, minIncome: 0 }]
    },
    'South Dakota': {
        name: 'South Dakota',
        shortName: 'SD',
        capitalGainsType: 'income',
        brackets: [{ rate: 0, minIncome: 0 }],
        specialRules: ['No state income tax']
    },
    'Tennessee': {
        name: 'Tennessee',
        shortName: 'TN',
        capitalGainsType: 'income',
        brackets: [{ rate: 0, minIncome: 0 }],
        specialRules: ['No state income tax']
    },
    'Utah': {
        name: 'Utah',
        shortName: 'UT',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.0485, minIncome: 0 }]
    },
    'Vermont': {
        name: 'Vermont',
        shortName: 'VT',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0.035, minIncome: 0, maxIncome: 40950 },
            { rate: 0.066, minIncome: 40951, maxIncome: 99200 },
            { rate: 0.076, minIncome: 99201 }
        ]
    },
    'Virginia': {
        name: 'Virginia',
        shortName: 'VA',
        capitalGainsType: 'income',
        brackets: [{ rate: 0.0575, minIncome: 0 }]
    },
    'Washington': {
        name: 'Washington',
        shortName: 'WA',
        capitalGainsType: 'income',
        brackets: [{ rate: 0, minIncome: 0 }],
        specialRules: ['No state income tax']
    },
    'West Virginia': {
        name: 'West Virginia',
        shortName: 'WV',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0.03, minIncome: 0, maxIncome: 10000 },
            { rate: 0.04, minIncome: 10001, maxIncome: 25000 },
            { rate: 0.045, minIncome: 25001, maxIncome: 40000 },
            { rate: 0.06, minIncome: 40001, maxIncome: 60000 },
            { rate: 0.065, minIncome: 60001 }
        ]
    },
    'Wisconsin': {
        name: 'Wisconsin',
        shortName: 'WI',
        capitalGainsType: 'income',
        brackets: [
            { rate: 0.0354, minIncome: 0, maxIncome: 13810 },
            { rate: 0.0465, minIncome: 13811, maxIncome: 27630 },
            { rate: 0.0627, minIncome: 27631, maxIncome: 304170 },
            { rate: 0.0765, minIncome: 304171 }
        ]
    },
    'Wyoming': {
        name: 'Wyoming',
        shortName: 'WY',
        capitalGainsType: 'income',
        brackets: [{ rate: 0, minIncome: 0 }],
        specialRules: ['No state income tax']
    }
}

// Update the function to handle full state names more flexibly
export function calculateStateTax(income: number, state: string): number {
    if (!state) {
        throw new Error('State is required')
    }

    // Try to find the state by exact match first
    let stateInfo = STATE_TAX_RATES[state]

    // If not found, try to find by state code
    if (!stateInfo) {
        const stateCode = state.toUpperCase()
        const stateByCode = Object.values(STATE_TAX_RATES).find(info => info.shortName === stateCode)
        if (stateByCode) {
            stateInfo = stateByCode
        }
    }

    // If still not found, try to find by case-insensitive name match
    if (!stateInfo) {
        const stateName = state.toLowerCase()
        const stateByName = Object.values(STATE_TAX_RATES).find(
            info => info.name.toLowerCase() === stateName
        )
        if (stateByName) {
            stateInfo = stateByName
        }
    }

    if (!stateInfo) {
        throw new Error(`Invalid state name or code: ${state}. Please use full state name (e.g., "California") or state code (e.g., "CA").`)
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