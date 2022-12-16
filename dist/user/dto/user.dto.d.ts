export declare enum ROLE {
    normal_user = "normal_user",
    admin_user = "admin_user"
}
export declare class UserDto {
    mobilePhone: string;
    email: string;
    password: string;
    fullName: string;
    role: ROLE;
}
