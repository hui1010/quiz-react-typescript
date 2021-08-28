
// Create a random array - notice that this is not ideal, this is only a quick fix for this tutorial
export const shuffleArray = (array: any[]) => [...array].sort(() =>  Math.random() - 0.5)