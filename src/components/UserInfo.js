export default class UserInfo {
    constructor(userName, userJob, containerSelector) {
        this._userName = userName;
        this._userJob = userJob;
        this._container = containerSelector;

    }

    getUserInfo() {
        this._userInfoList = { userName: this._userName, userJob: this._userJob };
        return this._userInfoList;
    }

    getUserId() {
        return this.userId
    }

    setUserId(data) {
        this.userId = data._id
    }

    setUserInfo(data) {
        this._userName.textContent = data.name
        this._userJob.textContent =  data.about
    }

    setUserAvatar(avatar) {
        this._container.querySelector(".profile__avatar").src = avatar;
    }
}
