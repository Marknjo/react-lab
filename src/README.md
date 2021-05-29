# :rocket: A Practical assignement

The assignement was about designing a simple project with React with the aim of mastering core React concepts. The following were the expected features for the implementation.

- Show a form component - style it too
  - Have username input
  - User age
  - Submit button labeled add user
- Add a lists section where username and age will be displayed
- Handle user submission errors
  - If user submits either one or all of the inputs empty
  - If user submit invalid age - age is not a number or a negative age
  - If user submit the same username more than once
- The error message to be displayed by showing a modal
- Implement a component with the same characteritic as form background, users lists, and error message box.
- Handle a default message on screen load

## :balloon: Skills Gained in the Session

- Reviewed the skills learnt in the previous sections.
- Handling two way binding
- Dubugging errors in React apps
- Event management
  - Handling stopPropagation() and stopImmediatePropagation()
  - Lifting props
- ES6 spread and Destructuring in React
- Understand how data is passed between parents and sibling and vice versa
- Styling components using React scripts CSS modules - component drivent development. Really interesting.
- Matered the art of taking breaks or leaving complex section for later with @todo.
- Mastered project planning. The 4 phase cycle - use case -> features -> flow charts -> Architecture.
- The whole process of planning made the completion of the project easier

## :bookmark_tabs: Footnotes

- I noticed that the .forEach loop did not work as I was expecting to behave as in JavaScript. I opted using the for of loop.
- When listening to the keydown event, the event ended throwing bazzilion of keypresses on addition press. I had to stop the behaviour by applying the stopImmediatePropagation().
- Also on the above, I used normal addEventListener, I tried window.onKeyDown = handler but it did not work.
- One thing that I have noticed, it can become really muddy with all the passing of props between components. With a huge app, the parent to sibling or sibling to parent business might not be feasible - I hope when I learn Redux or Context, I will be able to solve this back and forth dance.
