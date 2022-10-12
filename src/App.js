import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import QuizDetails from "./components/QuizDetails/QuizDetails";

import Statistics from "./components/Statistics/Statistics";
import Topics from "./components/Topics/Topics";

import Main from "./Main/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("Item.json");
          },
          element: <Home></Home>,
        },
        {
          path: "/topics",
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },

          element: <Topics></Topics>,
        },
        {
          path: "/topic/:topicId",
          loader: async ({ params }) => {
            console.log(params);
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
            );
          },
          element: <QuizDetails></QuizDetails>,
        },

        {
          path: "/statistics",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },

          element: <Statistics></Statistics>,
        },
        { path: "/blog", element: <Blog></Blog> },
      ],
    },
    { path: "*", element: <div>Users Not Found</div> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
