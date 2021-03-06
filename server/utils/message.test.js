const expect = require('expect')

const {generateMessage} = require('./message')

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Mo'
		var text = 'A message'
		var message = generateMessage(from, text)

		expect(message.createdAt).toBeA('number')
		expect(message).toInclude({from, text})
	})
})