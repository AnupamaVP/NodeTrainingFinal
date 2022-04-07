import { EntityRepository, getConnection, Repository } from "typeorm";
import { Roles } from "../entities/Roles";

export class RoleRepository extends Repository<Roles> {
    public async getAllRoles() {
        const roleRepo = getConnection().getRepository(Roles);
        return roleRepo.findAndCount();
    }

    public async getRoleById(id: string) {
        const roleRepo = getConnection().getRepository(Roles);
        return roleRepo.findOne(id);
    }

    
    public async saveRoleDetails(roleDetails: Roles) {
        const roleRepo = getConnection().getRepository(Roles);
        return roleRepo.save(roleDetails);
    }

    public async updateRoleDetails(roleId: string, roleDetails: any) {
        const roleRepo = getConnection().getRepository(Roles);
        const updateRoleDetails = await roleRepo.update({ roleId :roleId, deletedAt: null }, {
            roleName: roleDetails.roleName ? roleDetails.roleName : undefined,
        });
        return updateRoleDetails;
    }

    public async softDeleteRoleById(roleId: string) {
        const roleRepo = getConnection().getRepository(Roles);
        return roleRepo.softDelete({
            roleId
        });
    }
}
