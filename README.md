# 👽 Numerical Analysis Web Application

A **professional, web-based numerical analysis system** designed to solve core problems from **Chapter 1 (Root Finding Methods)** and **Chapter 2 (Linear Systems)** with an interactive **Graphical User Interface (GUI)**.

This project transforms theoretical numerical methods into a **fully functional software platform**, complete with visualization, iteration tracking, and multiple solving techniques.

---

# 🚀 Live Features

## 🔹 Root Finding Methods (Chapter 1)

* Bisection Method
* False Position Method
* Newton-Raphson Method
* Secant Method

### ✅ Capabilities:

* Iteration-by-iteration computation
* Error (%) calculation and tracking
* Function graph visualization
* Convergence (error vs iteration) graph

---

## 🔹 Linear Systems (Chapter 2)

* Gaussian Elimination
* Gauss-Jordan Elimination
* LU Decomposition
* Cramer’s Rule (2×2)

### ✅ Capabilities:

* Matrix input via UI
* Automatic parsing of user input
* Step-based numerical solving logic
* Multi-method comparison

---

# 🧠 Key Highlights

* 🧮 **Multi-method solver engine**
* 📊 **Graphical visualization (Canvas API)**
* 📉 **Error convergence analysis**
* 🧱 **Modular and scalable architecture**
* 🌐 **Runs entirely in the browser (no backend required)**

---

# 🏗️ Project Architecture

```bash
numerical-analysis-app/
│
├── index.html              # Main application (UI + logic)
│
├── assets/                 # (Optional future folder)
│   ├── styles.css          # External styling (if separated)
│   └── scripts.js          # Modular JS (future refactor)
│
├── methods/                # (Planned modular expansion)
│   ├── root/
│   │   ├── bisection.js
│   │   ├── falsePosition.js
│   │   ├── newton.js
│   │   └── secant.js
│   │
│   └── linear/
│       ├── gauss.js
│       ├── gaussJordan.js
│       ├── lu.js
│       └── cramer.js
│
└── README.md               # Project documentation
```

---

# ⚙️ How It Works

## 1. Root Finding

1. User inputs function `f(x)`
2. Selects numerical method
3. Provides initial guesses
4. System:

   * Iteratively computes root
   * Tracks error
   * Displays table + graphs

---

## 2. Linear Systems

1. User inputs:

   * Matrix **A**
   * Vector **B**
2. Selects solving method
3. System:

   * Parses matrix
   * Applies algorithm
   * Outputs solution vector

---

# 📊 Example Input

## Root Finding

```
f(x) = x*x - 4
x0 = 0
x1 = 3
```

## Linear System

```
Matrix A:
2,1
5,7

Vector B:
11,13
```

---

# ⚠️ Limitations (Engineering Notes)

* Uses `eval()` → not safe for production (acceptable for academic use)
* Cramer’s Rule limited to **2×2 systems**
* LU Decomposition implemented **without pivoting**
* Graph scaling is fixed (non-adaptive)

---

# 🧪 Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla)
* Canvas API (for graphing)

---

# 🌐 Deployment (GitHub Pages)

1. Upload project to GitHub
2. Go to **Settings → Pages**
3. Select:

   * Source: `main branch`
4. Access your live app:

```
https://your-username.github.io/numerical-analysis-app/
```

---

# 🎯 Educational Value

This project demonstrates:

* Numerical method implementation
* Algorithm comparison
* Convergence analysis
* Software engineering structure

---

# 👨‍💻 Author

Developed as a **Numerical Analysis Assignment Project**
Evolved into a **mini computational software system** 👽🚀

---

# 🔥 Future Improvements

* Replace `eval()` with a math parser (e.g. math.js)
* Add step-by-step solution breakdown
* Implement pivoting (LU, Gauss)
* Add export (PDF/CSV)
* Convert to React / Full-stack system

---

# ⭐ Final Note

This project goes beyond a simple assignment.
It represents a **complete numerical analysis platform** combining:

> Algorithms + Visualization + User Interaction

---

💡 *Built with precision, structure, and intention.*
👽 *Engineered to stand out.*
