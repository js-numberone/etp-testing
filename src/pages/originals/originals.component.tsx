import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import IconButton from '../../components/icon-button/icon-button.component';

import './originals.styles.scss';

const Originals = () => {
	function createData(name, age, sex, country, salary) {
		return { name, age, sex, country, salary };
	}
	// add data
	const rows = [
		createData('John', 45, 'Male', 'Canada', 5000),
		createData('Mary', 25, 'Female', 'London', 8500),
		createData('Nick', 31, 'Male', 'America', 7800),
		createData('Sunil', 65, 'Male', 'London', 4800),
		createData('Rebecca', 51, 'Female', 'America', 7500),
	];
	return (
		<div className='container'>
			<h2>Original Assets & Liabilities</h2>
			<IconButton />
			<TableContainer className='table-container'>
				<Table className='table' aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align='right'>Age</TableCell>
							<TableCell align='right'>Sex</TableCell>
							<TableCell align='right'>Country</TableCell>
							<TableCell align='right'>Salary&nbsp;($)</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => (
							<TableRow key={row.name}>
								<TableCell component='th' scope='row'>
									{row.name}
								</TableCell>
								<TableCell align='right'>{row.age}</TableCell>
								<TableCell align='right'>{row.sex}</TableCell>
								<TableCell align='right'>{row.country}</TableCell>
								<TableCell align='right'>{row.salary}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Originals;
