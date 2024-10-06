// Function to calculate f(x) = e^(-x^2 / 2) / sqrt(2 * PI)
function normalDistribution(x) {
    return Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI);
}

// Numerical integration using Simpson's rule
function integrate(z, n) {
    const h = z / n; // Step size
    let sum = normalDistribution(0) + normalDistribution(z); // f(0) + f(z)

    // Apply Simpson's rule
    for (let i = 1; i < n; i++) {
        const x = i * h;
        if (i % 2 === 0) {
            sum += 2 * normalDistribution(x);
        } else {
            sum += 4 * normalDistribution(x);
        }
    }

    return (h / 3) * sum;
}

// Handling button click event
document.getElementById('calculateButton').addEventListener('click', function() {
    const zInput = document.getElementById('zInput').value;
    const z = parseFloat(zInput);

    if (isNaN(z)) {
        alert("Please enter a valid number for Z");
        return;
    }

    const n = 1000; // Number of intervals for integration

    // Calculate the probability
    const probability = integrate(z, n);

    // Display the result
    document.getElementById('result').textContent = `The normal probability for Z = ${z} is: ${probability}`;
});
