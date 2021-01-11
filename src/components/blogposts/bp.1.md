![header](headerblogsmall.jpg)

## [React v17.0] (https://reactjs.org/blog/2020/10/20/react-v17.html) released 3 weeks ago - why should YOU care?
### November 3, 2020
Well my dear reader(s), whether you are a seasoned React developer making a 6-figure salary while sipping on pour-over coffee made from only the _finest_ arabica coffee beans, or a developer-in-training who still can't understand why JavaScript is the red-headed step child of the programming world, there's plenty to care about. 

But I'll keep it short and simple, an update to React means an update to the one of the tools that you're using every day, so keeping up with the newest releases is going to help you be __that 👌__ much better at your job ( or that much closer to landing your next job).

## What new features do we get to play with?
![Nothing ](https://media0.giphy.com/media/nYogYgSmIJaIo/giphy.gif?cid=ecf05e471aff41dc34a43dbea57e200a32cbffdebcd5868b&rid=giphy.gif)

- All jokes aside, what would normally be a landmark release filled with new tools for developers is instead focused on fixes and setting the stage for future releases.
- Boring is good! It means less feature-creep and more of a focus on stability for us.

## 1. Gradual Upgrades - How React interacts with older versions of itself
The standard for upgrading from an older version of React (say, 16 to 17) is to normally upgrade the whole app at once.
Problems start to arise when you consider legacy code for companies and apps that aren't actively maintained but are still in use. 
### The old solution: render 2 different versions of React simultaneously on a page but risk issues with events
Luckily React 17.0 gives us choices in how we choose to approach this problem of legacy code.
### The new solution: upgrade parts of your app while keeping some pieces of your app in older versions of React
__Ideally, you're still just upgrading your whole app at once so you don't have as many headaches.__

- Lazy loading 2 different React versions is never going to be an optimized approach, but it is a great option for old apps to not lose their functionality as time passes.
- For special cases where you absolutely need an older version of React running, you can use this method as an escape hatch.
- [You can check out a demo of Gradual Upgrades made by the React team here.](https://github.com/reactjs/react-gradual-upgrade-demo/)

## 2. Event Delegation - Moving from the Document to the root DOM container
![Event Delegation](https://reactjs.org/static/bb4b10114882a50090b8ff61b3c4d0fd/1e088/react_17_delegation.png)
- Beginning in React 17, React will change the way it handles attaching event handlers.

- In 16 and prior, events were attached directly to the document node - which was what led to the previously mentioned problem of events bugging out when multiple React versions were running on simultaneously.

- Since all the event handlers are registered at the top (with multiple versions running), stopping event propagation with the ```stopPropagation()``` method [simply wouldn't work](https://github.com/facebook/react/pull/8117).

- Your nested tree that runs a different React version may try to stop propagation, but your outer tree (that is also running a different React version) will still receive it.

- Enter, React 17 - __we now attach events to the root DOM container from which our React tree renders.__

- The change under the hood can be summed up as React 16 using ```document.addEventListener()``` while 17 uses ```rootNode.addEventListener()```.

- This change in events is what makes React 17 a sort of "future proof" version that will allow different versions of React to play nice together (e.g. 17 and 18) and why its so important to make the switch to 17.

## 3. Everything else v17.0 changed
While the biggest changes that have arrived with React v17.0 were covered, there are still many other changes that are just as important that we don't have the time or space to discuss at length, in keeping with the 5 minute format.
- [JSX Transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
-  ```onScroll``` event no longer bubbles
- ```onFocus and onBlur``` events have switched to using the native ```focusin and focusout``` events
- No event pooling
- useEffect cleanup timing
- Consistent errors for returning undefined
- And MORE - all of the detailed changes can be found in the [Release Candidate here](https://reactjs.org/blog/2020/08/10/react-v17-rc.html#other-breaking-changes).

## 4. On the Horizon? - Concurrent Mode
Something to keep an eye on in future version updates that is slated to be a major game changer in the React developer space is Concurrent Mode. 

To sum up the problem Concurrent Mode aims to solve, whenever React begans rendering an update (e.g. creating DOM nodes or running code) - this "work" isn't interruptible. It must finish before another task can begin.

React thus adopts an approach known as __blocking rendering__.
### Concurrent Mode will make it so that rendering no longer blocks other work or updates - it will be interruptible, unlocking brand new features for the user.
The content of my next blog post will cover this topic, so stay tuned!