import type { SingleResponseAttribute } from '../../../common/types';
import type { UserEntity } from './user.entity';

export type LoginPayload = {
	email: string;
	password: string;
};

export type RegisterPayload = LoginPayload & {
	username: string;
};

export type LoginResponse = SingleResponseAttribute<{
	token: string;
	user: UserEntity;
}>;
