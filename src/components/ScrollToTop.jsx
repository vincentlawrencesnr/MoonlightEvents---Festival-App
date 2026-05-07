import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/*
🧠 Big picture: What this component does

This component says:

“Whenever the route/page changes, scroll the browser to the top.”

That’s all.

🔹 1. What is useLocation()?
useLocation()

useLocation is a React Router hook.

👉 It gives information about the current URL/location.

Think of it like this

If your URL is:

http://localhost:5173/about

Then useLocation() gives an object like:

{
  pathname: "/about",
  search: "",
  hash: "",
  state: null,
  key: "abc123"
}

🔑 Most important property
pathname

This is simply:

"/"
"/about"
"/gallery"
"/contact"

👉 The current route/page path.

🔹 2. Why is this different from:
const location = useLocation();

You’re used to this:

const location = useLocation();

That is perfectly correct.

Then you access:

location.pathname

But in your new code:
const { pathname } = useLocation();

This is called:

✅ Object destructuring


🧠 What it means

Instead of:

const location = useLocation();

const pathname = location.pathname;

You shorten it into:

const { pathname } = useLocation();

🔹 3. Why destructure here?

Because we only need:

pathname

We don’t care about:

search
hash
state
key

So destructuring keeps code cleaner.

🔹 4. What does this line do?

useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);

🧠 Step-by-step
Part A
window.scrollTo(0, 0);

This means:

Scroll browser to:
X = 0 (far left)
Y = 0 (top of page)

👉 So:

horizontal scroll → reset
vertical scroll → top

🔹 5. Why [pathname]?

This is the important React logic.

[pathname]

means:

“Run this effect whenever pathname changes.”

🎯 Example flow

You are on:

/

Then click:

/about

Now:

pathname changed

So React runs:
window.scrollTo(0, 0);

👉 Page scrolls to top.


Why this works

React Router changes the URL:

"/" → "/about"

That changes:

pathname

Which triggers:

useEffect


🔹 6. Why return null?
return null;

This component does NOT display UI.

No:

div
text
buttons
images

It exists ONLY for behavior/effect.

So:

null = render nothing



IMPORTANT NOTE:

pathname is not a React state, but it behaves similarly in some ways because React Router makes it reactive.


## 
Is pathname a state?

❌ Not technically.

You did NOT create it using:

const [pathname, setPathname] = useState();

So it is not React state.

## 
Then why does it behave like state?

Because useLocation() is a React Router hook.

React Router internally tracks the URL.

When the URL changes:

/      →     /about

React Router updates the location object.

That causes components using useLocation() to re-render.

So this:

const { pathname } = useLocation();

gets a NEW value automatically.

##
So can pathname trigger useEffect?

YES ✅

This works:

useEffect(() => {
  console.log("Route changed");
}, [pathname]);

because:

React compares old pathname vs new pathname
If different:
effect runs again

Exactly like state dependencies.

##
Is pathname reactive?

YES ✅

That’s the best word.

It is NOT state,
but it is reactive data from React Router.


##
Does App.jsx re-render when pathname changes?

✅ YES.

Because routing changed.

Example:

<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />

If pathname changes:

"/" → "/about"

React Router must:

remove Home
render About

So:
App re-renders
route matching runs again
affected components re-render


##
Then why create ScrollToTop separately?

Because:

window.scrollTo(0, 0);

is a side effect tied to navigation.

Instead of putting that logic inside App.jsx directly,
you isolate it into a reusable component.

Very common React pattern.


*  *  *

Full chain in your case

User clicks:

/about

↓

React Router updates location

↓

pathname changes

↓

ScrollToTop re-renders

↓

useEffect runs

↓

window.scrollTo(0, 0);

↓

Browser scrolls to top

✅
*/