## Technical decision

### How did you implement styling? What are the pros and cons? Why did you chose this approach?
Global styled

Pros:
- Easy use when theming provided by UI framework like ant-design
- 
Cons:
- Hard to why 


### How did you share state between components? What are the pros and cons? Why did you chose this approach?
### Did you use React hooks? Why or why not?
### What would you improve?
### How did you prevent wasted renders?
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
