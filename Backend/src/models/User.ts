import {
  Column,
  Entity,
  Long,
  PrimaryGeneratedColumn
} from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: Long;

  @Column({type: 'varchar', length: 100, nullable: false})
  username: string;

  @Column({type: 'varchar', length: 100, nullable: false})
  email: string;

  @Column({type: 'varchar', nullable: false})
  password: string;

  @Column({default: null, type: 'longblob'})
  photo: Buffer;

  @Column({default: null, type: 'text'})
  ownDescription: string;

  @Column({default: false})
  active: boolean;
}

export default User;
