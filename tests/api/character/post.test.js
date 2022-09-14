process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
const assert = require('chai').assert;
const request = require('supertest');
const app = require('../../../app');
const testDb = require('../../testDatabase');

const characterApiUrl = '/api/v1/characters';

describe('POST /api/v1/characters', () => {
  before(async () => testDb.connect());

  afterEach(async () => testDb.dropCollections());

  after(async () => testDb.close());

  it('Successfully post a player character', async () => {
    const res = await request(app)
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
    const id = res.body.data._id;
    const character = await request(app).get(`${characterApiUrl}/${id}`);
    expect(character.body.data.name).to.equal(res.body.data.name);
  });

  it('Throws ValidationError using incomplete data ', async () => {
    const res = await request(app).post(characterApiUrl).send({
      name: 'Incomplete Character Data',
    });
    expect(res.status).to.equal(400);
    expect(res.body).to.contain.property('error');
  });
});
