process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../../app');
const testDb = require('../../testDatabase');
const { partyApiUrl } = require('../../apiUrls');
const updateData = { name: 'updated party test' };

describe('PUT /api/v1/parties/:id', () => {
  before(async () => testDb.connect());

  afterEach(async () => testDb.dropCollections());

  after(async () => testDb.close());

  it('returns json w/ updated data (no character refs)', async () => {
    const party = await testDb.initializeEmptyParty('player');
    const res = await request(app)
      .put(partyApiUrl + party.id)
      .send(updateData);
    expect(res.body.data.name).to.not.equal(party.name);
  });
});
