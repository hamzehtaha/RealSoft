import { Column, Entity, PrimaryColumnCannotBeNullableError, PrimaryGeneratedColumn } from "typeorm";

@Entity ({name:"user"})
export class User {
    @Column ({name:"Id"})
    @PrimaryGeneratedColumn()
    id:number;

    @Column ({name:"Name"})
    Name:string;


}

 