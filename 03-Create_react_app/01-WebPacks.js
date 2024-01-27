/*
    WebPack : Webpack is nothing but the bundle of multiple modules. If we
        take an example, suppose we have a main file index.js which contains
        the App which is the main component of our web page, our App component
        is contains another component called Form which is available in other
        file form.js and our App component also have a component named Button
        which is also available in other file called button.js, so we can say
        that our App component is dependent on the Button and Form Component
        and this is called the dependencies of the component of files. And Bundle
        or comnination of all files and dependencies is called the Webpack and
        webpack files is called bundle.js.
*/

/*
    Suppose webpack name is webpack.configure.js and we use that wepack in our
    program then we need to specify the some of few things : 
    
    - Entry Point : Because if we use the webpack then it means we use multiple
        files, so we need to specify what is the main file among all of them
        because some files are dependencies which just contains a component or
        a single feature of the Project so can't recognize or directly render
        that file because that file is a single component so we need to specify
        the entry point in our project 
    
    - Transform Files or Modules which need To Translate to became compatible to 
        the browser, Like JS ES6 to ES5 because all browser not support all ES6,
        another one is converts SASS to CSS, All this works done by the loaders

    All this done in React using react-create-app webpack which we need to install
    to work locally with React withOut using the CDNs
*/
