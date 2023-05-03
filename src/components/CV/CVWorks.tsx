import type { Component } from 'solid-js';
import { For } from 'solid-js';
import CVWork from './CVWork';
import works from '../../data/works.js';
import type { Work } from '../../types/Work';

const CVWorks: Component = () => {

  return (
    <For each={Object.entries(works).sort(((a: [string, Work], b: [string, Work]) => a[1].release < b[1].release ? 1 : -1))}>
      {(item) =>
        <CVWork work={item[1]} />
      }
    </For>
  );
};

export default CVWorks;