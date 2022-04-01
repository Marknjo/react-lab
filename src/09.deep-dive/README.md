# :rocket: Deep diving in React core concepts

In this section, the tutor introduced 3 main concepts

1. React fragments
2. React Portals
3. React references or refs as comonly known

## :balloon: Skills Gained in the Session

- In react fragments - I understand 3 common approaches of solving fragments
  - Using the _[] array_ method - the problem with this method, you will have to manually create the key for every element in the returned array should be unique. Otherwise, you'll have a big fat error on the console.
  - The second approach, which is more likely to create _divs soups_, a condition which bloats semantic meanting of pages, is the natural way to solve the problem. However, it is not efficient.
  - The third approach, it is to use a _Wrapper_ custom UI component that returns _props.children_. However, this is inbuilt React behaviour, which it can be implemented by using _React.Fragment_ or import named compoent _Fragment_. Alternative, if you like shortcut, you can wrap the root component with _<> </>_.
- The next lesson was _Portals_. Here, I understood that the feature is beaked in the _ReactDOM_, just like the render method, here we use _React.DOM.createPortal()_. Generally, you have to create a root DOM in the index page where you want to attach this created portal.
  - The portal solves the problem where you are calling a compoent in a component which you do not want its html elements to be rendered there. So, by using the Portal, you can still call that component where it is need, but render the DOM element where necesarry. This is good for structuring content in a semantic meningful manner.
  - One thing to note, the createPortal accepts two arguments, first the Compenet to render to the portal, second the dom position to render into.
  - So, I noticed, you'll have two things;
    - Create an empty div in the index.html where you'll render the portal
    - The createPortal assembler which will assemble your component. It will also be this assembler which you'll pass to the component requiring the portal.
- The last one is React _ref_. In this case, we used _useRef()_ React hooks.
  - This approach comes handly with form inputs. It solves the whole problem of having to update the state for every key stroke. With ref, you simply send the input element on submit. That way, you can grab the value as it is usually done in the vanilla JavaScript.
  - The beauty of this, I could attach the _.blur()_ and _.focus()_ on the element after submitting. Also, I did not have to listen to every keystroke.
