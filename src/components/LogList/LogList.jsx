import { Link } from 'react-router';
import './LogList.css'
;
const LogList = (props) => {
    return (
      <>
        <h1 className="mentai-text">Logs</h1>
        <main className="log-list-container">
          {props.logs.map((log) => (
            <Link key={log._id} to={`/logs/${log._id}`} className="log-list-wrapper mentai-text">
              <article>
                <header>
                  <h2 className="title">{log.title}</h2>
                  <p className="salmon-text">
                    {`Posted on
                    ${new Date(log.createdAt).toLocaleDateString()}`}
                  </p>
                </header>
                <p>{log.text}</p>
              </article>
            </Link>
          ))}
        </main>
      </>
      );
};
export default LogList;
