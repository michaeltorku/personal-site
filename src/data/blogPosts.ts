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
    id: 'note-to-self',
    title: 'Note to Self',
    date: 'November 16, 2025',
    author: 'Michael Torku',
    excerpt:
      'A post-graduation reflection on ambition, comfort, a good job, what I enjoy and choosing skills to sharpen.',
    content: `
Disclaimer: My thoughts go in different directions at once and sometimes that doesn't make for the most coherent reads, in future writes I'll try to fix that. For this piece, being the opener, I'm putting mind to paper. All that means is don't expect the rest of this to go in a straight line.

I graduated college about a year ago. I had and still have an excitement about affecting the world, my communities and my wallet in a meaningful way.

At the risk of sounding arrogant, I have a boisterous confidence in my ability to do most things. So part of graduating college meant I hadn't the slightest notion/plan of how I was going to affect the targets I mentioned. It was just going to work. I had a job offer in hand, decent to good software engineering skill and some grit if you will.

In my mind, I was going to ace my job, get promoted, leave, start a company, impact tons of people, get rich, and once I was rich… well I hadn't thought much past that but let's leave that up to my moral compass et al.

I started my job.

It was cool and fun for some weeks, hard in others and not so fun from time to time. And unlike a class or some other ephemeral activity, I've had to stick with it day in and day out. I'm treated well, compensated well, I have good friends and family and all the good things that make for a comfortable life. Now I'm so comfortable, the days and weeks occasionally blend into one and I lose sight of some of the bigger goals I have.

In some ways I think I'm wasting away but I'd say sleep-walking might be a better way to put it. I'm walking, moving forward as far as having impact at work and making connections, learning new things and making memories and I'm happy. At the same time I'm asleep, blending into the natural order of things and not bending forces of normalcy and symmetry to my efforts - which has always been part of my assessment of self.

More importantly, how did we get here. By here I mean, in front of my laptop on a Saturday afternoon, looking through my window into the hums of Brooklyn and putting thoughts on a screen. I've never been the writing type or more shamefully the reading type for that matter. Not because of any stark opinions, I've just found I enjoyed them less than my other interests so I kept them next in line on most days.

I wouldn't say I've awoken from my slumber, but I'm more cognizant of it. What are the high leverage skills with a straight line to impact that I am, need/want to or can get good at. I've run through a bunch of these, spending good money along the way. Standing in mostly the same spot as where I started. Of course maybe I wasn't consistent enough among other things and hopefully the experience has been priceless.

More importantly I've sat down to think and I've found the skills that I want to focus on and sharpen more consciously. Unfortunately these are all the skills that I overlooked in my selection process. **Software Engineering** and **Communication**. I find that I have enjoyed these and they best position me to unlock more time and resources for the pursuit of other goals and hobbies of balance.

I've run tons of experiments on myself. So far, I know I like helping people (more generally), I enjoy good company, and I love technical (among other) challenges. There's still a lot I haven't figured out. But I'm giving that **good thought.**
`,
    tags: ['Personal', 'Reflection', 'Career', 'Growth'],
    readTime: 5
  },
  {
    id: 'leaving-netflix',
    title: 'Leaving Netflix',
    date: 'December 2, 2025',
    author: 'Michael Torku',
    excerpt:
      'From the internship offer call to saying goodbye two years later: why I left for a startup bet, what I learned about asymmetric upside, and what Netflix taught me about engineering and agency.',
    content: `
I remember receiving a phone call from Layne Austin in 2022 close to thanksgiving. Smiling ear to ear as she told me that I'd be receiving an offer to join Netflix, how excited the team was to have me and then reciting the many benefits I had already read over and over on the internet. Some days before this, I had an interview with my to be manager Charles Zhao at the end of which he mentioned he had enjoyed our chat and will be reaching out to HR to extend an internship offer. Every second between this day and that lasted 10. Scars of reddit threads roaming my mind convincing me that something could still go wrong even after Charles' assurance.

Close to thanksgiving 2025, I'm only realizing as I write this, I started a slack huddle with my manager to explain why "I made the tough decision to leave Netflix." A decision I will dive into some more later in this piece. The two weeks that ensued was an emotional swing. Saying goodbye to some of the finest engineers and mentors I've had the opportunity to share technical problems with. To Aravindan, Anoop, Surafel, Christian, Ryan, Prashant, Akash and Jiaofen I'm grateful for the laughs we've shared and the lessons I've learnt. I recommend you all without reservation and I hope we have a chance to work together in the future. In every way it felt like I was betraying my team and manager and it was a very hard thing to do.

It was hard because I had a good team that I was leaving and jumping into an unknown of new teammates and management and how interesting this new work would be etc. I still don't know if that was the right decision or not and there's not a real way to know is part of what makes it hard. I do know I'll be working for longer hours and across a wider axis and scope. To that effect I'm super thankful to Netflix for teaching me a lot about high caliber engineering at scale and the nuanced parts of the job I was more oblivious to like persuasion, alignment, sharing constructive feedback, expressing dissent effectively and how to contribute meaningfully to difficult and open-ended conversations which function independently of a right answer. And of course, I'm (perhaps just as) thankful for the great perks. The food, the money, the flexibility and the freedom to be unusually responsible.

All this begs the question, why leave? Especially just at the two year mark. I was poached by my roommate to join a startup ([Basis.ai](https://www.getbasis.ai/)) in the accounting space. The money was good (we shall not index too much on that in this and future pieces, Amen). The framework surrounding the decision (likely deserving of its own piece) is that of an asymmetric bet. If you're unfamiliar, understand this as some risk-reward scenario having an extreme/unbounded potential upside for a hedged/limited downside. Take me having a blog for example, I don't necessarily think it to be one of my most exciting (or hip for that matter) things to do, but the potential **upside** here is

- Writing forces clarity and/or clearer thought
- I get practice on a valuable skill I will need at several points for texting, speeches, RFCs, memos etc
- The blog is open to the world and becomes a beacon for people to learn about me and put me in the way of opportunities, other people I'd like to meet or I'm able to help and just general goodwill
- It exists as a journey of my personal growth and important moments to look back on indefinitely.
- Writing is apparently good for your physical health as well.

The **downside** here is

- I lose about an hour or two a week

Running through the job change in the same way, this is my assessment.

**Potential Upside**

- At the new job I'll work on a multitude of spaces not tied too closely to distributed systems and infrastructure necessarily but more closely tied to making the startup a successful, defensible business and I could discover new areas of interest and success
- I'll be mixing my distributed systems and infrastructure knowledge with ML, a recent interest of mine.
- If the stock goes to the moon, then I as well, will be at said moon with it, Amen. Netflix and most big tech companies don't have as much of an upside potential in this regard.
- The startup set up forces engineers (myself) to learn a lot more, and peels back the layers of structured infra, solved problems and sophisticated tools employed at large tech companies giving me a more 0-1 experience.
- I will have a much greater impact on the company's trajectory, decision making, engineering culture, hiring etc.

**Potential Downside**

- I'll be working more hours and fully in-person (less flexibly)
- If the stock does not go to the moon, then the compensation is still within rounding precision of my Netflix comp.
- The company crashes - I may or may not have an agreement with my team at Netflix to let me back in =). This is true, but I know things are not so simple. More importantly, I'm not unconfident in my ability to get a well-paying job.

I think this is a quick and dirty (but fair) run through of the puzzle.

Now we're here, outside of Netflix - an abominable state for the version of me from a few months ago. But let's refocus on what leaving has taught me (and you). The world of your workplace and its daily challenges/fears are hardly as important as we think it is. This is unfortunately most visible in times of tragedy and misfortune. Never forget you have the agency to close it in under a second and jump somewhere else. Companies like Google, Netflix et al need you a lot more than you need them, and skilled as you are, always remember you can get a job anywhere in the market as quickly as you please, or start your own company or take a career break.

I'll leave you with a quote from Naval

***"Work as hard as you can. Even though who you work with and what you work on are more important than how hard you work."***
`,
    tags: ['Career', 'Netflix', 'Personal', 'Startup'],
    readTime: 9
  },
  // {
  //   id: '2',
  //   title: 'Waking Up',
  //   date: 'January 15, 2025',
  //   author: 'Michael Torku',
  //   excerpt: 'A reflection on post-graduation life, the comfort of routine, and the journey toward intentional growth through software engineering and communication.',
  //   content: `# Waking Up
  
  // I graduated college in 2024 May with several others. I had and still have an excitement about affecting the world, the global community and my wallet in a meaningful way. The first thing on my todo list post college was a month summer program called GhanaCodes.
  
  // Disclaimer: My thoughts go in all directions all at once, so sometimes it leads to a lot of good-inspired yet incomplete - and occasionally unclear - thoughts. I'm trying to fix that. For this piece, being the opener, I'm putting my mind to paper. I intend to plan future pieces and have them be more organized. All that means is don't expect the rest of this to go in a straight line.
  
  // At the risk of sounding arrogant, I have a boisterous confidence in my ability to do most things. So part of graduating college meant I hadn't the slightest notion/plan of how I was going to affect the world et al. It was just going to work. I had a job offer in hand, decent to good software engineering skill depending who you ask and some semblance of grit if you will. 
  
  // In my mind, I was going to ace my job, get promoted, leave, start a company or two, get rich, and once I was rich… well I hadn't thought much past that but let's leave that up to my moral compass et al. 
  
  // I started my job.
  
  // It was cool and fun for some weeks, hard in others and not so fun from time to time. And unlike a class or some other ephemeral activity, I've had to stick with it day in and day out. I'm treated well, compensated well, I have good friends and family and all the good things that make for a comfortable life. Now I'm so comfortable, the days and weeks occasionally blend into one and I lose sight of some of the bigger targets I have. 
  
  // In some ways I think I'm wasting away but I'd say sleep-walking might be a better way to put it. I'm walking, moving (proverbially) forward as far as having some impact at work and making connections and memories and happiness. At the same time I'm asleep, blending into the natural order of things and not bending forces of normalcy and symmetry to my efforts - which has always been part of my assessment of self. 
  
  // More importantly, how did we get here. By here I mean, in front of my laptop on a Saturday afternoon, looking through my window into the hums of Brooklyn and putting my thoughts on a  screen. I've never been the writing type or more shamefully the reading type for that matter. Not because of any stark opinions, I've just found I enjoyed it less than my other interests so I kept those two next in line on most days.
  
  // I wouldn't say I've awoken from my slumber, but I'm more cognizant of it. The argument could be made that for a person asleep to be waking themselves up, they'd need to be awake, but let's not lose focus in an analogy I didn't give much thought to. I'm taking an essentialist approach to waking myself up. What are the high leverage skills with a straight line to impact that I am, I need to or I can get good at. I've run through a bunch of these, spending good money along the way. Standing in mostly the same spot as where I started. Of course maybe I wasn't consistent enough among other things. 
  
  // More importantly I've sat down to think and I've found the skills that I want to focus on and sharpen on a daily basis. Unfortunately these are all the skills that I overlooked in my selection process. Only two of them at that. **Software Engineering** and **Communication**. I'm taking an execution-based approach which is a long-winded way of saying I'm going to be building tons of software and reading, writing, speaking and listening more consciously. The crux of the problem is that I need to do these in a way that creates exposure and gives me leverage. Like any business or enterprise, that means I need to have a great product (my skillset) and great distribution (tons of people know about me). I haven't quite figured out that part yet. But I'm giving it good thought. 
  
  // Note to self (and reader): **Don't sleep. Wake Up.**`,
  //   tags: ['Personal', 'Reflection', 'Career', 'Growth'],
  //   readTime: 8
  // },
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