import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne} from "typeorm";
import { UsuariosEntity } from "./usuarios.entity";
import { OficiosEntity } from "./oficios.entity";

@Entity({ name: 'estados' })

export class EstadosEntity {
    @PrimaryGeneratedColumn()
    id_estados: number;

    @Column({
        name:'nombre', 
        type: 'varchar', 
        length: 100 
    })
    nombre_estado: string;

    @Column({
        name:'acronimo',
        type: 'varchar', 
        length: 10 
    })
    acronimo: string;

    @Column({
        name:'descripcion', 
        type: 'varchar', 
        length: 200 
    })
    descripcion_estado: string;

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

     /*Relacion: un usuario puede tener varios estados */ 
    @OneToMany(type => UsuariosEntity, usuario => usuario.estado)
    @JoinColumn({ name: 'id_estados' }) 
    usuarios: UsuariosEntity[];

     /*Relacion: un oficio puede tener varios estados */ 
    @OneToMany(type => OficiosEntity, oficios => oficios.estados)
    @JoinColumn({ name: 'id_estados' }) 
    oficios: OficiosEntity[];
}