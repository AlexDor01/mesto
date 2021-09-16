export class UserInfo {
    constructor({ title, subtitle, userAvatar }) {
        this._title = title;
        this._subtitle = subtitle;
        this._avatar = userAvatar;
    }

    getUserInfo() {
        const data = {};
        data.nameSelector = this._title.textContent;
        data.jobSelector = this._subtitle.textContent;
        return data;
    }

    setUserInfo(data) {
        this._title.textContent = data.name;
        this._subtitle.textContent = data.job;
    }

    setUserAvatar(data) {
        this._avatar.src = data.avatar;
    }
}