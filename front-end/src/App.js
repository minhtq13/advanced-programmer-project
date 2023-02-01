import { Fragment } from "react";
import "./bootstrap.min.css";
import "antd/dist/antd.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePageLayout from "./layout/HomePageLayout";
import { publicRoutes } from "./config/appRouter";
import PrivateRoute from "./config/privateRouter";

function App() {
    const getLayout = (layout) => {
        if (layout === null) return Fragment;
        else if (layout === "HomePageLayout") return HomePageLayout;
        else return DefaultLayout;
    };
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = getLayout(route.layout);
                        const Page = route.component;
                        const privateRoute = route.isPrivateRouter;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact
                                element={
                                    <Layout>
                                        {privateRoute === true ? (
                                            <PrivateRoute>
                                                <Page />
                                            </PrivateRoute>
                                        ) : (
                                            <Page />
                                        )}
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
