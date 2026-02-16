
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ciro342.github.io/prueba-tecnica/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/prueba-tecnica"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MPLFGCIY.js",
      "chunk-FZEHSO5U.js"
    ],
    "route": "/prueba-tecnica/home/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/prueba-tecnica/home/index"
  },
  {
    "renderMode": 2,
    "route": "/prueba-tecnica/home/login"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3254, hash: '9403c7839550141ce0a463fdc27becc93c0cdfb047b2156b7c1fe5769550b689', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1094, hash: '6b36fbec12210cd33e6d2ad0f5d1a12712c5c10a168b49b76a8358a25defbfb5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/login/index.html': {size: 7128, hash: 'fbcaf8b4ad213de2afa579e2eae804d78f64ebda851c680e3d5f98f4a76efaaa', text: () => import('./assets-chunks/home_login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 21672, hash: '133db0734e71688841f316ab047b7fb9b859332763322441912ef5c54c282b19', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/dashboard/index.html': {size: 18787, hash: '07e46ed7b960ec5737b2c241d6399e6316dacd2dbbb52f3767e4b20f4503ff83', text: () => import('./assets-chunks/home_dashboard_index_html.mjs').then(m => m.default)},
    'home/index/index.html': {size: 21672, hash: '133db0734e71688841f316ab047b7fb9b859332763322441912ef5c54c282b19', text: () => import('./assets-chunks/home_index_index_html.mjs').then(m => m.default)},
    'styles-MORUXWID.css': {size: 6872, hash: 'jjsgAACF3QE', text: () => import('./assets-chunks/styles-MORUXWID_css.mjs').then(m => m.default)}
  },
};
