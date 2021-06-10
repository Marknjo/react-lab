# :rocket: All about React Router

This section was both an intro to advanced concepts of working with React Router. Key ideas covered:

1. How to Route using React Router
2. How to nest routes
3. How to work with url parameters
4. How to redirect url
5. Technics to work with url queries parameters.

## :balloon: Skills Gained in the Session

The section as included advanced fetching and saving data to the database using firebase.

In that area, the tutor created a custon api containing custom methods like fetching a single quote, saving a quote, fetching a single comment e.t.c.

Besides, the tutor used a nifty useHttp hook that could accept one of those api methods to do some activity. The hook also has advanced technics to capture information like detecting an error, pending, and when the request is successful. In addition, the hook will expose the send request functionality plus data and other additional information a component will need to use.

When it comes to actual working with the database, though it was rushed through, the tutor introduced technics to handle side effects, especially when fetching comments and quotes.

Aside from working with React Router, the section was extended to a small topic, where there was an introduction of how to optimize performance using lazy loading. That means, by the end of the couse, almost 90% of the React's documentation was covered.

With that the following are the components and hooks learnt from the section.

1. Components and hooks from React Router
   1. BrowserRouter -> initializes the route
   2. Switch -> conditionally evaluate routes based on their order. And if a route is marked with exact, only render that and ignore the other.
   3. Route -> maps the route by wrapping a page component with an identifier path and exact if given as a parameter. Besides the usual use of route to render pages, you can use it to hide some JSX of component if the route does not match.
   4. Prompt -> the component which accepts a function and and a boolen, is useful when you want to prompt a user of something, especially when entering forms data.
   5. useParams -> the hook is used to extract the params given to the path (url:params)
   6. useHistory -> this hook has several uses, the first being to push urls.
   7. useLocation -> this hooks stores the information about the icurrent url. Mostly, you can use it to extract the pathname of the url and the search queries. Useful when you combine it with the URLSearchParams().
   8. useRoutesMatch -> this hooks stores the url parameters which can be extracted and help in construction of urls. i.e the location.search or location.url
   9. Link -> to abstract the default behaviour of a `<a>` tag, that is to instruct the server to return some files, the link tag which takes the **to** parameter, is super useful in link construction
   10. NavLink -> works like a link, however, it's useful when dealing with the Navigation. This is because it can accept the activeClassName prop to style the currently selected link.
   11. new URLSearchParams(location.search) -> this is a native JavaScript object, however, when used together with the useLocation, you can be able to extract the url query as an object.
2. Lazy Loading core components and methods
   1. React.lazy -> the method/function, accepts a function, which you pass a import() function, which the function is also passed the url of the componet which will be lazy loaded.
   2. Suspense -> This is a react component, which it wraps the routes you want to lazy load. It is passed a fallback prop, which it expects to be the component to be rendered incase the lazy loading fail. Mostly, it is a spinner.

## :bookmark_tabs: Footnotes

- This section is one of the crucial sections. This is because it involves routing. Which it for react serving multipages. Generally, the section moves someone to the intermeiate React developer. There is still a lot to learn though. i.e. server side rendering.
- But something to note here, the tutor was in a hurry, and the whole idea that some code is presented to you, it is not that pleasing for beginner. For this section which contains some api like code, I think it will have been great to explain why he prefered fetching data directly from the database, even a single fetch, rather than working with a redux store.
- It will also be interesting to watch him reason through on how he built the whole program. I kinda contrast this course with Modern JavaScript, and I kinda wished this course was taught by that tutor. He's very meticulous. Though, Max has his own unique way of passing the knowledge which it is the most important here.
- About the project, I suppose it was simple, maybe trivial. However, I have grasped all the ideas as required.
- This is the end of learning about react introductions. Onwards, it is all about React advanced.
