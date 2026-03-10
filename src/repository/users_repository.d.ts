import type { CreateUserDTO, UpdateUser } from '../types/users/user.interface.js';
export declare class userRepository {
    getAllUsers(): Promise<any[]>;
    getUserById(id: number): Promise<any>;
    createUser(user: CreateUserDTO): Promise<any>;
    updateUser(id: number, user: UpdateUser): Promise<any>;
    deleteUser(id: number): Promise<any>;
}
//# sourceMappingURL=users_repository.d.ts.map