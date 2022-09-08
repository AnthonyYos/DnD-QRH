process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../../app');
const testDb = require('../../testDatabase');

const characterApiUrl = '/api/v1/characters';
const characterIdApiUrl = '/api/v1/characters/';

describe('Get /api/v1/characters', () => {
  before(async () => testDb.connect());

  afterEach(async () => testDb.dropCollections());

  after(async () => testDb.close());

  it('returns w/ empty data object', async () => {
    const res = await request(app).get(characterApiUrl).query({ characterType: 'player' });
    expect(res.body).to.contain.property('success');
    expect(res.body.success).to.equal(true);
    expect(res.body.data.length).to.equal(0);
  });

  it('returns a character object of type player', async () => {
    await testDb.initializeCharacter('player');
    const res = await request(app).get(characterApiUrl).query({ characterType: 'player' });
    expect(res.body).to.contain.property('success');
    expect(res.body.success).to.equal(true);
    expect(res.body.data.length).to.equal(1);
  });

  it('returns w/ empty object', async () => {
    const res = await request(app).get(characterApiUrl).query({ characterType: 'enemy' });
    expect(res.body).to.contain.property('success');
    expect(res.body.success).to.equal(true);
    expect(res.body.data.length).to.equal(0);
  });

  it('returns a character object of type enemy', async () => {
    await testDb.initializeCharacter('enemy');
    const res = await request(app).get(characterApiUrl).query({ characterType: 'enemy' });
    expect(res.body).to.contain.property('success');
    expect(res.body.success).to.equal(true);
    expect(res.body.data.length).to.equal(1);
  });
});

describe('Get /api/v1/characters/:id', () => {
  before(async () => testDb.connect());

  afterEach(async () => testDb.dropCollections());

  after(async () => testDb.close());

  it('returns json w/ error property', async () => {
    const fakeId = '111111111111';
    const res = await request(app).get(characterIdApiUrl + fakeId);
    expect(res.body).to.contain.property('success');
    expect(res.body).to.contain.property('error');
    expect(res.body.success).to.equal(false);
  });

  it('returns json w/ character data', async () => {
    const character = await testDb.initializeCharacter('player');
    const res = await request(app).get(characterIdApiUrl + character._id);
    expect(res.body).to.contain.property('success');
    expect(res.body.success).to.equal(true);
    expect(res.body).to.contain.property('data');
    expect(res.body.data._id).to.equal(character.id);
  });
});
