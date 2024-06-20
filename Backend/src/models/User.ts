import {
  Column,
  Entity,
  Long,
  PrimaryGeneratedColumn
} from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn()
  id: Long;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({default: null})
  photo: Buffer;

  @Column({default: null})
  ownDescription: string;

  @Column({default: false})
  active: boolean;
}

export default User;
