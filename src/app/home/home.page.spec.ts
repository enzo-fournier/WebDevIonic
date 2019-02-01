import {HomePage} from "./home.page";
import {Router} from "@angular/router";
import createMockInstance from "jest-create-mock-instance";

describe('Page: Main Page', () => {
  let page: HomePage;

  let router: Router = createMockInstance(Router);

  beforeEach(() => {
        page = new HomePage(router);
        spyOn(router, "navigateByUrl");
      }
  );

  it('should goToPage1', () => {
    page.goToPage1();
    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
    expect(router.navigateByUrl).toHaveBeenCalledWith("page1");

  });

});
