export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  tags: string[];
  readTime: number;
}
export const blogPosts: BlogPost[] = [{
  id: '1',
  title: 'Getting Started with React Hooks',
  date: 'May 15, 2023',
  author: 'Alex Chen',
  excerpt: 'Learn how to use React Hooks to simplify your components and manage state more efficiently.',
  content: `
# Getting Started with React Hooks
React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. They let you "hook into" React state and lifecycle features from function components.
## Why Hooks?
Before Hooks, components that needed state had to be class components. This led to several issues:
- Complex components became hard to understand
- Reusing stateful logic between components was difficult
- Classes can be confusing for both humans and machines
## Basic Hooks
### useState
The \`useState\` hook lets you add state to functional components:
\`\`\`jsx
import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`
### useEffect
The \`useEffect\` hook lets you perform side effects in function components:
\`\`\`jsx
import React, { useState, useEffect } from 'react';
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]); // Only re-run the effect if count changes
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`
### useContext
The \`useContext\` hook lets you subscribe to React context without introducing nesting:
\`\`\`jsx
import React, { useContext } from 'react';
import { ThemeContext } from './theme-context';
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
\`\`\`
## Rules of Hooks
Hooks come with two important rules:
1. Only call Hooks at the top level (not inside loops, conditions, or nested functions)
2. Only call Hooks from React function components or custom Hooks
Following these rules ensures that Hooks work correctly and that stateful logic in your component remains consistent between renders.
## Custom Hooks
One of the best features of Hooks is the ability to create your own custom hooks, allowing you to extract component logic into reusable functions.
\`\`\`jsx
import { useState, useEffect } from 'react';
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return width;
}
// Using the custom hook
function MyResponsiveComponent() {
  const width = useWindowWidth();
  return (
    <div>
      {width > 768 ? 'Desktop' : 'Mobile'} view
    </div>
  );
}
\`\`\`
## Conclusion
React Hooks provide a more direct API to React concepts you already know: props, state, context, refs, and lifecycle. They enable you to reuse stateful logic without changing your component hierarchy, making your code easier to understand and test.
    `,
  tags: ['React', 'JavaScript', 'Hooks', 'Frontend'],
  readTime: 5
}, {
  id: '2',
  title: 'Understanding TypeScript Generics',
  date: 'June 3, 2023',
  author: 'Alex Chen',
  excerpt: 'Dive into TypeScript generics and learn how they can make your code more reusable and type-safe.',
  content: `
# Understanding TypeScript Generics
TypeScript generics are a powerful feature that allow you to create reusable components that work with a variety of types rather than a single one. They help you build flexible, reusable functions and classes while maintaining type safety.
## Why Use Generics?
Without generics, we would have to create specific functions for each type:
\`\`\`typescript
function getStringArray(): string[] {
  return ['a', 'b', 'c'];
}
function getNumberArray(): number[] {
  return [1, 2, 3];
}
\`\`\`
With generics, we can write a single function that works with multiple types:
\`\`\`typescript
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
let stringArray = getArray<string>(['a', 'b', 'c']);
let numberArray = getArray<number>([1, 2, 3]);
\`\`\`
## Generic Types
You can create generic interfaces and classes:
\`\`\`typescript
interface GenericIdentityFn<T> {
  (arg: T): T;
}
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
\`\`\`
## Generic Constraints
Sometimes you want to restrict the types that can be used with your generic function:
\`\`\`typescript
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property
  return arg;
}
\`\`\`
## Using Type Parameters in Generic Constraints
You can declare a type parameter that is constrained by another type parameter:
\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let x = { a: 1, b: 2, c: 3 };
getProperty(x, "a"); // Okay
getProperty(x, "m"); // Error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c'
\`\`\`
## Generic Classes
Generic classes have a similar shape to generic interfaces:
\`\`\`typescript
class GenericClass<T> {
  value: T;
  add: (x: T, y: T) => T;
  constructor(value: T) {
    this.value = value;
  }
  getValue(): T {
    return this.value;
  }
}
let myGenericNumber = new GenericClass<number>(0);
\`\`\`
## Real-World Example: Generic API Client
Here's a practical example of using generics to create a type-safe API client:
\`\`\`typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}
class ApiClient {
  async get<T>(url: string): Promise<ApiResponse<T>> {
    const response = await fetch(url);
    const data = await response.json();
    return {
      data,
      status: response.status,
      statusText: response.statusText,
      headers: this.parseHeaders(response.headers)
    };
  }
  private parseHeaders(headers: Headers): Record<string, string> {
    const result: Record<string, string> = {};
    headers.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }
}
// Usage
interface User {
  id: number;
  name: string;
  email: string;
}
const api = new ApiClient();
api.get<User>('/api/users/1').then(response => {
  const user = response.data;
  console.log(user.name); // Type-safe access
});
\`\`\`
## Conclusion
TypeScript generics are a powerful tool for creating reusable, type-safe components. They allow you to write code that works with a variety of types while still providing strong type checking at compile time. By mastering generics, you can write more flexible and maintainable TypeScript code.
    `,
  tags: ['TypeScript', 'JavaScript', 'Programming', 'Backend'],
  readTime: 7
}, {
  id: '3',
  title: 'CSS Grid Layout: A Complete Guide',
  date: 'July 12, 2023',
  author: 'Alex Chen',
  excerpt: 'Master CSS Grid Layout with this comprehensive guide covering all the essential concepts and techniques.',
  content: `
# CSS Grid Layout: A Complete Guide
CSS Grid Layout is a powerful two-dimensional layout system designed for the web. It allows you to organize content into rows and columns and has transformed how we design websites.
## Basic Concepts
### Grid Container and Grid Items
To create a grid layout, you need to define a container element as a grid:
\`\`\`css
.container {
  display: grid;
}
\`\`\`
All direct children of this container become grid items automatically.
### Defining Rows and Columns
You can define the columns and rows using \`grid-template-columns\` and \`grid-template-rows\`:
\`\`\`css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px 100px;
}
\`\`\`
### Using fr Units
The \`fr\` unit represents a fraction of the available space:
\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
\`\`\`
This creates three columns where the middle one is twice as wide as the others.
### repeat() Function
For repeating patterns, use the \`repeat()\` function:
\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
\`\`\`
### minmax() Function
The \`minmax()\` function defines a size range:
\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
}
\`\`\`
## Grid Gaps
You can add spacing between grid items:
\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  /* Or use the shorthand */
  gap: 20px;
}
\`\`\`
## Placing Items
### Grid Lines
Grid lines are numbered starting from 1:
\`\`\`css
.item {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  /* Or use the shorthand */
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  /* Or even shorter */
  grid-area: 1 / 1 / 3 / 3;
}
\`\`\`
### Spanning
You can make an item span multiple tracks:
\`\`\`css
.item {
  grid-column: span 2;
  grid-row: span 2;
}
\`\`\`
## Named Grid Areas
You can name grid areas and place items by name:
\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto auto;
  grid-template-areas: 
    "header header header"
    "sidebar content content"
    "footer footer footer";
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
\`\`\`
## Alignment
### Align Grid Items
\`\`\`css
.container {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}
\`\`\`
### Align Grid Tracks
\`\`\`css
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;
}
\`\`\`
### Align Individual Items
\`\`\`css
.item {
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}
\`\`\`
## Auto-placement
CSS Grid has powerful auto-placement algorithms:
\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
\`\`\`
This creates as many 200px columns as will fit in the container.
## Responsive Layouts with Grid
CSS Grid makes it easy to create responsive layouts without media queries:
\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
\`\`\`
This creates a responsive grid where each column is at least 300px wide, and the number of columns adjusts automatically based on the available space.
## Conclusion
CSS Grid Layout provides a powerful system for creating complex web layouts with minimal code. By understanding its fundamental concepts and properties, you can create sophisticated, responsive designs that work across different screen sizes.
    `,
  tags: ['CSS', 'Web Design', 'Frontend', 'Layout'],
  readTime: 6
}, {
  id: '4',
  title: 'Introduction to WebAssembly',
  date: 'August 22, 2023',
  author: 'Alex Chen',
  excerpt: 'Learn what WebAssembly is and how it can revolutionize web performance for computation-heavy applications.',
  content: `
# Introduction to WebAssembly
WebAssembly (often abbreviated as Wasm) is a binary instruction format for a stack-based virtual machine. It's designed as a portable target for the compilation of high-level languages like C, C++, and Rust, enabling deployment on the web for client and server applications.
## What is WebAssembly?
WebAssembly is:
- **Fast**: It's designed to execute at near-native speed
- **Efficient**: It has a compact binary format that loads quickly
- **Safe**: It runs in a sandboxed environment and enforces the same-origin and permissions security policies of the browser
- **Open**: It's an open standard developed by representatives from all major browsers
## Why WebAssembly?
JavaScript has been the only language that runs natively in browsers, but it has limitations for performance-critical applications. WebAssembly addresses these limitations by providing:
1. **Better performance**: Pre-compiled code that can execute faster than JavaScript
2. **Language choice**: Ability to use languages other than JavaScript
3. **Reuse of existing code**: Bringing existing C/C++/Rust libraries to the web
4. **Predictable performance**: Less affected by JavaScript's garbage collection pauses
## How WebAssembly Works
WebAssembly modules are delivered to browsers in a binary format that is:
1. Downloaded
2. Compiled by the browser
3. Instantiated
4. Executed
Here's the typical workflow:
\`\`\`
Source Code (C, C++, Rust, etc.)
      ↓
Compiled to WebAssembly (.wasm file)
      ↓
Loaded by JavaScript
      ↓
Instantiated and executed in the browser
\`\`\`
## Getting Started with WebAssembly
### Using Emscripten for C/C++
Emscripten is a toolchain for compiling to WebAssembly:
\`\`\`bash
# Install Emscripten
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh
# Compile C to WebAssembly
emcc hello.c -o hello.html
\`\`\`
### Using Rust
Rust has excellent WebAssembly support:
\`\`\`bash
# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
# Add WebAssembly target
rustup target add wasm32-unknown-unknown
# Create a library
cargo new --lib hello-wasm
cd hello-wasm
# Add wasm-bindgen dependency to Cargo.toml
# [dependencies]
# wasm-bindgen = "0.2"
# Compile to WebAssembly
cargo build --target wasm32-unknown-unknown
\`\`\`
## Integrating WebAssembly with JavaScript
WebAssembly modules can be loaded and instantiated via JavaScript:
\`\`\`javascript
// Fetch and instantiate the WebAssembly module
fetch('module.wasm')
  .then(response => response.arrayBuffer())
  .then(bytes => WebAssembly.instantiate(bytes, importObject))
  .then(result => {
    // Use the WebAssembly module
    const exports = result.instance.exports;
    const sum = exports.add(5, 7);
    console.log('5 + 7 =', sum);
  });
\`\`\`
## WebAssembly Use Cases
WebAssembly excels in computation-heavy applications:
- **Games**: Porting existing game engines to the web
- **Image/Video editing**: Computationally intensive filters and transformations
- **3D rendering**: CAD software, 3D modeling, and visualization
- **Scientific simulations**: Physics, chemistry, biology simulations
- **Audio processing**: Digital audio workstations, music production
- **Cryptography**: Encryption, hashing, blockchain
## Current Limitations
WebAssembly is still evolving, with some current limitations:
- Limited direct DOM access (must go through JavaScript)
- No direct access to Web APIs
- No garbage collection (though this is in development)
- Limited debugging tools compared to JavaScript
## The Future of WebAssembly
WebAssembly is rapidly evolving with several exciting proposals:
- **Interface Types**: Better integration with JavaScript
- **Garbage Collection**: Support for languages with GC like Java, C#
- **Threading**: Parallel execution with shared memory
- **Exception Handling**: Better error management
- **SIMD**: Single Instruction Multiple Data for vectorized operations
- **Reference Types**: More flexible memory management
## Conclusion
WebAssembly represents a significant advancement in web technology, enabling high-performance applications that were previously impossible or impractical in the browser. As it continues to evolve, we can expect to see increasingly sophisticated applications running on the web with near-native performance.
Whether you're building games, scientific applications, or just want to improve the performance of your web applications, WebAssembly is worth exploring as part of your development toolkit.
    `,
  tags: ['WebAssembly', 'JavaScript', 'Performance', 'Frontend'],
  readTime: 8
}, {
  id: '5',
  title: 'Building a REST API with Node.js and Express',
  date: 'September 5, 2023',
  author: 'Alex Chen',
  excerpt: 'Learn how to create a RESTful API from scratch using Node.js, Express, and MongoDB.',
  content: `
# Building a REST API with Node.js and Express
RESTful APIs are the backbone of modern web applications, enabling communication between frontend clients and backend services. In this guide, we'll walk through creating a simple but robust REST API using Node.js and Express.
## Setting Up the Project
First, let's initialize a new Node.js project and install the necessary dependencies:
\`\`\`bash
mkdir express-rest-api
cd express-rest-api
npm init -y
npm install express mongoose dotenv cors
npm install --save-dev nodemon
\`\`\`
Create a basic folder structure:
\`\`\`
express-rest-api/
├── node_modules/
├── models/
├── routes/
├── controllers/
├── middleware/
├── config/
├── .env
├── server.js
└── package.json
\`\`\`
## Setting Up the Server
Create a \`server.js\` file:
\`\`\`javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
// Initialize Express
const app = express();
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use('/api/products', require('./routes/productRoutes'));
// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the REST API');
});
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
\`\`\`
Create a \`.env\` file:
\`\`\`
PORT=5000
MONGO_URI=mongodb://localhost:27017/restapi
\`\`\`
## Creating Models
Let's create a simple product model in \`models/productModel.js\`:
\`\`\`javascript
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price'],
    min: [0, 'Price must be positive']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['Electronics', 'Books', 'Clothing', 'Food', 'Other']
  },
  inStock: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Product', productSchema);
\`\`\`
## Creating Controllers
Create a controller in \`controllers/productController.js\`:
\`\`\`javascript
const Product = require('../models/productModel');
// @desc    Get all products
// @route   GET /api/products
// @access  Public
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }
    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
// @desc    Create new product
// @route   POST /api/products
// @access  Private
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      data: product
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};
// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }
    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }
    await product.remove();
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
\`\`\`
## Creating Routes
Create routes in \`routes/productRoutes.js\`:
\`\`\`javascript
const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
router
  .route('/')
  .get(getProducts)
  .post(createProduct);
router
  .route('/:id')
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct);
module.exports = router;
\`\`\`
## Adding Error Handling Middleware
Create a middleware in \`middleware/errorMiddleware.js\`:
\`\`\`javascript
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};
module.exports = { errorHandler };
\`\`\`
Update \`server.js\` to use the error handler:
\`\`\`javascript
const { errorHandler } = require('./middleware/errorMiddleware');
// ... existing code ...
// Error handler middleware
app.use(errorHandler);
// ... rest of the code ...
\`\`\`
## Testing the API
You can test your API using tools like Postman or Insomnia:
1. Create a product: POST to \`/api/products\`
2. Get all products: GET to \`/api/products\`
3. Get a specific product: GET to \`/api/products/:id\`
4. Update a product: PUT to \`/api/products/:id\`
5. Delete a product: DELETE to \`/api/products/:id\`
## Adding Authentication
For a production API, you would want to add authentication. Here's a simple JWT implementation:
1. Install JWT: \`npm install jsonwebtoken bcryptjs\`
2. Create a user model
3. Implement registration and login endpoints
4. Create an auth middleware to protect routes
## Conclusion
You've now built a basic REST API with Node.js and Express. This foundation can be extended with:
- More complex data relationships
- Advanced validation
- Pagination, filtering, and sorting
- Rate limiting
- Caching strategies
- Documentation using Swagger or similar tools
REST APIs are fundamental to modern web development, and mastering them opens up possibilities for building sophisticated, scalable web applications.
    `,
  tags: ['Node.js', 'Express', 'API', 'Backend', 'MongoDB'],
  readTime: 10
}];