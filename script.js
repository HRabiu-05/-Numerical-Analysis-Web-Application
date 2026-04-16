// ==========================================
// CONTROLLER FILE
// Connects UI with algorithms
// ==========================================


// Convert string to function
// Example: "x*x - 4" → function(x)
function parseFunction(expr) {
    return function(x) {
        return eval(expr); // NOTE: replace later for safety
    };
}


// Run button logic
function runBisection() {

    // =============================
    // GET INPUTS FROM UI
    // =============================
    const expr = document.getElementById("functionInput").value;
    const xl = parseFloat(document.getElementById("xl").value);
    const xu = parseFloat(document.getElementById("xu").value);
    const tol = parseFloat(document.getElementById("tol").value);
    const maxIter = parseInt(document.getElementById("maxIter").value);

    // Convert to function
    const f = parseFunction(expr);

    // =============================
    // CALL ALGORITHM
    // =============================
    const results = bisectionMethod(f, xl, xu, tol, maxIter);

    // =============================
    // DISPLAY RESULTS
    // =============================
    const tbody = document.querySelector("#resultTable tbody");
    tbody.innerHTML = "";

    results.forEach(row => {

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${row.iteration}</td>
            <td>${row.xr.toFixed(6)}</td>
            <td>${row.error.toFixed(4)}</td>
        `;

        tbody.appendChild(tr);
    });
}
