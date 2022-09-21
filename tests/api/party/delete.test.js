process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../../app');
const testDb = require('../../testDatabase');
const { partyApiUrl } = require('../../apiUrls');

describe('DELETE /api/v1/parties/:id', () => {
  before(async () => testDb.connect());

  afterEach(async () => testDb.dropCollections());

  after(async () => testDb.close());

  it('returns empty json', async () => {
    const party = await testDb.initializeParty('player');
    const res = await request(app).delete(partyApiUrl + party.id);
    expect(Object.keys(res.body.data).length).to.be.equal(0);
  });

  it('DELETE & GET(all) returns json w/ empty data field', async () => {
    const party = await testDb.initializeParty('player');
    const partyDeleteRes = await request(app).delete(partyApiUrl + party.id);
    const partyGetRes = await request(app).get(partyApiUrl).query({ partyType: 'player' });
    expect(Object.keys(partyDeleteRes.body.data).length).to.be.equal(0);
    expect(partyGetRes.body.data.length).to.be.equal(0);
  });

  it('DELETE & GET(by id) returns json w/ error', async () => {
    const party = await testDb.initializeParty('player');
    const partyDeleteRes = await request(app).delete(partyApiUrl + party.id);
    const partyGetRes = await request(app).get(partyApiUrl + party.id);
    expect(partyGetRes.body).to.contain.property('error');
    expect(partyGetRes.status).to.equal(404);
  });

  it('POST & DELETE returns empty json', async () => {
    const character1 = await testDb.initializeCharacter('player');
    const character2 = await testDb.initializeCharacter('player');
    const partyFilledData = {
      name: 'Party Test',
      type: 'player',
      characters: [character1.id, character2.id],
    };
    const partyRes = await request(app).post(partyApiUrl).send(partyFilledData);
    const { _id: id } = partyRes.body.data;
    const res = await request(app).delete(partyApiUrl + id);
    expect(Object.keys(res.body.data).length).to.be.equal(0);
  });
});
