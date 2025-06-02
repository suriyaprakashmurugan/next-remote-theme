const { Liquid } = require('liquidjs');
const fs = require('fs').promises;
const path = require('path');

// Initialize Liquid engine
const engine = new Liquid({
  root: path.resolve(__dirname, 'themes/elysianDwellings'), // template root directory
  extname: '.liquid'
});

async function render() {
  try {
    const data = require('./companies/sathiyatest/home.json');
    const html = await engine.renderFile('index', data);
    await fs.writeFile('output.html', html);
    console.log('✅ Rendered output.html');
  } catch (error) {
    console.error('❌ Error rendering:', error);
  }
}

render();
