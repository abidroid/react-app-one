function ArrayDestructure() {

    const basicSyntax = `
const [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
    `;


    const skipElements = 
`
const [a, , b] = [10, 20, 30];
console.log(a); // 10
console.log(b); // 30

`;



const defaultValues = 
`
const [x = 5, y = 7] = [1];
console.log(x); // 1
console.log(y); // 7 (default)
`;

const swapVariables = 
`
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1
`;

const destructureFromFunctionReturn = 
`
function getCoords() {
  return [25, 50];
}
  
const [x, y] = getCoords();
console.log(x, y); // 25 50
`;
    return (
        <>
            <h1>Array Destructuring</h1>
            <h3>👉 Basic Syntax</h3>
            <pre><code>{basicSyntax}</code></pre>

            <h2>Use Cases</h2>
            <h3>1. Skip Elements</h3>
            <pre><code>{skipElements}</code></pre>


            <h3>2. Default Values</h3>
            <pre><code>{defaultValues}</code></pre>

            <h3>3. Swap Variables</h3>
            <pre><code>{swapVariables}</code></pre>

            <h3>4. Destructure from function return</h3>
            <pre><code>{destructureFromFunctionReturn}</code></pre>
        </>
    );
}

export default ArrayDestructure;