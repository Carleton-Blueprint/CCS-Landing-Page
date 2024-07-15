# Carleton CUSEC Society Website

Welcome to the Carleton CUSEC Society (CCS) website, brought to you by Carleton Blueprint ❤️!

The goal of the CCS website was simple: to share essential information on CUSEC, foster interest in joining CCS as a member and attending their events, and motivate students to attend CUSEC.

# Technologies

- **Frontend:** Gatsby
- **Styling:** TailwindCSS
- **Deployment:** Netlify
- **CMS:** Contentful

Note: Gatsby framework works with GraphQL to query information from the database, or in our case, the CMS.

# Installation

## Steps:

1. Clone the repository.
2. Run `npm i`, ensure that node version is `v22.4.1`, and npm version is `10.8.1`. See docs for [n](https://www.npmjs.com/package/n/v/5.0.1) or [nvm](https://github.com/nvm-sh/nvm).
3. Ask current repository manager for details on the env file. Name, env variables for prod, `.env.production` and env variables for development `.env.development`
4. Run `npm run develop` or `npm run prod`. Read below in Production & Development Views for difference.
5. For specifics on production and development views, see below.

# Production & Development Views
With Contentful, there are two views, one to see published content, and draft content. After completing the instalation, you should have two .env variables, development and production. Running the repository on development will allow you to see draft content. This gives you a chance to see how exactly new content will look on the website, and give you a chance to change content accordingly. To run a development view do `npm run develop`. In this view, you have access to hot refresh and can easily debug and change the code. `npm run prod` runs a production build of the repo, it should be used to see what the impact on your latest commits will be on the site. 

# Hosting/Netlify
Hosting is done with Netlify to allow for a seamless and easy to use CI/CD. Ask repository manager for access to the Netlify account. One of the main benefits of Netlify is that is tells you if the most recent PR will break the production build. To see this, simply click on the PR on GitHub, and it will show the status of the Netlify checks. To preview the production build, click on preview production link. 

# Contributors

- [Hasith De Alwis](https://hasithportfolio.netlify.app): Project Manager
