var helper = (function () {

    $(document).ready(function () {

    });


    async function getLocalStorageData(item) {
        return await localStorage.getItem(item);
    }

    async function setLocalStorageData(item, data) {
        await localStorage.setItem(item, data);
    }

    async function destroyLocalStorageData(item) {
        await localStorage.removeItem(item);
    }

    async function showInfo(title, message) {
        $(".infoMessage").removeAttr('hidden');
        $(".infoMessage").show();
        $(".infoTitle").text(title);
        $(".infoDetail").text(message);

    }


    return {
        getLocalStorageData: getLocalStorageData,
        setLocalStorageData: setLocalStorageData,
        destroyLocalStorageData: destroyLocalStorageData,
        showInfo: showInfo
    };

}());