import { useParams } from 'react-router';
import { useState, useEffect, useContext } from 'react';
import * as logService from '../../services/logService';

import { UserContext } from '../../contexts/UserContext';

const LogDetails = (props) => {
    const { logId } = useParams();

    const { user } = useContext(UserContext);
    
    console.log('logId', logId); // confirm you can access logId here

    const [log, setLog] = useState(null);

    useEffect(() => {
        const fetchLog = async () => {
          const logData = await logService.show(logId);
          setLog(logData);
        };
        fetchLog();
      }, [logId]);
    
      // Verify the log state is set correctly
      console.log('log state:', log);

      if (!log) return <main>Loading...</main>; 

    return (
        <div>
            <section>
                <header>
                    <p>{log.category.toUpperCase()}</p>

                    <h1>{log.title}</h1>
                    
                    <p>
                        {`${log.author.username} posted on
                        ${new Date(log.createdAt).toLocaleDateString()}`}
                    </p>

                    {log.author._id === user._id && (
                    <>
                        <Link to={`/logs/${logId}/edit`}>Edit</Link>
                        <button onClick={() => props.handleDeleteLog(logId)}>
                            Delete
                        </button>
                    </>
                    )}

                </header>

                <p>{log.text}</p>

            </section>
        </div>
    );
};

export default LogDetails;