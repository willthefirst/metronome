import "../styles/input.scss";
import Slider from 'react-rangeslider'

function InputRange(props) {
	const { orientation } = props; 
	// Next: create style orientations.
	return <Slider 
		orientation={orientation} 
		value={Math.random()*50}
	/>;
}

export default InputRange;
