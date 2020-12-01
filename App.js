import FullName from './Profile/FullName';
import Adr from './Profile/Address';
import ProfileP from './Profile/ProfilPhoto';
import './App.css';
import {Card,Button} from 'react-bootstrap';
function App() {
  return (
    <>
    <div className="App-header">
    <Card style={{ width: '400px' }}>
    <ProfileP/>
  <Card.Body>
    <Card.Title style={{ color: 'red' }}><FullName/></Card.Title>
    <Card.Text style={{ color: 'yellow' }}>
      <Adr/>
    </Card.Text>
    <Button variant="primary" href="https://www.facebook.com/mouna.hd.75/">Facebook Profile</Button>
  </Card.Body>
</Card>
</div>
    </>
  );
}