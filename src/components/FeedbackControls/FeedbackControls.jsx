import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import './FeedbackControls.scss';


const FeedbackControls = ({ onLeaveFeedback }) => (
	<div className="controlsContainer">
		<ButtonGroup size="large" color="secondary" aria-label="outlined primary button group">
			<Button onClick={() => onLeaveFeedback('good')}>Good</Button>
			<Button onClick={() => onLeaveFeedback('neutral')}>Neutral</Button>
			<Button onClick={() => onLeaveFeedback('bad')}>Bad</Button>
		</ButtonGroup>
	</div>
)
 
export default FeedbackControls;