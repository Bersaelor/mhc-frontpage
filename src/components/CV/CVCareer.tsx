import type { Component } from 'solid-js';
import { For } from 'solid-js';
import CVCareerStep from './CVCareerStep';
import steps from '../../data/careersteps';

const CVSectionHeader: Component = () => {

  return (
    <For each={steps.reverse()}>
      {(step) =>
        <CVCareerStep step={step} />
      }
    </For>
  );
};

export default CVSectionHeader;