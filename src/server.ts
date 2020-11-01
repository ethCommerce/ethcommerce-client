import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

const app = express();

app.use(express.static('static'));
app.use(compression({ threshold: 0 }));
app.use(sapper.middleware());

app.listen(PORT);

export default app;
// import sirv from 'sirv';
// import polka from 'polka';
// import * as sapper from '@sapper/server';
//
// const dev = ENV === 'development';
//
// polka() // You can also use Express
//   .use(
//     compression({ threshold: 0 }),
//     sirv('static', { dev }),
//     sapper.middleware()
//   )
//   .listen(PORT, (err) => {
//     if (err) console.log('error', err);
//   });
