// src/utils/tokenizer.ts

export function tokenize(text: string): string[] {
    return text
        .toLowerCase()
        .replace(/[^\w\s]/g, '') // Remove punctuation
        .split(/\s+/) // Split by whitespace
        .filter(Boolean); // Remove empty tokens
}

export function ngram(text: string, n: number): string[] {
    const tokens = tokenize(text);
    const ngrams: string[] = [];

    for (let i = 0; i < tokens.length - n + 1; i++) {
        ngrams.push(tokens.slice(i, i + n).join(' '));
    }

    return ngrams;
}