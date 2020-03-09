import dva from 'dva';
import './index.scss';
import { createBrowserHistory } from 'history'

// require('viewport-units-buggyfill').init()

const app = dva({
  history: createBrowserHistory(),
  onError: e => {
    console.error(e.message)
  },
})

// 2. Plugins
// app.use({});

// 3. Model
require('./models/index').default.map(item => app.model(item.default))

// 4. Router
app.router(require('./routes').default);

// 5. Start
app.start('#root');

export default app['_store']
