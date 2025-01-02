# Tax Form Generation

## Overview
The tax form generation system provides accurate IRS-compliant forms for cryptocurrency transactions. It supports Form 8949 for both short-term and long-term capital gains, as well as Schedule D for summarizing gains and losses.

## Features
- Exact IRS form templates
- Form validation
- Preview before download
- Multi-form generation
- PDF downloads

## User Flow
1. **Collection**: System collects and processes transaction data
2. **Preview**: Users can preview forms before generation
3. **Validation**: System validates all required fields
4. **Generation**: Forms are generated with exact IRS specifications
5. **Download**: Multiple forms are downloaded as separate PDFs

## Form Types
### Form 8949
- Short-term capital gains (held < 1 year)
- Long-term capital gains (held > 1 year)
- Includes transaction details and calculations

### Schedule D
- Summarizes Form 8949 data
- Shows total gains/losses
- Provides tax year summary

## Technical Implementation
- Uses jsPDF for PDF generation
- Implements exact IRS form templates
- Includes form validation
- Provides preview capabilities

## Error Handling
- Validates all required fields
- Checks calculation accuracy
- Provides clear error messages
- Prevents invalid form generation

## Best Practices
1. Always preview forms before downloading
2. Verify transaction data accuracy
3. Check totals match expectations
4. Keep copies of generated forms 