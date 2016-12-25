webpackJsonp([86,206],{

/***/ 1750:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", {}, ["h2", "Install dva-cli"], ["p", "Install dva-cli with npm, and make sure the version is larger then ", ["code", "0.7.0"], "."], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> dva-cli -g\n$ dva -v\n0.7.0"
	  }, ["code", "$ npm install dva-cli -g\n$ dva -v\n0.7.0"]], ["h2", "Create New App"], ["p", "After installed dva-cli, you can have access to the ", ["code", "dva"], " command in terminal. Now, create a new application with ", ["code", "dva new"], "."], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ dva new dva-quickstart"
	  }, ["code", "$ dva new dva-quickstart"]], ["p", "This creates ", ["code", "dva-quickstart"], " directory, that contains the project directories and files, and provides development server, build script, mock service, proxy server and so on."], ["p", "Then ", ["code", "cd"], " the ", ["code", "dva-quickstart"], " directory, and start the development server."], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">cd</span> dva-quickstart\n$ <span class=\"token function\">npm</span> start"
	  }, ["code", "$ cd dva-quickstart\n$ npm start"]], ["p", "After a few seconds, you will see the following output:"], ["pre", {
	    "lang": "bash",
	    "highlighted": "Compiled successfully<span class=\"token operator\">!</span>\n\nThe app is running at:\n\n  http://localhost:8000/\n\nNote that the development build is not optimized.\nTo create a production build, use <span class=\"token function\">npm</span> run build."
	  }, ["code", "Compiled successfully!\n\nThe app is running at:\n\n  http://localhost:8000/\n\nNote that the development build is not optimized.\nTo create a production build, use npm run build."]], ["p", "Open ", ["a", {
	    "title": null,
	    "href": "http://localhost:8989"
	  }, "http://localhost:8989"], " in your browser, you will see dva welcome page."], ["h2", "Integrate antd"], ["p", "Install ", ["code", "antd"], " and ", ["code", "babel-plugin-import"], " with npm. ", ["code", "babel-plugin-import"], " is used to automatically import scripts and stylesheets from antd in demand. See ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/babel-plugin-import"
	  }, "repo"], " 。"], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> antd babel-plugin-import --save"
	  }, ["code", "$ npm install antd babel-plugin-import --save"]], ["p", "Edit ", ["code", ".roadhogrc"], " to integrate ", ["code", "babel-plugin-import"], "."], ["pre", {
	    "lang": "diff",
	    "highlighted": "  \"extraBabelPlugins\": [\n<span class=\"token deleted\">-    \"transform-runtime\"</span>\n<span class=\"token inserted\">+    \"transform-runtime\",</span>\n<span class=\"token inserted\">+    [\"import\", { \"libraryName\": \"antd\", \"style\": \"css\" }]</span>\n  ],"
	  }, ["code", "  \"extraBabelPlugins\": [\n-    \"transform-runtime\"\n+    \"transform-runtime\",\n+    [\"import\", { \"libraryName\": \"antd\", \"style\": \"css\" }]\n  ],"]], ["blockquote", ["p", "Notice: dva-cli's build and server is bases on roadhog, view ", ["a", {
	    "title": null,
	    "href": "https://github.com/sorrycc/roadhog/blob/master/README_en-us.md#configuration"
	  }, "roadhog#Configuration"], " for more ", ["code", ".roadhogrc"], " Configuration."]], ["h2", "Define Router"], ["p", "We need to write an application displaying the list of products. The first step is to create a route."], ["p", "Create a route component ", ["code", "routes/Products.js"], ":"], ["pre", {
	    "lang": "javascript",
	    "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Products <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>h2<span class=\"token operator\">></span>List <span class=\"token keyword\">of</span> Products<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h2<span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> Products<span class=\"token punctuation\">;</span>"
	  }, ["code", "import React from 'react';\n\nconst Products = (props) => (\n  <h2>List of Products</h2>\n);\n\nexport default Products;"]], ["p", "Add routing information to router, edit ", ["code", "router.js"], ":"], ["pre", {
	    "lang": "diff",
	    "highlighted": "<span class=\"token inserted\">+ import Products from './routes/Products';</span>\n...\n<span class=\"token inserted\">+ &lt;Route path=\"/products\" component={Products} /></span>"
	  }, ["code", "+ import Products from './routes/Products';\n...\n+ <Route path=\"/products\" component={Products} />"]], ["p", "Then open ", ["a", {
	    "title": null,
	    "href": "http://localhost:8989/#/products"
	  }, "http://localhost:8989/#/products"], " in your browser, you should be able to see the ", ["code", "<h2>"], " tag defined before."], ["h2", "Write UI Components"], ["p", "As your application grows and you notice you are sharing UI elements between multiple pages (or using them multiple times on the same page), in dva it's called reusable components."], ["p", "Let's create a ", ["code", "ProductList"], " component that we can use in multiple places to show a list of products."], ["p", "Create ", ["code", "components/ProductList.js"], " and typing:"], ["pre", {
	    "lang": "javascript",
	    "highlighted": "<span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> PropTypes <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Popconfirm<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> ProductList <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> onDelete<span class=\"token punctuation\">,</span> products <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n    dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Actions'</span><span class=\"token punctuation\">,</span>\n    render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token operator\">&lt;</span>Popconfirm title<span class=\"token operator\">=</span><span class=\"token string\">\"Delete?\"</span> onConfirm<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">onDelete</span><span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">.</span>id<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Delete<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token operator\">&lt;</span>Table\n      dataSource<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>products<span class=\"token punctuation\">}</span>\n      columns<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nProductList<span class=\"token punctuation\">.</span>proptypes <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  onDelete<span class=\"token punctuation\">:</span> PropTypes<span class=\"token punctuation\">.</span>func<span class=\"token punctuation\">.</span>isRequired<span class=\"token punctuation\">,</span>\n  products<span class=\"token punctuation\">:</span> PropTypes<span class=\"token punctuation\">.</span>array<span class=\"token punctuation\">.</span>isRequired<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> ProductList<span class=\"token punctuation\">;</span>"
	  }, ["code", "import React, { PropTypes } from 'react';\nimport { Table, Popconfirm, Button } from 'antd';\n\nconst ProductList = ({ onDelete, products }) => {\n  const columns = [{\n    title: 'Name',\n    dataIndex: 'name',\n  }, {\n    title: 'Actions',\n    render: (text, record) => {\n      return (\n        <Popconfirm title=\"Delete?\" onConfirm={() => onDelete(record.id)}>\n          <Button>Delete</Button>\n        </Popconfirm>\n      );\n    },\n  }];\n  return (\n    <Table\n      dataSource={products}\n      columns={columns}\n    />\n  );\n};\n\nProductList.proptypes = {\n  onDelete: PropTypes.func.isRequired,\n  products: PropTypes.array.isRequired,\n};\n\nexport default ProductList;"]], ["h2", "Define Model"], ["p", "After complete the UI, we will begin processing the data and logic."], ["p", "dva manages domain model with ", ["code", "model"], ", with reducers for synchronous state update, effects for async logic, and subscriptions for data source subscribe."], ["p", "Let's create a model ", ["code", "models/products.js"], " and typing:"], ["pre", {
	    "lang": "javascript",
	    "highlighted": "<span class=\"token keyword\">import</span> dva <span class=\"token keyword\">from</span> <span class=\"token string\">'dva'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  namespace<span class=\"token punctuation\">:</span> <span class=\"token string\">'products'</span><span class=\"token punctuation\">,</span>\n  state<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  reducers<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token string\">'delete'</span><span class=\"token punctuation\">(</span>state<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> payload<span class=\"token punctuation\">:</span> id <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> state<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>id <span class=\"token operator\">!==</span> id<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
	  }, ["code", "import dva from 'dva';\n\nexport default {\n  namespace: 'products',\n  state: [],\n  reducers: {\n    'delete'(state, { payload: id }) {\n      return state.filter(item => item.id !== id);\n    },\n  },\n};"]], ["p", "In this model:"], ["ul", ["li", ["p", ["code", "namespace"], " represent the key on global state"]], ["li", ["p", ["code", "state"], " is the initial value, here is an empty array"]], ["li", ["p", ["code", "reducers"], " is equal to reducer in redux, accepting action, and update state synchronously"]]], ["p", "Then don't forget to require it in ", ["code", "index.js"], ":"], ["pre", {
	    "lang": "diff",
	    "highlighted": "// 3. Model\n<span class=\"token inserted\">+ app.model(require('./models/products'));</span>"
	  }, ["code", "// 3. Model\n+ app.model(require('./models/products'));"]], ["h2", "Connect"], ["p", "So far, we have completed a separate model and component. Then how to connect these together?"], ["p", "dva provides a ", ["code", "connect"], " method. If you are familiar with redux, this ", ["code", "connect"], " is from react-router."], ["p", "Edit ", ["code", "routes/Products.js"], " and replace with following:"], ["pre", {
	    "lang": "javascript",
	    "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> connect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'dva'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> ProductList <span class=\"token keyword\">from</span> <span class=\"token string\">'../components/ProductList'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Products <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> dispatch<span class=\"token punctuation\">,</span> products <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">function</span> <span class=\"token function\">handleDelete</span><span class=\"token punctuation\">(</span>id<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">dispatch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'products/delete'</span><span class=\"token punctuation\">,</span>\n      payload<span class=\"token punctuation\">:</span> id<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>h2<span class=\"token operator\">></span>List <span class=\"token keyword\">of</span> Products<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h2<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>ProductList onDelete<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>handleDelete<span class=\"token punctuation\">}</span> products<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>products<span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// export default Products;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token function\">connect</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> products <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  products<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>Products<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }, ["code", "import React from 'react';\nimport { connect } from 'dva';\nimport ProductList from '../components/ProductList';\n\nconst Products = ({ dispatch, products }) => {\n  function handleDelete(id) {\n    dispatch({\n      type: 'products/delete',\n      payload: id,\n    });\n  }\n  return (\n    <div>\n      <h2>List of Products</h2>\n      <ProductList onDelete={handleDelete} products={products} />\n    </div>\n  );\n};\n\n// export default Products;\nexport default connect(({ products }) => ({\n  products,\n}))(Products);"]], ["p", "Finally, we need some initial data to make the application run together. Edit ", ["code", "index.js"], ":"], ["pre", {
	    "lang": "diff",
	    "highlighted": "<span class=\"token deleted\">- const app = dva();</span>\n<span class=\"token inserted\">+ const app = dva({</span>\n<span class=\"token inserted\">+   initialState: {</span>\n<span class=\"token inserted\">+     products: [</span>\n<span class=\"token inserted\">+       { name: 'dva', id: 1 },</span>\n<span class=\"token inserted\">+       { name: 'antd', id: 2 },</span>\n<span class=\"token inserted\">+     ],</span>\n<span class=\"token inserted\">+   },</span>\n<span class=\"token inserted\">+ });</span>"
	  }, ["code", "- const app = dva();\n+ const app = dva({\n+   initialState: {\n+     products: [\n+       { name: 'dva', id: 1 },\n+       { name: 'antd', id: 2 },\n+     ],\n+   },\n+ });"]], ["p", "Refresh your browser, you should see the following result:"], ["p", {
	    "style": "text-align: center;"
	  }, ["img", {
	    "src": "https://zos.alipayobjects.com/rmsportal/GQJeDDeUCSTRMMg.gif"
	  }]], ["h2", "Build"], ["p", "Now that we've written our application and verified that it works in development, it's time to get it ready to deploy to our users. To do so, run the following command:"], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> run build"
	  }, ["code", "$ npm run build"]], ["p", "After a few seconds, the output should be as follows:"], ["pre", {
	    "lang": "bash",
	    "highlighted": "<span class=\"token operator\">></span> @ build /private/tmp/myapp\n<span class=\"token operator\">></span> roadhog build\n\nCreating an optimized production build<span class=\"token punctuation\">..</span>.\nCompiled successfully.\n\nFile sizes after gzip:\n\n  82.98 KB  dist/index.js\n  270 B     dist/index.css"
	  }, ["code", "> @ build /private/tmp/myapp\n> roadhog build\n\nCreating an optimized production build...\nCompiled successfully.\n\nFile sizes after gzip:\n\n  82.98 KB  dist/index.js\n  270 B     dist/index.css"]], ["p", "The ", ["code", "build"], " command packages up all of the assets that make up your application —— JavaScript, templates, CSS, web fonts, images, and more. Then you can find these files in the ", ["code", "dist /"], " directory."], ["h2", "What's Next"], ["p", "We have completed a simple application, but you may still have lots of questions, such as:"], ["ul", ["li", ["p", "How to dealing with async logic"]], ["li", ["p", "How to load initial data elegantly"]], ["li", ["p", "How to handle onError globally and locally"]], ["li", ["p", "How to load Routes and Models on demand"]], ["li", ["p", "How to implement HMR"]], ["li", ["p", "How to mock data"]], ["li", ["p", "and so on..."]]], ["p", "You can:"], ["ul", ["li", ["p", "Visit ", ["a", {
	    "title": null,
	    "href": "https://github.com/dvajs/dva"
	  }, "dva official website"], "."]], ["li", ["p", "View all the ", ["a", {
	    "title": null,
	    "href": "https://github.com/dvajs/dva#api"
	  }, "API"], "."]], ["li", ["p", "View ", ["a", {
	    "title": null,
	    "href": "https://github.com/dvajs/dva-docs/blob/master/v1/zh-cn/tutorial/01-%E6%A6%82%E8%A6%81.md"
	  }, "tutorial"], ", complete a medium application step by step."]], ["li", ["p", "View examples, such as ", ["a", {
	    "title": null,
	    "href": "https://github.com/dvajs/dva-hackernews"
	  }, "dva version of hackernews"], "."]]]],
	  "meta": {
	    "order": 3,
	    "title": "Real world Example with dva",
	    "filename": "docs/react/practical-projects.en-US.md"
	  },
	  "description": ["section", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/dvajs/dva"
	  }, "dva"], " is a React and redux based, lightweight and elm-style framework, which supports side effects, hot module replacement, dynamic on demand, react-native, SSR. And it has been widely used in production environment."], ["p", "This article will guide you to create a simple application from zero using dva and antd."], ["p", "Include the following:"]],
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Install-dva-cli"
	  }, "Install dva-cli"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Create-New-App"
	  }, "Create New App"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Integrate-antd"
	  }, "Integrate antd"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Define-Router"
	  }, "Define Router"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Write-UI-Components"
	  }, "Write UI Components"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Define-Model"
	  }, "Define Model"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Connect"
	  }, "Connect"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Build"
	  }, "Build"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#What's-Next"
	  }, "What's Next"]]]
	};

/***/ }

});