class cLike {

	constructor(structure) {
		this.value = structure;
	}

	toDisplay() {
		return 'type '+typeof this.value;
	}

	toValue() {
		return this.value;
	}

	compare(valueToCompare) {
		return typeof this.value === typeof valueToCompare;
	}

	toSimpler() {

	return getStructure(this.value)

		function getStructure (structure, prev) {

			prev = prev || structure;

			Object.entries(structure).forEach(([name, value]) => {
				if (typeof value === 'object') {
					return Object.assign({},
						structure,
						getStructure(value)
					)
				}

				// console.log(structure)
				structure = Object.assign({},
					structure,
					{[name]: like(value)}
				)
				// console.log(2, structure)
			})

			return structure;

			// return console.log(
				// structure
				// JSON.stringify(structure, null, 2)
			// )
		}

	}

}

const like = (structure) => {
	return new cLike(structure);
}
export default like;

export const isInstanceOfLike = (object) => {
	return object instanceof cLike;
};
