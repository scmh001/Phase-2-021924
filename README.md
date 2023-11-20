# Information Flow

## SWBATs:

- [ ] Define the term “lifting state”
- [ ] Recognize the pattern for changing state in a parent component from a child component
- [ ] Explain the role that callback functions play in changing parent state
- [ ] Recognize destructured props and how to work with them

---

## Deliverables

#### 1. Use inverse data flow to implement Light-Dark mode

##### 1a. Move the dark mode button to `Header`

##### 1b. Create a callback function that updates `isDarkMode` and pass the callback function as a prop to the `Header` component

##### 1c.  Inside the `Header` component, invoke the callback function to update state in `App`

<br />

#### 2. Refactor the phase filter component out of `ProjectList` and implement inverse data flow

##### 2a. Move the `phase` state from `ProjectList` to `App`


##### 2b. Write a callback function inside the App component:

  ##### - the function should take in a new phase value and update state

  ##### - pass the callback function down as a prop to `ProjectList`

##### 2c. Using inverse data flow, get the value of the phase from ProjectList UP to the App component

##### - Invoke the callback function from the onClick event listener

<br />

--- 
### Resources
- [React - Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)