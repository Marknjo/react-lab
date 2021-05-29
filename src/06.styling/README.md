# :rocket: Learning 3 ways to how to style components

This is the review of the skills gained in the sessions. The goal was to understand different approaches to style components. The normal method of including a CSS on the top of a component, sometimes can face selector collision challenge. That is, where one CSS file or component also shares the selector naming convenctions. This may lead to overide of those styles in unpredictable manner. This is usually because CSS cascades. To resolve this, you can either decide the following:

1. You use unique naming convections - usually as a team this may be difficult.
2. You use styled componets paradigm.
3. Or you use React built-in react script css modules feature.

Below is what I learned in the sections and the challenges I encountered per approach.

## :balloon: Skills Gained in the Session

- styled components approach, installing the 3rd party script. (Did not like it because CSS is mixed with the JavaScript)
- React script way of renaming files with .mudule and importing with a default naming i.e. styles. Afterwards implementing using the bracket notation or the dot notation. More like real objects. Also, the generated styles are a bit readable.
  - Can't wait to learn how to implement light and dark themes using such an approach
- Then the normal CSS approach - here, as the developer, I control the CSS selectors I use in a way there won't be collision with other components.

## :balloon: Footnotes

- Generally, the last two approaches are my favourites. However, if by any chance, I don't trust my css styling approach, I suppose using the react scripts approach is my best way to style components.
- Styled components has a unique approach, expecilly with passing props, but I don't like that I will have to bring in my CSS into my components. I like the whole idea of separations of concerns.
- One last thing, using media query is no different in all the above approaches.
