const bd = new Map();

class User {
    constructor (
        {
            firstName,
            lastName,
            email,
            password,
            isSubscribed
        }
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.isSubscribed = isSubscribed;
        this.id = bd.size + 1;
        this.createAt = new Date();
    }

    addUser() {
        bd.set(this.id, this);
    }

    updateUser(newData) {
        bd.set(this.id, {...this, ...newData});
    }

    static findOne(userId) {
        return bd.get(userId);
    }

    static findAll() {
        return [...bd.values()];
    }

    deleteUser() {
        return bd.delete(this.id);
    }
}

module.exports = User;