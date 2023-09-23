import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { CategoriasEntity } from "./categorias.entity";
import { SolicitudBienesEntity } from "./solicitud_bienes.entity";

@Entity({ name: 'bienes' })

export class BienesEntity {
    @PrimaryGeneratedColumn()
    id_bienes: number;
    @Column({
        name: 'responsable_bien',
        type: 'varchar',
        length: 100,
        comment: 'Se registrará el propietario o titular del bien prestado'
    })
    responsable_bien: string;

    @Column({
        name: 'nombre_bien',
        type: 'varchar',
        length: 100,
        comment: 'Se registrará el nombre o título del bien'
    })
    nombre_bien: string;

    @Column({
        name: 'marca',
        type: 'varchar',
        length: 100,
        comment: 'Se registrará la marca correspondiente del bien'
    })
    marca: string;

    @Column({
        name: 'serie',
        type: 'varchar',
        length: 50,
        comment: 'Se registrará un numero serial correspondiente al bien para identificarlos a cada uno'
    })
    serie: string;

    @Column({
        name: 'detalle',
        type: 'varchar',
        length: 100,
        comment: 'Se registrará cualquier situación o novedad referente al bien'
    })
    detalle: string;

    @Column({
        name: 'stock',
        type: 'int',
        comment: 'Se registrará la cantidad disponible del bien para realizar cualquier prestación'
    })
    stock: number;

    @Column({
        name: 'disponibilidad',
        type: 'bool',
        comment: 'Se registrará la cantidad disponible del bien para realizar cualquier prestación'
    })
    disponibilidad: boolean;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de creacion del bien',
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at', 
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de actualizacion del bien',
    })
    updatedAt: Date;

    @DeleteDateColumn({
        name: 'deleted_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha en la que se elimina el bien',
    })
    deleteAt: Date;

     /*Relacion: varias categorias puede tener un bien */ 
    @ManyToOne(type => CategoriasEntity, categoria => categoria.bienes)
    @JoinColumn({ name: 'id_categorias' })
    categorias: CategoriasEntity;

     /*Relacion: una solicitud puede tener varios bienes */ 
    @OneToMany(type => SolicitudBienesEntity, solicitud_bienes => solicitud_bienes.bienes)
    @JoinColumn({ name: 'id_bienes' }) 
    solicitud_bienes: SolicitudBienesEntity[];
}

