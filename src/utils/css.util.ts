export interface IGetCssVarOpts {
  defaultValue?: string;
  trim?: boolean;
}

/**
 * @example fn('--abc') --> '99px'
 */
export function _getCssVar<T = string>(
  cssVar: T,
  opts?: IGetCssVarOpts,
): string {
  const defaultValue = opts?.defaultValue || '';

  if (typeof getComputedStyle === 'undefined') {
    console.warn('getCssVar() getComputedStyle is not ready');
    return defaultValue;
  }

  let value =
    getComputedStyle(document.documentElement).getPropertyValue(
      cssVar as unknown as string,
    ) || defaultValue;

  if (opts?.trim) value = value.trim();

  return value;
}

/**
 * @example fn('--abc', '20px') --> void
 */
export function _setCssVar<T = string>(cssVar: T, newValue: string): void {
  if (typeof document?.documentElement?.style?.setProperty === 'undefined') {
    console.warn('setCssVar() setProperty is not ready');
    return;
  }

  document.documentElement.style.setProperty(
    cssVar as unknown as string,
    newValue,
  );
}

export interface IgetCssPxToNumberOpts {
  replaceStr?: string;
}

/**
 * @example fn('12px') --> 12
 */
export function _getCssPxToNumber(
  pxStr: string | number,
  opts?: IgetCssPxToNumberOpts,
): number {
  const replaceStr = opts?.replaceStr || 'px';

  if (!pxStr) return 0;
  if (typeof pxStr === 'number') return pxStr;
  if (!Number.isNaN(Number(pxStr))) return Number(pxStr);

  return Number(pxStr.replace(replaceStr, ''));
}
