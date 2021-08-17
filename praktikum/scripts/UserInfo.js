class UserInfo {
    constructor({ name, description }) {
        this._dataSelectorName = name,
        this._dataSelectorDescription = description,
        this._userName = document.querySelector(this._dataSelectorName),
        this._userDescription = document.querySelector(this._dataSelectorDescription)
    }
    getUserInfo() {
        this._userData = {
            name: this._userName.textContent,
            description: this._userDescription.textContent
        }

        return this._userData;
    }
    setUserInfo() {
        this._userName.textContent = data.name;
    	this._userDescription.textContent = data.description;
    }
}