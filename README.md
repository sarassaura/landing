<p></p>
<p align="center"><img alt="Lambda express Logo" height="100px" src="/logo.png"></p>
<h1 align="center">Lambda Express Landing</h1>
<p align="center"> The landing page for the Lambda Express team :)</p>
<p align="center"><img alt="Lambda express" src="/lambda.jpeg"></p>

## Design

Click [here](https://www.figma.com/file/Z1WRcmXUHNp00NRRJ1nBkz/Lambda-Express?node-id=30%3A5&t=xv1YlWnsmdj6Jeqq-1) to look at the design made on Figma.

## Technologies

- [Turbo](https://turbo.build/): A tool to create and manage monorepos.
    - It helps a lot when it comes to configuration. If you take a look at the `packages` folder, you will notice that `tsconfig` and `eslint-config-custom` are packages that are shared between apps.
- [Next.js](https://nextjs.org/): A react framework that supports SSR.
- [Husky](https://www.npmjs.com/package/husky): To improve commits.

## To start

- Minimum requirements:
    - node v18.13.0
    - yarn 1.22.19
- `yarn install`
- `yarn build`
