import { Router } from 'express';
import AuthCustomerController from '../controllers/auth-customer.controller';
import AuthMiddleware from './../middlewares/auth.midd';

export default class AuthRouter {
  router: Router;
  private authMiddleware;

  constructor() {
    this.router = Router();
    this.authMiddleware = new AuthMiddleware();
    this.getAuthCustomersRoutes();
  }

  private getAuthCustomersRoutes() {
    this.router.post(`/login`, AuthCustomerController.login());
    // PROTECTED
    this.router.post(
      `/register`,
      [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
      AuthCustomerController.register()
    );
  }
}
