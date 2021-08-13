// Core
import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

// Components
import { PartyItem } from '../party-item/party-item';

// Types
import { AppState } from '../../store/app/app';
import { ICharacter } from '../../types/character';

export const Party: FC = () => {
  const { partyCharacters, partyCharacterBlocks } = useSelector((state: AppState) => state);

  return (
    <section className="game__party party">
      <h2 className="party__caption">Party</h2>
      <ul className="party__list">
        {partyCharacterBlocks.map(
          (blockName, id): ReactElement => (
            <PartyItem
              key={blockName}
              partyCharacterBlockName={blockName}
              partyCharacter={
                partyCharacters.filter((item: ICharacter) => item.name.includes(blockName))[0]
              }
            />
          ),
        )}
      </ul>
    </section>
  );
};
