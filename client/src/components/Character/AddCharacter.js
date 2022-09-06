import React from 'react';
import { useNavigate } from 'react-router-dom';
import { add } from '../../util/functions/add';
import Form from '../Form/Form';
import Input from '../Form/Input';
import Select from '../Form/Select';
import Button from '../UI/Button';
import { alignmentOptions } from '../../util/alignmentOptions';
import StatInput from '../Form/StatInput';
import ApiUrl from '../../util/apiUrl';
import CharacterType from '../../util/CharacterTypeURL';

export default function AddCharacter({ characterType }) {
  const navigate = useNavigate();

  const btnLabel = characterType === CharacterType.PLAYER ? 'Add Player' : 'Add Enemy';

  const onSubmit = formData => {
    const { str, dex, con, int, wis, cha, ...partialData } = formData;
    const { str_mod, dex_mod, con_mod, int_mod, wis_mod, cha_mod, ...rest } = partialData;

    const newCharacter = {
      type: characterType,
      ...rest,
      stats: { str, dex, con, int, wis, cha },
      modifiers: { str_mod, dex_mod, con_mod, int_mod, wis_mod, cha_mod },
    };

    try {
      console.log(newCharacter);
      const url = `${ApiUrl.CHARACTERS}`;
      add(newCharacter, url);
      switch (characterType) {
        case CharacterType.PLAYER:
          return navigate('/players');
        case CharacterType.ENEMY:
          return navigate('/enemies');
        default:
          return navigate('/');
      }
    } catch (error) {
      console.log(error, 'errrororor');
    }
  };

  return (
    <React.Fragment>
      <section className='row'>
        <div className='col-sm-4 offset-sm-4 card'>
          <Form onSubmit={onSubmit}>
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
            <Button className='btn btn-success offset-4 col-4' type='submit'>
              {btnLabel}
            </Button>
          </Form>
        </div>
      </section>
    </React.Fragment>
  );
}
