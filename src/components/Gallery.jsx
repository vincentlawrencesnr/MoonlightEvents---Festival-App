import React, { useEffect } from "react";
import festivals from "../data/festivals.json";
import AOS from "aos";
import "aos/dist/aos.css";

function Gallery() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container" style={{ backgroundColor: ' #f7f8fc', marginTop: '3rem'}}>
      <h2 className="text-center mb-4" style={{color: '#2b323cff', fontWeight: '700', fontSize: '38px'}}>Festival <span style={{color: '#c60707'}}>Gallery</span> 📸</h2>
      <div className="row" style={{ marginTop: '40px'}}>
        {festivals.map((festival) => (
          <div key={festival.id} className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <img
              src={festival.image}
              alt={festival.name}
              className="img-fluid rounded shadow"
              style={{ height: "250px", width: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

/*

BECAUSE GALLERY.JSX DOESN'T CONTAIN MUCH, I WILL MAKE THE NOTE ON jsPDF HERE:

Download Festival as PDF

We’ll use jsPDF

📦 Install:
npm install jspdf

📍 In FestivalCard or Modal
Import:

import jsPDF from "jspdf";

Add function to generate PDF:

const downloadPDF = () => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text(selectedFestival.name, 10, 10);

  doc.setFontSize(12);
  doc.text(`Country: ${selectedFestival.country}`, 10, 20);
  doc.text(`Religion: ${selectedFestival.religion}`, 10, 30);
  doc.text(`Month: ${selectedFestival.month}`, 10, 40);
  doc.text(selectedFestival.description, 10, 50);

  doc.save(`${selectedFestival.name}.pdf`);
};

Add button inside modal:

<button className="btn btn-primary mt-3" onClick={downloadPDF}>
  Download Details
</button>

1. What this function is doing (in simple terms)
const downloadPDF = () => {
  const doc = new jsPDF();

👉 You’re:

Creating a new PDF document
jsPDF is like a blank page you can write on

🔹 Adding text to the PDF
doc.text(selectedFestival.name, 10, 10);

👉 Meaning:

Write text on the PDF
"10, 10" = position on the page

🧠 Coordinates:
First number → X (left → right)
Second number → Y (top → bottom)

Example breakdown:
doc.text(`Country: ${selectedFestival.country}`, 10, 20);

👉 This prints:

Country: Nigeria

At position:

10px from left
20px from top

So your layout becomes:
(10,10) → Name
(10,20) → Country
(10,30) → Religion
(10,40) → Month
(10,50) → Description

👉 You are basically manually positioning text like a canvas

🔹 Saving the PDF
doc.save(`${selectedFestival.name}.pdf`);

👉 This:

Generates the file
Triggers download in browser
Names it like:
Diwali.pdf


2. Why this is cool (your intuition is right)

You said:

“I’m fascinated we can download PDF in a web app”

👉 You should be — this is a real production feature

Apps use this for:

invoices
tickets
reports
receipts

🔑 Final takeaway
1. PDF logic:
jsPDF → create document
doc.text() → add content
doc.save() → download


Further Explanation:

1. Line thickness
doc.setLineWidth(0.5);

👉 This controls how thick lines will be when you draw them.

🧠 Think of it like a pen:
0.1 → very thin
0.5 → normal (what you used 👍)
2 → thick line

2. Drawing the line
doc.line(10, 25, 200, 25);

👉 This draws a straight line.

🧠 Format:
doc.line(x1, y1, x2, y2)

🔍 Your values:
(10, 25)  → starting point
(200, 25) → ending point

👉 What this means:
Start at left (10), down 25
End at right (200), same height (25)

🎯 Result:

👉 A horizontal line across the page

-------------------------

💡 Why same Y value?
25 → 25

👉 Same height = horizontal line

If it was:

doc.line(10, 25, 10, 100);

👉 That would be vertical

3. Splitting long text (VERY IMPORTANT)

const splitDescription = doc.splitTextToSize(
  selectedFestival.description,
  180
);

👉 This prevents text from overflowing off the page.

🧠 The problem it solves

Without this:

doc.text("very long text...", 10, 80);

👉 Text will:

keep going in one line ❌
go outside the page ❌

✅ What this does
splitTextToSize(text, maxWidth)

👉 It:

breaks text into multiple lines
ensures each line fits within width

🔍 Your values:
text → selectedFestival.description
width → 180

👉 Meaning:

“Break this text so each line fits within 180 units”

🎯 Output

Instead of:

"This is a very long description that goes off the page..."

You get:

[
  "This is a very long description",
  "that fits nicely within the page",
  "without overflowing..."
]

👉 It becomes an array of lines

4. Printing the wrapped text
doc.text(splitDescription, 10, 80);

👉 This prints the text.

🧠 Important behavior

doc.text() can accept:

a string ✅
OR an array of strings ✅

🔍 Your case:
splitDescription → array

👉 jsPDF will:

print line 1 at (10, 80)
print line 2 below it
print line 3 below that

🎯 Result:
Line 1
Line 2
Line 3

All neatly spaced 👌

🧠 jsPDF behavior
First line → printed at (10, 80)
Second line → printed automatically below
Third line → printed below that

👉 jsPDF handles the vertical spacing for you

🎯 So internally it behaves like:
Line 1 → (10, 80)
Line 2 → (10, 80 + lineHeight)
Line 3 → (10, 80 + 2 × lineHeight)

🔍 Important concept: line height

There’s an automatic spacing between lines (based on font size).

So even though you passed only:

10, 80

👉 jsPDF calculates the rest.


✅ Why your version works

Because:

doc.text(array, x, y);

👉 jsPDF says:

“Oh, this is multiple lines — I’ll space them properly.”


🔑 Final mental model
🔹 setLineWidth

“How thick should my line be?”

🔹 line(x1, y1, x2, y2)

“Draw a line from point A to point B”

🔹 splitTextToSize

“Break long text so it fits nicely”

🔹 doc.text(array, x, y)

“Print multiple lines starting at this position”

🚀 One-line summary

You set a line style, draw a divider, and then safely wrap and print long text so your PDF looks clean and professional.

- - - - - - - - 

“selectedFestival is initially null… so why does downloadPDF work?”

🧠 The key idea:

The function does NOT run when it is defined
It runs ONLY when you click the button

🔍 Step-by-step timeline

🟡 Step 1: Initial render
const [selectedFestival, setSelectedFestival] = useState(null);

👉 So:

selectedFestival = null

👉 Modal does NOT render:

{selectedFestival && ( ... )}

Because:

null → falsy → modal hidden ❌

🟢 Step 2: You click a card
setSelectedFestival(festival);

👉 Now:

selectedFestival = { name: "Diwali", ... }

🟢 Step 3: Component re-renders

Now:

{selectedFestival && ( ... )}

👉 This becomes:

true → modal shows ✅

🟢 Step 4: Button appears
<button onClick={downloadPDF}>

👉 Still, nothing runs yet

🟢 Step 5: You click "Download"

NOW:

downloadPDF()

👉 At THIS moment:

selectedFestival = actual object ✅

So:

selectedFestival.name ✔ works

🔴 Why it doesn’t break

Because:

The function is called after the state has been updated


🚀 Best practice (upgrade your code)

Make your function more reusable:

const downloadPDF = (festival) => {
  const doc = new jsPDF();
  doc.text(festival.name, 10, 10);
};

Then:

<button onClick={() => downloadPDF(selectedFestival)}>

👉 Now:

function is independent
works anywhere
easier to reuse

🔥 Final takeaway
✔ Why it works:
Function runs after state updates

✔ Why null doesn’t break it:
Modal + button only exist when state is NOT null

✔ Key rule:
Functions use the latest state at the time they run, not when they are defined
*/