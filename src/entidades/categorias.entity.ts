import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, OneToMany, JoinColumn  } from "typeorm";
import { BienesEntity } from "./bienes.entity";

@Entity({ name: 'categorias' })

export class CategoriasEntity {
    @PrimaryGeneratedColumn()
    id_categorias: number;

    @Column({
        name:'nombre', 
        type: 'varchar', 
        length: 100 
    })
    nombre_categoria: string;

    @Column({
        name:'descripcion', 
        type: 'varchar', 
        length: 100 
    })
    descripcion_categoria: string;

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

     /*Relacion: un bien puede tener varias categorias */ 
    @OneToMany(type => BienesEntity, bienes => bienes.categorias)
    @JoinColumn({ name: 'id_categorias' }) 
    bienes: BienesEntity[];

}