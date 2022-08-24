/**
 * 判断数据类型
 * @export
 * @param {unknown} val
 * @return {*}  {string}
 */
export function typeOf(val: unknown): string {
  return Object.prototype.toString.call(val).slice(8, -1);
}

/**
 * 日期补0
 * @export
 * @param {string} val
 * @return {*}  {string}
 */
export function add0(val: string): string {
  val = `${val}`;
  return val.length >= 10 ? val : `0${val}`;
}

/**
 * 深克隆对象
 * @export
 * @param {Record<string, any>} obj
 * @return {*}
 */
export function deepClone(obj: Record<string, unknown>): Record<string, unknown> {
  const newObj = Array.isArray(obj) ? [] : {};
  for (let key of Object.keys(obj)) {
    newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key] as Record<string, unknown>) : obj[key];
  }
  return newObj;
}

/**
 * 深度去重
 * @export
 * @param {unknown[]} array
 * @return {*}  {unknown[]}
 */
export function unique(array: unknown[]): unknown[] {
  const newArray: unknown[] = [];
  const map: Map<unknown, unknown> = new Map();
  for (let i = 0, len = array.length; i < len; i++) {
    const item = array[i];
    if (!map.has(item)) {
      newArray.push(item);
      map.set(item, true);
    }
  }
  return newArray;
}

/**
 * 以下函数返回 min（包含）～ max（包含）之间的数字
 * @param min
 * @param max
 * @returns
 */
export function getRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 线程睡眠
 * @param delay
 * @returns
 */
export function sleep(delay: number = 1000): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

/**
 * 获取数组最大或者最小值
 * @export
 * @param {any[]} array
 * @param {('min' | 'max')} val
 * @return {*}  {*}
 */
export function getArrayMaxOrMin<T>(array: T[], val: 'min' | 'max' = 'max'): T {
  if (val === 'min') {
    return array.reduce((max, elem) => (max > elem ? elem : max), array[0]);
  }
  return array.reduce((max, elem) => (max > elem ? max : elem), array[0]);
}
