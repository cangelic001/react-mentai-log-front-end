import { Link } from 'react-router';

const LogList = (props) => {

    console.log('logs data hehe', props.logs);

    return (
      <div>
        {props.logs.map((log) => (
          <Link key={log._id} to={`/logs/${log._id}`}>
          <article>
            <header>
              <h2>{log.title}</h2>
              <p>
                {`${log.author.username} posted on
                ${new Date(log.createdAt).toLocaleDateString()}`}
              </p>
            </header>
            <p>{log.text}</p>
          </article>
        </Link>
      ))}
      </div>
    );
  };
  
  export default LogList;
  