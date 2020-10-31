import type { RenderResult } from "@testing-library/svelte";
import { expect } from "chai";

export type AsyncFunction<A = unknown, R = unknown> = (
  ...args: A[]
) => Promise<R>;

export type TestOptions<O = Record<string, unknown>> = () => {
  wrapper: RenderResult;
  props?: Record<string, unknown>;
  getElement?: (wrapper: RenderResult) => HTMLElement;
} & O;

export function getElement(wrapper): HTMLElement {
  return wrapper.container.firstChild.firstChild as HTMLElement;
}

export function assertClassName(
  element: HTMLElement,
  className: string,
  hasClass: boolean
): void {
  expect(element.classList.contains(className)).to.equal(hasClass);
}

export function assertTagName(element: HTMLElement, tagName: string): void {
  expect(element.tagName).to.equal(tagName);
}

export function testPassedClassName(options: TestOptions): AsyncFunction {
  return async () => {
    const testClassName = "test";
    const { wrapper } = options();
    const { component } = wrapper;
    const element = getElement(wrapper);

    assertClassName(element, testClassName, false);
    await component.$set({ class: testClassName });
    assertClassName(element, testClassName, true);
  };
}

export function testTagName(
  options: TestOptions<{ tagName: string }>
): AsyncFunction {
  return async () => {
    const { wrapper, tagName } = options();
    const element = getElement(wrapper);

    assertTagName(element, tagName);
  };
}
