import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FestivalList from './components/FestivalList'
import Gallery from './components/Gallery';
import Ticker from './components/Ticker';
import Festivals from './components/Festivals';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import HomeAbout from './components/HomeAbout';
import CallToAction from './components/CallToAction';
import HomeGallery from './components/HomeGallery';
import ScrollToTop from './components/ScrollToTop';
import HomeTalents from './components/HomeTalents';

function App() {
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

// searchTerm       → what user is typing (input box)
// submittedSearch  → what user actually searched (after hitting "Search")

// | State             | Purpose              |
// | ----------------- | -------------------- |
// | `searchTerm`      | controls input field |
// | `submittedSearch` | controls filtering   |


  return (
    <>
      {/* <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSubmittedSearch={setSubmittedSearch} />
      <Hero/>
      <FestivalList submittedSearch={submittedSearch} />
      <Gallery />
      <Ticker /> */}

    <Router>
      <ScrollToTop />
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSubmittedSearch={setSubmittedSearch} />

      <Routes>
        <Route path="/" element={<><Hero /><FestivalList submittedSearch={submittedSearch} /><HomeAbout /><HomeGallery /><HomeTalents /><CallToAction /><FAQ/></>} />
        <Route path="/festivals" element={<Festivals submittedSearch={submittedSearch} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>

      <Ticker />
      <Footer />
    </Router>
    </>
  )
}

export default App


/*

{searchTerm === "" && <Hero />}
🔍 Step-by-step
Step 1:
searchTerm === ""

👉 This is a comparison, not the string itself

It returns:

true → if searchTerm is empty
false → if it has text

Step 2: && operator
condition && <Hero />

👉 Means:

If condition is true → render <Hero />
If condition is false → render nothing

✅ So:
searchTerm	Result
""	<Hero /> shows
"diwali"	nothing shows

⚠️ Important distinction

You said:

"" is falsy

✔ True
BUT here we are NOT using searchTerm directly

We are using:

searchTerm === ""

👉 which returns a boolean (true/false)

🧠 Equivalent code (long form)
{searchTerm === "" ? <Hero /> : null}

🎯 Final meaning
Show Hero ONLY when user has not typed anything


- - - - - - - - - - - - - - - - - - - - -  -

EXPLANATION OF HOW SEARCH TERM GETS PASSED DOWN AND USED IN FESTIVALLIST

🧠 1. First: Who owns the data?

In your app.jsx:

const [searchTerm, setSearchTerm] = useState("");

👉 This lives in App.js

So:

App = source of truth (owner of searchTerm)

🧩 2. How data flows
App
 ├── Navbar (can UPDATE searchTerm)
 └── FestivalList (can READ searchTerm)   - I eventually added the submittedSearch state to control when the search term is applied to the filtering, so that it only updates when the user hits "Search")

🔁 3. What happens when you type in Navbar?

In Navbar:

onChange={(e) => setSearchTerm(e.target.value)}

👉 This calls the function from App

🔥 Important:

Even though you're inside Navbar…

👉 You are actually updating state in App


🧠 4. What happens next?

When state changes in App:

setSearchTerm("diwali");

👉 React re-renders App

Then App sends updated props:

<Navbar searchTerm={searchTerm} />
<FestivalList searchTerm={searchTerm} />


🔄 So both components receive the NEW value
Navbar → gets updated searchTerm
FestivalList → gets updated searchTerm

🧩 5. How FestivalList uses it

In FestivalList:

function FestivalList({ searchTerm })

Then in filter:

festival.name.toLowerCase().includes(searchTerm.toLowerCase())

👉 So it reacts to whatever App gives it


⚠️ Your confusion

You said:

“we didn’t pass setSearchTerm to FestivalList but we used it there”

👉 Important correction:

You should NOT be using setSearchTerm inside FestivalList anymore.

If you are, that’s a mistake.

✔ Correct setup:
Navbar → updates searchTerm
FestivalList → only reads searchTerm


🧠 6. How Navbar and FestivalList are connected

They are NOT directly connected.

They communicate through App.

🔥 This is the key concept:
Navbar → updates App state
App → sends updated data to FestivalList

🔁 Visual Flow

User types in Navbar
        ↓
setSearchTerm() (in App)
        ↓
App re-renders
        ↓
FestivalList receives new searchTerm
        ↓
Filter runs again
        ↓
UI updates


🧠 Final Clarifications
✔ Does FestivalList affect Navbar?
❌ NO (directly)

✔ Does Navbar affect FestivalList?
✔ YES (through App state)


🔥 Golden Rule in React
Data flows DOWN
Actions flow UP

Props → down
Functions → up


🚀 You just understood a BIG concept
This is called:
👉 “Lifting State Up”


- - - - - - - - - - -

VERY IMPORTANT EXPLANATION ABOUT STATE AND RE-RENEDERS AND DOM UPDATES

🔥 1. Does the entire webpage re-render when state changes?

❌ No — React does NOT re-render the entire page (DOM).

When state changes:

👉 React re-renders only the component where the state exists + its children (if needed)



🧠 Example
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Counter count={count} />
      <Footer />
    </div>
  );
}

If count changes:

App() re-runs (function re-executes)
React compares the UI (Virtual DOM diff)
Only parts affected update in real DOM

👉 It does NOT reload the whole webpage

🔹 Key idea

“Re-render” ≠ “Repaint entire webpage”

React is smart:
✔ It re-runs components
✔ It updates only changed parts of the DOM

🔥 2. If state is in App.jsx, does everything re-render?

👉 App.jsx and its children will re-run as functions
BUT:

❌ That does NOT mean everything is re-painted

React does:

Re-run component functions
Compare Virtual DOM
Update ONLY changed UI parts

Important nuance:

Even if App re-renders:

Child components MAY or MAY NOT re-render depending on props and memoization

🔥 3. Do props cause re-rendering?

Yes — but not in the way you think.

When props change:

👉 The receiving component re-renders

Example:

<Counter count={count} />

If count changes:

Counter re-runs
UI updates if needed


🔥 BUT IMPORTANT:

Props themselves don’t “trigger a full page render”
They only trigger that component’s re-render

🔥 4. Does passing updated props cause another full render?

❌ No cascading full-page re-render happens

Instead:

React flow:
State changes in parent
Parent re-renders
Props are recalculated
Child receives new props
Child re-renders (if props changed)
React updates only affected DOM nodes


🧠 5. The correct mental model

Think of React like this:

❌ Wrong thinking:

“State change = whole page refresh”

✅ Correct thinking:

“State change = re-run component tree + update only what changed”

🔑 Final clarification (VERY important)
❓ Does state anywhere in app re-render entire page?

👉 No.

Only:

The component with state
Its children (depending on props)

❓ Do props cause re-render?

👉 Yes, but only for the receiving component — not the whole page.

🚀 One-line summary

React re-renders components, not pages — and only updates the DOM where changes actually occur.

* *

🔥 1. What actually happens in your example
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Counter count={count} setCount={setCount} />
      <Footer />
    </div>
  );
}

Now inside Counter you do:

setCount(count + 1);

🔥 What React actually does step-by-step
1. State changes
setCount() is called
React schedules a re-render of App

2. App re-runs
App() function runs again
count now has new value

3. React compares UI (Virtual DOM diff)
React compares previous vs new render

4. Child components behavior

Now this is the key part:

✔ Header
Receives no props
But still may re-render (function runs again)

✔ Counter
Receives changed props (count)
So it definitely re-renders

✔ Footer
Same as Header (may re-render depending on optimizations)


🚨 IMPORTANT CORRECTION to your understanding

You said:

“only Counter component will re-render”

❌ Not exactly true.

Correct version:

When state in App changes, App re-renders and ALL its child components are re-invoked, but React only updates the DOM where changes occurred.

🧠 Key distinction

🔹 “Re-render” means:
Function runs again
JSX recalculated

🔹 “DOM update” means:
Actual UI change on screen

👉 React re-renders more than it updates visually


🔥 2. Does passing setCount matter?

Yes — but only as a function reference.

Passing setCount does NOT trigger re-renders
Only calling setCount() triggers state update

🔥 3. Your second question (VERY important)

“State exist means where it is created or where it is used?”

✔ Correct answer:

👉 State “exists” ONLY where it is created.

const [count, setCount] = useState(0);

That is the single source of truth.

🔹 Where it's used (props usage)

This is NOT where state exists — it is just consumed

<Counter count={count} />

so:
| Concept       | Meaning                      |
| ------------- | ---------------------------- |
| State exists  | Where `useState` is declared |
| State is used | Where it is passed as props  |

🔥 4. The correct mental model
When state changes:

Component holding state re-renders
All its children re-run (functions execute again)
React compares old vs new Virtual DOM
Only changed parts update in real DOM

🚀 Final corrected summary of your understanding

You were thinking:

Only Counter re-renders ❌

Correct version:

App re-renders → all children re-run → React updates only what changed in DOM ✔



*/