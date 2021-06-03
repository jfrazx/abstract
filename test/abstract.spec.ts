import { Abstract } from '../src';
import { expect } from 'chai';

describe('Abstract', () => {
  @Abstract
  class Who {
    public what = 'on second';
  }

  class What extends Who {
    public iDontKnow = 'on third';
  }

  class IDontKnow extends What {
    public who = 'on first';
  }

  @Abstract
  class Why extends IDontKnow {
    public because = 'in center field';
  }

  class Because extends Why {
    why = 'in left field';
  }

  it('should not allow abstract classes to be instantiated', () => {
    expect(() => new Who()).to.throw(
      `'Who' is an Abstract class and cannot be instantiated directly`,
    );
  });

  it('should allow subclasses to be instantiated', () => {
    const what = new What();

    expect(what).to.be.instanceOf(What);
    expect(what.what).to.equal('on second');
    expect(what.iDontKnow).to.equal('on third');
  });

  it('should allow subclasses of subclasses to be instantiated', () => {
    const iDontKnow = new IDontKnow();

    expect(iDontKnow).to.be.instanceOf(IDontKnow);
    expect(iDontKnow.who).to.equal('on first');
    expect(iDontKnow.what).to.equal('on second');
    expect(iDontKnow.iDontKnow).to.equal('on third');
  });

  it('should not allow extended abstract classes to be instantiated', () => {
    expect(() => new Why()).to.throw(
      `'Why' is an Abstract class and cannot be instantiated directly`,
    );
  });

  it('should allow subclasses of abstract subclasses to be instantiated', () => {
    const because = new Because();

    expect(because).to.be.instanceOf(Because);
    expect(because.who).to.equal('on first');
    expect(because.what).to.equal('on second');
    expect(because.iDontKnow).to.equal('on third');
    expect(because.why).to.equal('in left field');
    expect(because.because).to.equal('in center field');
  });
});
