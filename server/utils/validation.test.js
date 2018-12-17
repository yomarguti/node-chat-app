const {expect} = require('chai')

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('Deberia rechazar valores que no sean strings', () => {
        var res = isRealString(98);
        expect(res).to.be.false;
    })

    it('Deberia rechazar strings en blanco', () => {
        var res = isRealString("     ");
        expect(res).to.be.false;
    })

    it('Deberia permitir strings caracteres en blanco', () => {
        var res = isRealString("  Andres    ");
        expect(res).to.be.true;
    })
})