import './Marionome.css';
import Mario from './Mario'
import Pipe from './Pipe'

function Marionome() {
  return (
    <div className="marionome">
      <Mario />
      <Pipe />
      <Pipe />
      <Pipe />
      <Pipe />
    </div>
  );
}

export default Marionome;
