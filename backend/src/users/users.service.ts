import { Publication } from 'src/publications/entities/publication.entity';
/* eslint-disable prettier/prettier */
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { hash, verify } from 'argon2';
import { CreateAuthDto } from 'src/auth/dto/create-auth.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class UsersService {
 
  repository: any;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Publication)
    private publicationRepository: Repository<Publication>,
  ) {}

  async createUser(body: CreateUserDto) {
    const {username, email, fullName, password } = body;
     const saltRounds = await hash(password)
    const usersExist =  await this.userRepository.find({
      where: {
        email: body.email,
      },
    })
    if(usersExist.length > 0) {
      return "el usuario ya existe";
    }else{
      const user = new User();
      user.username = username;
      user.email = email;
      user.fullName = fullName;
      user.password = saltRounds;
      return await this.userRepository.save(user);
    }
  }

  allPublicationUser( user:CreateAuthDto ) {
    return this.publicationRepository.find({
      relations: {
        user: true,
      },
      where: {
        user: user,
      },
    })
  }
 

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
