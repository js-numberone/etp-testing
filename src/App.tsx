import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import SideBar from './components/sidebar/sidebar.component';
import SummaryPage from './pages/summary/summary.component';
import Checklist from './pages/checklist/checklist.component';
import GenDocs from './pages/gen-documents/gen-documents.component';
import Originals from './pages/originals/originals.component';
import Receipts from './pages/receipts/receipts.component';
import Disbursments from './pages/disbursments/disbursments.component';

function App() {
	return (
		<div className='main-container'>
			<div className='sidebar'>
				<SideBar />
			</div>
			<div className='stacked-components'>
				<Header />
				<div className='content-area'>
					<Switch>
						<Route exact path='/' component={SummaryPage} />
						<Route exact path='/checklist' component={Checklist} />
						<Route exact path='/gen-docs' component={GenDocs} />
						<Route exact path='/originals' component={Originals} />
						<Route exact path='/receipts' component={Receipts} />
						<Route exact path='/disbursments' component={Disbursments} />
					</Switch>
				</div>
			</div>
		</div>
	);
}
export default App;
