import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Form from '../Form/Form';
import Input from '../Form/Input';
import Button from '../UI/Button';
import StatInput from '../Form/StatInput';
import LoadingSpinner from '../UI/LoadingSpinner';
import CharacterType from '../../util/CharacterType';
import ApiUrl from '../../util/apiUrl';
import useAxiosFunction from '../../hooks/useAxiosFunction';
import characterApiAxios from '../../util/apis/characters';

export default function UpdateCharacter({ characterType }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [updated, setUpdated] = useState();

  const {
    response: character,
    loading,
    error,
    setResponse: setCharacter,
    axiosFetch,
  } = useAxiosFunction();

  useEffect(() => {
    const getData = () => {
      axiosFetch({
        axiosInstance: characterApiAxios,
        method: 'get',
        url: `/${id}`,
      });
    };
    getData();
  }, []);

  const btnLabel = 'Update Character';

  const onSubmit = formdata => {
    const updateData = { ...formdata };
    try {
      axiosFetch({
        axiosInstance: characterApiAxios,
        method: 'put',
        url: `/${id}`,
        requestConfig: {
          data: updateData,
        },
      });
      setUpdated(true);
      setCharacter(updateData);
      return navigate(`/characters/${id}`);
    } catch (error) {
      console.log(error, 'failed to update');
      setUpdated(false);
      return navigate(`characters/${id}`);
    }
  };

  return (
    <React.Fragment>
      {loading && <LoadingSpinner />}
      {error && <div>{error}</div>}
      {character && (
        <section className='row'>
          <div className='col-sm-4 offset-sm-4 card'>
            <Form formData={character} onSubmit={onSubmit}>
              <Input name='name' label='Name' />
              <Input
                name='meta'
                label='Meta'
                placeholder='Add info - class, species, size, etc...'
              />
              <Input name='armorClass' label='Armor Class' />
              <Input name='health' label='Health' />
              <Input name='speed' label='Speed' />
              <Input name='skills' label='Skills' />
              <Input name='senses' label='Senses' />
              <Input name='languages' label='Languages' />
              <Input
                name='saving_throws'
                label='Saving Throws'
                placeholder='con +6, int +8, wis +6'
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
              <Button className='btn btn-success offset-4 col-4 my-4' type='submit'>
                {btnLabel}
              </Button>
            </Form>
          </div>
          {updated && <h5 className='text-center m-4'>Updated {character.name}</h5>}
        </section>
      )}
    </React.Fragment>
  );
}
