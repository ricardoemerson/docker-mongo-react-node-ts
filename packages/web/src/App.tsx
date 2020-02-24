import React, { useEffect } from "react";
import serverAPI from "./services/serverAPI";

function App() {
    useEffect(() => {
        (async () => {
            const data = await serverAPI.get("/data");

            console.log(data);
        })();
    }, []);

    return <div>Hello, world! hahaha</div>;
}

export default App;
