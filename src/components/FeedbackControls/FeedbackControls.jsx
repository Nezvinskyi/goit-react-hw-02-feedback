import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import './FeedbackControls.scss';


const FeedbackControls = ({ options, onLeaveFeedback }) => (
	<div className="controlsContainer">
		<ButtonGroup size="large" color="secondary" aria-label="outlined primary button group">
			{
				options.map(option => (
					<Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
				))
			}
		</ButtonGroup>
	</div>
)
 
export default FeedbackControls;