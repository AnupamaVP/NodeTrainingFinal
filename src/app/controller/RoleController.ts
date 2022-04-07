import { NextFunction, Response } from "express";
import multer from "multer";
import APP_CONSTANTS from "../constants";
import { CreateEmployeeDto } from "../dto/CreateEmployee";
import authorize from "../middleware/authorize";
import validationMiddleware from "../middleware/validationMiddleware";
import { RoleService } from "../services/RoleService";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";
/**
 * Implementation of the EmployeeController route.
 *
 */
class RoleController extends AbstractController {

  constructor(
    private roleService: RoleService,
  ) {
    super(`${APP_CONSTANTS.apiPrefix}/roles`);
    this.initializeRoutes();
  }

  protected initializeRoutes = (): void => {
    this.router.get(
      `${this.path}`,
      this.asyncRouteHandler(this.getAllRoles)
    );
    this.router.post(
        `${this.path}`,
        // validationMiddleware(CreateEmployeeDto, APP_CONSTANTS.body),
        this.asyncRouteHandler(this.createRole)
      );
    this.router.get(
      `${this.path}/:roleId`,
      this.asyncRouteHandler(this.getRoleById)
    );
    this.router.put(
      `${this.path}/:roleId`,
      this.asyncRouteHandler(this.updateRole)
    );
    this.router.delete(
      `${this.path}/:roleId`,
      this.asyncRouteHandler(this.deleteRole)
    );

  }

  private getAllRoles = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    const data = await this.roleService.getAllRoles();
    response.send(
      this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
    );
  }

  private getRoleById = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    const data = await this.roleService.getRoleById(request.params.roleId);
    response.send(
      this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
    );
  }

  private createRole = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.roleService.createRole(request.body);
      response.send(
        this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
      );
    } catch (err) {
      next(err);
    }
  }

  private updateRole = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
      const data = await this.roleService.updateRole(request.params.roleId, request.body);
      response.status(201).send(
        this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
      );
  }

  private deleteRole = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
      const data = await this.roleService.deleteRole(request.params.roleId);
      response.status(201).send(
        this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
      );
  }

}

export default RoleController;
