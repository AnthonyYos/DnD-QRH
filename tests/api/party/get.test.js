process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../../app');
const testDb = require('../../testDatabase');
const { partyApiUrl } = require('../../apiUrls');

describe('GET /api/v1/parties', () => {
  before(async () => testDb.connect());

  afterEach(async () => testDb.dropCollections());

  after(async () => testDb.close());

  it('return json w/ empty data field', async () => {
    const res = await request(app).get(partyApiUrl).query({ partyType: 'player' });
    expect(res.body.data.length).to.equal(0);
  });

  it('return json w/ 1 player party in the data field (no character refs)', async () => {
    const party = await testDb.initializeEmptyParty('player');
    const res = await request(app).get(partyApiUrl).query({ partyType: 'player' });
    expect(res.body.data.length).to.equal(1);
    expect(res.body.data[0]._id).to.equal(party.id);
  });

  it('return json w/ 1 player party (has character refs)', async () => {
    const party = await testDb.initializeParty('player');
    const res = await request(app).get(partyApiUrl).query({ partyType: 'player' });
    expect(res.body.data[0].characters.length).to.equal(2);
  });

  it('return json w/ empty data field', async () => {
    const res = await request(app).get(partyApiUrl).query({ partyType: 'enemy' });
    expect(res.body.data.length).to.equal(0);
  });

  it('return json w/ 1 enemy party in the data field (no character refs)', async () => {
    const party = await testDb.initializeEmptyParty('enemy');
    const res = await request(app).get(partyApiUrl).query({ partyType: 'enemy' });
    expect(res.body.data.length).to.equal(1);
    expect(res.body.data[0]._id).to.equal(party.id);
  });

  it('return json w/ 1 enemy party (has character refs)', async () => {
    const party = await testDb.initializeParty('enemy');
    const res = await request(app).get(partyApiUrl).query({ partyType: 'enemy' });
    expect(res.body.data[0].characters.length).to.equal(2);
  });
});

describe('GET /api/v1/parties/:id', () => {
  before(async () => testDb.connect());

  afterEach(async () => testDb.dropCollections());

  after(async () => testDb.close());

  it('return json w/ 1 player party in the data field', async () => {
    const party = await testDb.initializeEmptyParty('player');
    const res = await request(app)
      .get(partyApiUrl + party.id)
      .query({ partyType: 'player' });
    expect(res.body.data._id).to.equal(party.id);
  });

  it('Incorrect id format, returns json w/ error property', async () => {
    const incorrectID = 111111111111;
    const res = await request(app).get(partyApiUrl + incorrectID);
    expect(res.body).to.contain.property('error');
    expect(res.status).to.equal(404);
  });
});
