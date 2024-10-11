import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column('text', {
        unique: true,
        nullable: false
    })
    nombre:string;

    @Column('text', {
        nullable: true
    })
    descripcion?: string

    @Column('float', {
        nullable: false
    })
    precio:number

    @Column('int', {
        nullable: false
    })
    cantidad:number

    @Column('timestamp', {
        nullable: false
    })
    fecha_creacion:Date

    @Column('timestamp', {
        nullable: false
    })    
    fecha_actualizacion:Date

}
