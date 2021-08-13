// Core
import React, { FC } from 'react';

// Types
import { ICharacter } from '../../types/character';

type Props = {
  partyCharacter: ICharacter;
  partyCharacterBlockName: string;
};

export const PartyItem: FC<Props> = ({ partyCharacter, partyCharacterBlockName }: Props) => (
  <li className="party__item game__item">
    {partyCharacter && (
    <img
      className="party__img game__img"
      src={partyCharacter.image}
      alt={partyCharacter.name}
    />
    )}
    <p className="party__name">{partyCharacterBlockName}</p>
  </li>
);
