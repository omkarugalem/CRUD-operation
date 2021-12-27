// import React from "react";
// import useFetch from "./HOOKS/useFetch";

// const App = () => {
//   let covidApi = useFetch(
//     "https://corona.lmao.ninja/v2/continents?yesterday=true&sort"
//   );
//   console.log(covidApi);

//   let githubApi = useFetch("https://api.github.com/users");
//   console.log(githubApi);
//   return <div>Root</div>;
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./Component/CreatePost";
import DeletePost from "./Component/DeletePost";
import EditPost from "./Component/EditPost";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";

const App = () => {
  return (
    <Router>
      <section>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/edit-post/:id" element={<EditPost />} />
            <Route path="/delete-post/:id" element={<DeletePost />} />
          </Routes>
        </main>
        <footer></footer>
      </section>
    </Router>
  );
};

export default App;
