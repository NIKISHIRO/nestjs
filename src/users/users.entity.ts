import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  login: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  role: string;
}
