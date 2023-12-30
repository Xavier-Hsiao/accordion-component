# Accordion Component

## About the project

This project aims to practice state management in React. User can only open one accordion item at a time.

## Live demo

The app is hosted on Netlify:
https://658fd5286ac4f142bf3bcd82--endearing-brioche-5565ea.netlify.app/

## State management

The `curOpen` state is defined in the `Accordion` component instead of `AccordionItem` component. This decision is related to the requirement of allowing only one item to be opened at a time.

The benefits of _lifting up state_ are:

1. **Single source of truth:** The state in the parent component (`Accordion`) serves as a single source of truth for the open item index, centralizing the management of the open item and ensures that all `AccordionItem` child components have access to the same state value (`curOpen`).

2. **Consistency and synchronization:**
   Sharing the same state instead of having its own state allows each `AccordionItem` to coordinate, resulting in the effect of only one item being opened at a time. So having a sharing state makes a consistent representation of the accordion's open state.

3. **Ease of control:**
   By placing the state in the parent component, the parent can implement additional logic if needed, all management in one place.

4. **Efficiency:**
   Changing state at higher levels in the component tree can lead to optimized re-rendering in React.

## Screenshot

![screenshot](https://github.com/Xavier-Hsiao/accordion-component/blob/master/public/accordion-demo.png)
