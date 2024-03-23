import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const errorPage = useRouteError();
    return (
        <div className="flex h-dvh items-center justify-center">
            <div>
                <div className="h-48 flex items-center justify-center">
                    <img className="h-full" src="assets/images/404.gif" alt=""/>
                </div>
                <h1 className="text-5xl text-amber-400 font-black"><span className="text-black">404</span> Not Found!
                </h1>
                <br />
                <p className="text-center font-medium text-gray-500">{errorPage.data}</p>
            </div>
        </div>
    );
};

export default ErrorPage;