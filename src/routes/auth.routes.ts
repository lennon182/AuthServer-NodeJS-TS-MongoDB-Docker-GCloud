import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import AuthMiddleware from './../middlewares/auth.midd';

export default class AuthRouter {
  router: Router;
  private authMiddleware;

  constructor() {
    this.router = Router();
    this.authMiddleware = new AuthMiddleware();
    this.getAuthRoutes();
  }

  private getAuthRoutes() {
    this.router.post(`/admin/login`, AuthController.login());
    // PROTECTED
    this.router.post(
      `/admin/register`,
      [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
      AuthController.register()
    );
  }
}
