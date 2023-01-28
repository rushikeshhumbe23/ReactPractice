What is React?
- React is a JavaScript library,React makes it painless to create interactive UIs. Design simple views for each state in our application, and React will efficiently update and render just the right components when data changes.

Who made React?
- Jordan Walke

What is Babel?
- Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

How does Babel convert html code in React into valid code?
- Babel is a very famous transpiler that basically allows us to use future JavaScript in today’s browsers. 
- In simple words, it can convert the latest version of JavaScript code into the one that the browser understands. 
- The latest standard version which JavaScript follows is ES2020 which is not fully supported by all the browsers and hence we make use of a tool such as ‘babel’ so that we can convert it into the code that today’s browser understands.

What is ReactDOM used for? Write an example?
- ReactDOM is a package that provides DOM specific methods that can be enable in an efficient way of managing DOM elements of the web page.
- Bassically it is used to render a React element

What are the packages that you need to import for react to work with?
- react , react-dom etc

How do you add react to a web application?
- create element  using react.createElement 
- then specify root element  by using ReactDOM.createRoot('id of the div which want as parent to append react app')
- and then use render to display on webpage

What is React.createElement?
- it will create an element and return that element of given type.

What are the three properties that createElement accept?
- React.create(tegName , {props and atributes} , childrens)
- it takes tagName as a first parameter
- next it take properties and atributes for the element eg. for image  src, alt etc and id, className  as atributes and props
- if it has childrens further it will take it as third argument

What is the meaning of render and root?
-  To display specific code in specific element render is used
-  The root is where the application layout structure is defined. It is typically the first UI element a user interacts with. The root can be changed multiple times during the lifespan of the application.