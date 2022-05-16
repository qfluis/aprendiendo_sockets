import { useContext, useState } from "react";
import { SocketContext } from '../context/SocketContext';
import { Salas } from '../components/Salas';
import { Chat } from '../components/Chat';

function HomePage() {

  const { online } = useContext( SocketContext )

  const [ sala, setSala ] = useState('');

  return (
    <div className="container" >
      <h1>SmapChat</h1>
      <hr />
      <div>
          Service status:&nbsp;
          {
            (online)
            ?<span className="text-success">Online</span>
            :<span className="text-danger">Offline</span>
          }
      </div>
      <hr />
      <div className="row">
        <div className="col-md-3">
          <h2>Salas</h2>
          <Salas setSala={setSala} />
        </div>
        <div className="col-md-9">
          <h2>Chat {sala}</h2>
          <Chat sala={sala}/>
        </div>
          
      </div>
    </div>
  );
}

export default HomePage;
