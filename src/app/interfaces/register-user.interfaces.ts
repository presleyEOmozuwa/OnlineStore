export interface IRegisterUser
{
    firstName: string;
    lastname: string;
    email: string;
    userName: string;
    password: string;
    confirmPassword: string;
}

export interface IRegisterResponse
{
    message: string;
    isRegistered: boolean;
}