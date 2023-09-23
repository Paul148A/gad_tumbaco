/*==================DEPARTAMENTOS-ENTITY==============*/
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    OneToMany,
    JoinColumn
} from 'typeorm';
import { OficiosEntity } from './oficios.entity';

@Entity('departamentos')
export class DepartamentosEntity {

    /* Declaracion de campos de la tabla */
    @PrimaryGeneratedColumn()
    id_departamentos: number;

    /*Campo Nombre*/
    @Column({
        name: 'nombre',
        type: 'varchar',
        length: 100,
        comment: 'Nombre de los departamentos',
    })
    nombre: string;

    /*Campo Descripcion*/
    @Column({
        name: 'descripcion',
        type: 'varchar',
        length: 100,
        comment: 'Descripcion de lo que realiza el departamento',
    })
    descripcion: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de creacion del candidato',
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at', // Nombre de la columna en la base de datos
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de actualizacion del candidato',
    })
    updatedAt: Date;

    @DeleteDateColumn({
        name: 'deleted_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha en la que se elimina el candidato',
    })
    deleteAt: Date;

     /*Relacion: un oficio puede tener varios departamentos */ 
    @OneToMany(type => OficiosEntity, oficios => oficios.departamentos)
    @JoinColumn({ name: 'id_departamentos' }) 
    oficios: OficiosEntity[];

    

  
}
