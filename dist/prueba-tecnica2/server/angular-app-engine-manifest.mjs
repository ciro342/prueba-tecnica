
export default {
  basePath: 'https://ciro342.github.io/prueba-tecnica',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
