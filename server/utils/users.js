class Users {
    constructor() {
        this.users = [];
    }

    addUser (id, name, room) {
        var user ={
            id,
            name,
            room
        }

        this.users.push(user);

        return user;
    }

    removeUser (id) {
        var user = this.getUser(id)

        if (user) {
            this.users = this.users.filter(user => {
                return user.id !== id;
            })
        }

        return user;
    }

    getUser (id) {
        return this.users.filter(user => {
            return user.id === id
        })[0];
    }

    getUserList (room) {
        var users = this.users.filter(user => {
            return user.room === room;
        })
        var namesArray = users.map(user => {
            return user.name;
        })

        return namesArray;
    }

    getRooms () {
        var roomsArray = [];

        this.users.forEach(user => {
            roomsArray.push(user.room)
        });

        var uniqueRoomsArray = roomsArray.filter(function(item, pos) {
            return roomsArray.indexOf(item) == pos;
        })

        return uniqueRoomsArray;
    }
}

module.exports = {Users}