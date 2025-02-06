export interface UserInfo {
    token: string;
    userId: string;
    roles: Role[]
}

export type Role = 'Admin' | 'User'