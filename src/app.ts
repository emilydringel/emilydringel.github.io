import * as natural from 'natural';

function isSemanticSimilar(str1: string, str2: string): boolean {
    // Tokenize input strings
    const tokenizer = new natural.WordTokenizer();
    const tokens1 = tokenizer.tokenize(str1.toLowerCase()) || [];
    const tokens2 = tokenizer.tokenize(str2.toLowerCase()) || [];

    // Calculate Jaccard similarity coefficient manually
    const intersection = tokens1.filter((token: string) => tokens2.indexOf(token) !== -1);
    const union = Array.from(new Set([...tokens1, ...tokens2]));

    const jaccardIndex = union.length === 0 ? 0 : intersection.length / union.length;

    // You can adjust the similarity threshold as needed
    const similarityThreshold = 0.7;

    // Check if the similarity is above the threshold
    return jaccardIndex >= similarityThreshold;
}

function submitResponse() {
    const userResponse = (<HTMLInputElement>document.getElementById('userResponse')).value;
    alert(`Semantic Similarity to Expected Response "Test": ${isSemanticSimilar("Test",userResponse)}`);
}
