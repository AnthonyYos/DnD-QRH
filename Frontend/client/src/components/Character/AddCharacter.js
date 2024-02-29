import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../Form/Form';
import Input from '../Form/Input';
import Select from '../Form/Select';
import Button from '../UI/Button';
import { alignmentOptions } from '../../util/alignmentOptions';
import StatInput from '../Form/StatInput';
import CharacterType from '../../util/CharacterType';
import useAxiosFunction from '../../hooks/useAxiosFunction';
import axios from '../../util/apis/characters';

export default function AddCharacter({ characterType }) {
  const navigate = useNavigate();
  const { error, axiosFetch } = useAxiosFunction();

  const addCharacter = newCharacter =>
    axiosFetch({
      axiosInstance: axios,
      method: 'post',
      url: `/`,
      requestConfig: {
        data: newCharacter,
      },
    });

  const btnLabel = characterType === CharacterType.PLAYER ? 'Add Player' : 'Add Enemy';

  const onSubmit = data => {
    // const { str, dex, con, int, wis, cha, ...partialData } = data;
    // const { str_mod, dex_mod, con_mod, int_mod, wis_mod, cha_mod, ...rest } = partialData;

    const newCharacter = {
      type: characterType,
      ...data,
      // ...rest,
      // stats: { str, dex, con, int, wis, cha },
      // modifiers: { str_mod, dex_mod, con_mod, int_mod, wis_mod, cha_mod },
    };

    try {
      addCharacter(newCharacter);
      if (error) throw error;
      switch (characterType) {
        case CharacterType.PLAYER:
          return navigate('/players');
        case CharacterType.ENEMY:
          return navigate('/enemies');
        default:
          return navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <section className='row'>
        <div className='col-sm-4 offset-sm-4 card'>
          <Form onSubmit={onSubmit}>
            <Input name='name' label='Name' className='col-4 offset-4' />
            <Input
              name='meta'
              label='Meta'
              placeholder='Add info - species, size, shape, etc...'
              className='col-4 m-3'
            />
            <Input name='armorClass' label='Armor Class' type='number' min={1} max={500} />
            <Input name='health' label='Health' type='number' min={1} max={500} />
            <Input name='speed' label='Speed' />
            <Select
              name='alignment'
              label='Alignment'
              className='form-group col-5 offset-4'
              options={alignmentOptions}
            />
            <StatInput
              name='str'
              label='Str'
              type='number'
              className='row m-3'
              characterType={characterType}
            />
            <StatInput
              name='dex'
              label='Dex'
              type='number'
              className='row m-3'
              characterType={characterType}
            />
            <StatInput
              name='con'
              label='Con'
              type='number'
              className='row m-3'
              characterType={characterType}
            />
            <StatInput
              name='int'
              label='Int'
              type='number'
              className='row m-3'
              characterType={characterType}
            />
            <StatInput
              name='wis'
              label='Wis'
              type='number'
              className='row m-3'
              characterType={characterType}
            />
            <StatInput
              name='cha'
              label='Cha'
              type='number'
              className='row m-3'
              characterType={characterType}
            />
            <Button className='btn btn-success offset-4 col-4' type='submit'>
              {btnLabel}
            </Button>
          </Form>
        </div>
      </section>
    </React.Fragment>
  );
}
