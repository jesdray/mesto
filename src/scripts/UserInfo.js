export default class UserInfo {
    constructor(userName, userJob, containerSelector) {
        this._userName = userName;
        this._userJob = userJob;
        this._container = containerSelector;
    }

    getUserInfo() {
        this._userInfoList = { userName: this._userName,
                               userJob: this._userJob}
        return this._userInfoList;
    }

    setUserInfo(data) {
        this._container.querySelector('.profile__name').textContent = data.name;
        this._container.querySelector('.profile__job').textContent = data.job;
    }
}