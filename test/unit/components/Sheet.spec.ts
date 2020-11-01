import { describe, it } from 'mocha';
import { render as _render } from '@testing-library/svelte';
import { Sheet } from '@/components';
import { testPassedClassName } from '../utils';

function render(props: Record<string, any> = {}) {
  return _render(Sheet, {
    props,
  });
}

describe('Sheet', () => {
  it(
    'passes down classNames',
    testPassedClassName(() => ({
      wrapper: render(),
    }))
  );
});
