process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../../app');
const testDb = require('../../testDatabase');

const characterApiUrl = '/api/v1/characters/';

describe('Delete /api/v1/characters/:id', () => {
  before(async () => testDb.connect());

  afterEach(async () => testDb.dropCollections());

  after(async () => testDb.close());

  it('returns json w/ character data', async () => {
    const character = await testDb.initializeCharacter('player');
    const res = await request(app).delete(characterApiUrl + character.id);
    expect(res.body).to.contain.property('success');
    expect(res.body.success).to.equal(true);
    expect(Object.keys(res.body.data).length).to.equal(0);
  });
});
