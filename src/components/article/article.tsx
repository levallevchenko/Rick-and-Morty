import React, { FC } from 'react';
import { Data } from '../data/data';
import { Content } from '../content/content';
import { Party } from '../party/party';

export const Article: FC = () => (
  <article className="game">
    <Data />
    <Content />
    {/* <Party /> */}
  </article>
);
