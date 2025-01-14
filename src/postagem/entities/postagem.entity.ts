import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_postagens"}) // CREAT TABLE tb_postagem()
export class Postagem{

    @PrimaryGeneratedColumn() // AUTO_INCREMENT PRIMARY KEY
    id: number;

    @IsNotEmpty() //validação dados do objetos
    @Column({length: 100, nullable:false}) // VARCHAR(100) NOT NULL
    titulo: string;
    
    @IsNotEmpty() //validação dados do objetos
    @Column({length: 1000, nullable:false}) // VARCHAR(1000) NOT NULL
    texto: string;

    @UpdateDateColumn()
    data: Date;
}