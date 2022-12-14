process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../../app');
const testDb = require('../../testDatabase');
const { characterApiUrl } = require('../../apiUrls');

describe('GET /api/v1/characters', () => {
  before(async () => testDb.connect());

  afterEach(async () => testDb.dropCollections());

  after(async () => testDb.close());

  it('returns json.body.data as empty object', async () => {
    const res = await request(app).get(characterApiUrl).query({ characterType: 'player' });
    expect(res.body.data.length).to.equal(0);
  });

  it('returns a character object w/ type field = player', async () => {
    await testDb.initializeCharacter('player');
    const res = await request(app).get(characterApiUrl).query({ characterType: 'player' });
    expect(res.body.data.length).to.equal(1);
  });

  it('returns json.body.data as empty object', async () => {
    const res = await request(app).get(characterApiUrl).query({ characterType: 'enemy' });
    expect(res.body.data.length).to.equal(0);
  });

  it('returns a character object w/ type field = enemy', async () => {
    await testDb.initializeCharacter('enemy');
    const res = await request(app).get(characterApiUrl).query({ characterType: 'enemy' });
    expect(res.body.data.length).to.equal(1);
  });
});

describe('Get /api/v1/characters/:id', () => {
  before(async () => testDb.connect());

  afterEach(async () => testDb.dropCollections());

  after(async () => testDb.close());

  it('Incorrect id good format, returns json w/ error property', async () => {
    const incorrectID = 111111111111;
    const res = await request(app).get(characterApiUrl + incorrectID);
    expect(res.body).to.contain.property('error');
    expect(res.status).to.equal(404);
  });

  // it('Incorrect id wrong format, returns w/ 500 status code', async () => {
  //   const incorrectID = 111;
  //   const res = await request(app).get(characterApiUrl + incorrectID);
  //   console.log(res.body);
  //   expect(res.status).to.equal(500);
  //   // expect(res.body).to.contain.property('error');
  // });

  it('returns json w/ character data', async () => {
    const character = await testDb.initializeCharacter('player');
    const res = await request(app).get(characterApiUrl + character._id);
    expect(res.body).to.contain.property('data');
    expect(res.body.data._id).to.equal(character.id);
  });
});
