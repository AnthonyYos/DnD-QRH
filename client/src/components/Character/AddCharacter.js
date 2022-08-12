import React from 'react';
import { useNavigate } from 'react-router-dom';
import ApiEndpoint from '../../context/ResourceType';
import { add } from '../../util/functions/add';
import Form from '../Form/Form';
import Input from '../Form/Input';
import Select from '../Form/Select';
import Button from '../UI/Button';
import { alignmentOptions } from '../../util/alignmentOptions';
import StatInput from '../Form/StatInput';

export default function AddCharacter({ resourceType }) {
  const navigate = useNavigate();

  const btnLabel = resourceType === ApiEndpoint.PLAYER ? 'Add Player' : 'Add Enemy';
  const characterType = resourceType === ApiEndpoint.PLAYER ? 'player' : 'enemy';

  const onSubmit = formData => {
    const newCharacter = {
      type: characterType,
      name: formData.name,
      race: formData.race,
      armorClass: formData.armorClass,
      health: formData.health,
      speed: formData.speed,
      alignment: formData.alignment,
      stats: {
        str: formData.str,
        dex: formData.dex,
        con: formData.con,
        int: formData.int,
        wis: formData.wis,
        cha: formData.cha,
      },
      modifiers: {
        str_mod: formData.str_mod,
        dex_mod: formData.dex_mod,
        con_mod: formData.con_mod,
        int_mod: formData.int_mod,
        wis_mod: formData.wis_mod,
        cha_mod: formData.cha_mod,
      },
    };
    try {
      console.log(newCharacter);
      add(newCharacter, resourceType);
      switch (resourceType) {
        case ApiEndpoint.PLAYER:
          return navigate('/players');
        case ApiEndpoint.ENEMY:
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
            <StatInput name='str' label='Str' type='number' className='row m-3' min={1} max={20} />
            <StatInput name='dex' label='Dex' type='number' className='row m-3' min={1} max={20} />
            <StatInput name='con' label='Con' type='number' className='row m-3' min={1} max={20} />
            <StatInput name='int' label='Int' type='number' className='row m-3' min={1} max={20} />
            <StatInput name='wis' label='Wis' type='number' className='row m-3' min={1} max={20} />
            <StatInput name='cha' label='Cha' type='number' className='row m-3' min={1} max={20} />
            {/* <StatsInput type='number' stats={['str']} /> */}
            <Button className='btn btn-success offset-4 col-4' type='submit'>
              {btnLabel}
            </Button>
          </Form>
        </div>
      </section>
    </React.Fragment>
  );
}
