import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { EnvService } from "../../env/env.service";
import { IS_API_PUBLIC_KEY } from "../../utils/decorators";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private env: EnvService,
    private reflector: Reflector
    ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {

    // Verify if API is public
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_API_PUBLIC_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
      if (isPublic) {
        return true;
      }

    // Verify token authentication
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync( token, { secret: this.env.secret });
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers["authorization"]?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}