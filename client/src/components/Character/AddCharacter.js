import React from 'react';
import { useNavigate } from 'react-router-dom';
import ApiEndpoint from '../../context/ResourceType';
import { add } from '../../util/functions/add';
import Form from '../Form/Form';
import Input from '../Form/Input';
import Select from '../Form/Select';
import Button from '../UI/Button';
import { alignmentOptions } from '../../util/alignmentOptions';

export default function AddCharacter({ resourceType }) {
  const navigate = useNavigate();

  const btnLabel = resourceType === ApiEndpoint.PLAYER ? 'Add Player' : 'Add Enemy';
  const characterType = resourceType === ApiEndpoint.PLAYER ? 'player' : 'enemy';

  const onSubmit = e => {
    const newCharacter = {
      ...e,
      type: characterType,
      speed: 50,
      stats: { str: 5, dex: 5, con: 5, int: 5, wis: 5, cha: 5 },
      armorClass: 20,
    };
    try {
      console.log(newCharacter);
      // add(newCharacter, resourceType);
      // switch (resourceType) {
      //   case ApiEndpoint.PLAYER:
      //     return navigate('/players');
      //   case ApiEndpoint.ENEMY:
      //     return navigate('/enemies');
      //   default:
      //     return navigate('/');
      // }
    } catch (error) {
      console.log(error, 'errrororor');
    }
  };

  return (
    <React.Fragment>
      <section className='row'>
        <div className='col-sm-4 offset-sm-4 card'>
          <Form onSubmit={onSubmit}>
            <Input name='name' label='Name' className='form-group col-5 offset-4' />
            <Input name='race' label='Race' />
            <Input name='health' label='Health' type='number' min={1} max={500} />
            <Select
              name='alignment'
              label='Alignment'
              className='form-group col-5 offset-4'
              options={alignmentOptions}
            />
            <Button className='btn btn-success offset-5 col-2' type='submit'>
              {btnLabel}
            </Button>
          </Form>
        </div>
      </section>
    </React.Fragment>
  );
}
