import { Outlet, Link } from "react-router-dom";
import RouterConfig from "./Routes";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    {RouterConfig.map((route, i) => {
                        return (
                            <li key={i}>
                                <Link to={route.path}>{route.sidebarName}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Layout;