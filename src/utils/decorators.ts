import { SetMetadata } from "@nestjs/common";

export const IS_API_PUBLIC_KEY = 'isPublic';
export const ApiPublic = () => SetMetadata(IS_API_PUBLIC_KEY, true);

export enum Role {
    Admin = "admin", Editor = "editor"
}
export const ROLE_API_KEY = 'roles';
export const Roles = (... roles: Role[]) => SetMetadata(ROLE_API_KEY, roles);

