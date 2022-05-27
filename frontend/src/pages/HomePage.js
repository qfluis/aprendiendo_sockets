import { useContext, useState } from "react";
import { SocketContext } from '../context/SocketContext';
import { Salas } from '../components/Salas';
import { Chat } from '../components/Chat';
import { Map } from '../components/Map';

function HomePage() {

  const { online } = useContext( SocketContext )

  const [ sala, setSala ] = useState('');

  return (
    <>
    <p className="service-status">
          Service status:&nbsp;
          {
            (online)
            ?<span className="text-success">Online</span>
            :<span className="text-danger">Offline</span>
          }
    </p>
    <Map />
    <div className="container" >
      
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
    </>
  );
}

export default HomePage;
