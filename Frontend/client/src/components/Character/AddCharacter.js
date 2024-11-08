import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../Form/Form';
import Input from '../Form/Input';
import Button from '../UI/Button';
import StatInput from '../Form/StatInput';
// import CharacterType from '../../util/CharacterType';
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

  const btnLabel = 'Add Character';

  const onSubmit = formData => {
    const newCharacterData = {
      // type: characterType,
      ...formData,
    };
    console.log(newCharacterData);
    try {
      addCharacter(newCharacterData);
      if (error) throw error;
      // switch (characterType) {
      //   case CharacterType.PLAYER:
      //     return navigate('/players');
      //   case CharacterType.ENEMY:
      //     return navigate('/enemies');
      //   default:
      //     return navigate('/');
      // }
      return navigate('/characters');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <section className='row'>
        <div className='col-sm-4 offset-sm-4 card'>
          <Form onSubmit={onSubmit}>
            <Input name='name' label='Name' />
            <Input name='meta' label='Meta' placeholder='Add info - species, size, shape, etc...' />
            <Input name='armorClass' label='Armor Class' />
            <Input name='health' label='Health' />
            <Input name='speed' label='Speed' />
            <Input name='skills' label='Skills' />
            <Input name='senses' label='Senses' />
            <Input name='languages' label='Languages' />
            <Input
              name='saving_throws'
              label='Saving Throws'
              placeholder='con +6, int +8, wis +6...'
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
