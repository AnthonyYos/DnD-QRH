process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../../app');
const testDb = require('../../testDatabase');
const { characterApiUrl } = require('../../apiUrls');
const updateData = { name: 'Updated Name Test' };

describe('PUT /api/v1/characters/:id', () => {
  before(async () => testDb.connect());

  afterEach(async () => testDb.dropCollections());

  after(async () => testDb.close());

  it('Successfully update character, returns json w/ updated character data', async () => {
    const character = await testDb.initializeCharacter('player');
    const res = await request(app)
      .put(characterApiUrl + character.id)
      .send(updateData);
    expect(res.body.data.name).to.not.equal(character.name);
  });

  it('Successfully POST & PUT character data', async () => {
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
    const res = await request(app)
      .put(characterApiUrl + id)
      .send(updateData);
    expect(res.body.data.name).to.not.equal(postResponse.name);
  });

  it('Incorrect id good format, returns status code 404 & json w/ error property', async () => {
    const incorrectID = 111111111111;
    const res = await request(app)
      .put(characterApiUrl + incorrectID)
      .send(updateData);
    expect(res.status).to.equal(404);
    expect(res.body).to.contain.property('error');
  });

  // it('Incorrect id wrong format, returns status code 500 & json w/ error property', async () => {
  //   const incorrectID = 11;
  //   const res = await request(app)
  //     .put(characterApiUrl + incorrectID)
  //     .send(updateData);
  //   expect(res.status).to.equal(404);
  //   expect(res.body).to.contain.property('error');
  // });
});
