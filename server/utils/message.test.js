const {expect} = require('chai');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('Deberia crear un objeto mensaje correcto', () => {
       var from = 'Yomar';
       var text = 'Donde esta la casa?';
       var message = generateMessage(from, text);
       
       expect(message.createdAt).to.be.a('number');
       expect(message).to.include({from, text});
    });
});

describe('generateMessage', () => {
    it('Deberia crear un objeto de ubicacion correcto', () => {
       var from = 'Deb';
       var latitude = 15;
       var longitude = 18;
       var url = "https://www.google.com/maps?q=15,18";
       
       var message = generateLocationMessage(from, latitude, longitude);
       expect(message.createdAt).to.be.a('number');
       expect(message).to.include({from, url});
       expect(message.url).to.be.equal(url);
    });
});

