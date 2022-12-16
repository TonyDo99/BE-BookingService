import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthenDto } from './dto/login.dto';
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: UserService);
    login(authenDto: AuthenDto): Promise<{
        accessKey: string;
    }>;
}
