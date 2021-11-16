import { expect } from 'chai';
import * as sinon from 'sinon';

import moduleUnderTest from '../src/moduleUnderTest';
import * as stubee from '../src/stubee';

describe('Example stub', () => {
	let sandbox: sinon.SinonSandbox = sinon.createSandbox();

	beforeEach(() => {
		sandbox.stub(stubee, 'default').resolves('this is working');
	})

	afterEach(() => {
		sandbox.restore();
	})

	it('is correctly stubbed', async () => {
		expect(await new moduleUnderTest().run('arg1', 'arg2')).to.equal('this is working');
	})
})
