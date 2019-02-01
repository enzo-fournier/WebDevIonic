import {HomeService} from "./home.service";

describe('Service: Main Service', () => {
    let service: HomeService;

    beforeEach(()=> {
            service = new HomeService();
        }
    );

    it('should get status', () => {
        let status = service.getStatus();
        expect(status).toEqual("Mon Status");
    });

});
