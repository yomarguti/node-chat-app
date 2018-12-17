const {expect} = require('chai');
const {Users} = require('./users');


describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users;
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        },{
            id: '2',
            name: 'Jose',
            room: 'React Course'
        },{
            id: '3',
            name: 'Alfredo',
            room: 'Node Course'
        }]

    })



    it('Deberia agregar un nuevo usuario', () => {

        var user = {
            id: '123',
            name: 'Yomar',
            room: 'La oficina'
        }

        var resUsers = users.addUser(user.id, user.name, user.room);

        expect(users.users.length).to.be.greaterThan(0);
    })

    it('Deberia regresar los nombre del curso de node', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).to.have.members(['Mike', 'Alfredo']);
    })

    it('Deberia regresar los nombre del curso de react', () => {
        var userList = users.getUserList('React Course');

        expect(userList).to.have.members(['Jose']);
    })

    it('Deberia eliminar un usuario', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).to.be.eql(userId);
        expect(users.users.length).to.be.greaterThan(1);
    })

    it('No Deberia eliminar un usuario', () => {
        var userId = '99';
        var user = users.removeUser(userId);

        expect(user).to.be.undefined;
        expect(users.users.length).to.be.equal(3);
    })

    it('Deberia encontrar un usuario', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).to.be.eql(userId);
    })

    it('No Deberia encontrar un usuario', () => {
        var userId = '99';
        var user = users.getUser(userId);

        expect(user).to.be.undefined;
    })
})