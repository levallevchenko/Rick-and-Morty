import React, { FC } from 'react';
import { ICharacter } from '../../types/character';

type Props = {
  partyCharacter: ICharacter,
  partyCharacterBlockName: string,
};

export const PartyItem: FC<Props> = ({ partyCharacter, partyCharacterBlockName }: Props) => {
  return (
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
};
