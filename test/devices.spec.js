describe('Devices page', () => {
  beforeAll(() => {
    browser.get('https://demo.ubnt.com/manage/site/default/devices/1/50');
  });

  describe('Table filtering', () => {
    it('Gateway and Switches filter displays name with counter', () => {
      let filter = element(by.id('filterButton-deviceType-gatewaySwitches'));
      expect(filter.getText()).toEqual('GATEWAY/SWITCHES (8)');
    });

    it('Gateway and Switches filter returns only matching devices', () => {});
  });

  describe('Table searching', () => {
    it('Search by "O-B" returns only matching devices', () => {});
  });

  describe('Device actions', () => {
    it('Clicking on Upgrade button open confirm modal', () => {});
  });

  describe('Property panel', () => {
    it('Gateway details contains IP address of device', () => {});
  });
});
