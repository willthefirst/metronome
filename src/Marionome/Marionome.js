import './styles/marionome.scss';
import Mario from './Mario'
import Pipe from './Pipe'

function Marionome() {
  return (
    <div className="marionome">
      <Mario />
      {/* <Pipe />
      <Pipe />
      <Pipe /> */}
      <Pipe />
    </div>
  );
}

export default Marionome;
