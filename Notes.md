This about how I would convert an array to its like value
adding numbers to each value

ex:
	eachLike({name: 'July'}, 3)
when asked for its like value would print
	[
		{name: 'July_01'},
		{name: 'July_02'}
	]

simple should be able to convert strings, number objects or arrays, write more test cases

How to represent a sort of eachLike

{
	name: 'John'.
	sons: at least two like:
		{
			name: 'July'
		},
}

What about to add new lines when 
	entriesToConsoleLog - Not a good idea, it converts array of line to string
	on compare, compare does not add lines

The best ways seems to when in entriesToConsoleLog, create a 


	[
		{
			name: 'July'
		}
	]
