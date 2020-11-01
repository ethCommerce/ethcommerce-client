import { describe, it } from 'mocha';
import { render as _render } from '@testing-library/svelte';
import { Button } from '@/components/button';
import { testPassedClassName, testTagName } from '../utils';

function render(props: Record<string, any> = {}) {
  return _render(Button, {
    props,
  });
}

describe('Button', () => {
  it(
    'passes down classNames',
    testPassedClassName(() => ({
      wrapper: render(),
    }))
  );

  it(
    'renders as button',
    testTagName(() => ({
      wrapper: render(),
      tagName: 'BUTTON',
    }))
  );

  it(
    'renders as anchor',
    testTagName(() => ({
      wrapper: render({ href: '#' }),
      tagName: 'A',
    }))
  );
});
