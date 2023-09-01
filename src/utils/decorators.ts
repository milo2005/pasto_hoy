import { SetMetadata } from "@nestjs/common";

export const IS_API_PUBLIC_KEY = 'isPublic';
export const ApiPublic = () => SetMetadata(IS_API_PUBLIC_KEY, true);