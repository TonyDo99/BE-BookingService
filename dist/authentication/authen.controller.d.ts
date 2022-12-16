import { AuthService } from './authen.service';
import { AuthenDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(authenDto: AuthenDto): Promise<{
        accessKey: string;
    }>;
}
