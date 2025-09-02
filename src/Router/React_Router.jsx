import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorHandel from "../components/HandelError/ErrorHandel";
import Main from "../components/Main-Section/MainSection";
import Home from "../components/Main-Section/Home/Home";
import ListedBook from "../components/Main-Section/Listed-Book/ListedBook";
import PageToRead from "../components/Main-Section/Page-To-Read/PageToRead";

const React_Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",

            element: <Main />,

            errorElement: <ErrorHandel />,

            children: [
                {
                    element: <Home />,
                    path: "/"

                },
                {
                    element: <ListedBook />,
                    path: "/Listed-Book"
                },
                {
                    element: <PageToRead />,
                    path: "/Page-To-Load"
                }
            ]
        }
    ])

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default React_Router;