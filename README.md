# [POC] - Sitecore JSS with Next.js
This is a proof of concept using [Next.js](https://nextjs.org/) as the frontend rendering service for [Sitecore JSS](https://jss.sitecore.com/).

## Getting Started

1. ```npm install```
2. Add a ```.env.local``` file to the root with the ```SITECORE_ENDPOINT```  and ```SITECORE_API_KEY``` environment variables.
3. ```npm dev```
4. Open [http://localhost:3000](http://localhost:3000) or [http://localhost:3000/styleguide](http://localhost:3000/styleguide) with your browser to see the result.

## Next.js Rendering

This POC has been setup to perform Static Generation with a 1s revalidation and fallback. This means that at build time, Next.js will generate static pages for a predefined list of pages. When a user requests a page that was statically generated, Next.js will serve the statically generated page. Since a 1s revalidation option was defined, after serving the statically generated page to the user, Next.js will regenerate the requested page with the latest data and add it to the cache of statically generated pages. With the fallback option enabled, if a page requested does not have a statically generated page, Next.js will dynamically generate the page and add it to the cache of statically generated pages.

More info about these modes can be found in the [Next.js docs](https://nextjs.org/docs/basic-features/data-fetching).

## Sitecore HTTP Renderer for Experience Editor

Sitecore can be configured to fetch the HTML markup that is rendered in Experience Editor from a remote server. More info about this option can be found [here](https://jss.sitecore.com/docs/fundamentals/services/view-engine#http-rendering-engine).

This POC has been setup to accept ```POST``` requests from Sitecore Experience Editor at the ```/api/http-renderer``` route. The route handler will use the JSON data included in the ```POST``` request body to generate the HTML markup and will respond with a JSON object containing the rendered HTML markup.