## What is React JS and what problems does it try to solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JavaScript library for creating user interfaces with modular, reusable components. React is concerned with creating highly-interactive web applications, requiring frequent updates to the UI, which can take a toll on performance using many simple DOM methods.

React solves this problem through the virtual DOM (VDOM), a lightweight representation of the UI handled by React used to "diff" previous and updated trees of React elements based on changes to the application's state, in a process called reconciliation, to determine the most efficient way to update the browser DOM in order to display changes to the user.

## What does it mean to _think_ in React?

To _think_ in React means to build an app in a way that makes full use of React's features and capabilities, following certain patterns and best practices to produce clean, well-organized code, separated into composable, reusable components. According to the official React docs, this involves several steps:

1. Break the UI into a component hierarchy
	* Think about the structure of the app and what kinds of functions it will need. Group similar functions into named components, which should ideally only do one thing, creating separate component files as necessary.

2. Build a static version in React
	* To begin building the app, first make a static version with no interactivity, rendering the data model into parent and child components. Using state isn't always necessary in this early stage, since it's reserved for data that changes over time.

3. Identify the minimal (but complete) representation of UI state
	* Think about the data that will change over time and include it in the app's state. If it can be computed from other state values or passed in from a parent component as props, then it shouldn't be in the component's state.

4. Identify where your state should live
	* State in React belongs to individual components, which can directly mutate state. If several components are using the same state, lift the state to a component higher in the hierarchy.

5. Add inverse data flow
	* Data primarily flows one-way in React, from parent to child components via props, but sometimes it is necessary for a child component to mutate state in a parent component. To achieve this, pass down callback functions to child components via props, which can be referenced by child components in order to update state higher up in the component hierarchy.

## Describe state.
In a computer program, state describes data that persists for some time in memory, to keep track of preceding events and interactions with the program. In React, state is data that persists between component renderings, which controls how data is presented to the user. State is updated through the React API, so that changes to state will trigger a component to re-render with the updated state.
  
## Describe props.
In React, data is passed down from parent to child components through named attributes called props. Each child component has a props object passed down to it, which has references to the data passed from the parent component. Props are read-only, so that a child component should not modify the prop values that are passed to it.

## What are side effects, and how do you sync effects in a React component to state or prop changes?
In computer science, a side effect is said to occur when an operation has an observable effect other than its main effect, which is the value it returns.  In React, `useEffect` produces a side effect for a functional component, allowing the developer to write code that will execute after the initial render. In order to sync side effects with changes to state or props, a dependency array is passed to the `useEffect` hook, which lets the hook know to fire after the component re-renders in response to changes in the dependencies passed to the array.

### Resources
* [https://reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html)
* [https://reactjs.org/docs/faq-internals.html](https://reactjs.org/docs/faq-internals.html)
* [https://reactjs.org/docs/reconciliation.html](https://reactjs.org/docs/reconciliation.html)