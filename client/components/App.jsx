import Header from './Header';
import Offer from './Offer';
import Perks from './Perks';
import SocialMedia from './SocialMedia';
import Feed from './Feed';

const App = () => (
	<div>
		<div id="header">
			<Header />
		</div>
		<div id="offer">
			<Offer />
		</div>
		<div id="perks">
			<Perks />
		</div>
		<div id="social">
			<SocialMedia />
		</div>
		<div id="feed">
			<Feed />
		</div>
	</div>
)

export default App;
