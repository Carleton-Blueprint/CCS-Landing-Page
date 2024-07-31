# Carleton CUSEC Society Website

Welcome to the Carleton CUSEC Society (CCS) website, brought to you by Carleton Blueprint ❤️!

# Technologies

- **Frontend:** [Gatsby](https://www.gatsbyjs.com/docs/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Deployment:** [Netlify](https://docs.netlify.com/)
- **CMS:** [Contentful](https://www.contentful.com/help/gatsbyjs-and-contentful-in-five-minutes/)

Note: Gatsby framework works with GraphQL to query information from the database, or in our case, the CMS.

# Installation

## Steps:

1. Clone the repository.
2. Run `npm i`, ensure that node version is `v22.4.1`, and npm version is `10.8.1`. See docs for [n](https://www.npmjs.com/package/n/v/5.0.1) or [nvm](https://github.com/nvm-sh/nvm).
3. Ask current repository manager for details on the env file. Name, env variables for prod, `.env.production` and env variables for development `.env.development`
4. Run `npm run develop` or `npm run prod`. Read below in Production & Development Views for difference.
5. For specifics on production and development views, see below.

## File Structure
- All source code is in `src` directory
```
src/
├── components/          # Reusable React components
│   ├── about-us-components
│   ├── faq-components
│   └── base
├── pages/               # Components representing pages/routes
│   ├── index.js
│   ├── about-us.js
│   └── contact-us.js
├── hooks/               # Custom React hooks
│   └── useFetch.ts
├── api/                 # API calls and related logic
│   └── submitForm.js
├── images/              # Static images
│   └── logo.png
├── styles/              # Global styles and themes
│   └── main.css
├── templates/           # Template files for dynamic pages
│   └── eventTemplate.js
├── gatsby-config.js          
└── gatsby-node.js
```
<b>Notes</b>:
- Gatsby has no typical "entry" point file (ex. index.js in `create-react-app`)
- Routing is done automatically, urls are associated with the name of files in pages folder
- Images are where we serve static images (ex. logos, background, etc.)

# Production & Development Views
With Contentful, there are two views, one to see published content, and draft content. After completing the instalation, you should have two .env variables, development and production. Running the repository on development will allow you to see draft content. This gives you a chance to see how exactly new content will look on the website, and give you a chance to change content accordingly. To run a development view do `npm run develop`. In this view, you have access to hot refresh and can easily debug and change the code. `npm run prod` runs a production build of the repo locally.

# Hosting/Netlify
- Hosting is done with Netlify to allow for a seamless and easy to use CI/CD. Ask repository manager for access to the Netlify account. 
- PRs & Netlify: Netlify runs a prod build on each open PR. Allows you to see if the PR will break production build. Simply open the PR on GitHub, and it will show the status of the Netlify checks
- Env variables can be set on the Site Configuration
- [Read docs for more](https://docs.netlify.com/)

# Gatsby, Contentful, and GraphQL
- Gatsby, contentful, and GraphQL all work together to fetch data
  - Go to `localhost:8000/___graphql` for a sandbox enviornment to test fetching data from Contenful
- define a query as such on a page or component: 
```
export const query = graphql`
  query {
    allContentfulGetInvolvedCard {
      nodes {
        title
        linkTitle
        link
        description {
          description
        }
        icon {
          file {
            url
          }
          description
        }
      }
    }
  }
```
- pass in a descrutured `{ data }` to the prop calling the query:
```
const GetInovlved = ({ data }) => {
  return (
    {children}
  )
}
```
- data prop contain the result of the GraphQL query
```
  <div className="flex flex-wrap justify-center w-full">
    {data.allContentfulGetInvolvedCard.nodes.map((reason) => (
      <div className="flex justify-center m-4">
        <GetInvolvedCard data={reason} />
      </div>
    ))}
  </div>
```

# Contributors

- [Hasith De Alwis](https://hasithportfolio.netlify.app): Project Manager
- [Neyha Billing](https://www.linkedin.com/in/neyhabilling/): Developer
