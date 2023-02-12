import { User } from './../../users/entities/user.entity';
/* eslint-disable prettier/prettier */
export class CreatePublicationDto {
    id: number;
    content: string;
    tilte: string;
    user: User;
    createdAt: string ;
}

