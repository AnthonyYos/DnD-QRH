import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Form from '../Form/Form';
import Input from '../Form/Input';
import Select from '../Form/Select';
import Button from '../UI/Button';
import { alignmentOptions } from '../../util/alignmentOptions';
import StatInput from '../Form/StatInput';
import { update } from '../../util/functions/update';
import LoadingSpinner from '../UI/LoadingSpinner';
import CharacterType from '../../util/CharacterTypeURL';
import ApiUrl from '../../util/apiUrl';

export default function UpdateCharacter({ characterType }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: character,
    isPending,
    error,
    setData: setCharacter,
  } = useFetch(`${ApiUrl.CHARACTERS}/${id}`);
  const [updated, setUpdated] = useState();

  const btnLabel = characterType === CharacterType.PLAYER ? 'Update Player' : 'Update Enemy';

  const onSubmit = e => {
    const { str, dex, con, int, wis, cha, ...partialData } = e;
    const { str_mod, dex_mod, con_mod, int_mod, wis_mod, cha_mod, ...rest } = partialData;

    const updatedCharacter = {
      ...rest,
      stats: { str, dex, con, int, wis, cha },
      modifiers: { str_mod, dex_mod, con_mod, int_mod, wis_mod, cha_mod },
    };
    try {
      const url = `${ApiUrl.CHARACTERS}${id}`;
      update(url, updatedCharacter);
      setUpdated(true);
      setCharacter(updatedCharacter);
      switch (characterType) {
        case CharacterType.PLAYER:
          return navigate(`/players/${id}`);
        case CharacterType.ENEMY:
          return navigate(`/enemies/${id}`);
        default:
          setUpdated(false);
          return navigate(`${ApiUrl.CHARACTER}/${id}`);
      }
    } catch (error) {
      console.log(error, 'errrororor');
    }
  };

  return (
    <React.Fragment>
      {isPending && <LoadingSpinner />}
      {error && <div>{error}</div>}
      {character && (
        <section className='row'>
          <div className='col-sm-4 offset-sm-4 card'>
            <Form formData={character} onSubmit={onSubmit}>
              <Input name='name' label='Name' className='col-4 offset-4' />
              <Input name='race' label='Race' className='col-4 m-3' />
              <Input name='armorClass' label='Armor Class' type='number' min={1} max={500} />
              <Input name='health' label='Health' type='number' min={1} max={500} />
              <Input name='speed' label='Speed' type='number' min={1} max={120} />
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
