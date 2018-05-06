// @flow
const GridLayout = require('../grid');

// Setup parent node mocking.
jest.mock('../__mocks__/parent.js');
const MockedParent = require('../__mocks__/parent.js');
const mockedAppend = jest.fn();
MockedParent.mockImplementation(() => {
	return {
		append: mockedAppend
	};
});

describe('GridLayout', () => {
	const parent = new MockedParent();
	let grid = null;

	const testConditions = (gridParams, expectParams) => {
		const element = jest.fn();
		// $FlowFixMe
		grid.add({ ...gridParams, element });

		expect(element).toHaveBeenCalledTimes(1);
		expect(element.mock.calls[0][0]).toEqual(expectParams);
		expect(mockedAppend).toHaveBeenCalledTimes(1);
	};

	beforeEach(() => {
		grid = new GridLayout({
			columns: 2,
			rows: 2,
			parent
		});
		mockedAppend.mockReset();
	});

	describe('renders with same-sized grid elements', () => {
		it('should properly render the top left component', () => {
			const gridParams = {
				column: 0,
				row: 0,

				height: 1,
				width: 1
			};
			const expectParams = {
				left: '0%',
				top: '0%',
				height: '50%',
				width: '50%'
			};

			testConditions(gridParams, expectParams);
		});
		it('should properly render the top right component', () => {
			const gridParams = {
				column: 1,
				row: 0,

				height: 1,
				width: 1
			};
			const expectParams = {
				left: '50%',
				top: '0%',
				height: '50%',
				width: '50%'
			};

			testConditions(gridParams, expectParams);
		});
		it('should properly render the bottom left component', () => {
			const gridParams = {
				column: 0,
				row: 1,

				height: 1,
				width: 1
			};
			const expectParams = {
				left: '0%',
				top: '50%',
				height: '50%',
				width: '50%'
			};

			testConditions(gridParams, expectParams);
		});
		it('should properly render the bottom right component', () => {
			const gridParams = {
				column: 1,
				row: 1,

				height: 1,
				width: 1
			};
			const expectParams = {
				left: '50%',
				top: '50%',
				height: '50%',
				width: '50%'
			};

			testConditions(gridParams, expectParams);
		});
	});

	it('should render a border if requested', () => {
		const gridParams = {
			column: 1,
			row: 1,

			height: 1,
			width: 1,

			border: true
		};
		const expectParams = {
			left: '50%',
			top: '50%',
			height: '50%',
			width: '50%',
			border: {
				fg: 'white',
				type: 'line'
			}
		};

		testConditions(gridParams, expectParams);
	});
});
