process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../../app');
const testDb = require('../../testDatabase');
const { characterApiUrl } = require('../../apiUrls');

describe('DELETE /api/v1/characters/:id', () => {
  before(async () => testDb.connect());

  afterEach(async () => testDb.dropCollections());

  after(async () => testDb.close());

  it('Successfully deletes character, returns json w/ empty object in data field', async () => {
    const character = await testDb.initializeCharacter('player');
    const res = await request(app).delete(characterApiUrl + character.id);
    expect(Object.keys(res.body.data).length).to.equal(0);
  });

  it('Successfully POST & DELETE character', async () => {
    const postResponse = await request(app)
      .post(characterApiUrl)
      .send({
        type: 'player',
        name: 'Character Test',
        race: 'Test',
        armorClass: '1',
        health: '1',
        speed: '1',
        alignment: 'Lawful Good',
        stats: {
          str: '1',
          dex: '1',
          con: '1',
          int: '1',
          wis: '1',
          cha: '1',
        },
        modifiers: {
          str_mod: '1',
          dex_mod: '1',
          con_mod: '1',
          int_mod: '1',
          wis_mod: '1',
          cha_mod: '1',
        },
      });
    const { _id: id } = postResponse.body.data;
    const res = await request(app).delete(characterApiUrl + id);
    expect(Object.keys(res.body.data).length).to.equal(0);
  });

  it('Returns status code 404 & json w/ error property', async () => {
    const fakeId = 111111111111;
    const res = await request(app).delete(characterApiUrl + fakeId);
    expect(res.status).to.equal(404);
    expect(res.body).to.contain.property('error');
  });
});
