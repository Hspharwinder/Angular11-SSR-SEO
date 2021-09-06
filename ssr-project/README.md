# SsrProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4.


Youtube -> https://www.youtube.com/watch?v=jurNBBaS7dI&list=PLgOUQYMnO_SRlXsM97FUoD7kPLig6EXvb&index=25

https://www.truecodex.com/
complete angular

# how to set angular meta tags
https://www.truecodex.com/course/angular-6/how-to-set-dynamic-page-title-and-meta-tags-in-angular-6-angular-7-for-seo

Meta tag service - that can be used to get and add meta tags of current active route. Available methods for meta tags. Tags are charset, content, httpEquiv, id, itemprop, name, property, scheme, url
addTag()
addTags()
getTag()
getTags()
updateTag()
removeTag()
removeTagElement()
Using Meta service import @angular/platform-browser into your component for set and get meta tags.

import { Title, Meta } from '@angular/platform-browser';

constructor(private titleService: Title,  private meta: Meta) { }

ngOnInit() {

  // set title
this.titleService.setTitle(this.title);

// add single meta tag
this.meta.addTag({name: 'keywords', content: 'Angular Project, Create Angular Project'});

// add multiple meta tag
	this.meta.addTags([
	{name: 'keywords', content: 'Angular Project, Create Angular Project'},
	{name: 'description', content: 'Angular project training on rsgitech.com'},
    {name: 'author', content: 'rsgitech'},
    {name: 'robots', content: 'index, follow'}
  ]);

// You can set force creation for meta tag enable set true.
this.meta.addTag({name: 'author', content: 'rsgitech'}, true);


// get tag
const author = this.meta.getTag('name=author');
    console.log(author.content);
     console.log(author[0].name);

// update tag
  this.meta.updateTag({name: 'description', content: 'Angular project development on rsgitech.com'}, 'name="description"');

// remove tag
this.meta.removeTag('name=author');

// removeTagElement
  const authorTag = this.meta.getTag('name=author');
  this.meta.removeTagElement(authorTag);
}



// server side rendering

https://www.truecodex.com/course/angular-6/angular-server-side-rendering

Step 1: Install the Angular CLI
        npm install -g @angular/cli

Step 2: Create Application
        ng new my-project

Step 3: Add Angular Universal in Your Application
       ng add @nguniversal/express-engine --clientProject my-project

       The command create following files.
       src/
        main.server.ts             * bootstrapper for server app
        app/ ...                   application code
          app.server.module.ts     * server-side application module
      server.ts                    * express web server
      tsconfig.server.json         * TypeScript server configuration
      webpack.server.config.js     * webpack server configuration

 Step 4: Run This Application
        npm run build:ssr
        npm run serve:ssr

        This application working as nodejs project. You can also run this project using following command.
        node dist/server

  Check This Application SEO Friendly
  curl http://localhost:4000

 NOTE: For seeing changes ->  Inspect Browser, Check Head Tag, Styles Tags


   Change Port in SSR Angular Application ( server.ts )
  ---------------------------------------------------------------


/**
 * *** NOTE ON IMPORTING FROM ANGULAR AND NGUNIVERSAL IN THIS FILE ***
 *
 * If your application uses third-party dependencies, you'll need to
 * either use Webpack or the Angular CLI's `bundleDependencies` feature
 * in order to adequately package them for use on the server without a
 * node_modules directory.
 *
 * However, due to the nature of the CLI's `bundleDependencies`, importing
 * Angular in this file will create a different instance of Angular than
 * the version in the compiled application code. This leads to unavoidable
 * conflicts. Therefore, please do not explicitly import from @angular or
 * @nguniversal in this file. You can export any needed resources
 * from your application's main.server.ts file, as seen below with the
 * import for `ngExpressEngine`.
 */

import 'zone.js/dist/zone-node';

import * as express from 'express';
import {join} from 'path';

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP, ngExpressEngine, provideModuleMap} = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Serve static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
