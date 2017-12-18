describe('Devices page', () => {
    beforeAll(() => {

    browser.get('https://demo.ubnt.com/manage/site/default/devices/1/50');
});

const IP_REG_EXP = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const IP_SELECTOR = '.deviceIp.ng-scope';
const UPDATE_BUTTON_LIST_SELECTOR = '.button__icon.icon.ubnt-icon--firmware-update';
const UPDATE_MODAL_WINDOW_SELECTOR = '.appControlModal__header.ng-binding';
const DEVICE_SELECTOR = '.deviceName.ng-binding.ng-scope';
const SEARCH_SELECTOR = 'searchQuery';
const DEVICE_LIST_SELECTOR = '.deviceModel.visible--smUp.ng-scope .ng-binding';
const PAGINATION_SELECTOR = '.appPagination__currentState.ng-isolate-scope .ng-scope';

function getWebElement(idSelector) {
    return element(by.id(idSelector));
}


describe('Table filtering', () => {
    it('Gateway and Switches filter displays name with counter', () =>

{

    getWebElement('filterButton-deviceType-gatewaySwitches').click();

    var count = element.all(by.css(DEVICE_SELECTOR)).count();
    var filter = getWebElement('filterButton-deviceType-gatewaySwitches').getText();

    expect(filter).toContain(count);

});

it('Aps filter displays name with counter', () => {

    getWebElement('filterButton-deviceType-aps').click();


var filter = getWebElement('filterButton-deviceType-aps').getText();



element(by.css(PAGINATION_SELECTOR)).getText().then(function(text) {
    var numberOfItems = text.substring(16, 18);
    expect(filter).toContain(numberOfItems);
});

});

it('Aps filter displays name with counter', () => {

    getWebElement('filterButton-deviceType-all').click();



var filter = getWebElement('filterButton-deviceType-all').getText();

element(by.css(PAGINATION_SELECTOR)).getText().then(function(text) {
    var numberOfItems = text.substring(16, 18);
    expect(filter).toContain(numberOfItems);
});
});



it('Gateway and Switches filter returns only matching devices', () => {

    getWebElement('filterButton-deviceType-gatewaySwitches').click();


element(by.model(SEARCH_SELECTOR)).clear().sendKeys('Switch');


var list = element.all(by.css(DEVICE_LIST_SELECTOR)).count().then(function(size) {
    return size;
})
for (var i = 0; i < list.size; i++) {
    expect(list.get(i).getText()).toContain('Switch');
}
});

it('Gateway and Switches filter returns only matching devices', () => {

    getWebElement('filterButton-deviceType-gatewaySwitches').click();

element(by.model(SEARCH_SELECTOR)).clear().sendKeys('Gateway');

var list = element.all(by.css(DEVICE_LIST_SELECTOR)).count().then(function(size) {
    return size;
})
for (var i = 0; i < list.size; i++) {
    expect(list.get(i).getText()).toContain('Gateway');
}
});
});

describe('Table searching', () => {
    it('Search by "O-B" returns only matching devices', () => {

    element(by.model(SEARCH_SELECTOR)).clear().sendKeys('SW-24A');

    var deviceName = element(by.css(DEVICE_SELECTOR)).getText();

    expect(deviceName).toContain('SW-24A');
});
});

describe('Device actions', () => {
    it('Clicking on Upgrade button open confirm modal', () => {


    element.all(by.css(UPDATE_BUTTON_LIST_SELECTOR)).first().click();


    var modalWindow = element(by.css(UPDATE_MODAL_WINDOW_SELECTOR)).getText();

    expect(modalWindow).toContain('UPGRADE');


});
});

describe('Property panel', () => {
    it('Gateway details contains IP address of device', () => {
    var ipText = element.all(by.css(IP_SELECTOR)).last().getText();


    expect(ipText).toMatch(IP_REG_EXP);
});
});
});
