/**
 * @description Decorates a class to enforce its abstract nature
 * @decorator
 * @export
 * @template T
 * @param {T} klass
 * @returns T
 */
export const Abstract = <T extends Function>(klass: T) => {
  return new Proxy(klass, new AbstractHandler());
};

class AbstractHandler<T extends Function> implements ProxyHandler<T> {
  construct(target: T, args: any[], newTarget: Function) {
    if (this.shouldThrow(target, newTarget)) {
      this.throwError(target);
    }

    return Reflect.construct(target, args, newTarget);
  }

  private shouldThrow(target: T, newTarget: Function) {
    return target.prototype.constructor === newTarget.prototype.constructor;
  }

  private throwError(target: T): never {
    throw new Error(
      `'${target.name}' is an Abstract class and cannot be instantiated directly`,
    );
  }
}
