import React from 'react';
import { useSelector } from 'react-redux';
import PartyItem from '../party-item/party-item';

function Party() {
  const { partyCharacters, partyCharacterBlocks } = useSelector(
    (state) => state
  );

  return (
    <section className="game__party party">
      <h2 className="party__caption">Party</h2>
      <ul className="party__list">
        {partyCharacterBlocks.map((blockName, id) => (
          <PartyItem
            key={blockName}
            partyCharacterBlockName={blockName}
            partyCharacter={
              partyCharacters.filter((item) => item.name.includes(blockName))[0]
            }
          />
        ))}
      </ul>
    </section>
  );
}

export default Party;
