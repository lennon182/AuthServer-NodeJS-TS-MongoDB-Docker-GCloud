"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
var auth_midd_1 = __importDefault(require("./../middlewares/auth.midd"));
var AuthRouter = /** @class */ (function () {
    function AuthRouter() {
        this.router = express_1.Router();
        this.authMiddleware = new auth_midd_1.default();
        this.getAuthRoutes();
    }
    AuthRouter.prototype.getAuthRoutes = function () {
        this.router.post("/admin/login", auth_controller_1.default.login());
        // PROTECTED
        this.router.post("/admin/register", [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()], auth_controller_1.default.register());
    };
    return AuthRouter;
}());
exports.default = AuthRouter;
