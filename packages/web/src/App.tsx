import React, { useEffect, useState } from 'react';

import serverAPI from '~/services/serverAPI';

interface Data {
    data: { response: string };
}

function App() {
    const [response, setResponse] = useState<string>('waiting response...');

    useEffect(() => {
        (async () => {
            try {
                const { data }: Data = await serverAPI.get('/data');

                setResponse(data.response);
            } catch (err) {
                setResponse(err.toString());
            }
        })();
    }, []);

    return <div>Hello, world! Data from backend: {response}</div>;
}

export default App;
