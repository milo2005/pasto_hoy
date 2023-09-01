import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLE_API_KEY, Role } from "../../utils/decorators";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private reflector: Reflector
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {

        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLE_API_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user = request["user"];
        const role = user.role ?? "not_role";
        return requiredRoles.includes(role);
    }
}