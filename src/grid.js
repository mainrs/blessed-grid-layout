// @flow
type GridLayoutOptions = {
	columns: number,
	rows: number,
	margin?: number,

	parent: any
};

type AddElementOptions = {
	column: number,
	row: number,
	height: number,
	width: number,
	border?: boolean,

	element: Function,
	options?: Object
};

type BlessedNodeArgs = {
	top: string,
	left: string,
	height: string,
	width: string,

	border?: Object
};

class GridLayout {
	cellHeight: number;

	cellWidth: number;

	options: GridLayoutOptions;

	constructor(options: GridLayoutOptions) {
		this.options = options;
		this.options.margin = this.options.margin || 0;

		// Precalculate needed values for later.
		this.cellHeight = (100 - this.options.margin * 2) / this.options.rows;
		this.cellWidth = (100 - this.options.margin * 2) / this.options.columns;
	}

	add(args: AddElementOptions) {
		const top = args.row * this.cellHeight + this.options.margin;
		const left = args.column * this.cellWidth + this.options.margin;

		const height = this.cellHeight * args.height;
		const width = this.cellWidth * args.width;

		const passedProperties: BlessedNodeArgs = {
			...args.options,
			top: `${top}%`,
			left: `${left}%`,
			height: `${height}%`,
			width: `${width}%`
		};

		if (args.border) {
			passedProperties.border = {
				type: 'line',
				fg: 'cyan'
			};
		}

		const instance = args.element(passedProperties);
		this.options.parent.append(instance);

		return instance;
	}
}

module.exports = GridLayout;
