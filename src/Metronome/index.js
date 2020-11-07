import "../styles/metronome.scss";
import Dot from "./Dot";

function Marionome() {
	return (
		<div className='container'>
			<div className='metronome'>
				<Dot />
				<Dot />
				<Dot />
				<Dot />
			</div>
		</div>
	);
}

export default Marionome;
