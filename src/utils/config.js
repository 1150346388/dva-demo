const config = {
  apiUrl: process.env.NODE_ENV === 'development' ? ' http://127.0.0.1:7001' : 'https://www.baidu.com',
  apiPrefix: ' http://127.0.0.1:7001',
  proxy: true  //是否开启mock代理
};

export default config;
