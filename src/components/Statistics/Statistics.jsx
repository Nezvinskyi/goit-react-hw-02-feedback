import './Statistics.scss'
import Icon from '@material-ui/core/Icon';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';


const Statistics = ({ good, neutral, bad, total, positive }) => (
<div className="Statistics">
		<ul >
			<li>Good: {good}</li>
			<li>Neutral: {neutral} </li>
			<li>Bad: {bad} </li>
			<li>Total: {total} </li>
			<li>Positive feedback: {positive}%</li>
		</ul>
		<Icon id = 'icon' color="secondary">{positive > 60 ? <ThumbUpIcon /> : positive > 40 ?<ThumbsUpDownIcon /> : <ThumbDownIcon/> }</Icon>
						
	</div>
)

 
export default Statistics;