process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../../app');
const testDb = require('../../testDatabase');
const { partyApiUrl } = require('../../apiUrls');
const emptyPartyData = { name: 'Party Test', type: 'player', characters: [] };

describe('POST /api/v1/parties', () => {
  before(async () => testDb.connect());

  afterEach(async () => testDb.dropCollections());

  after(async () => testDb.close());

  it('returns json w/ created party data (no character refs)', async () => {
    const res = await request(app).post(partyApiUrl).send(emptyPartyData);
    expect(res.body.data.name).to.equal('Party Test');
    expect(res.body.data.type).to.equal('player');
  });

  it('returns json w/ created party data (has character refs)', async () => {
    const character1 = await testDb.initializeCharacter('player');
    const character2 = await testDb.initializeCharacter('player');
    const partyFilledData = {
      name: 'Party Test',
      type: 'player',
      characters: [character1.id, character2.id],
    };
    const res = await request(app).post(partyApiUrl).send(partyFilledData);
    expect(res.body.data.name).to.equal('Party Test');
    expect(res.body.data.characters.length).to.equal(2);
    expect(res.body.data.characters[0]).to.equal(character1.id);
    expect(res.body.data.characters[1]).to.equal(character2.id);
  });

  it('Throw validaiton error', async () => {
    const res = await request(app).post(partyApiUrl).send({ name: 'Incomplete data' });
    expect(res.status).to.equal(400);
    expect(res.body).to.contain.property('error');
  });
});
