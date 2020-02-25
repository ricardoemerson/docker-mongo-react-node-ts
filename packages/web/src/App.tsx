import React, { useState, useEffect } from 'react';

import serverAPI from '~/services/serverAPI';

interface Data {
    data: { response: string };
}

function App() {
    const [response, setResponse] = useState<string>('waiting response...');

    useEffect(() => {
        (async () => {
            const { data }: Data = await serverAPI.get('/data');

            setResponse(data.response);
        })();
    }, []);

    return <div>Hello, world! Data from backend: {response}</div>;
}

export default App;
