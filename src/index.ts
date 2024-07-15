/**
 * @description Decorates a class to enforce its abstract nature
 * @decorator
 * @export
 * @template T
 * @param {T} klass
 * @returns T
 */
export function Abstract<T extends Function>(klass: T) {
  return new Proxy(klass, new AbstractHandler());
}

class AbstractHandler<T extends Function> implements ProxyHandler<T> {
  construct(target: T, args: any[], newTarget: Function) {
    if (target.prototype.constructor === newTarget.prototype.constructor) {
      throw new Error(
        `'${target.name}' is an Abstract class and cannot be instantiated directly`
      );
    }

    return Reflect.construct(target, args, newTarget);
  }
}
