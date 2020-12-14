## Technical decision

### How did you implement styling? What are the pros and cons? Why did you chose this approach?

Global styles

Props:
- Easy use when theming provided by UI framework like ant-design
- Don't message with React `style` props, so clearer.
Cons:
- Hard to write custom components with styles.

I know about scoped css (using hash in className), but this is a small project and we don't need it.

### How did you share state between components? What are the pros and cons? Why did you chose this approach?

Redux state

Props:
- Easly to scale of and extend
- No need to render to use data from State
Cons:
- Require setup
- Require HOC (higher-order-component) for "Container" Component
### Did you use React hooks? Why or why not?

Yes, I did.

Because, I want my code shorter and create React Components as functions.

### What would you improve?

I would create a stage with Redux in LocalStorage .

### How did you prevent wasted renders?

My reference is: https://www.freecodecamp.org/news/how-to-identify-and-resolve-wasted-renders-in-react-cc4b1e910d10/

But I haven't found the wasted renders in current implementation yet.
### How did you handle side-effects (e.g. data fetching)? What are the pros and cons? Why did you chose this approach?

## Available Scripts

In the project directory, you can run:


### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn deploy`

This project is used firebase hosting to deploy 

```
# ...some firebase setup https://firebase.google.com/docs/hosting/quickstart
yarn build
yarn deploy
```

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
