#  Dev Stack Builder

Dev Stack Builder is a modern, responsive web application designed for software engineers and development teams to discover, evaluate, and assemble their ideal technology stack. Built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**, this application provides an interactive experience for curating frontend libraries, backend runtimes, databases, styling frameworks, and DevOps tools.

---

##  Technologies Used
- **React (v19)**: Component-based architecture and declarative UI rendering.
- **TypeScript**: Static typing for data structures, component props, and compile-time safety.
- **Vite**: Ultra-fast build tool, bundler, and development server.
- **Tailwind CSS (v4)**: Utility-first styling framework paired with a custom brand gradient system.
- **React Toastify**: Interactive, accessible toast notifications for user actions.
- **React Icons**: Scalable vector icons for system navigation, ratings, and social links.
- **JSON**: Decoupled local mock dataset for asynchronous data fetching.

---

##  Key Features
1. **Browse & Explore Modern Technologies**:
   - Displays a 3-column responsive grid of curated development technologies across Frontend, Backend, Database, Language, Styling, and DevOps categories.
   - Each card features official brand icons, categorized pill badges (`Popular`, `Fast`, `Top SQL`, etc.), category/difficulty tags, and star ratings.

2. **Interactive Stack Management (Sidebar)**:
   - Real-time "Your Stack" sidebar showing the dynamic count of selected technologies.
   - Clear empty state when no items are chosen.
   - Single-click addition with automatic duplicate prevention and button state mutation (`✓ Added to Stack`).
   - Flexible removal: remove individual technologies using the `✕` trigger or clear the entire stack at once with "Remove All".

3. **Smooth UX & Toast Alerts**:
   - Feedback provided via `react-toastify` for additions, duplicate attempts, item removals, and stack resets.
   - Animated skeleton loading states during JSON data fetching.
   - Sticky navbar with backdrop blur and responsive mobile drawer navigation.

---

##  Project Structure
```text
dev-stack/
├── public/
│   ├── banner-stack.png     # Hero 3D illustration
│   ├── logo-text.png        # Brand asset
│   └── data.json            # 15 curated technology items
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky responsive navbar with mobile hamburger
│   │   ├── Hero.tsx         # Two-tone gradient heading and CTA banner
│   │   ├── MainLayout.tsx   # Container organizing tech grid and sidebar
│   │   ├── TechList.tsx     # 3-column responsive grid with loading skeleton
│   │   ├── TechCard.tsx     # Individual technology card component
│   │   ├── Sidebar.tsx      # Your Stack panel with dynamic item management
│   │   └── Footer.tsx       # Brand info, social icons, and categorized links
│   ├── App.tsx              # Root component managing central state & toasts
│   ├── index.css            # Tailwind CSS setup & shared brand gradient tokens
│   ├── main.tsx             # Application entry point
│   └── types.ts             # TypeScript definitions for Technology data
├── package.json
└── vite.config.ts
```

---

##  Local Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/imranonweb/assignment-5.git
   cd assignment-5/dev-stack
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

##  React Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:**  
JSX simply means JavaScript XML. It is a syntax extension that allows us to write HTML-like code inside JavaScript or TypeScript files. React uses JSX because it makes the UI structure easier to write, read, and maintain.

---

### 2. What is the difference between props and state?
**Answer:**  
Props are read-only data that passed from a parent component to a child component.
State is a data managed inside a component that can change over time. When state changes, React re-renders the component and updates the UI.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:**  
The useState hook allows functional components to create and manage state. In my project, I used it in App.tsx to manage the technology data, loading state, and selected stack, and in Navbar.tsx to manage the mobile menu state.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:**  
useEffect is used to handle side effects in React, such as fetching data, setting up subscriptions, or interacting with something outside the component.
I used useEffect to fetch the local data.json file when the component loads. The empty dependency array ensures that the effect doesn't depend on changing state or props and is intended to run on the initial mount.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:**  
React uses the key prop to uniquely identify elements in a list. It helps React determine which items have been added, removed, or changed so it can update the DOM efficiently. The key should be unique and stable. In this project, unique string identifiers such as `tech.id` (`react`, `postgresql`, `docker`) are passed as keys:
```tsx
{technologies.map((tech) => (
  <TechCard key={tech.id} tech={tech} ... />
))}
```

---

### 6. What is conditional rendering? Provide an example from this project.
**Answer:**  
Conditional rendering means showing different UI elements depending on a certain condition.
I used conditional rendering in **`Sidebar.tsx`**.

When `stack.length === 0`, the sidebar displays: **"Your stack is empty."**

When `stack.length > 0`, it displays the selected technologies and the **"Remove All"** button.

I also used conditional rendering in **`TechCard.tsx`**. The button changes depending on whether the technology has already been added:

- **"Add to Stack"** — when it has not been added
- **"✓ Added to Stack"** — when it has already been added

The button is also disabled after the technology has been added.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**  
**Parent to Child:**  
A parent component can pass data to a child component using props. For example:

`<TechCard tech={tech} isAdded={isAdded} />`

Here, `tech` and `isAdded` are passed from the parent to `TechCard`.

**Child to Parent:**  
A child cannot directly change the parent's state. Instead, the parent can pass a function to the child as a prop.

For example, the parent can pass a function such as `handleAddToStack`. When the user clicks the button inside `TechCard`, the child calls that function. The parent then receives the data and updates its state.

This allows the child component to communicate with the parent while keeping the actual state management in the parent component.

## Author

**Md. Al Imran Emon**  
GitHub: [@imranonweb](https://github.com/imranonweb)