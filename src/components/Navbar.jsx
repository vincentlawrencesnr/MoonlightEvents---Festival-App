import React, { useEffect, useState } from 'react';
import Moonlight from '../assets/MoonRed.png';
import { Link, NavLink, useLocation } from "react-router-dom";

// style={{ backgroundColor: "#0B0F1A" }}

function Navbar({ searchTerm, setSearchTerm, setSubmittedSearch }) {

  const [visits, setVisits] = useState(0);

  const location = useLocation();


  useEffect(() => {
  let hasRun = sessionStorage.getItem("visited");

  if (!hasRun) {
    let count = localStorage.getItem("visits");

    count = count ? parseInt(count) + 1 : 1;

    localStorage.setItem("visits", count);
    setVisits(count);

    sessionStorage.setItem("visited", "true");
  } else {
    setVisits(localStorage.getItem("visits"));
  }
}, []);



  return (
 <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#0B0F1A", verticalAlign: 'middle' }}>
  <div className="container-fluid">
    <Link className="navbar-brand me-lg-5" to="/" style={{color: "#faf3e0", fontSize: "30px", fontFamily: 'Montserrat, sans-serif', verticalAlign: 'middle'}}> <img src={Moonlight} alt="MoonlightEvents" width="30" height="30" className="me-1 mb-1"/>events</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-center">
        <li className="nav-item ms-lg-5 me-2">
          <NavLink className={({ isActive }) => isActive ? "nav-link active text-danger" : "nav-link"} aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item ms-2 me-2">
          <NavLink className={({ isActive }) => isActive ? "nav-link active text-danger" : "nav-link"} to="/about">About Us</NavLink>
        </li>  
        <li className="nav-item dropdown ms-2 me-2">
          <span className={`nav-link dropdown-toggle ${location.pathname === "/festivals" || location.pathname === "/gallery" ? "active-link" : ""}`} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Festivals
          </span>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className={({ isActive }) => "dropdown-item " + (isActive ? "active-link" : "")} to="/festivals"> View Festivals</NavLink>
            </li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className={({ isActive }) => "dropdown-item " + (isActive ? "active-link" : "")} to="/gallery">Gallery</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
          </ul>
        </li>
        <li className="nav-item ms-2 me-2">
          <NavLink className={({ isActive }) => isActive ? "nav-link active text-danger" : "nav-link"} to="/contact">Contact Us</NavLink>
        </li>
        <li className="nav-item ms-2 me-2">
          <NavLink className={({ isActive }) => isActive ? "nav-link active text-danger" : "nav-link"} to="/faq">FAQ</NavLink>
        </li>
      </ul>

     <div className="d-flex flex-column flex-md-row align-items-center gap-3">

        <form className="d-flex" onSubmit={(e) => { e.preventDefault();

        if (searchTerm.trim() !== "") {
          setSubmittedSearch(searchTerm);  //  sets the submitted search term
        const section = document.getElementById("festival-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
        }
          
        setSearchTerm(""); // clears input
         
    }}>
        <input 
          className="form-control me-2" 
          type="search" 
          placeholder="Search" 
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      <span className="text-secondary ms-0 ms-md-5 me-1 fw-semibold">👁 Visitors: {visits}</span>
     </div>

  
    </div>
  </div>
</nav>
    );
}

export default Navbar;


/*
🔑 Final takeaway

gy, gx-* → grid only
gap-* → flex + grid ✅


✅ The correct solution (for flex)

Use gap-*, which works with flexbox:

<div className="d-flex flex-column flex-md-row align-items-center gap-3">

🔥 What this does
flex-column → stacks items vertically (mobile)
flex-md-row → switches to horizontal on medium screens
gap-3 → adds spacing between items in both directions

##  mb-2 mb-md-0




useEffect(() => {
  let count = localStorage.getItem("visits");

  if (count) {
    count = parseInt(count) + 1;
  } else {
    count = 1;
  }

  localStorage.setItem("visits", count);
  setVisits(count);
}, []);


EXPLANATION: USING sessionStorage to track if user has visited during current session, and localStorage to track total visits across sessions

useEffect(() => {
  let hasRun = sessionStorage.getItem("visited");

  if (!hasRun) {
    let count = localStorage.getItem("visits");

    count = count ? parseInt(count) + 1 : 1;

    localStorage.setItem("visits", count);
    setVisits(count);

    sessionStorage.setItem("visited", "true");
  } else {
    setVisits(localStorage.getItem("visits"));
  }
}, []);  


Big picture: What this code is trying to solve

Because of React Strict Mode, your useEffect runs twice in development.

🧠 What’s happening behind the scenes

React (in dev mode) does this on purpose:

Mount component
Run useEffect ✅
Immediately unmount
Mount again
Run useEffect again ✅

👉 So your counter increments:
+1
+1
= +2

🔍 Why React does this

Strict Mode is checking:

side effects
unsafe logic
bugs in lifecycle behavior

👉 It’s a debugging feature, not a bug

✅ Proof

If you build your app:

npm run build

👉 It will increment by 1, not 2.


Big picture: What this code is trying to solve

Because of React Strict Mode, your useEffect runs twice in development.

👉 This code prevents your visitor count from increasing twice.

It does that by using:

localStorage → to store the total visits
sessionStorage → to remember if this tab already counted a visit

🧠 Step-by-step breakdown
useEffect(() => {

👉 Runs when the component mounts (once… but twice in dev Strict Mode)

🔹 1. Check if this session already counted
let hasRun = sessionStorage.getItem("visited");

👉 sessionStorage stores data per browser tab

If user just opened the page → null
If already visited in this tab → "true"

🔹 2. First-time visit in this tab
if (!hasRun) {

👉 Means:

“We have NOT counted this visit yet”

🔸 Get existing visits
let count = localStorage.getItem("visits");

👉 localStorage persists even after browser closes

🔸 Increment count
count = count ? parseInt(count) + 1 : 1;

👉 Logic:

If visits exist → add 1
If not → start at 1

🔸 Save updated count
localStorage.setItem("visits", count);

👉 Stores the new total

🔸 Update React state
setVisits(count);

👉 Updates UI with new value

🔸 Mark this session as counted
sessionStorage.setItem("visited", "true");

👉 Now:

“Don’t count again in this tab”


🔹 3. If already counted in this tab
} else {
  setVisits(localStorage.getItem("visits"));
}

👉 Means:

“We already counted this visit earlier”

So:

DO NOT increment again ❌
Just display the current value ✅


🔑 Why this works

| Storage type     | Purpose                             |
| ---------------- | ----------------------------------- |
| `localStorage`   | Keeps total visits permanently      |
| `sessionStorage` | Prevents duplicate counting per tab |

🎯 What problem it solves

Without this:

Strict Mode → useEffect runs twice → +2 visits ❌

With this:

First run → count +1 ✅
Second run → ignored ✅

⚠️ Important limitation (be aware)

This is not a real visitor counter:

Same user opening new tab → counts again
Different browser/device → counts again
Clearing storage → resets

👉 It’s a demo/project-level solution, not production analytics

🧠 Final mental model

localStorage = “total memory”
sessionStorage = “did I already count this tab?”

🚀 One-line summary

This code ensures a visit is counted only once per browser tab, even if React runs the effect multiple times.


----

FURTHER EXPLANATION:

1. Does let hasRun = sessionStorage.getItem("visited") return false?

❌ No — it does NOT return a boolean

👉 It returns:

null → if nothing is stored yet
"true" → a string, if you stored it

🧠 So on first load:
let hasRun = sessionStorage.getItem("visited"); // null

Then:

if (!hasRun)

👉 !null → true
✔ So the if block runs

2. What does this line actually do?
sessionStorage.setItem("visited", "true");

👉 It stores:

key: "visited"
value: "true"   (STRING, not boolean)

⚠️ Important

sessionStorage ONLY stores strings

So even if you do:

sessionStorage.setItem("visited", true);

👉 It becomes:

"true"

3. What happens on the second run (same tab)?

Now:

let hasRun = sessionStorage.getItem("visited"); // "true"

Then:

if (!hasRun)

👉 !"true" → false
❌ So the if block is skipped

✔ The else runs:

setVisits(localStorage.getItem("visits"));

4. Your confusion about count staying 1

You said:

“next visit count is still 1 instead of 2”

👉 This is where the misunderstanding is:

🔹 SAME TAB (refresh or Strict Mode)
sessionStorage still has "true"
So it does NOT increment again
Count stays 1

✔ This is intentional (prevents double counting)

🔹 NEW TAB or NEW SESSION

When you:

open a new tab
or close browser and reopen

👉 sessionStorage is cleared

So:

hasRun = null

Then:

count = 1 → becomes 2

✔ Now it increments

🧠 Key distinction

| Storage          | Behavior               |
| ---------------- | ---------------------- |
| `localStorage`   | persists forever       |
| `sessionStorage` | resets per tab/session |

5. Why we use sessionStorage here

👉 To solve THIS problem:

React Strict Mode → useEffect runs twice → double count ❌

So we say:

“Only count once per tab”

🎯 Timeline example

First time opening site:
sessionStorage → null
localStorage → null

→ count becomes 1
→ sessionStorage = "true"

React runs effect again (Strict Mode):
sessionStorage → "true"

→ skip increment
→ count stays 1

Open new tab:
sessionStorage → null (fresh tab)
localStorage → 1

→ count becomes 2 ✅

🔑 Final corrections to your understanding

❌ hasRun is NOT boolean → it’s null or "true"
❌ sessionStorage does NOT store booleans → only strings
❌ count does NOT stay 1 forever → it increases on new sessions
🚀 One-line mental model

sessionStorage = “Have I counted THIS TAB already?”
localStorage = “What is the total count overall?”

- - - - - - - - 

What happens when you refresh a page?

👉 A browser refresh is basically:

“Destroy everything → reload everything from scratch”

🧠 Step-by-step

When you hit refresh:

Browser clears the current React app from memory
Downloads your app again
Runs your entry file (main.jsx / index.js)
Renders <App /> again
React builds the component tree from scratch

✅ So yes:

✔ Your components mount again
✔ Including App.jsx
✔ And ALL child components (Navbar, etc.)

2. Does App.jsx mount again?

👉 YES — it’s the root of your app.

Flow looks like:

index.js / main.jsx
   ↓
<App />
   ↓
Navbar, Home, Footer, etc.

So on refresh:

Everything unmounted ❌
Everything mounted again ✅

3. Why this matters for your visitor counter

Now this connects to your earlier question:

localStorage → still exists after refresh ✔
sessionStorage → also still exists in the same tab ✔

So:

👉 Refresh = new mount
👉 BUT same sessionStorage → prevents double count


🔑 Important distinction

| Action        | sessionStorage | localStorage |
| ------------- | -------------- | ------------ |
| Refresh       | stays          | stays        |
| New tab       | resets         | stays        |
| Close browser | resets         | stays        |

🧠 Simple mental model

Refresh = new React app
NOT a new browser session

*/