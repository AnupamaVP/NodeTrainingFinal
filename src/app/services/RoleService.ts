import { plainToClass } from "class-transformer";
import { Roles } from "../entities/Roles";
import HttpException from "../exception/HttpException";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import UserNotAuthorizedException from "../exception/UserNotAuthorizedException";
import IncorrectUsernameOrPasswordException from "../exception/IncorrectUsernameOrPasswordException";
import { RoleRepository } from "../repository/RoleRepository";

export class RoleService {
    constructor(
        private roleRepository: RoleRepository
    ) {}
    public async getAllRoles() {
        return this.roleRepository.getAllRoles();
    }

    public async getRoleById(roleId: string) {
        return this.roleRepository.getRoleById(roleId);
    }

    public async createRole(roleDetails: any) {
        try {
            const newRole = plainToClass(Roles, {
                roleName: roleDetails.roleName,
            });
            const save = await this.roleRepository.saveRoleDetails(newRole);
            return save;
        } catch (err) {
            throw new HttpException(400, "Failed to create role");
        }
    }

    public async updateRole(roleId: string, roleDetails: any) {
       
        const updatedRole = await this.roleRepository.updateRoleDetails(roleId, roleDetails);
        return updatedRole;

    }

    public async deleteRole(roleId: string) {
        return this.roleRepository.softDeleteRoleById(roleId);
    }

}
