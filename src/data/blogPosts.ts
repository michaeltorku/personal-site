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
export const blogPosts: BlogPost[] = [
  {
    id: '2',
    title: 'Waking Up',
    date: 'January 15, 2025',
    author: 'Michael Torku',
    excerpt: 'A reflection on post-graduation life, the comfort of routine, and the journey toward intentional growth through software engineering and communication.',
    content: `# Waking Up
  
  I graduated college in 2024 May with several others. I had and still have an excitement about affecting the world, the global community and my wallet in a meaningful way. The first thing on my todo list post college was a month summer program called GhanaCodes.
  
  Disclaimer: My thoughts go in all directions all at once, so sometimes it leads to a lot of good-inspired yet incomplete - and occasionally unclear - thoughts. I'm trying to fix that. For this piece, being the opener, I'm putting my mind to paper. I intend to plan future pieces and have them be more organized. All that means is don't expect the rest of this to go in a straight line.
  
  At the risk of sounding arrogant, I have a boisterous confidence in my ability to do most things. So part of graduating college meant I hadn't the slightest notion/plan of how I was going to affect the world et al. It was just going to work. I had a job offer in hand, decent to good software engineering skill depending who you ask and some semblance of grit if you will. 
  
  In my mind, I was going to ace my job, get promoted, leave, start a company or two, get rich, and once I was rich… well I hadn't thought much past that but let's leave that up to my moral compass et al. 
  
  I started my job.
  
  It was cool and fun for some weeks, hard in others and not so fun from time to time. And unlike a class or some other ephemeral activity, I've had to stick with it day in and day out. I'm treated well, compensated well, I have good friends and family and all the good things that make for a comfortable life. Now I'm so comfortable, the days and weeks occasionally blend into one and I lose sight of some of the bigger targets I have. 
  
  In some ways I think I'm wasting away but I'd say sleep-walking might be a better way to put it. I'm walking, moving (proverbially) forward as far as having some impact at work and making connections and memories and happiness. At the same time I'm asleep, blending into the natural order of things and not bending forces of normalcy and symmetry to my efforts - which has always been part of my assessment of self. 
  
  More importantly, how did we get here. By here I mean, in front of my laptop on a Saturday afternoon, looking through my window into the hums of Brooklyn and putting my thoughts on a  screen. I've never been the writing type or more shamefully the reading type for that matter. Not because of any stark opinions, I've just found I enjoyed it less than my other interests so I kept those two next in line on most days.
  
  I wouldn't say I've awoken from my slumber, but I'm more cognizant of it. The argument could be made that for a person asleep to be waking themselves up, they'd need to be awake, but let's not lose focus in an analogy I didn't give much thought to. I'm taking an essentialist approach to waking myself up. What are the high leverage skills with a straight line to impact that I am, I need to or I can get good at. I've run through a bunch of these, spending good money along the way. Standing in mostly the same spot as where I started. Of course maybe I wasn't consistent enough among other things. 
  
  More importantly I've sat down to think and I've found the skills that I want to focus on and sharpen on a daily basis. Unfortunately these are all the skills that I overlooked in my selection process. Only two of them at that. **Software Engineering** and **Communication**. I'm taking an execution-based approach which is a long-winded way of saying I'm going to be building tons of software and reading, writing, speaking and listening more consciously. The crux of the problem is that I need to do these in a way that creates exposure and gives me leverage. Like any business or enterprise, that means I need to have a great product (my skillset) and great distribution (tons of people know about me). I haven't quite figured out that part yet. But I'm giving it good thought. 
  
  Note to self (and reader): **Don't sleep. Wake Up.**`,
    tags: ['Personal', 'Reflection', 'Career', 'Growth'],
    readTime: 8
  },
  {
  id: '0',
  title: 'Lorem Ipsum Dolor Sit Amet',
  date: 'September 5, 2023',
  author: 'Michael Torku',
  excerpt: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.',
  content: `
## Filler Template for building other blog posts

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
  readTime: 10}
];